<template>

  <div class="dark:bg-[#12171D] bg-gray-50 h-full w-full gap-x-1 lg:gap-x-6 px-4 sm:px-10">

    <div class="w-full py-3 flex items-start justify-start mb-3">

      <h1 class="Grotesque-Bold dark:text-white text-xl text-[#010109]">
        Market
      </h1>

    </div>



    <div class="w-full flex flex-col sm:flex-row gap-4 ">

      <div class="w-full sm:w-[65%] flex flex-col gap-4 ">

        <div class="w-full flex items-center justify-between">

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

          <baseButton class="flex items-center bg-gray-200 rounded-xl Grotesque-Bold w-fit py-2 px-4 text-black text-[14px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"><path fill="black" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z"/></svg>
            Create
          </baseButton>

        </div>


        <div class="w-full h-[69vh] sm:h-[70vh] overflow-y-auto sm:border-r-4 border-gray-300 flex flex-col items-center justify-start sm:p-6 gap-y-2">

          <BaseOrder @click="showView = true" />

          <BaseOrder @click="showView = true" />

          <BaseOrder @click="showView = true" />
          <BaseOrder @click="showView = true" />
          <BaseOrder @click="showView = true" />
          <BaseOrder @click="showView = true" />

        </div>

      </div>


      <!-- right bar Order History-->


      <div class="hidden w-full mt-8 sm:w-[35%] sm:flex flex-col items-end gap-y-4">

        <h1 class="Grotesque-Bold dark:text-white text-xl text-[#010109]">
          Order History
        </h1>

        <div class="w-full flex flex-col gap-2 ">
          <UserOrder @click="showView = true" />
          <UserOrder @click="showView = true" />
        </div>
        

      </div>
      

    </div>

    <SideLog :visible="showView">

            <div class="w-full dark:bg-sky-900/75 flex flex-col h-fit lg:w-[280px] gap-y-4">
                
                <div class="w-full flex items-center justify-between border-b border-gray-300 pb-2">

                    <div class="flex flex-col items-start justify-center gap-y-[2px]">
                      <h1 class="Grotesque-Bold dark:text-white text-xl text-[#010109]">
                        Order Summary
                      </h1>
                    </div>

                    <button @click="showView = false">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                          <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
                      </svg>
                    </button>
                </div>

                <div class="flex flex-col items-center bg- justify-center relative rounded-xl p-2 w-full h-full">

                  <div class="relative bg-[#F6F0D8] hover:bg-[#d9d5d5] border-2 hover:border-black cursor-pointer w-full h-1/2 p-3 sm:p-4 flex flex-col gap-y-2 items-start justify-between rounded-2xl " >

                    <img src="~/assets/img/currency/bitcoin.svg" class=" w-16 sm:w-12 rounded-full mb-4 border-8 border-white"/>

                    <!-- <baseChart /> -->

                    <div class="flex flex-col items-start justify-center">
                      <span class="text-black Grotesque-Bold text-2xl sm:text-2xl">
                          <span class="truncate">0.45</span> <span class="text-sm">BTC</span>
                      </span>
                      <span class="text-sm truncate Grotesque-Regular">
                        ₦ 1203
                      </span>
                    </div>

                  </div>

                  <svg class="my-[-20px] z-10 bg-white p-2 rounded-full" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="black" d="M12.984 15a1 1 0 0 0 1.848.53l2.688-2.687a1 1 0 0 0-1.415-1.414l-1.12 1.12V5a1 1 0 0 0-2 0zm-1.969-6a1 1 0 0 0-1.848-.53L6.48 11.157a1 1 0 1 0 1.414 1.414l1.121-1.12V19a1 1 0 1 0 2 0z"/></svg>

                  <div class="relative bg-[#F6F0D8] hover:bg-[#d9d5d5] border-2 hover:border-black cursor-pointer w-full h-1/2 p-3 sm:p-4 flex flex-col gap-y-2 items-start justify-between rounded-2xl " >

                    <img src="~/assets/img/currency/litecoin.svg" class=" w-16 sm:w-12 rounded-full mb-4 border-8 border-white"/>

                    <!-- <baseChart /> -->

                    <div class="flex flex-col items-start justify-center">
                      <span class="text-black Grotesque-Bold text-2xl sm:text-2xl">
                          <span class="truncate">0.45</span> <span class="text-sm">LTC</span>
                      </span>
                      <span class="text-sm truncate Grotesque-Regular">
                        ₦ 1203
                      </span>
                    </div>

                  </div>


                </div>
              
            </div>

``
    </SideLog>

    


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
const showView = ref(false)

const tab = ref('buy')

const toggleState = ref(false)
const startDate = ref();
const EndDate = ref();


    
</script>

