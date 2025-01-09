<template>

  <div class="dark:bg-[#12171D] col-span-12 grid grid-cols-12 gap-x-1 lg:gap-x-6 px-4">
    <!-- <Toolbar :new="true"/> -->

    <!-- First Section -->
    <section  class=" h-full col-span-12 flex flex-col my-16 lg:my-12 ">
      <baseSection>

        

        <!-- <div class="col-span-12 py-3 flex items-center justify-between">

          <h1 class="Grotesque-Bold dark:text-white text-xl text-[#010109]">
            Hello Anayo
          </h1>

        </div> -->

        <!-- <div class="col-span-12 bg-bar flex flex-col items-start px-6 py-7 gap-y-1 rounded-lg mb-5">

          <h1 class="Grotesque-Semi-Bold gap-x-4 text-[18px] sm:text-[17px] text-white">
            Currently Verifying your account
          </h1>

          <div class="w-full flex flex-col sm:flex-row items-start justify-between gap-y-4">
            <h4 class="Grotesque-Light text-xs sm:text-[12px] text-white">
              We are currently verifying your account, and this should take 2-3 business working days.
            </h4>

            <h4 class="w-full sm:w-fit Grotesque-Light text-xs sm:text-[12px] text-white mr-20">
              If it takes longer  <span class="text-[#367bad] Grotesque-Semi-Bold cursor-pointer">Contact Support</span>
            </h4>
          </div>

        </div> -->
      
        <div class="col-span-12 h-fit lg:col-span-6">

          <h2 class="text-black dark:text-white text-xl Grotesque-Regular mb-2">
            Overview
          </h2>

          <div class="w-full h-fit border bg-white dark:bg-[#0B1015] rounded-2xl">
            
            <h2 class="text-black dark:text-white text-2xl Grotesque-Bold ml-6 sm:ml-8 mt-6 sm:mt-8">
                $ 17 643.41
                <p class="text-black dark:text-white poppinsRegular text-xs">Portfolio balance</p>
            </h2>

            <!-- <ClientOnly fallback="Loading Chart..."> -->
              <LineChart />
            <!-- </ClientOnly> -->

          </div>

        </div>
        

        <div class="col-span-12 h-fit lg:col-span-6 ">

          <h2 class="text-black dark:text-white text-xl poppinsSemiBold mb-2">
            Your Assets
          </h2>

          <div data-aos="fade-up" data-aos-once="true" class="w-full h-fit max-h-60 flex flex-row items-center justify-center no-scrollbar overflow-x-scroll ">
            <div class="w-full h-full flex">
              <CurrencyCard :balances="balances"/>
            </div>
            
          </div>
        </div>



        <!-- Recents Transactions -->
        <div class="col-span-12 h-fit lg:col-span-6">
          <div class="w-full flex flex-row items-center justify-between mb-4">
            <h2 class="text-black dark:text-white text-xl Grotesque-Regular">
             Latest Transactions
            </h2>
            <button class="w-fit my-auto px-2.5 py-1.5 hover:bg-gray-500 Grotesque-Regular border dark:text-white border-gray-400 rounded-xl">
              View all
            </button>
            <!-- <img src="~/assets/img/right-arrow.png" class="w-10 md:w-12 rounded-2xl hover:bg-gray-500 px-2" alt='transactions'/> -->
          </div>
          
          <div class="overflow-y-scroll scroll-smooth max-h-[10rem] lg:max-h-[15rem] flex flex-col items-center justify-start rounded-2xl col-span-12 py-2 mb-2 md:mb-5 space-y-4">
            <Recent :recents="transactions"/>
          </div>
        </div>


        <!-- Ads -->
        <div class="col-span-12 relative h-fit lg:col-span-6 bg-black rounded-2xl p-8">
          <div class="w-full flex flex-col justify-center gap-y-6">
            <h2 class="text-black text-2xl poppinsBold text-white">
             Earn Free Crypto<br> <span class="poppinsSemiBold">with Vyre!</span>
            </h2>

            <p class="text-black poppinsRegular text-sm text-white">Refer your friends and get paid<br> earn them for free!</p>

            <BaseButton class="poppinsSemiBold bg-[#e5f2fe] w-fit px-6 py-3">
              Earn now
            </BaseButton>

            
          </div>

          <img src="~/assets/img/bg1.svg" class="absolute right-0 bottom-0 "/>

        </div>

        
      </baseSection>
    </section>

  </div>

  


  

