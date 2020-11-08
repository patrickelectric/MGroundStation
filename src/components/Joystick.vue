<template>
  <div class="row border-bottom bd-lightGray m-3">
    <div class="cell-md-4 d-flex flex-align-center">
      <h3 class="dashboard-section-title text-center text-left-md w-100">
        Joysticks
      </h3>
    </div>
  </div>

  <div
    v-for="(joystick, index) in joysticks"
    :key="'joystick' + index"
    class="m-3"
  >
    <div
      data-role="panel"
      :data-title-caption="'Joystick ' + index + ' - ' + joystick.id"
      data-collapsible="true"
      data-title-icon="<span class='mif-gamepad'></span>"
      class="mt-4"
    >
      <div
        style="width: 100%"
        class="mt-3"
      >
        <div>
          <div style="margin-left: 1em;">
            <div class="joystick-box">
              <div class="x-axis" />
              <div class="y-axis" />
              <div class="circle-outline" />
              <div
                class="joystick-position"
                :style="{ top: joystick.axes[1] * 50 + 50 + '%', left: joystick.axes[0] * 50 + 50 + '%' }"
              />
            </div>
            <div class="joystick-box">
              <div class="x-axis" />
              <div class="y-axis" />
              <div class="circle-outline" />
              <div
                class="joystick-position"
                :style="{ top: joystick.axes[3] * 50 + 50 + '%', left: joystick.axes[2] * 50 + 50 + '%' }"
              />
            </div>
            <div>
              <button
                :class="'button ' + (button.pressed ? 'primary' : 'outline') + ' mt-1'"
                v-for="(button, buttonIndex) in joystick.buttons"
                :key="'button' + buttonIndex"
              >
                Button {{ buttonIndex }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

// Necessary to avoid eslint error: https://github.com/typescript-eslint/typescript-eslint/issues/2453
// eslint-disable-next-line no-unused-vars
import { joystickManager, EventType, JoystickEvent, JoystickDetail } from "../lib/joystick/joystick"

export default defineComponent({
    name: "Joystick",

    data() {
        return {
            joysticks: [] as Array<Gamepad>,
        }
    },

    created() {
        joystickManager.onJoystickUpdate((event) => {
            this.proccessJoystickEvent(event)
        })

        joystickManager.onJoystickStateUpdate((event) => {
            this.proccessJoystickStateEvent(event)
        })
    },

    methods: {
        proccessJoystickEvent(event: Array<Gamepad>) {
            this.joysticks = event
        },

        proccessJoystickStateEvent(event: JoystickEvent) {
            this.joysticks[event.detail.index] = event.detail.gamepad
        }
    }
})
</script>

<style scoped>
.joystick-box {
    position: relative;
    height: 13em;
    width: 13em;
    display: inline-block;
    border: 0.1em solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
}

.x-axis {
    position: absolute;
    left: 0em;
    right: 0em;
    top: 50%;
    height: 0.1em;
    background: rgba(0, 0, 0, 0.9);
    opacity: 0.2;
}

.y-axis {
    position: absolute;
    left: 50%;
    top: 0em;
    bottom: 0em;
    width: 0.1em;
    background: rgba(0, 0, 0, 0.9);
    opacity: 0.2;
}

.joystick-position {
    position: absolute;
    width: 0.6em;
    height: 0.6em;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: rgba(0, 0, 0, 0.9);
}
</style>
