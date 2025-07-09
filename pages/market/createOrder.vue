<template>
  <div class="w-full h-full flex flex-col items-center justify-start">
     
      <div class="w-full sm:w-[50%] h-full flex items-start justify-start">

        <button @click="$router.back()" class="bg-black rounded-xl px-3 py-2 flex items-center justify-center gap-1 text-[12px] sm:text-[15px] text-white Grotesque-Regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M6.325 12.85q-.225-.15-.337-.375T5.874 12t.113-.475t.337-.375l8.15-5.175q.125-.075.263-.112T15 5.825q.4 0 .7.288t.3.712v10.35q0 .425-.3.713t-.7.287q-.125 0-.262-.038t-.263-.112z"/></svg>
          Cancel
        </button>
        
      </div>
     
     <div class="w-full sm:w-[50%] h-full flex flex-col items-center justify-center"> 

      <!-- <div class="w-full flex items-start">

          <div class="w-full flex flex-col">

            <p class="Grotesque-Regular text-[16px] text-[#737373]">
              Select Order Pair
            </p>
            <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A]">
              Choose Your Preference
            </h3>

          </div>

          <button
           class="bg-[#F1F0FE] py-2 px-4 text-black text-xs rounded-md whitespace-nowrap"
          >
            choose one
          </button>



      </div> -->


      <div class="w-full h-fit flex flex-col items-center justify-start gap-3 rounded-lg overflow-y-auto pt-8">
        
        
          
        <div class="w-full h-fit flex flex-col items-center justify-start gap-3 rounded-3xl px-2 pt-4 sm:pt-6 pb-4">
<!-- bg-[#F8F8FC] -->
          <TabsRoot v-model:modelValue="DETAILS.type" class="w-full bg-[#F8F8FC] h-fit rounded-2xl" default-value="BUY">
                <TabsList class="h-full p-1 rounded-2xl bg-black shrink-0 flex items-center justify-center" aria-label="Manage your account">

                  <TabsTrigger
                        class="Grotesque-Regular py-2.5 flex-1 flex flex-col gap-2 items-center justify-center text-[14px] sm:text-[16px] leading-none text-[#A7A7A7] select-none  rounded-2xl  data-[state=active]:bg-white data-[state=active]:text-black outline-none cursor-default transition ease-in-out duration-300"                      
                        value="BUY"
                      >
                      Buy
                      <p class=" Grotesque-Light text-[11px] text-[#A7A7A7] data-[state=active]:text-black">
                        Purchase crypto from other users
                      </p>
                  </TabsTrigger>

                  <TabsTrigger
                        class="Grotesque-Regular py-2.5 flex-1 flex flex-col gap-2 items-center justify-center text-[14px] sm:text-[16px] leading-none text-[#A7A7A7] select-none  rounded-2xl  data-[state=active]:bg-white data-[state=active]:text-black outline-none cursor-default transition ease-in-out duration-300"                      
                        value="SELL"
                      >
                      Sell
                      <p class=" Grotesque-Light text-[11px] text-[#A7A7A7] data-[state=active]:text-black">
                        Sell your crypto to other users
                      </p>
                  </TabsTrigger>
                      
                </TabsList>
                          
          </TabsRoot>

          

          <div class="w-full" >

              <!-- <OrderPreference v-if="tab === 'TYPE'"
                v-model="DETAILS.type"
                @next="tab = 'PAIR'"  
              /> -->

              <SelectPair v-if="tab === 'PAIR'"
                v-model="DETAILS.pairId"
                @next="tab = 'AMOUNT'" 
                v-model:orderType="DETAILS.type" 
              />

              <OrderAmount v-if="tab === 'AMOUNT'"
                v-model:rate="DETAILS.price"
                @back="tab='PAIR'"
                @submit="(value:any)=>submitOrder(value.amount,value.minimumAmount)"
                :pairId="DETAILS.pairId"
                v-model:orderType="DETAILS.type"
              />

              <OrderSuccess v-if="tab === 'SUCCESS'"
                v-model="order"
              />

              
          </div>


        </div>


      
        
      </div>

     </div>

  </div>
 
    
</template>

<script setup lang="ts">

  import { useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useOrderStore } from '~/store/order';
  const { createOrder } = useOrderStore();

  const { loading } = storeToRefs(useOrderStore());

  definePageMeta({
    layout: 'operation'
  })

    // const props = defineProps({
    //   type: String,
    //   currency: String,
    //   balance: Number
    // });

    // const {currency, balance, type} = props

   const tab = ref('PAIR');
   const emit = defineEmits(['close'])
   
   const order = ref()

   const showList = ref(false)

   const DETAILS = reactive({
      type: 'BUY',
      amount: 0.00,
      pairId:'',
      price: 0.00,
      minimumAmount:0
    })

    

  const submitOrder = async(amount:number,minimumAmount:number)=>{
    DETAILS.amount = amount
    DETAILS.minimumAmount = minimumAmount
    // emit('close')
    toast.promise(() => new Promise(async(resolve,reject) =>{

      const created = await createOrder(DETAILS)
      if (created?.success) {
          order.value = created?.order
          tab.value = 'SUCCESS'

          resolve({msg:created.msg})
          // emit('verified', verified?.userId)
        }else{
          reject({msg:created.msg})
          // $toast.error(verified.msg)
      }

    }), 
    {
        loading: 'Creating Order',
        success: (data: any) => {
          // emit('close')
          return data.msg
        },
        error: (data: any) => {return data.msg}
    })

  }








</script>

<style>
* {
  font-family: "cabinetGrotesk", sans-serif;
}

.extraboldCabinet {
  font-family: "cabinetGroteskBold", sans-serif;
}

.blackCabinet {
  font-family: "cabinetGroteskBlack", sans-serif;
}
</style>