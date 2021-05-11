<template>
  <button
    class="button"
    @click="emitNotification()"
  >
    Test noficiation
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import * as API from "../lib/API/API"

export default defineComponent({
    name: "Development",

    data() {
        return {
        }
    },
    created() {},
    mounted() {},
    methods: {
        emitNotification: function() {
            API.notify({body: "Test notification"})
        },
    }
})
</script>
