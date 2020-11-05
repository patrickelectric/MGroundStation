<template>
  <l-map
    v-model="zoom"
    v-model:zoom="zoom"
    :center="position"
  >
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <l-marker :lat-lng="position" />
  </l-map>
</template>
<script lang="ts">
import { LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet"

import "leaflet/dist/leaflet.css"

import mavlink2rest from "./Mavlink2Rest"

import { defineComponent } from "vue"

export default defineComponent({
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
        }
    },
    mounted() {
        mavlink2rest.startListening("GLOBAL_POSITION_INT").setCallback((message) => {
            this.position = [message.lat / 10e6, message.lon / 10e6]
        })
    },
})
</script>