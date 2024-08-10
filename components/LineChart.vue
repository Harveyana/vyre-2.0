<template>
  <div class="w-full h-full min-h-[280px] border border-[#F4F4FB] rounded-lg p-1.5">
    <ClientOnly fallback="Loading Chart...">
      <apexchart
        :key="series"
        height="100%"
        width="100%"
        :options="options"
        :series="series"
      ></apexchart>
    </ClientOnly>
    
    <!-- <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="updateChart"
    >
      Change
    </button> -->
  </div>
</template>

<script setup lang="ts">

  // Chart

  const options = ref({
    chart: {
      type: "area",
      id: 'chartBarSeries',
      toolbar: {
        show: false,   
      }
    },

    grid: {
      show: false,
    },

    // plotOptions: {
    //   bar: {
    //     borderRadius: 10,
    //     borderRadiusApplication: "around",
    //   },
    // },
    dataLabels: {
        enabled: false,
      },
      colors: ['#4FAD7A']
  });

  const series = ref([
    {
      name: "Score",
      data: [],
    },
  ]);

  

  const updateChart = () => {
    //generate array of random numbers of length 10
    const data = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 100)
    );
    options.value = {
      ...options.value,
      xaxis: {
        categories: Array.from(
          { length: 10 },
          (_, i) => new Date().getFullYear() - i
        ), // array of last 10 years
        show: false,
      labels: {
        show: false,
      },
      lines: {
        show: false,
      }
      },

      yaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      
      },
      
    };

    series.value = [
      {
        name: "Score",
        data: data,
      },
    ];

  };


  onMounted(() => {
    // if(process.client){
      updateChart();
    // }
    
    
  });


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