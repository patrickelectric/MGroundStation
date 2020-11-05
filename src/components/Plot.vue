<template>
  <div
    id="power-plot"
    style="width: 100%; height: 100%"
  />
</template>

<script lang="ts">
import uPlot from "uplot"

import { defineComponent } from "vue"

import mavlink2rest from "./Mavlink2Rest"

export default defineComponent({
    name: "Plot",

    data() {
        return {
            plotdata: [] as  Array<Array<number>>,
            plot1: null as unknown as uPlot,
        }
    },
    computed: {},
    watch: {},

    created() {
        const totalPoints = 1000
        this.plotdata = [
            Array(totalPoints),
            Array(totalPoints),
            Array(totalPoints),
        ]
        for (var i = 0; i < totalPoints; i++) {
            this.plotdata[0][i] = i
            this.plotdata[1][i] = 0
            this.plotdata[2][i] = 0
        }
    },

    mounted() {
        setInterval(() => {
            this.plot1.setSize(this.getSize())
        }, 1000)
        this.setupPlot()
        // TODO: find a right way to make it responsive

        mavlink2rest.startListening("BATTERY_STATUS").setCallback((message) => {

            let finalVoltage = 0
            for (let voltage of message.voltages) {
                if (voltage == 65535) {
                    continue
                }
                finalVoltage += voltage
            }

            this.updatePlot(
                message.message_information.counter,
                finalVoltage / 1e3,
                message.current_battery / 1e2
            )
        }).setFrequency(1)
    },
    methods: {
        updatePlot(time: number, voltage: number, current: number) {
            if (this.plotdata[0].length > 1000) {
                this.plotdata[0].shift()
                this.plotdata[1].shift()
                this.plotdata[2].shift()
            }
            //console.log(time, voltage, current)
            this.plotdata[0].push(this.plotdata[0][this.plotdata[0].length - 1] + 1)
            this.plotdata[1].push(voltage)
            this.plotdata[2].push(current)

            this.plot1.setData(this.plotdata)
        },
        getSize() {
            let { width, height } = document
                .getElementById("power-plot")!
                .getBoundingClientRect()
            return { width: width, height: height == 0 ? 300 : 300 }
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
            } as uPlot.Options
            this.plot1 = new uPlot(
                opts,
                this.plotdata,
                document.getElementById("power-plot")!
            )
        },
    },
})
</script>