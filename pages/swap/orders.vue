<template>

  <div class="w-full h-[80vh] flex items-start justify-center bg-gradient-to-b from-bg-white/60 to-bg-white/70 sm:h-[85vh] overflow-y-auto gap-x-1 lg:gap-x-6 sm:px-4">

    <!-- First Section -->

    <SwapMenu />
                
      <section  class="w-full h-fit sm:w-[70%] flex flex-col my-12 lg:my-12 ">
        <baseSection>

          <div class="col-span-12 h-fit flex flex-col gap-y-6">

            <!-- Ads -->
            <!-- <div class="col-span-12 relative h-fit lg:col-span-8 bg-black rounded-2xl px-8 py-4 border border-black">
              <div class="w-full flex flex-col justify-center gap-y-3">
                <h2 class="text-black text-xl Grotesque-Bold text-white">
                  Earn Free Crypto<br> <span class="Grotesque-Bold">with Vyre!</span>
                </h2>

                <div class="w-full flex flex-col items-start justify-start gap-y-3">
                  <p class="text-black Grotesque-Regular text-[13px] text-white">Refer your friends and get paid<br> earn them for free!</p>

                  <BaseButton class="Grotesque-SemiBold bg-[#e5f2fe] w-fit px-6 py-2 rounded-2xl">
                    Earn now
                  </BaseButton>
                </div>
                

                
              </div>

              <img src="~/assets/img/bg1.svg" class="absolute right-0 bottom-0 "/>

            </div> -->

            <div class="w-full flex items-center justify-center">

              <TabsRoot v-model:modelValue="tab" class="w-[40%] sm:w-[30%] bg-[#F8F8FC] h-fit rounded-2xl" default-value="buy">
                  <TabsList class="h-full p-1 rounded-2xl bg-[#F8F8FC] shrink-0 flex items-center justify-center" aria-label="Manage your account">

                    <TabsTrigger
                          class="Grotesque-Regular py-2.5 flex-1 flex items-center justify-center text-[14px] leading-none text-[#A7A7A7] select-none  rounded-2xl  data-[state=active]:bg-white data-[state=active]:text-black outline-none cursor-default transition ease-in-out duration-300"                      
                          value="buy"
                        >
                        Buy
                    </TabsTrigger>

                    <TabsTrigger
                          class="Grotesque-Regular py-2.5 flex-1 flex items-center justify-center text-[14px] leading-none text-[#A7A7A7] select-none  rounded-2xl  data-[state=active]:bg-white data-[state=active]:text-black outline-none cursor-default transition ease-in-out duration-300"                      
                          value="sell"
                        >
                        Sell
                    </TabsTrigger>
                        
                  </TabsList>
                            
              </TabsRoot>

            </div>

            <div class="col-span-12 h-fit lg:col-span-6">
              <div class="w-full flex flex-row items-center justify-between mb-4">
                <h2 class="text-black dark:text-white text-lg Grotesque-Bold">
                Recent Activities
                </h2>

                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
                    <path fill="#000" d="M224 304a16 16 0 0 1-11.31-27.31l157.94-157.94A55.7 55.7 0 0 0 344 112H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V168a55.7 55.7 0 0 0-6.75-26.63L235.31 299.31A15.92 15.92 0 0 1 224 304"/>
                    <path fill="#000" d="M448 48H336a16 16 0 0 0 0 32h73.37l-38.74 38.75a56.35 56.35 0 0 1 22.62 22.62L432 102.63V176a16 16 0 0 0 32 0V64a16 16 0 0 0-16-16"/>
                  </svg>
                </button>
                <!-- <img src="~/assets/img/right-arrow.png" class="w-10 md:w-12 rounded-2xl hover:bg-gray-500 px-2" alt='transactions'/> -->
              </div>
              
              <!-- <div class="overflow-y-scroll scroll-smooth max-h-[10rem] lg:max-h-[15rem] flex flex-col items-center justify-start rounded-2xl col-span-12 py-2 mb-2 md:mb-5 space-y-4"> -->
                <Activities />
              <!-- </div> -->
            </div>


          </div>

          
        </baseSection>
      </section>

  </div>

  


  

</template>

<script setup lang="ts">

  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { getProfile,logUserOut } = useAuthStore();

  const { user } = storeToRefs(useAuthStore());

// const token = useCookie('token');

// onMounted(async()=>{
//   const { data, pending, error }: any = await $fetch('/fetchBalance', {
//     method: 'post',
//     body: {
//       idToken: token.value
//     }
//   });
// })

// definePageMeta({
//   layout: 'swap'
// })

const toggleState = ref(false)
const startDate = ref();
const EndDate = ref();

// const toggle = (event: any) => {
//     menu.value.toggle(event);
// };

const tab = ref('buy')

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