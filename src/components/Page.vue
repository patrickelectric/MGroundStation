<template>
  <component :is="computedComponent" />
</template>

<script lang="ts">
import { loadModule } from "vue3-sfc-loader/src/index"
import { defineComponent, defineAsyncComponent } from "vue"

//const loader = new VueLoader()

const options = {
    moduleCache: undefined,
    async getFile(url: string) {
        const res = await fetch(url)
        if ( !res.ok )
            throw Object.assign(new Error(`${res.statusText} ${url}`), { res })
        return await res.text()
    },
    addStyle(textContent: any) {

        const style = Object.assign(document.createElement("style"), { textContent })
        const ref = document.head.getElementsByTagName("style")[0] || null
        document.head.insertBefore(style, ref)
    },
}

export default defineComponent({
    data() {
        return {
            currentComponent: "./DashBoard.vue",
        }
    },
    props: {
        url: {
            type: String,
            required: true
        },
    },
    computed: {
        computedComponent() {
            const currentComponent: String = this.url // the trick is here
            return defineAsyncComponent( () => loadModule(currentComponent, options) )
        }
    },
})
</script>