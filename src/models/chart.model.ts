import { useThemeColors } from '../composable/useThemeColors'
import {
  ChartAnnotations,
  ChartBaseOption,
  ChartSeries,
  ChartTitle,
  ChartXaxis,
  ChartYaxis,
} from './base-chart.model'

export class PHChartOptions extends ChartBaseOption {
  // series: ChartSeries[] = [
  //   { name: 'pH', data: [] },
  //   { name: 'بهینه بالا', data: [1, 2, 4, 5] },
  //   { name: 'بهینه پایین', data: [] },
  // ]
  // colors: string[] = [
  //   useThemeColors().primary,
  //   useThemeColors().primary,
  //   useThemeColors().warning,
  // ]

  // colors: string[] = [
  //   useThemeColors().primary,
  //   useThemeColors().green,
  //   useThemeColors().warning,
  // ]
  series: ChartSeries[] = [{ data: [] }]
  annotations: ChartAnnotations = {
    yaxis: [
      {
        y: 1,
        y2: 12,
        borderColor: useThemeColors().danger,
        fillColor: useThemeColors().danger,
        opacity: 1,
      },
      {
        y: 8,
        y2: 9,
        borderColor: useThemeColors().warning,
        fillColor: useThemeColors().warning,
        opacity: 1,
      },
      {
        y: 8.2,
        y2: 8.5,
        borderColor: useThemeColors().green,
        fillColor: useThemeColors().green,
        opacity: 1,
      },
    ],
  }

  title: ChartTitle = {
    text: 'pH',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 2,
    max: 12,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: 'روز گذشته از زمان کشت',
    },
    tickAmount: 5,
  }
  constructor(
    data: number[],
    optimizeUp: number[],
    optimizeDown: number[],
    color: string,
    labels: string[]
  ) {
    super()
    // this.series[0].data = data
    // this.series[1].data = optimizeUp
    // this.series[2].data = optimizeDown
    // this.colors[0] = color
    this.labels = labels
  }
}

export class OxygenChartOptions extends ChartBaseOption {
  // series: ChartSeries[] = [
  //   { name: 'اکسیژن', data: [] },
  //   { name: 'بهینه بالا', data: [] },
  //   { name: 'بهینه پایین', data: [] },
  // ]
  // colors: string[] = [
  //   useThemeColors().primary,
  //   useThemeColors().primary,
  //   useThemeColors().warning,
  // ]
  series: ChartSeries[] = [{ data: [] }]
  annotations: ChartAnnotations = {
    yaxis: [
      {
        y: 3,
        y2: 15,
        borderColor: useThemeColors().danger,
        fillColor: useThemeColors().danger,
        opacity: 1,
      },
      {
        y: 2.5,
        y2: 15,
        borderColor: useThemeColors().warning,
        fillColor: useThemeColors().warning,
        opacity: 1,
      },
      {
        y: 4,
        y2: 5,
        borderColor: useThemeColors().green,
        fillColor: useThemeColors().green,
        opacity: 1,
      },
    ],
  }
  title: ChartTitle = {
    text: 'اکسیژن (mg/L)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 3,
    max: 15,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: 'روز گذشته از زمان کشت',
    },
    tickAmount: 5,
  }
  constructor(
    data: number[],
    optimizeUp: number[],
    optimizeDown: number[],
    color: string,
    labels: string[]
  ) {
    super()
    // this.series[0].data = data
    // this.series[1].data = optimizeUp
    // this.series[2].data = optimizeDown
    // this.colors[0] = color
    this.labels = labels
  }
}

