<template>
  <div class="w-full h-full min-h-[240px]  rounded-lg p-1.5">
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
        show: true,
      labels: {
        show: true,
      },
      lines: {
        show: true,
      }
      },

      yaxis: {
        show: true,
        labels: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
        crosshairs: {
          show: true,
        },
        tooltip: {
          enabled: true,
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

</style>