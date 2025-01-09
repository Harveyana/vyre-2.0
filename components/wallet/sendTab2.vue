<template>
    <div class="h-fit">

      <div class="w-full flex flex-col ml-2">

        <p class="Grotesque-Regular text-[16px] text-[#737373]">
          Enter Amount
        </p>
        <!-- <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A]">
          Choose Your Preference
        </h3> -->

      </div>

      <div  class="w-full border flex flex-col px-4 rounded-2xl sm:shadow-md py-3">

        <div class="w-full flex items-start justify-between sm:justify-center sm:gap-x-16 border px-4 sm:px-8 rounded-2xl py-4">

          <div class="flex flex-col items-start justify-center">
           
            <input v-model="entry" :class="insufficient ? 'border border-red-500 bg-red-200':'border-none bg-gray-200'" class="w-36 sm:w-60 outline-none rounded-xl focus-none text-black Grotesque-Bold text-2xl"  type="number" id="numberInput" name="numberInput" pattern="[0-9]*" inputmode="numeric" />

            <div class="ml-2 mt-1">
              <span v-if="!loading" class="loading text-black text-center">~ ₦ {{currentRate}}</span>
              <ProgressSpinner v-else class="" style="width: 20px; height: 20px" strokeWidth="8" fill="#ffff"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" 
              />
            </div>
          </div>

          <!-- <div class="flex flex-col items-center justify-center gap-y-1 sm:gap-y-2">

              

              <span class="text-xs sm:text-sm truncate poppinsLight ml-4">
                  Balance = 0.2135
              </span>

          </div> -->
          


        </div>


        <div class="w-fit flex items-center justify-center gap-2 mt-2">
          <h2 class="text-xs truncate poppinsLight ml-3">
            Balance: {{balance}} {{currency}}
          </h2>
        </div>

        <!-- <div class="w-full flex items-start justify-start border rounded-2xl py-2 px-2 mt-2">
          <h2 class="text-sm truncate poppinsLight ml-3">
            <span class="poppinsSemiBold text-xs sm:text-sm">Expected Output :</span>  <span class="poppinsRegular">0.00 btc</span> 
          </h2> 

        </div> -->

        <!-- <BaseButton  class="w-full px-8 bg-gray-300 py-3 mt-4">
          <span v-if="!showLoader" class="text-[16px] poppinsLight text-black text-center">Continue</span>
          <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" 
          />

        </BaseButton> -->

        <div class="w-full flex items-center justify-center gap-x-2 mt-6" >

          <BaseButton @click="$emit('back')" class="w-[25%] px-8 bg-gray-300 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l-64 64l64 64"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 224h294c58.76 0 106 49.33 106 108v20"/></svg>
          </BaseButton>


          <baseButton
              @click="submitAmount()"
                type="submit"
                class="w-[70%] py-3 bg-black  text-white text-[15px] rounded-lg "
              >
              Continue
          </baseButton>

        </div>

        



        </div>
        

    </div>


  </template>

  <script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useWalletStore } from '~/store/wallet';
  const { createWallet, fetchRate} = useWalletStore();

  const { loading } = storeToRefs(useWalletStore()); // make authenticated state reactive with storeToRefs

  const showLoader = ref(false)
  
  const insufficient = ref(false)
  // const toggleState = ref(false)

  // const state = useGlobalState()
  // const AssetMap = state.assetMap
  const entry = ref(0.00)

  const props = defineProps({
    type: String,
    currency: String,
    balance: Number
  });

  const {currency, balance, type} = props



  const route = useRouter()

  const emit = defineEmits(['next','update-value','back'])  // Declare Events

  const currentRate = computed(() => (entry.value * rate.value).toFixed(2))


  // const create = async(currency:string)=>{
  //     emit('close')
  //     toast.promise(() => new Promise(async(resolve,reject) =>{
  //       const created = await createWallet(currency)
  //       if (created.success) {
  //         resolve({msg:created.msg})
  //         // emit('verified', verified?.userId)
  //       }else{
  //         reject({msg:created.msg})
  //         // $toast.error(verified.msg)
  //       }
  //     }), 
  //     {
  //       loading: 'Creating wallet',
  //       success: (data: any) => {
  //         emit('created')
  //         return data.msg
  //       },
  //       error: (data: any) => {return data.msg}
  //     })

  // }
  const rate = ref(0)

  const getRate = async()=>{
    const result = await fetchRate(currency as string,'NGN')
    
      console.log(result)
      if(result?.success){
        console.log(result?.value)
        rate.value = result?.rate.value
      }
  }

  watch(() => entry.value, async(newvalue, oldvalue) => {
    if(balance! <= entry.value){ 
      insufficient.value = true
    }else{
      insufficient.value = false
    }
  });

  const submitAmount = ()=>{
    if(entry.value === 0 || insufficient.value) return
    emit('update-value',entry.value)
  }

  onMounted(async()=>{
    getRate()
  })


  </script>
