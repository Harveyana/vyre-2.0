<template>

  <div class="dark:bg-[#12171D] bg-gray-50 h-fit w-full gap-x-1 lg:gap-x-6 px-4 sm:px-10">

    <div class="w-full py-3 flex flex-col items-start justify-start mb-3">
    
      <h1 class="Grotesque-Bold dark:text-white text-xl text-[#010109]">
        My Orders
      </h1>

      <h4 class="Grotesque-Light dark:text-white text-[12px] text-[#010109]">
       Manage all orders here
      </h4>

    </div>



    <div class="w-full flex flex-col sm:flex-row gap-4 mt-8">

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

        </div>


        <div class="w-full h-[69vh] sm:h-[70vh] overflow-y-auto sm:border-r-2 border-gray-300 flex flex-col items-center justify-start pb-8 sm:p-6 gap-y-2">


          <div v-if="loading && !allOrders.length" class="h-full flex flex-col gap-y-4 w-full rounded-xl items-center justify-center">

                <div class="flex gap-x-3 h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
                  <div class="h-12 w-12 bg-gray-300 rounded-full dark:bg-gray-600 "></div>

                  <div class="w-full flex flex-col items-start gap-y-2 ">
                    <div class="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-40"></div>
                    <div class="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-20"></div>
                  </div>
                </div>

                <div class="flex gap-x-3 h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
                  <div class="h-12 w-12 bg-gray-300 rounded-full dark:bg-gray-600 "></div>

                  <div class="w-full flex flex-col items-start gap-y-2 ">
                    <div class="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-40"></div>
                    <div class="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-20"></div>
                  </div>
                </div>

                <div class="flex gap-x-3 h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
                  <div class="h-12 w-12 bg-gray-300 rounded-full dark:bg-gray-600 "></div>

                  <div class="w-full flex flex-col items-start gap-y-2 ">
                    <div class="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-40"></div>
                    <div class="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-20"></div>
                  </div>
                </div>

                <div class="flex gap-x-3 h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
                  <div class="h-12 w-12 bg-gray-300 rounded-full dark:bg-gray-600 "></div>

                  <div class="w-full flex flex-col items-start gap-y-2 ">
                    <div class="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-40"></div>
                    <div class="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-20"></div>
                  </div>
                </div>
                
          </div>

          <div v-if="!loading && !allOrders.length" class="w-full h-full flex flex-col items-center justify-center gap-y-2">

            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24"><path fill="#000" d="m17.578 4.432l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-.321.169l8.923 5.099l4.016-2.01c-.646-.732-1.688-1.279-3.462-2.21m4.17 3.534l-3.998 2V13a.75.75 0 0 1-1.5 0v-2.286l-3.5 1.75v9.44c.718-.179 1.535-.607 2.828-1.286l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-1.893 0-3.076-.252-3.978M11.25 21.904v-9.44l-8.998-4.5C2 8.866 2 10.05 2 11.941v.117c0 2.525 0 3.788.597 4.802c.598 1.015 1.674 1.58 3.825 2.709l2 1.049c1.293.679 2.11 1.107 2.828 1.286M2.96 6.641l9.04 4.52l3.411-1.705l-8.886-5.078l-.103.054c-1.773.93-2.816 1.477-3.462 2.21"/></svg>

            <h1  class=" text-[23px] Grotesque-Regular font text-[#080708] font-semibold">
              No Order Found
            </h1>

            <span class="text-[16px] Grotesque-Regular text-[#686767] text-center ">
              You have no order for now. 
            </span>

          </div>

          <div v-else class="h-full flex flex-col gap-y-4 w-full rounded-xl item-start justify-start">

            <MyOrder
             class="w-full sm:w-1/2"
              v-for="order in allOrders"
              :key="order.id"
              :order="order"
            />

          </div>


        </div>

      </div>


      <!-- right bar Order History-->


      <div class="hidden w-full mt-8 sm:w-[35%] sm:flex flex-col items-end gap-y-4">

        <h1 class="Grotesque-Bold dark:text-white text-xl text-[#010109]">
          Order Pairs
        </h1>

        <Pairs/>
        
      </div>
      

    </div>

    <SideLog :visible="showView">

      <OrderSummary :orderId="orderId" @close="showView = false" />

      <!-- <div class="w-full dark:bg-sky-900/75 flex flex-col h-fit lg:w-[280px] gap-y-4">
                
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
              
            </div> -->

    </SideLog>

    <BaseDialogue :visible="showCreateModal">

      <div class="relative flex flex-col lg:w-[350px] gap-y-4">
            
            <div class=" w-full flex items-center justify-between bg-white ">
              <h1 class="text-[18px] whitespace-nowrap SoraRegular text-[#080708]">
                Create Order
              </h1>
    
              <button @click="showCreateModal = false">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                  <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
                </svg>
              </button>
            </div>

            <OrderForm
              @close="showCreateModal = false" 
            />
    
      </div>


    </BaseDialogue>

    


  </div>

</template>

<script setup lang="ts">

  import { storeToRefs } from 'pinia';
  import { useOrderStore } from '~/store/order';
  const { getOrders} = useOrderStore();

  const { loading } = storeToRefs(useOrderStore());

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
const orderId = ref('')
const showCreateModal = ref(false)

const tab = ref('buy')

const toggleState = ref(false)
const startDate = ref();
const EndDate = ref();

const allOrders = ref<any[]>([])

const openOrder = (id:string)=>{
  orderId.value = id
  showView.value = true
}

// const fetchData = async()=>{

//   const result = await getOrders()
//   console.log(result)

//   if(result?.success){
//     allOrders.value = []
//     allOrders.value.push(...result?.orders)
        
//   }
// }

// onMounted(async()=>{
//   await fetchData()
// })


    
</script>