</template>

<script setup lang="ts">

// const token = useCookie('token');

// onMounted(async()=>{
//   const { data, pending, error }: any = await $fetch('/fetchBalance', {
//     method: 'post',
//     body: {
//       idToken: token.value
//     }
//   });
// })

const toggleState = ref(false)
const startDate = ref();
const EndDate = ref();

// const toggle = (event: any) => {
//     menu.value.toggle(event);
// };
const balances:{name:string;imgurl:URL;symbol:string;amount:number}[] = [
        {
          name: 'USDT',
          imgurl:new URL("~/assets/img/currency/usdt.svg",import.meta.url),
          amount:600,
          symbol:'USDT'
        },
        {
          name: 'Bitcoin',
          imgurl:new URL("~/assets/img/currency/bitcoin.svg",import.meta.url),
          amount:1.50,
          symbol:"BTC"
        },
        {
          name: 'litecoin',
          imgurl:new URL("~/assets/img/currency/litecoin.svg",import.meta.url),
          amount:2.5,
          symbol:"LTC"
        },
        {
          name: 'Nigerian Naira',
          imgurl:new URL("~/assets/img/currency/naira.png",import.meta.url),
          amount:44500,
          symbol:"NGN"
        },
        
]

const transactions:{type:string;source?:string;symbol:string;destination?:string;currency:string;date:string;description:string;amount:number}[]=[
      {
        type:'sent',
        destination:'hilda234@yahoo.com',
        currency:'USD',
        symbol:'$',
        date:'jan 3 2004 12:30pm',
        description:'payment for fashion services',
        amount:2400
      },
      {
        type:'received',
        source:'harveyana@yahoo.com',
        currency:'EUR',
        symbol:'€',
        date:'April 17 2014 6:30pm',
        description:'payment for house services',
        amount:5300
      },
      {
        type:'received',
        source:'harveyana@yahoo.com',
        currency:'EUR',
        symbol:'€',
        date:'April 17 2014 6:40pm',
        description:'payment for house services',
        amount:5300
      },
      {
        type:'sent',
        destination:'hilda234@yahoo.com',
        currency:'USD',
        symbol:'$',
        date:'jan 3 2004 12:30pm',
        description:'payment for fashion services',
        amount:2400
      },
      {
        type:'sent',
        destination:'hilda234@yahoo.com',
        currency:'USD',
        symbol:'$',
        date:'jan 3 2004 12:30pm',
        description:'payment for fashion services',
        amount:2400
      },
    ] 

    
</script>

<style scoped>

  .fade-img {
    position: relative; 
  }

  .fade-img:after {
    content:""; 
    position: absolute; 
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
    height: 40%;  
  }

  .bg-doodle {
        background: url("~/assets/img/doodle2.png");
        /* opacity: 0.5; */
        background-repeat: no-repeat;
        /* background-size: auto; */
        background-color: white;
        background-size: cover;
        /* background-position: right center; */
}


  .bg-truck {
    background: url('~/assets/img/truckBg.svg');
    background-color: #0050A8;
    background-repeat: no-repeat;
    /* background-size: auto; */
    background-size: contain;
    background-position: right center;
  }

  .bg-bike {
    background: url('~/assets/img/bikeBg.svg');
    background-color: #0C747F;
    background-repeat: no-repeat;
    /* background-size: auto; */
    background-size: contain;
    background-position: right center;
  }

  .bg-car {
    background: url('~/assets/img/carBg.svg');
    background-color: #4EACEA;
    background-repeat: no-repeat;
    /* background-size: auto; */
    background-size: contain;
    background-position: right center;
  }

  .bg-bar {
    background: url('~/assets/img/looperBg.svg');
    background-color: #000C23;
    background-repeat: no-repeat;
    /* background-size: auto; */
    background-size: contain;
    background-position: 80%;
  }

</style>