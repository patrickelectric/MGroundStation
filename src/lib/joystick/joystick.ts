import { GamepadListener } from "gamepad.js"

export enum EventType {
    Unknown = "unknown",
    Connected = "connected",
    Disconnected = "disconnected",
    Axis = "axis",
    Button = "button",
}

type GamepadEvent = {
    type: String,
    detail: Object,
}

export namespace JoystickDetail {
    export enum Stick {
        Left = 0,
        Right = 1,
    }

    export enum Axis {
        Horizontal = 0,
        Vertical = 1,
    }
}

export type JoystickEvent = {
    type: EventType,
    detail: {
        index: number
        gamepad: Gamepad,
        stick: JoystickDetail.Stick,
        axis: JoystickDetail.Axis,
        value: number,
    },
}

export namespace EventType {
    export function events(): Array<String> {
        return Object.keys(EventType).map(name => name.toLowerCase())
    }

    export function fromGamepadEventType(type: String): EventType {
        const fields = type.split(":")
        if (fields.length <= 1) {
            return EventType.Unknown
        }

        const name = fields[1]

        for(const eventName of EventType.events()) {
            if(eventName == name) {
                return eventName as EventType
            }
        }

        return EventType.Unknown
    }
}

type callbackJoystickStateEventType = (event: JoystickEvent) => void
type callbackJoystickEventType = (event: Array<Gamepad>) => void

class JoystickManager {
    private static instance = new JoystickManager()

    private callbacksJoystick: Array<callbackJoystickEventType> = []
    private callbacksJoystickState: Array<callbackJoystickStateEventType> = []
    private gamepadListener = new GamepadListener()
    private joysticks: Array<Gamepad> = []

    private constructor() {
        this.gamepadListener.start()
        this.connectEvents()
    }

    static self(): JoystickManager {
        return JoystickManager.instance
    }

    onJoystickUpdate(callback: callbackJoystickEventType) {
        this.callbacksJoystick.push(callback)
    }

    private processJoystickUpdate(event: JoystickEvent) {
        const index = event.detail.index

        if (index < 0) {
            console.log(`index: ${index}, length:${this.joysticks.length}`)
            console.log(`event: ${JSON.stringify(event)}, joysticks: ${JSON.stringify(this.joysticks)}`)
            throw new Error("Invalid joystick index.")
        }

        if (index > this.joysticks.length) {
            console.log(`index: ${index}, length:${this.joysticks.length}`)
            console.log(`event: ${JSON.stringify(event)}, joysticks: ${JSON.stringify(this.joysticks)}`)
            throw new Error("Connected joystick index is beyond the number of joysticks connected.")
        }

        // Let us know if we need to push a new joystick or remove one that already exists
        let isLatest = true

        if (index < this.joysticks.length) {
            isLatest = false
            console.log(`index: ${index}, length:${this.joysticks.length}`)
            console.log(`event: ${JSON.stringify(event)}, joysticks: ${JSON.stringify(this.joysticks)}`)
            console.warn("Connected index is below the number of joysticks connected")
        }

        if (event.type == EventType.Connected) {
            const gamepad = event.detail.gamepad

            if (isLatest) {
                this.joysticks.push(gamepad)
            } else {
                this.joysticks[index] = gamepad
            }
        } else {
            this.joysticks.splice(index, 1)
        }

        for(const callback of this.callbacksJoystick) {
            callback(this.joysticks)
        }
    }

    onJoystickStateUpdate(callback: callbackJoystickStateEventType) {
        this.callbacksJoystickState.push(callback)
    }

    private connectEvents() {
        for(const name of EventType.events()) {
            this.gamepadListener.on(`gamepad:${name}`, (event: GamepadEvent) => {
                const joystickEvent = event as JoystickEvent
                joystickEvent.type = EventType.fromGamepadEventType(joystickEvent.type)

                for(const callback of this.callbacksJoystickState) {
                    callback(joystickEvent)
                }

                if (name as EventType == EventType.Connected || name as EventType == EventType.Disconnected) {
                    this.processJoystickUpdate(joystickEvent)
                }
            })
        }
    }
}

export const joystickManager = JoystickManager.self()