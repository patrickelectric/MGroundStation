import { resolveTransitionHooks } from "vue"

interface Dictionary<T> {
    [key: string]: T;
  }

class Listener {
    callback: (msg: any) => void = (message) => {console.log("Listener not assigned a callback")};
    parent: Endpoint;
    frequency: number = 1
    interval: number = -1;

    constructor(parent: Endpoint) {
        this.parent = parent
        this.setFrequency(1)
    }

    setCallback (callback:(msg: any) => void): Listener {
        this.callback = callback
        return this
    }

    setFrequency(frequency: number): Listener {
        clearInterval(this.interval) // Seems harmless on initialization
        this.interval = window.setInterval(() => {
            if (this.parent.latestData !== null) {
                this.callback(this.parent.latestData)
            }
        }, 1000/frequency)
        // ask parent to request messages faster?
        return this
    }

    discard() {
        clearInterval(this.interval)
        this.parent.removeListener(this)
    }
}

class Endpoint {
  socket: WebSocket;
  listeners: Array<Listener> = [];
  latestData: any = null;

  constructor (url: string) {
      this.socket = this.createSocket(url)
  }

  updateUrl(url: string) {
      this.socket.close()
      this.socket = this.createSocket(url)
  }

  createSocket(url: string): WebSocket {
      const socket = new WebSocket(url)
      socket.onmessage = (message: MessageEvent) => {
          this.latestData = JSON.parse(message.data)
      }
      return socket
  }

  addListener() {
      const newListener = new Listener(this)
      this.listeners.push(newListener)
      return newListener
  }

  removeListener(listener: Listener) {
      this.listeners = this.listeners.filter(item => item !== listener)
  }
}

class Mavlink2RestManager {
  baseUrl: string;
  // Dictionary mapping endpoints to websocket
  endpoints: Dictionary<Endpoint> = {}
  baseUrlCandidates: Array<string>

  private static instance: Mavlink2RestManager;

  private constructor() {
      this.baseUrl = `${this.getWebsocketPrefix()}://${window.location.host}/ws/mavlink`
      this.baseUrlCandidates = [this.baseUrl, "ws://localhost:8088/ws/mavlink"]
      this.probeBaseUrlCandidates()
  }

  public static getInstance(): Mavlink2RestManager {
      if (!Mavlink2RestManager.instance) {
          Mavlink2RestManager.instance = new Mavlink2RestManager()
      }
      return Mavlink2RestManager.instance
  }

  probeBaseUrlCandidates() {
      for (const url of this.baseUrlCandidates) {
          const asHttp = url.replace("wss://","https://").replace("ws://","http://").replace("/ws/mavlink","")
          fetch(asHttp)
              .then(async res => {
                  if (res.status === 200) {
                      const body = (await res.text())
                      const valid = body.indexOf("List of available paths") !== -1
                      if (valid) {
                          this.setBaseUrl(url)

                      }
                  }
              })
      }
  }


  setBaseUrl(url: string) {
      // close all websockets and discard them
      for (const [name, endpoint] of Object.entries(this.endpoints)) {
          endpoint.updateUrl(`${url}?filter=${name}`)
      }

  }
  startListening (endpointName: string): Listener {
      let endpoint = this.endpoints[endpointName] || this.createEndpoint(endpointName)
      this.endpoints[endpointName] = endpoint
      return endpoint.addListener()
  }

  setupFrequency(frequency: number): void{
      // TODO: implement this
      return
  }

  createEndpoint (endpoint: string): Endpoint {
      return new Endpoint(`${this.baseUrl}?filter=${endpoint}`)
  }

  getWebsocketPrefix() {
      return window.location.protocol == "https:" ? "wss" : "ws"
  }

}

const mavlink2rest = Mavlink2RestManager.getInstance()

export default mavlink2rest