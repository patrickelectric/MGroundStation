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

<script>
export default {
    name: "Servos",

    data() {
        return {
            servos: [],
        }
    },

    created() {},

    mounted() {
        const servoWs = new WebSocket(
            "ws://0.0.0.0:8088/ws/mavlink?filter=SERVO_OUTPUT_RAW"
        )
        servoWs.onmessage = function (message) {
            const json = JSON.parse(message.data)
            for (var i = 1; i <= Object.keys(json).length - 4; i++) {
                const name = `servo${i}_raw`
                const index = i - 1
                if (json[name] == 0) {
                    this.servos[index] = -1
                    continue
                }
                this.servos[index] =
          ((json[name] - 1100) * 100) / (1900 - 1100)
            }
            this.$forceUpdate()
        }.bind(this)
    },
}
</script>