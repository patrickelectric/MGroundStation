<template>
    <div id="power-plot" style="width:100%;height:100%"></div>
</template>

<script>
import uPlot from "uplot";

export default {
  name: "Plot",

  data() {
    return {
      plotdata: [],
      plot1: null,
      servos: [],
    };
  },

  created() {
    const total_points = 1000;
    this.plotdata = [
      Array(total_points),
      Array(total_points),
      Array(total_points),
    ];
    for (var i = 0; i < total_points; i++) {
      this.plotdata[0][i] = i;
      this.plotdata[1][i] = 0;
      this.plotdata[2][i] = 0;
    }
  },

  mounted() {
    setInterval(() => {
      this.plot1.setSize(this.getSize());
    }, 1000);
    this.setupPlot();
    // TODO: find a right way to make it responsive

      const battery_ws = new WebSocket(`ws://localhost:8088/ws/mavlink?filter=BATTERY_STATUS`);
      battery_ws.onmessage = function (message) {
          const json = JSON.parse(message.data)

          let final_voltage = 0
          for (let voltage of json.voltages) {
              if (voltage == 65535) {
                  continue
              }
              final_voltage += voltage
          }

          this.updatePlot(json.message_information.counter, final_voltage/1e3, json.current_battery/1e2)
      }.bind(this);
  },
  methods: {
    updatePlot(time, voltage, current) {
      if (this.plotdata[0].length > 1000) {
        this.plotdata[0].shift();
        this.plotdata[1].shift();
        this.plotdata[2].shift();
      }
      //console.log(time, voltage, current)
      this.plotdata[0].push(this.plotdata[0][this.plotdata[0].length - 1] + 1);
      this.plotdata[1].push(voltage);
      this.plotdata[2].push(current);

      this.plot1.setData(this.plotdata);
    },
    getSize () {
        let { width, height } = document.getElementById("power-plot").getBoundingClientRect();
        return { width: width, height: height == 0 ? 300 : 300 };
      },
    setupPlot() {
      const opts = {
        ...this.getSize(),
        legend: {
          show: true,
        },
        scales: {
          x: {
            time: false,
            auto: true,
          },
          y: {
            auto: true,
          },
        },
        series: [
          {
            scale: "",
            value: (u, v) => (v == null ? "-" : v.toFixed(1) + ""),
          },
          {
            label: "voltage",
            scale: "V",
            stroke: "green",
            show: true,
            value: (u, v) => (v == null ? "-" : v.toFixed(1) + "V"),
          },
          {
            label: "current",
            scale: "A",
            stroke: "red",
            show: true,
            value: (u, v) => (v == null ? "-" : v.toFixed(1) + "A"),
          },
        ],
        axes: [
          {
            scale: "",
            values: (u, vals) => vals.map((v) => +v.toFixed(1) + ""),
          },
          {
            scale: "V",
            values: (u, vals) => vals.map((v) => +v.toFixed(1) + " V"),
          },
          {
            side: 1,
            scale: "A",
            values: (u, vals) => vals.map((v) => +v.toFixed(2) + " A"),
            grid: { show: false },
          },
        ],
      };
      this.plot1 = new uPlot(opts, this.plotdata, document.getElementById("power-plot"));
    },
  },
  computed: {},
  watch: {},
};
</script>