<template>
    <Doughnut :data="data" :options="options" />
  </template>

  <script setup lang="ts">
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  
  import { Doughnut } from 'vue-chartjs'
  const appConfig = useAppConfig()

  const baseColor = appConfig.theme.colors.primary
  const vyreYellow = appConfig.theme.colors.vyreYellow
  const vyreGreen = appConfig.theme.colors.vyreGreen
  const vyreLemon = appConfig.theme.colors.vyreLemon
  const vyreGrey = appConfig.theme.colors.vyreGrey


  ChartJS.register(ArcElement, Tooltip, Legend)
  
  const data = {
    labels: ['USD', 'NGN', 'GBP', 'EUR'],
    datasets: [
      {
        backgroundColor: [vyreGreen,vyreYellow, baseColor, vyreLemon],
        data: [40, 20, 80, 10]
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      emptyDoughnut: {
        color: 'rgba(255, 128, 0, 0.5)',
        width: 2,
        radiusDecrease: 20
      }
    }
  }

</script>
<style scoped>
.vyreGrey{
  background-color: v-bind(vyreGrey);
}
.vyreYellow{
    background-color: v-bind(vyreYellow);
}
.vyreGreen{
    background-color: v-bind(vyreGreen);
}
.vyreLemon{
    background-color: v-bind(vyreLemon);
}
</style>