<template>
  <div
    v-for="(servo, index) in servos"
    :key="servo + index"
    class="mt-6"
  >
    <div
      v-if="servo != -1"
      class="clear"
    >
      <div class="place-left">
        Output {{ index + 1 }}
      </div>
      <div class="place-right">
        <strong>{{ servo }}</strong>/100%
      </div>
    </div>
    <div
      v-if="servo != -1"
      data-role="progress"
      data-type="buffer"
      data-cls-back="bg-grayWhite"
      data-cls-bar="bg-grayWhite"
      data-cls-buffer="bg-pink"
      :data-value="servo"
      :data-buffer="servo + 1"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import mavlink2rest from "./Mavlink2Rest"

export default defineComponent({
    name: "Servos",

    data() {
        return {
            servos: [] as Array<number>,
        }
    },

    created() {},

    mounted() {
        mavlink2rest.startListening("SERVO_OUTPUT_RAW").setCallback((message) => {
            for (var i = 1; i <= Object.keys(message).length - 4; i++) {
                const name = `servo${i}_raw`
                const index = i - 1
                if (message[name] == 0) {
                    this.servos[index] = -1
                    continue
                }
                this.servos[index] =
        ((message[name] - 1100) * 100) / (1900 - 1100)
            }
            this.$forceUpdate()
        })
    }
})
</script>