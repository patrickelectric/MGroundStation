<template>
  <div class="row border-bottom bd-lightGray m-3">
    <div class="cell-md-4 d-flex flex-align-center">
      <h3 class="dashboard-section-title text-center text-left-md w-100">
        Dashboard
      </h3>
    </div>
  </div>

  <div class="m-3">
    <div
      data-role="panel"
      data-title-caption="Attitude"
      data-collapsible="true"
      data-title-icon="<span class='mif-chart-line'></span>"
      class="mt-4"
    >
      <div id="attitude-div" style="width: 100%" class="row m-3">
        <div>
          <Attitude :roll="roll" :pitch="pitch" />
        </div>
        <div>
          <Heading :heading="yaw" />
        </div>
      </div>
    </div>
  </div>

  <div class="m-3">
    <div
      data-role="panel"
      data-title-caption="Map"
      data-collapsible="true"
      data-title-icon="<span class='mif-chart-line'></span>"
      class="mt-4"
    >
      <div id="mapid" style="width: 100%; height: 30em">
        <Map />
      </div>
    </div>
  </div>

  <div class="row m-3">
    <div class="cell-md-7">
      <div
        data-role="panel"
        data-title-caption="Power"
        data-collapsible="true"
        data-title-icon="<span class='mif-table'></span>"
        class="mt-4"
      >
        <div class="p-4">
          <Plot />
        </div>
      </div>
    </div>

    <div id="app-servos" class="cell-md-5">
      <div
        data-role="panel"
        data-title-caption="PWM Output"
        data-collapsible="true"
        data-title-icon="<span class='mif-users'></span>"
        class="mt-4"
      >
        <div
          v-bind:key="servo + index"
          v-for="(servo, index) in servos"
          class="mt-6"
        >
          <div class="clear" v-if="servo != -1">
            <div class="place-left">Output {{ index + 1 }}</div>
            <div class="place-right">
              <strong>{{ servo }}</strong
              >/100%
            </div>
          </div>
          <div
            v-if="servo != -1"
            data-role="progress"
            data-type="buffer"
            data-cls-back="bg-grayWhite"
            data-cls-bar="bg-grayWhite"
            data-cls-buffer="bg-pink"
            v-bind:data-value="servo"
            v-bind:data-buffer="servo + 1"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./Map";
import { Attitude, Heading } from "vue-flight-indicators";
import Plot from "./Plot";

export default {
  name: "Dashboard",

  components: {
    Map,
    Attitude,
    Heading,
    Plot,
  },

  data() {
    return {
      plotdata: [],
      plot1: null,
      roll: 0,
      pitch: 0,
      yaw: 0,
      servos: [],
    };
  },

  created() {
    const total_points = 1000;
    this.plotdata = [
      Array(total_points),
      Array(total_points),
      Array(total_points),
    ];
    for (var i = 0; i < total_points; i++) {
      this.plotdata[0][i] = i;
      this.plotdata[1][i] = 0;
      this.plotdata[2][i] = 0;
    }
  },

  mounted() {
    const att_ws = new WebSocket(
      `ws://localhost:8088/ws/mavlink?filter=ATTITUDE`
    );
    att_ws.onmessage = function (message) {
      const json = JSON.parse(message.data);
      this.roll = json.roll * 180 / Math.PI;
      this.pitch = json.pitch * 180 / Math.PI;
      this.yaw = json.yaw * 180 / Math.PI;
    }.bind(this);
  },
};
</script>