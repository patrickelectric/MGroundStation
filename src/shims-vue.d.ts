declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module "gamepad.js"
declare module "vue-flight-indicators"
declare module "@vue-leaflet/vue-leaflet"