export class OrpChartOptions extends ChartBaseOption {
  // series: ChartSeries[] = [
  //   { name: 'ORP', data: [] },
  //   { name: 'بهینه بالا', data: [] },
  //   { name: 'بهینه پایین', data: [] },
  // ]
  // colors: string[] = [
  //   useThemeColors().primary,
  //   useThemeColors().green,
  //   useThemeColors().warning,
  // ]
  series: ChartSeries[] = [{ data: [] }]
  annotations: ChartAnnotations = {
    yaxis: [
      {
        y: 0,
        y2: 500,
        borderColor: useThemeColors().danger,
        fillColor: useThemeColors().danger,
        opacity: 1,
      },
      {
        y: 100,
        y2: 400,
        borderColor: useThemeColors().warning,
        fillColor: useThemeColors().warning,
        opacity: 1,
      },
      {
        y: 200,
        y2: 250,
        borderColor: useThemeColors().green,
        fillColor: useThemeColors().green,
        opacity: 1,
      },
    ],
  }
  title: ChartTitle = {
    text: 'ORP(mV)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0,
    max: 500,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: 'روز گذشته از زمان کشت',
    },
    tickAmount: 5,
  }
  constructor(
    data: number[],
    optimizeUp: number[],
    optimizeDown: number[],
    color: string,
    labels: string[]
  ) {
    super()
    // this.series[0].data = data
    // this.series[1].data = optimizeUp
    // this.series[2].data = optimizeDown
    // this.colors[0] = color
    this.labels = labels
  }
}

export class ECChartOptions extends ChartBaseOption {
  // series: ChartSeries[] = [
  //   { name: 'میزان شوری', data: [] },
  //   { name: 'بهینه بالا', data: [] },
  //   { name: 'بهینه پایین', data: [] },
  // ]
  // colors: string[] = [
  //   useThemeColors().primary,
  //   useThemeColors().green,
  //   useThemeColors().warning,
  // ]
  series: ChartSeries[] = [{ data: [] }]
  annotations: ChartAnnotations = {
    yaxis: [
      {
        y: 0,
        y2: 50,
        borderColor: useThemeColors().danger,
        fillColor: useThemeColors().danger,
        opacity: 1,
      },
      {
        y: 10,
        y2: 40,
        borderColor: useThemeColors().warning,
        fillColor: useThemeColors().warning,
        opacity: 1,
      },
      {
        y: 20,
        y2: 30,
        borderColor: useThemeColors().green,
        fillColor: useThemeColors().green,
        opacity: 1,
      },
    ],
  }
  title: ChartTitle = {
    text: 'میزان شوری (ppt)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0,
    max: 50,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: 'روز گذشته از زمان کشت',
    },
    tickAmount: 5,
  }
  constructor(
    data: number[],
    optimizeUp: number[],
    optimizeDown: number[],
    color: string,
    labels: string[]
  ) {
    super()
    // this.series[0].data = data
    // this.series[1].data = optimizeUp
    // this.series[2].data = optimizeDown
    // this.colors[0] = color
    this.labels = labels
  }
}

export class AmmoniaChartOptions extends ChartBaseOption {
  // series: ChartSeries[] = [
  //   { name: 'آمونیاک', data: [] },
  //   { name: 'بهینه بالا', data: [] },
  //   { name: 'بهینه پایین', data: [] },
  // ]
  // colors: string[] = [
  //   useThemeColors().primary,
  //   useThemeColors().green,
  //   useThemeColors().warning,
  // ]
  series: ChartSeries[] = [{ data: [] }]
  annotations: ChartAnnotations = {
    yaxis: [
      {
        y: 0,
        y2: 2,
        borderColor: useThemeColors().danger,
        fillColor: useThemeColors().danger,
        opacity: 1,
      },
      {
        y: 0,
        y2: 1,
        borderColor: useThemeColors().warning,
        fillColor: useThemeColors().warning,
        opacity: 1,
      },
      {
        y: 0,
        y2: 0.1,
        borderColor: useThemeColors().green,
        fillColor: useThemeColors().green,
        opacity: 1,
      },
    ],
  }
  title: ChartTitle = {
    text: 'آمونیاک (ppm)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0,
    max: 2,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: 'روز گذشته از زمان کشت',
    },
    tickAmount: 5,
  }
  constructor(
    data: number[],
    optimizeUp: number[],
    optimizeDown: number[],
    color: string,
    labels: string[]
  ) {
    super()
    // this.series[0].data = data
    // this.series[1].data = optimizeUp
    // this.series[2].data = optimizeDown
    // this.colors[0] = color
    this.labels = labels
  }
}

