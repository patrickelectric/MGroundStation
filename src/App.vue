<template>
  <div
    data-role="navview"
    data-toggle="#paneToggle"
    data-expand="xl"
    data-compact="lg"
    data-active-state="true"
  >
    <div class="navview-pane">
      <div class="navview-container">
        <div class="bg-cyan d-flex flex-align-center">
          <button class="pull-button m-0 bg-darkCyan-hover">
            <span class="mif-menu fg-white" />
          </button>
          <h4
            class="text-light m-0 fg-white text-bold"
            style="line-height: 52px"
          >
            MGroundstation
          </h4>
        </div>
      </div>

      <div
        class="navview-menu-container"
        style="height: calc(100% - 123px)"
      >
        <ul
          id="side-menu"
          class="navview-menu"
        >
          <li class="item-header">
            MAIN NAVIGATION
          </li>
          <li class="active">
            <a
              href="#dashboard"
              data-ytta-id="-"
              @click="setPage('DashBoard')"
            >
              <span class="icon"><span class="mif-meter" /></span>
              <span class="caption">Dashboard</span>
            </a>
          </li>

          <li>
            <a
              href="#parameters"
              data-ytta-id="-"
              @click="setPage('Parameters')"
            >
              <span class="icon"><span class="mif-table" /></span>
              <span class="caption">Parameters</span>
            </a>
          </li>

          <li>
            <a
              href="#joystick"
              data-ytta-id="-"
              @click="setPage('Joystick')"
            >
              <span class="icon"><span class="mif-gamepad" /></span>
              <span class="caption">Joystick</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="dropdown-toggle"
            >
              <span class="icon"><span class="mif-table" /></span>
              <span class="caption">Category</span>
            </a>
            <ul
              class="navview-menu stay-open"
              data-role="dropdown"
            >
              <li>
                <a href="#table-classes">
                  <span class="icon"><span class="mif-spinner2" /></span>
                  <span class="caption">Sub category 1</span>
                </a>
              </li>
              <li>
                <a href="#table-component">
                  <span class="icon"><span class="mif-spinner2" /></span>
                  <span class="caption">Sub category 2</span>
                </a>
              </li>
            </ul>
          </li>

          <li class="item-header">
            Documentation
          </li>
          <li>
            <a
              href="https://google.com"
              data-ytta-id="-"
            >
              <span class="icon"><span class="mif-books fg-red" /></span>
              <span class="caption">Documentation</span>
            </a>
          </li>
          <li>
            <a
              href="https://google.com"
              data-ytta-id="-"
            >
              <span class="icon"><span class="mif-info" /></span>
              <span class="caption">About</span>
            </a>
          </li>
        </ul>
      </div>

      <div
        class="w-100 text-center text-small data-box p-2 border-top bd-grayMouse"
        style="position: absolute; bottom: 0"
      >
        <div>
          © 2020
          <a
            href="mailto:patrick"
            class="text-muted fg-white-hover no-decor"
            data-ytta-id="-"
          >Patrick José Pereira</a>
        </div>
        <div>
          Based on Pandora by: © 2019
          <a class="text-muted fg-white-hover no-decor">Sergey Pimenov</a>
        </div>
        <div>
          Created with
          <a
            href="https://metroui.org.ua"
            class="text-muted fg-white-hover no-decor"
            data-ytta-id="-"
          >Metro 4</a>
        </div>
      </div>
    </div>
    <div
      id="app-header"
      class="navview-content h-100"
    >
      <NavBar />
      <div
        id="content-wrapper"
        class="content-inner h-100"
        style="overflow-y: auto"
      >
        <div
          v-show="page == 'DashBoard'"
          class="fill"
        >
          <DashBoard />
        </div>
        <div
          v-show="page == 'Parameters'"
          class="fill"
        >
          <Parameters />
        </div>
        <div
          v-show="page == 'Joystick'"
          class="fill"
        >
          <Joystick />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "metro4/build/js/metro.min.js"
import "metro4/build/css/metro-all.min.css"
import "uplot/dist/uPlot.min.css"

import NavBar from "./components/NavBar.vue"
import DashBoard from "./components/DashBoard.vue"
import Parameters from "./components/Parameters.vue"
import Joystick from "./components/Joystick.vue"
import { defineComponent } from "vue"

export default defineComponent({
    name: "App",
    components: {
        NavBar,
        DashBoard,
        Parameters,
        Joystick,
    },
    data() {
        return {
            page: "DashBoard"
        }
    },
    methods: {
        setPage(name: string) {
            this.page = name
        }
    }
})
</script>

<style>
#app {
  height: 100vh !important;
}

.fill {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

body {
  background-color: #ECF0F5;
}

.navview .navview-pane {
  background-color: #222D32;
  color: #b8c7ce;
  font-size: 14px;
}

.navview .navview-content {
  padding-top: 52px;
  background-color: #ECF0F5;
}

.navview .pull-button {
  height: 52px;
  width: 52px;
}

.navview .navview-menu {
  background-color: #222D32;
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

.navview.compacted .pull-button + h4 {
  display: none;
}

.navview.expand .pull-button + h4 {
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
