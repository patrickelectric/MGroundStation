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
          <attitude :roll="roll" :pitch="pitch" />
        </div>
        <div>
          <heading :heading="yaw" />
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
      <div id="mapid" style="width: 100%; height: 30em"></div>
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
          <div id="vibration" style="width: 100%; height: 100%"></div>
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
        <div v-for="(servo, index) in servos" v-bind:key="index" class="mt-6">
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
import 'uplot/dist/uPlot.iife.js'
import {uPlot} from 'uplot'

export default {
    name: 'Dashboard',
    created () {
    },
    data () {
        return {
            name: 'MessageViewer',
            total_points: 1000,
            data: [Array(total_points), Array(total_points), Array(total_points)]
        }
    },
    methods: {

    },
    computed: {

    },
    watch: {

    }
}

for (var i = 0; i < total_points; i++) {
  data[0][i] = i;
  data[1][i] = 0;
  data[2][i] = 0;
}

const vibration_dom = document.getElementById("vibration");

const get_size = function () {
  let { width, height } = vibration_dom.getBoundingClientRect();
  return { width: width, height: height == 0 ? 300 : height };
};

const opts = {
  ...get_size(),
  legend: {
    show: true,
  },
  scales: {
    x: {
      time: false,
      auto: true,
    },
    y: {
      auto: true,
    },
  },
  series: [
    {
      scale: "",
      value: (u, v) => (v == null ? "-" : v.toFixed(1) + ""),
    },
    {
      label: "voltage",
      scale: "V",
      stroke: "green",
      show: true,
      value: (u, v) => (v == null ? "-" : v.toFixed(1) + "V"),
    },
    {
      label: "current",
      scale: "A",
      stroke: "red",
      show: true,
      value: (u, v) => (v == null ? "-" : v.toFixed(1) + "A"),
    },
  ],
  axes: [
    {
      scale: "",
      values: (u, vals, ) => vals.map((v) => +v.toFixed(1) + ""),
    },
    {
      scale: "V",
      values: (u, vals, ) => vals.map((v) => +v.toFixed(1) + " V"),
    },
    {
      side: 1,
      scale: "A",
      values: (u, vals, ) => vals.map((v) => +v.toFixed(2) + " A"),
      grid: { show: false },
    },
  ],
};

let uplot1 = new uPlot(opts, data, vibration_dom);
console.log(uplot1)
/*
const update_plot = function (time, voltage, current) {
  if (data[0].length > 1000) {
    data[0].shift();
    data[1].shift();
    data[2].shift();
  }
  //console.log(time, voltage, current)
  data[0].push(data[0][data[0].length - 1] + 1);
  data[1].push(voltage);
  data[2].push(current);

  uplot1.setData(data);
};

var map = L.map("mapid").setView([51.505, -0.09], 13);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map);

marker = L.marker(map.getCenter()).addTo(map);

var update_location = function (lat, lon) {
  marker.setLatLng([lat, lon]);
  map.setView(marker.getLatLng(), map.getZoom());
};
*/
</script>