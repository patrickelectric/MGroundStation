<template>
  <div
    data-role="navview"
    data-toggle="#paneToggle"
    data-expand="xl"
    data-compact="lg"
    data-active-state="true"
  >
    <div class="navview-pane">
      <div class="bg-cyan d-flex flex-align-center">
        <button class="pull-button m-0 bg-darkCyan-hover">
          <span class="mif-menu fg-white"></span>
        </button>
        <h3 class="text-light m-0 fg-white text-bold">MGroundstation</h3>
      </div>

      <ul class="navview-menu" id="side-menu">
        <li class="item-header">MAIN NAVIGATION</li>
        <li>
          <a href="#dashboard">
            <span class="icon"><span class="mif-meter"></span></span>
            <span class="caption">Dashboard</span>
          </a>
        </li>

        <li>
          <a href="#parameters">
            <span class="icon"><span class="mif-table"></span></span>
            <span class="caption">Parameters</span>
          </a>
        </li>

        <li class="item-header">Documentation</li>
        <li>
          <a href="https://google.com">
            <span class="icon"><span class="mif-books fg-red"></span></span>
            <span class="caption">Documentation</span>
          </a>
        </li>
        <li>
          <a href="https://google.com">
            <span class="icon"><span class="mif-info"></span></span>
            <span class="caption">About</span>
          </a>
        </li>
      </ul>

      <div
        class="w-100 text-center text-small data-box p-2 border-top bd-grayMouse"
        style="position: absolute; bottom: 0"
      >
        <div>
          &copy; 2020
          <a href="mailto:patrick" class="text-muted fg-white-hover no-decor"
            >Patrick José Pereira</a
          >
        </div>
        <div>
          Based on Pandora by: &copy; 2019
          <a class="text-muted fg-white-hover no-decor">Sergey Pimenov</a>
        </div>
        <div>
          Created with
          <a
            href="https://metroui.org.ua"
            class="text-muted fg-white-hover no-decor"
            >Metro 4</a
          >
        </div>
      </div>
    </div>

    <div id="app-header" class="navview-content h-100">
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

      <div
        id="content-wrapper"
        class="content-inner h-100"
        style="overflow-y: auto"
      ></div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.indicator-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

body {
  background-color: #ecf0f5;
}

.navview .navview-pane {
  background-color: #222d32;
  color: #b8c7ce;
  font-size: 14px;
}

.navview .navview-content {
  padding-top: 52px;
  background-color: #ecf0f5;
}

.navview .pull-button {
  height: 52px;
  width: 52px;
}

.navview .navview-menu {
  background-color: #222d32;
}

.navview .navview-menu li a:hover {
  color: #fff;
  background: #1e282c;
}

.navview .navview-menu li.active a {
  color: #fff;
  background: #1e282c;
}

.navview .navview-menu .item-header {
  color: #4b646f;
  background: #1a2226;
  font-size: 12px;
}

.navview .navview-menu .navview-menu {
  background-color: #1a2226;
}

.navview .pull-button + h2 {
  display: none;
}

.navview.expand .pull-button + h2 {
  display: flex;
}

.dashboard-section-title {
  line-height: 1.2;
  margin: 0;
  padding: 0;
}

.navview-pane ::-webkit-scrollbar-track {
  background-color: #4b646f !important;
}

.navview-pane * {
  scrollbar-color: #1ba1e2 #4b646f !important;
}
</style>
