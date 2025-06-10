<template>

  <div class="h-fit dark:bg-[#12171D] col-span-12 grid grid-cols-12 gap-x-1 lg:gap-x-6 px-4">

    <!-- First Section -->
    <section  class="w-full h-fit col-span-12 flex flex-col my-6 lg:my-6 ">
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

        <div class="col-span-12 h-fit lg:col-span-8 flex flex-col gap-y-6">

           <!-- Ads -->
          <div class="col-span-12 relative h-fit lg:col-span-8 bg-black rounded-2xl p-8 border border-black">
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

          <div class="col-span-12 h-fit lg:col-span-8 rounded-2xl flex flex-col gap-2 ">

            <div class="w-full flex items-center justify-between">
              <h2 class="text-black dark:text-white text-lg poppinsSemiBold">
                Portfolio
              </h2>

              <button @click="$router.push('/wallets')">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
                  <path fill="#000" d="M224 304a16 16 0 0 1-11.31-27.31l157.94-157.94A55.7 55.7 0 0 0 344 112H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V168a55.7 55.7 0 0 0-6.75-26.63L235.31 299.31A15.92 15.92 0 0 1 224 304"/>
                  <path fill="#000" d="M448 48H336a16 16 0 0 0 0 32h73.37l-38.74 38.75a56.35 56.35 0 0 1 22.62 22.62L432 102.63V176a16 16 0 0 0 32 0V64a16 16 0 0 0-16-16"/>
                </svg>
              </button>
            </div>

            <div class="w-full h-fit flex flex-row items-center justify-center no-scrollbar overflow-x-scroll ">
              <div class="w-full h-fit flex px-2 rounded-2xl">
                <CurrencyCard class="sm:" :balances="balances" :itemsToShow="itemsToShow" />
              </div>
            </div>

          </div>
      
          <div class="col-span-12 h-fit lg:col-span-8 ">

              <h2 class="text-black dark:text-white text-lg Grotesque-Regular mb-2">
                Overview
              </h2>

              <div class="w-full h-fit border border-white bg-white dark:bg-[#0B1015] rounded-2xl">
                
                <h2 class="text-black dark:text-white text-2xl Grotesque-Bold ml-6 sm:ml-8 mt-6 sm:mt-8">
                    $ 17 643.41
                    <p class="text-black dark:text-white poppinsRegular text-xs">Portfolio balance</p>
                </h2>

                <!-- <ClientOnly fallback="Loading Chart..."> -->
                  <LineChart />
                <!-- </ClientOnly> -->

              </div>

          </div>


        </div>

        <div class="col-span-12 h-fit lg:col-span-4 flex flex-col gap-y-6 bg-white/50 dark:bg-black/50 rounded-2xl p-4">

          <div class="col-span-12 h-fit lg:col-span-6 flex flex-col items-started justify-center">

            <h2 class="text-black dark:text-white text-lg Grotesque-Regular mb-2">
              Actions
            </h2>

            <div class="w-full flex items-center justify-between sm:justify-center gap-x-3">

              <baseButton class="bg-white flex items-center justify-center gap-x-2 rounded-xl border border-black Grotesque-Bold w-[50%] py-2 px-6 text-black text-[14px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="#000" fill-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m13.53.47a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V8a.75.75 0 0 1 1.5 0v6.19l1.72-1.72a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/>
                </svg>
                Receive
              </baseButton>

              <baseButton class="bg-black flex items-center justify-center gap-x-2 rounded-xl border border-white Grotesque-Bold w-[50%] py-2.5 px-8 text-white text-[15px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#fff" fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10m-13.53-.47a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72V16a.75.75 0 0 1-1.5 0V9.81l-1.72 1.72a.75.75 0 0 1-1.06 0" clip-rule="evenodd"/></svg>
                Send
              </baseButton>
            
            </div>

            <!-- <div class=" bg-white dark:bg-[#0B1015] rounded-xl w-full h-full">

            </div> -->

          </div>

          <!-- Recents Transactions -->
          <div class="col-span-12 h-fit lg:col-span-6">
            <div class="w-full flex flex-row items-center justify-between mb-4">
              <h2 class="text-black dark:text-white text-lg Grotesque-Regular">
              Latest Transactions
              </h2>

              <button @click="$router.push('/transactions')">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
                  <path fill="#000" d="M224 304a16 16 0 0 1-11.31-27.31l157.94-157.94A55.7 55.7 0 0 0 344 112H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V168a55.7 55.7 0 0 0-6.75-26.63L235.31 299.31A15.92 15.92 0 0 1 224 304"/>
                  <path fill="#000" d="M448 48H336a16 16 0 0 0 0 32h73.37l-38.74 38.75a56.35 56.35 0 0 1 22.62 22.62L432 102.63V176a16 16 0 0 0 32 0V64a16 16 0 0 0-16-16"/>
                </svg>
              </button>
              <!-- <img src="~/assets/img/right-arrow.png" class="w-10 md:w-12 rounded-2xl hover:bg-gray-500 px-2" alt='transactions'/> -->
            </div>
            
            <!-- <div class="overflow-y-scroll scroll-smooth max-h-[10rem] lg:max-h-[15rem] flex flex-col items-center justify-start rounded-2xl col-span-12 py-2 mb-2 md:mb-5 space-y-4"> -->
              <Recent />
            <!-- </div> -->
          </div>

          

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

const breakpoints = useBreakpoints({
  mobile: 640,
  desktop: 760
})

const itemsToShow = computed(() => {
  return breakpoints.smaller('mobile').value ? 1 : 2
})

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