<template>
  <NavBar />
  <DashBoard />
</template>

<script>

import 'metro4/build/js/metro.min.js'
import 'metro4/build/css/metro-all.min.css'

import NavBar from './components/NavBar.vue'
import DashBoard from './components/DashBoard.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    DashBoard,
  }
}
</script>

<style>
#app {
  height: 100vh!important;
}
</style>
