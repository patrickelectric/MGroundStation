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
      <div class="app-bar-container">
        <a
          href="#"
          class="app-bar-item"
        >

          <span class="mif-cogs" />
        </a>
        <div
          class="user-block shadow-1"
          data-role="collapse"
          data-collapsed="true"
        >
          <div class="bg-white d-flex flex-justify-between flex-equal-items p-2 bg-light">
            <input v-model="baseUrl">
            <button
              class="button mr-1"
              @click="setBaseUrl(this.baseUrl)"
            >
              Set
            </button>
          </div>
        </div>
      </div>
      <a
        href="#"
        class="app-bar-item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import mavlink2rest from "./Mavlink2Rest"

export default defineComponent({
    data() {
        return {
            heartbeat: {},
            old_heartbeat: {},
            valid: false,
            baseUrl: null as unknown as string
        }
    },
    mounted: function () {
        this.startWebsocket()
        this.baseUrl = "" + mavlink2rest.baseUrl
        console.log(mavlink2rest.baseUrl)
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
        startWebsocket: function () {
            mavlink2rest.startListening("HEARTBEAT").setCallback((message) => {
                this.old_heartbeat = this.heartbeat
                this.heartbeat = message
            })
        },
        setBaseUrl: function(newUrl:string): void {
            mavlink2rest.setBaseUrl(newUrl)
        }
    },
})
</script>

<style lang="scss" scoped>

.user-block {
    display: block;
    position: absolute;
    top: 100%;
    right: 0;
    width: 280px;
    line-height: 1.2;

    .avatar {
        width: 128px;
        height: 120px;
        overflow: hidden;
        border-radius: 50%;
        border: 2px solid white;

        img {
            width: 100%;
            height: auto;
        }
    }
}
</style>