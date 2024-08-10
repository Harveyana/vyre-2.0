<template>

  <div class="w-full gap-x-1 lg:gap-x-6 px-4 sm:px-10">

    <div class="w-full py-3 flex items-start justify-start mb-3">

      <h1 class="Grotesque-Bold text-xl text-[#010109]">
        My Trips
      </h1>

    </div>


    <!-- lower band -->


    <div class="w-full py-3 gap-y-4 flex flex-col-reverse sm:flex-row items-center justify-between">

      
      <div class="w-full sm:w-[33%] flex items-center justify-center">

        <TabsRoot v-model:modelValue="tab" class="w-full bg-[#F8F8FC] h-fit rounded-md" default-value="ongoing">
            <TabsList class="h-full p-1 rounded-md bg-[#F8F8FC] shrink-0 flex items-center justify-center" aria-label="Manage your account">

              <TabsTrigger
                    class="Grotesque-Regular py-2.5 flex-1 flex items-center justify-center text-[14px] leading-none text-[#A7A7A7] select-none  rounded-md  data-[state=active]:bg-white data-[state=active]:text-[#0050A8] outline-none cursor-default transition ease-in-out duration-300"                      
                    value="ongoing"
                  >
                  Ongoing
              </TabsTrigger>

              <TabsTrigger
                    class="Grotesque-Regular py-2.5 flex-1 flex items-center justify-center text-[14px] leading-none text-[#A7A7A7] select-none  rounded-md  data-[state=active]:bg-white data-[state=active]:text-[#0050A8] outline-none cursor-default transition ease-in-out duration-300"                      
                    value="completed"
                  >
                  Completed
              </TabsTrigger>
                  
            </TabsList>
                      
        </TabsRoot>

      </div>

      <div class="w-full sm:w-fit flex items-center justify-between sm:justify-center gap-x-3">

        <baseButton class="bg-[#0050A8] Grotesque-Light w-[60%] py-2.5 px-6 text-white text-[14px]">
          Create New
        </baseButton>

      
        <PopoverRoot :open="toggleState">

          <PopoverTrigger
              class="rounded-lg w-fit h-fit inline-flex items-center justify-center px-3 py-2 border border-grey-200 bg-[#F9F9F9] py-1  outline-none hover:bg-green3"
              aria-label="dropdown menu options"
            >
              <div @click="toggleState = true" class="flex items-center justify-center cursor-pointer text-white gap-2">

                <img src="~/assets/img/filter.svg" class="w-6"/>
                <span class="text-sm capitalize truncate text-black poppinsMedium">
                  Filter By
                </span>
              </div>
              <svg class=' cursor-pointer w-6 md:w-7 dark:fill-white dark:stroke-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>
          </PopoverTrigger>

          <PopoverPortal>
            <PopoverContent
              side="bottom"
              :side-offset="5"
              class="min-w-[340px] z-20 mx-4 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            >
              <div class="flex flex-col group capitalize text-sm cursor-pointer leading-none text-black rounded-[3px] items-center gap-y-4 px-3 pb-7 pt-4 relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                  <div class="w-full flex items-center justify-between">

                    <h1 class="Grotesque-Bold text-xl text-[#010109]">
                      Filter
                    </h1>

                    <button class="w-fit" @click="toggleState = false">
                      <img src="~/assets/img/close.svg" class="w-6"/>
                    </button>

                  </div>

                  <div class="flex items-center gap-x-3.5">

                    <button class="w-fit hover:bg-[#F9F9FC] border border-[#F9F9FC] p-4 rounded-lg focus:outline-none focus:shadow-outline">
                      <h1 class="Grotesque-Regular flex-none text-[13px] text-[#010109]">
                        Last 7days
                      </h1>
                    </button>

                    <button class="w-fit hover:bg-[#F9F9FC] border border-[#F9F9FC] p-4 rounded-lg focus:outline-none focus:shadow-outline">
                      <h1 class="Grotesque-Regular flex-none text-[13px] text-[#010109]">
                        Last 30 Days
                      </h1>
                    </button>

                    <button class="w-fit hover:bg-[#F9F9FC] border border-[#F9F9FC] p-4 rounded-lg focus:outline-none focus:shadow-outline">
                      <h1 class="Grotesque-Regular text-[13px] text-[#010109]">
                        Custom
                      </h1>
                    </button>

                  </div>

                  <button class="w-full hover:bg-[#F9F9FC] border border-[#F9F9FC] p-4 rounded-lg focus:outline-none focus:shadow-outline">
                    <h1 class="Grotesque-Regular text-left text-[13px] text-[#010109]">
                      All
                    </h1>
                  </button>

                  <button class="w-full flex items-start justify-start hover:bg-[#F9F9FC] border border-[#F9F9FC] p-4 rounded-lg focus:outline-none focus:shadow-outline">
                    <!-- <h1 class="Grotesque-Regular text-left text-[13px] text-[#010109]">
                      Select Start Date
                    </h1> -->
                    <inputDate operation="Select Start Date" @updateValue="(date: any)=>{startDate = date}" />
                  </button>

                  <button class="w-full hover:bg-[#F9F9FC] border border-[#F9F9FC] p-4 rounded-lg focus:outline-none focus:shadow-outline">
                    <h1 class="Grotesque-Regular text-left text-[13px] text-[#010109]">
                      <inputDate operation=" Select End Date" @updateValue="(date: any)=>{EndDate = date}" />
                    </h1>
                  </button>
                            
              </div>

              <PopoverArrow class="fill-white" />
            </PopoverContent>

          </PopoverPortal>
        </PopoverRoot>

      </div>


    </div>

    <!-- Trip History -->

    <div class="w-full flex flex-col items-center justify-start py-4 sm:py-6 gap-y-4">

      <div class="w-full flex items-center hover:bg-gray-100 cursor-pointer justify-start border border-[#F4F4FB] rounded-xl p-5 gap-x-3">
        <img src="~/assets/img/completeTrip.svg" class=""/>

        <div class="flex flex-col items-start justify-start">
          <h1 class="Grotesque-Regular text-[16px] text-[#010109]">
            Trip 2897
          </h1>

          <h3 class="Grotesque-Regular text-[14px] text-[#737373]">
            Area 5A, Ikeja City Mall Ikeja Lagos-Kano Gwarimpa Market, Off Kaduna Bus-Stop Ejigbo Lagos
          </h3>

          <h4 class="Grotesque-Regular text-[12px] text-[#737373]">
            Oct 21, 10:24a.m
          </h4>

        </div>

      </div>


      <div class="w-full flex items-center  hover:bg-gray-100 cursor-pointer  justify-start border border-[#F4F4FB] rounded-xl p-5 gap-x-3">
        <img src="~/assets/img/completeTrip.svg" class=""/>

        <div class="flex flex-col items-start justify-start">
          <h1 class="Grotesque-Regular text-[16px] text-[#010109]">
            Trip 2897
          </h1>

          <h3 class="Grotesque-Regular text-[14px] text-[#737373]">
            Area 5A, Ikeja City Mall Ikeja Lagos-Kano Gwarimpa Market, Off Kaduna Bus-Stop Ejigbo Lagos
          </h3>

          <h4 class="Grotesque-Regular text-[12px] text-[#737373]">
            Oct 21, 10:24a.m
          </h4>

        </div>

      </div>

    </div>

    


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

const route = useRoute()
const router = useRouter()


const tab = ref('ongoing')

const toggleState = ref(false)
const startDate = ref();
const EndDate = ref();

// const toggle = (event: any) => {
//     menu.value.toggle(event);
// };

    
</script>

<style scoped>
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