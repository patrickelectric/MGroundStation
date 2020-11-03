<template>
  <div v-bind:key="servo + index" v-for="(servo, index) in servos" class="mt-6">
    <div class="clear" v-if="servo != -1">
      <div class="place-left">Output {{ index + 1 }}</div>
      <div class="place-right">
        <strong>{{ servo }}</strong
        >/100%
      </div>
    </div>
    <div
      v-if="servo != -1"
      data-role="progress"
      data-type="buffer"
      data-cls-back="bg-grayWhite"
      data-cls-bar="bg-grayWhite"
      data-cls-buffer="bg-pink"
      v-bind:data-value="servo"
      v-bind:data-buffer="servo + 1"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Servos",

  data() {
    return {
      servos: [],
    };
  },

  created() {},

  mounted() {
    const servo_ws = new WebSocket(
      "ws://0.0.0.0:8088/ws/mavlink?filter=SERVO_OUTPUT_RAW"
    );
    servo_ws.onmessage = function (message) {
      const json = JSON.parse(message.data);
      for (var i = 1; i <= Object.keys(json).length - 4; i++) {
          const name = `servo${i}_raw`
          const index = i - 1
        if (json[name] == 0) {
          this.servos[index] = -1;
          continue;
        }
        this.servos[index] =
          ((json[name] - 1100) * 100) / (1900 - 1100);
      }
      this.$forceUpdate();
    }.bind(this);
  },
};
</script>