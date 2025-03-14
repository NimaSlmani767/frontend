import { useThemeColors } from '/@src/composable/useThemeColors'
const themeColors = useThemeColors()

export const evolutionRadialOptions = {
  series: [54],
  chart: {
    height: 220,
    type: 'radialBar',
  },
  colors: [themeColors.accent, themeColors.orange, themeColors.orange],
  title: {
    text: 'انقلاب بیت کوین',
    align: 'right',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          offsetY: 15,
          fontSize: '13px',
          fontFamily: 'Roboto, sans-serif',
          color: themeColors.lightText,
          formatter: function () {
            return ['(30 روز)']
          },
        },
        value: {
          color: themeColors.accent,
          offsetY: -20,
          fontSize: '16px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: '500',
        },
      },
    },
  },
  labels: ['تراز میانگین'],
}
