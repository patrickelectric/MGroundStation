<template>
  <l-map v-model="zoom" v-model:zoom="zoom" v-bind:center="position">
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    ></l-tile-layer>

    <l-marker v-bind:lat-lng="position"> </l-marker>
  </l-map>
</template>
<script>
import { LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";

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
      position: [27.5938477, -48.5670448],
    };
  },
  mounted() {
    const gps_ws = new WebSocket(
      `ws://localhost:8088/ws/mavlink?filter=GLOBAL_POSITION_INT`
    );
    gps_ws.onmessage = function (message) {
      const json = JSON.parse(message.data);
      this.position = [json.lat / 10e6, json.lon / 10e6];
    }.bind(this);
  },
};
</script>