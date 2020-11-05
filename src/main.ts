import { createApp } from "vue"
import App from "./App.vue"

createApp(App).mount("#app")

export default App

if("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("service-worker.js")
        .then(function() { console.log("Service Worker Registered.") })
}