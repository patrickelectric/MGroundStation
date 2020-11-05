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
      <div
        id="attitude-div"
        style="width: 100%"
        class="row m-3"
      >
        <div>
          <Attitude
            :roll="roll"
            :pitch="pitch"
          />
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
      <div
        id="mapid"
        style="width: 100%; height: 30em"
      >
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

    <div class="cell-md-5">
      <div
        data-role="panel"
        data-title-caption="PWM Output"
        data-collapsible="true"
        data-title-icon="<span class='mif-users'></span>"
        class="mt-4"
      >
        <div class="mt-6">
          <Servos />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Map from "./Map.vue"
import { Attitude, Heading } from "vue-flight-indicators"
import Plot from "./Plot.vue"
import Servos from "./Servos.vue"
import mavlink2rest from "./Mavlink2Rest"

import { defineComponent } from "vue"

export default defineComponent({
    name: "Dashboard",

    components: {
        Map,
        Attitude,
        Heading,
        Plot,
        Servos,
    },

    data() {
        return {
            plotdata: [] as Array<Array<number>>,
            plot1: null,
            roll: 0 as number,
            pitch: 0 as number,
            yaw: 0 as number,
        }
    },

    created() {
        const totalPoints = 1000
        this.plotdata = [
            Array(totalPoints),
            Array(totalPoints),
            Array(totalPoints),
        ]
        for (var i = 0; i < totalPoints; i++) {
            this.plotdata[0][i] = i
            this.plotdata[1][i] = 0
            this.plotdata[2][i] = 0
        }
    },

    mounted() {
        mavlink2rest.startListening("ATTITUDE").setCallback((message) => {
            this.roll = (message.roll * 180) / Math.PI
            this.pitch = (message.pitch * 180) / Math.PI
            this.yaw = (message.yaw * 180) / Math.PI
        }).setFrequency(10)
    },
})
</script>