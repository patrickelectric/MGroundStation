<template>

    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :center="position"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>

      <l-marker :lat-lng="position">
      </l-marker>
    </l-map>
</template>
<script>
import {
  LMap,
  LMarker,
  LTileLayer,
} from "@vue-leaflet/vue-leaflet";

import L from 'leaflet';

import "leaflet/dist/leaflet.css";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 2,
      iconWidth: 25,
      iconHeight: 40,
      position: [0.0, 0.0]
    };
  },
  mounted() {
    window.latLng = L.latLng;
    //const gps_ws = new WebSocket(`ws://localhost:8088/ws/mavlink?filter=GLOBAL_POSITION_INT`);
    // gps_ws.onmessage = function (message) {
      // TODO: THIS IS BUGGED IN THE LIBRARY SIDE!
      //const json = JSON.parse(message.data)
      //this.position = L.latLng([json.lat / 10e6, json.lon / 10e6])

    // }.bind(this);
  },
  computed: {
  },
  methods: {
    log(a) {
      console.log(a);
    },
  },
};
</script>