import { useThemeColors } from '/@src/composable/useThemeColors'
const themeColors = useThemeColors()

export const overallChartOptions = {
  series: [
    {
      name: 'Condition (pt)',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  chart: {
    type: 'area',
    height: 280,
    offsetX: 20,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    width: [2, 2, 2],
    curve: 'straight',
  },
  colors: [themeColors.primary],
  labels: ['مهر', 'شهریور', 'مرداد', 'تیر', 'خرداد', 'اردیبهشت', 'فروردین'],
  yaxis: {
    opposite: true,
  },
  legend: {
    horizontalAlign: 'left',
  },
}