export class NitriteChartOptions extends ChartBaseOption {
  // series: ChartSeries[] = [
  //   { name: 'نیتریت', data: [] },
  //   { name: 'بهینه بالا', data: [] },
  //   { name: 'بهینه پایین', data: [] },
  // ]
  // colors: string[] = [
  //   useThemeColors().primary,
  //   useThemeColors().green,
  //   useThemeColors().warning,
  // ]
  series: ChartSeries[] = [{ data: [] }]
  annotations: ChartAnnotations = {
    yaxis: [
      {
        y: 0,
        y2: 2,
        borderColor: useThemeColors().danger,
        fillColor: useThemeColors().danger,
        opacity: 1,
      },
      {
        y: 0,
        y2: 1,
        borderColor: useThemeColors().warning,
        fillColor: useThemeColors().warning,
        opacity: 1,
      },
      {
        y: 0,
        y2: 0.1,
        borderColor: useThemeColors().green,
        fillColor: useThemeColors().green,
        opacity: 1,
      },
    ],
  }
  title: ChartTitle = {
    text: 'نیتریت (ppm)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0,
    max: 2,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: 'روز گذشته از زمان کشت',
    },
    tickAmount: 5,
  }
  constructor(
    data: number[],
    optimizeUp: number[],
    optimizeDown: number[],
    color: string,
    labels: string[]
  ) {
    super()
    // this.series[0].data = data
    // this.series[1].data = optimizeUp
    // this.series[2].data = optimizeDown
    // this.colors[0] = color
    this.labels = labels
  }
}

export class NitrateChartOptions extends ChartBaseOption {
  // colors: string[] = [
  //   useThemeColors().primary,
  //   useThemeColors().green,
  //   useThemeColors().warning,
  // ]
  series: ChartSeries[] = [{ data: [] }]
  annotations: ChartAnnotations = {
    yaxis: [
      {
        y: 0,
        y2: 2,
        borderColor: useThemeColors().danger,
        fillColor: useThemeColors().danger,
        opacity: 1,
      },
      {
        y: 0,
        y2: 1,
        borderColor: useThemeColors().warning,
        fillColor: useThemeColors().warning,
        opacity: 1,
      },
      {
        y: 0,
        y2: 0.1,
        borderColor: useThemeColors().green,
        fillColor: useThemeColors().green,
        opacity: 1,
      },
    ],
  }
  title: ChartTitle = {
    text: 'نیترات (ppm)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0,
    max: 2,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: 'روز گذشته از زمان کشت',
    },
    tickAmount: 5,
  }
  constructor(
    data: number[],
    optimizeUp: number[],
    optimizeDown: number[],
    color: string,
    labels: string[]
  ) {
    super()
    // this.series[0].data = data
    // this.series[1].data = optimizeUp
    // this.series[2].data = optimizeDown
    // this.colors[0] = color
    this.labels = labels
  }
}

export class TemperatureChartOptions extends ChartBaseOption {
  series: ChartSeries[] = [{ data: [] }]
  // colors: string[] = [
  //   useThemeColors().primary,
  //   useThemeColors().green,
  //   useThemeColors().warning,
  // ]
  annotations: ChartAnnotations = {
    yaxis: [
      {
        y: 0,
        y2: 50,
        borderColor: useThemeColors().danger,
        fillColor: useThemeColors().danger,
        opacity: 1,
      },
      {
        y: 15,
        y2: 45,
        borderColor: useThemeColors().warning,
        fillColor: useThemeColors().warning,
        opacity: 1,
      },
      {
        y: 25,
        y2: 35,
        borderColor: useThemeColors().green,
        fillColor: useThemeColors().green,
        opacity: 1,
      },
    ],
  }
  title: ChartTitle = {
    text: 'دما (C)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0,
    max: 50,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: 'روز گذشته از زمان کشت',
    },
    tickAmount: 5,
  }
  constructor(
    data: number[],
    optimizeUp: number[],
    optimizeDown: number[],
    color: string,
    labels: string[]
  ) {
    super()
    this.series[0].data = data
    // this.series[1].data = optimizeUp
    // this.series[2].data = optimizeDown
    // this.colors[0] = color
    this.labels = labels
  }
}
