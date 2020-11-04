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
        const gpsWs = new WebSocket(
            "ws://localhost:8088/ws/mavlink?filter=GLOBAL_POSITION_INT"
        )
        gpsWs.onmessage = (message: MessageEvent) => {
            const json = JSON.parse(message.data)
            this.position = [json.lat / 10e6, json.lon / 10e6]
        }
    },
})
</script>