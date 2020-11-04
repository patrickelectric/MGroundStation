<template>
  <div
    data-role="appbar"
    class="pos-absolute bg-darkCyan fg-white"
  >
    <a
      id="paneToggle"
      href="#"
      class="app-bar-item d-block d-none-lg"
    ><span class="mif-menu" /></a>

    <div class="app-bar-container ml-auto">
      <div v-if="Object.keys(heartbeat).length != 0">
        Vehicle: {{ heartbeat.mavtype.type.substring(9) }} -
        {{ valid ? "ONLINE" : "OFFLINE" }}
      </div>
      <a
        href="#"
        class="app-bar-item"
      >
        <span class="mif-flag" />
        <span class="badge bg-red fg-white mt-2 mr-1">9</span>
      </a>

      <a
        href="#"
        class="app-bar-item"
      >
        <span class="mif-cogs" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    data() {
        return {
            heartbeat: {},
            old_heartbeat: {},
            valid: false,
        }
    },
    mounted: function () {
        this.start_websocket()
        setInterval(
            () => {
                this.valid = this.heartbeat != this.old_heartbeat
                this.old_heartbeat = this.heartbeat
            },
            2000
        )
    },
    updated: function () {},
    methods: {
        start_websocket: function () {
            const ws = new WebSocket("ws://0.0.0.0:8088/ws/mavlink?filter=HEARTBEAT")
            ws.onmessage = (message) => {
                const json = JSON.parse(message.data)

                this.old_heartbeat = this.heartbeat
                this.heartbeat = json
                this.valid = true
            }
        },
    },
})
</script>