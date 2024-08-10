<template>
    <NuxtLink href="" :style="{ backgroundColor: getRandomColor() }" v-for="order in Orders" :key="order.ref" class="w-full relative hover:bg-[#d9d5d5] border-2 hover:border-black cursor-pointer flex-none flex flex-col items-start justify-between px-3 pb-1 rounded-2xl">
      <div class="w-full flex items-center justify-between">
        <div class="w-fit flex items-center justify-start mt-2">
          <img :src="order.userPic" class="w-6 bg-[#bfcbdf] rounded-full border-2 border-white"/>
          <!-- <div class="flex flex-col"> -->
          <h4 class="text-[9px] truncate poppinsRegular ml-2">
              {{order.user}}
          </h4>
            <!-- <span class="text-[9px] truncate poppinsRegular ml-2">
              harveyana3@gmail.com
            </span> -->
          <!-- </div> -->
        </div>

        <h4 class="text-black poppinsBold text-xl">
              <span class=" text-xs">{{order.quoteSymbol}}</span> <span class="truncate">{{order.quotePrice}}</span> 
        </h4>

      </div>
      

      <div class="w-full flex items-center justify-between">

        <div class="w-full flex gap-2">
          <img src="~/assets/img/currency/usdt.svg" class="w-7"/>
          <div class="flex flex-col items-start justify-center">
            <h4 class="text-black poppinsBold text-lg">
                <span class=" text-xs">{{order.baseSymbol }}</span> <span class="truncate">{{order.baseAmount}}</span> 
            </h4>
            <span class="text-[9px] truncate poppinsRegular">
              Limit {{order.lowerLimit}} - {{order.upperLimit}}
            </span>
          </div>
        </div>

        <h4 class="absolute bottom-0 right-0 rounded-br-xl rounded-tl-xl text-white px-2 poppinsBold text-xl bg-black">
          <span class="truncate">{{order.orderType}}</span> 
        </h4>

        <ProgressRoot
          v-model="order.percentage"
          class="absolute bottom-0 overflow-hidden bg-blackA9 rounded-full w-[87%] h-1"
          style="transform: translateZ(0)"
        >
          <ProgressIndicator
            class="bg-black rounded-full w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
            :style="`transform: translateX(-${100 -order.percentage}%)`"
          />
        </ProgressRoot>


      </div>
      
     <!-- <span class="text-xs truncate poppinsRegular">
            Limit ₦ 3200
          </span> -->
      

      
    </NuxtLink>

      
</template>

<script setup lang="ts">

type card = {
  name:string;
  imgurl:URL;
  symbol:string;
  amount:number
}

const getRandomColor = () => {
      const colors = ['#E5DEF0', '#D6EDDA', '#F6F0D8']; // Add more colors as needed
      return colors[Math.floor(Math.random() * colors.length)];
}
const progressValue = ref(50)

const Orders = [
  {
    ref:1,
    orderType:'Buy',
    pair:'USDT/NGN',
    baseAmount:3500,
    quotePrice:500,
    lowerLimit:1100,
    upperLimit:8500,
    baseSymbol:'USDT',
    quoteSymbol:'₦',
    user:'harvey ana',
    percentage:30,
    userPic:new URL("~/assets/img/boy.png",import.meta.url)

  },
  {
    ref:2,
    orderType:'Sell',
    pair:'USDT/NGN',
    baseAmount:5500,
    quotePrice:400,
    lowerLimit:1100,
    upperLimit:10500,
    baseSymbol:'USDT',
    quoteSymbol:'₦',
    user:'harvey ana',
    percentage:45,
    userPic:new URL("~/assets/img/boy.png",import.meta.url)

  },
  {
    ref:3,
    orderType:'Buy',
    pair:'BTC/NGN',
    baseAmount:3,
    quotePrice:30000000,
    lowerLimit:0.1,
    upperLimit:5,
    baseSymbol:'BTC',
    quoteSymbol:'₦',
    user:'harvey ana',
    percentage:60,
    userPic:new URL("~/assets/img/boy.png",import.meta.url)

  },
  {
    ref:4,
    orderType:'Sell',
    pair:'ETH/NGN',
    baseAmount:12,
    quotePrice:3000000,
    lowerLimit:0.3,
    upperLimit:8,
    baseSymbol:'ETH',
    quoteSymbol:'₦',
    user:'harvey ana',
    percentage:70,
    userPic:new URL("~/assets/img/boy.png",import.meta.url)

  }
]

// const props = defineProps<{
//     balances: card[]
// }>()
</script>