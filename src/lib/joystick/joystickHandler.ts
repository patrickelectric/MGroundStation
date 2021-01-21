import { joystickManager, EventType, JoystickEvent, JoystickDetail } from "./joystick"
import mavlink2rest from "../../components/Mavlink2Rest"

interface Dictionary<T> {
    [key: string]: T;
  }

class JoystickHandler {
    private static instance = new JoystickHandler()
    private listener: any
    private manualControlObject: any = {
        "header": {
            "system_id": 255,
            "component_id": 0,
            "sequence": 0
        },
        "message": {
            "type":
            "MANUAL_CONTROL",
            "x": 0,
            "y": 0,
            "z": 0,
            "r": 0,
            "buttons": 0,
            "target": 1
        }
    }

    private constructor() {
        joystickManager.onJoystickStateUpdate(this.sendManualControl.bind(this))

        this.listener = mavlink2rest.startListening("SYSTEM_TIME").setFrequency(0.1)
    }

    static self(): JoystickHandler {

        return JoystickHandler.instance
    }

    mapAxisNumberToLetter(event: JoystickEvent): string{
        const letters = ["y", "x", "r", "z"]
        const index = event.detail.axis + event.detail.stick * 2
        return letters[index]
    }

    sendManualControl(event: JoystickEvent) {
        const axisSetup: Dictionary<Dictionary<number>> = {
            "x" : {
                "offset": 0,
                "direction": -1000
            },
            "y" : {
                "offset": 0,
                "direction": 1000
            },
            "z" : {
                "offset": 500,
                "direction": -500
            },
            "r" : {
                "offset": 0,
                "direction": 1000
            }
        }
        if (event.type === "axis") {
            let axis = this.mapAxisNumberToLetter(event)
            this.manualControlObject.message[axis] = axisSetup[axis].offset
            + axisSetup[axis].direction * event.detail.value
            this.manualControlObject.message[axis] |= 0

        }
        if (event.type === "button") {
            if (event.detail.pressed) {
                this.manualControlObject.message.buttons |= (2 << event.detail.button)
            } else {
                this.manualControlObject.message.buttons &= ~(2 << event.detail.button)
            }
        }
        this.listener.write(JSON.stringify(this.manualControlObject))
    }
}
const joystickHandler = JoystickHandler.self()
export default JoystickHandler