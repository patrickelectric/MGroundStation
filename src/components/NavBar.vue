<template>
  <div data-role="appbar" class="pos-absolute bg-darkCyan fg-white">
    <a href="#" class="app-bar-item d-block d-none-lg" id="paneToggle"
      ><span class="mif-menu"></span
    ></a>

    <div class="app-bar-container ml-auto">
      <div v-if="Object.keys(heartbeat).length != 0">
        Vehicle: {{ heartbeat.mavtype.type.substring(9) }} -
        {{ valid ? "ONLINE" : "OFFLINE" }}
      </div>
      <a href="#" class="app-bar-item">
        <span class="mif-flag"></span>
        <span class="badge bg-red fg-white mt-2 mr-1">9</span>
      </a>

      <a href="#" class="app-bar-item">
        <span class="mif-cogs"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heartbeat: {},
      old_heartbeat: {},
      valid: false,
    };
  },
  mounted: function () {
    this.start_websocket();
    setInterval(
      function () {
        this.valid = this.heartbeat != this.old_heartbeat;
        this.old_heartbeat = this.heartbeat;
      }.bind(this),
      2000
    );
  },
  updated: function () {},
  methods: {
    start_websocket: function () {
      const ws = new WebSocket("ws://0.0.0.0:8088/ws/mavlink?filter=HEARTBEAT");
      ws.onmessage = function (message) {
        const json = JSON.parse(message.data);

        this.old_heartbeat = this.heartbeat;
        this.heartbeat = json;
        this.valid = true;
      }.bind(this);
    },
  },
};
</script>