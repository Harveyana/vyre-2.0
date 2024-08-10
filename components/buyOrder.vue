<template>

      <div  class="w-full rounded-2xl flex flex-col items-center justify-center">

        <!-- Second Modal -->
        <div class="w-full sm:w-fit sm:max-w-[90%] flex flex-col px-4 rounded-2xl sm:shadow-md py-3 ">

          <h2 class="text-black poppinsBold capitalize text-xl sm:text-2xl ml-2 mb-2">
                {{props.orderType}} order
          </h2>

          <div class="w-full flex flex-col sm:flex-row-reverse items-start justify-between sm:justify-center gap-x-4 gap-y-4 sm:gap-x-10 border px-4 sm:px-8 rounded-2xl py-4">

            <div class="sm:w-[25%] flex flex-col items-center justify-center ml-auto">
        
              <div class="w-fit flex items-end mb-2">
                <img :src="AssetMap[selectedPair?.base].img" class="w-14 z-10 sm:w-16 bg-[#bfcbdf] rounded-full border-2 border-gray-300"/>
                <img :src="AssetMap[selectedPair?.quote].img" class="w-10 -ml-3 sm:w-12 bg-[#bfcbdf] rounded-full border-2 border-gray-300"/>
              </div>

              <h4 class="text-sm truncate poppinsBold">
                {{props.pair}}
              </h4>
              <!-- <p class="text-[9px] poppinsRegular ml-2">
                Buying btc with naira >>
              </p> -->
            </div>

            <div class="w-full sm:w-[73%] flex flex-col items-start justify-center gap-y-4 sm:gap-y-2">

              <div
                class="rounded-2xl w-full sm:w-fit h-fit flex flex-col items-start justify-center text-grass11 bg-[#D6EDDA] py-1 px-4 sm:px-2 gap-x-1 sm:gap-x-2 outline-none"
                aria-label="dropdown menu options"
              >
              <!-- Enter amount you want to buy -->
                <div class="flex items-center justify-center cursor-pointer text-white gap-2">
                  <img :src="currentBase.img" class="w-10 sm:w-8 bg-[#bfcbdf] rounded-full border-2 border-white"/>
                      
                  <input v-model="order.amount" placeholder="Amount" class="w-full sm:w-48 bg-[#D6EDDA] outline-none focus-none text-black poppinsRegular text-xl sm:text-2xl"  type="number" id="numberInput" name="numberInput" pattern="[0-9]*" inputmode="numeric" />
                </div>

                <!-- exchange icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="3em" viewBox="0 0 24 24"><path fill="black" d="M12.984 4.993a1 1 0 0 1 1.848-.531L17.52 7.15a1 1 0 1 1-1.415 1.414l-1.12-1.121v7.55a1 1 0 0 1-2 0V5.015zm-1.968 14.014a1 1 0 0 1-1.848.531L6.48 16.85a1 1 0 0 1 1.415-1.414l1.12 1.121v-7.55a1 1 0 0 1 2 0v9.978z"/></svg>

                <!-- Enter price you want to buy at  -->
                <div class="flex items-center justify-center cursor-pointer text-white gap-2">
                  <img :src="currentQuote.img" class="w-10 sm:w-8 bg-[#bfcbdf] rounded-full border-2 border-white"/>
                      
                  <input v-model="order.price" :placeholder="Math.round(currentRate)" class="w-full sm:w-48 bg-[#D6EDDA] outline-none focus-none text-black poppinsRegular text-xl sm:text-2xl"  type="number" id="numberInput" name="numberInput" pattern="[0-9]*" inputmode="numeric" />
                </div>
                
              </div>

              <!-- current rate -->
              <div>
                <h2 v-if="currentRate" class="text-sm sm:text-lg truncate poppinsSemiBold ml-4">
                  ~ {{currentQuote.symbol}} {{ (order.amount * order.price).toFixed(2)}}
                </h2>

                <ProgressSpinner v-else class="ml-4" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
                    animationDuration=".5s" aria-label="Custom ProgressSpinner" 
                />
              </div>
              

              <div class="w-full flex items-center justify-center">

                <SliderRoot
                  v-model="sliderValue" @update:modelValue="updateEntry" class="relative flex items-center select-none touch-none w-[70%] ml-5 h-5" :max="100"
                  :step="1"
                >
                  <SliderTrack class="bg-black relative grow rounded-full h-[3px]">
                    <SliderRange class="absolute bg-black rounded-full h-full" />
                  </SliderTrack>
                  <SliderThumb
                    class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
                    aria-label="Volume"
                  />
                </SliderRoot>

                <h2 class="text-sm sm:text-lg poppinsSemiBold ml-4">
                    {{sliderValue[0]}}%
                </h2>


              </div>
              

            </div>
            

          </div>

          <!-- Limits -->
          <h2 class="text-sm sm:text-lg poppinsSemiBold ml-4 mt-3 mb-2">
            Limits
          </h2>
          <div class="w-full gap-x-3 sm:w-[80%] flex items-center justify-center">
            <!-- minimum trade -->
            <div
                class="rounded-2xl w-[50%] h-fit flex flex-col justify-center text-grass11 bg-gray-200 py-1 px-2 gap-x-1 sm:gap-x-2 outline-none"
                aria-label="dropdown menu options"
              >
                <h2 class="text-sm sm:text-lg poppinsSemiBold">
                  Min
                </h2>
                <div @click="toggle" class="flex items-center justify-center cursor-pointer text-white gap-2">
                  <img :src="currentQuote.img" class="w-7 sm:w-8 bg-[#bfcbdf] rounded-full border-2 border-white"/>
                      
                  <input v-model="order.minimumEntry" class="w-full bg-gray-200 outline-none focus-none text-black poppinsSemiBold text-sm sm:text-lg"  type="number" id="numberInput" name="numberInput" pattern="[0-9]*" inputmode="numeric" />
                </div>
                
            </div>

            <!-- maximum trade -->
            <div
                class="rounded-2xl w-[50%] h-fit flex flex-col justify-center text-grass11 bg-gray-200 py-1 px-2 gap-x-1 sm:gap-x-2 outline-none"
                aria-label="dropdown menu options"
              >
                <h2 class="text-sm sm:text-lg poppinsSemiBold">
                  Max
                </h2>
                <div @click="toggle" class="flex items-center justify-center cursor-pointer text-white gap-2">
                  <img :src="currentQuote.img" class="w-7 sm:w-8 bg-[#bfcbdf] rounded-full border-2 border-white"/>
                      
                  <input v-model="order.maximumEntry" class="w-full bg-gray-200 outline-none focus-none text-black poppinsSemiBold text-sm sm:text-lg"  type="number" id="numberInput" name="numberInput" pattern="[0-9]*" inputmode="numeric" />
                </div>
                
            </div>


          </div>


          <div class="w-full flex items-center justify-between mt-2 px-3">
            <h2 class="text-xs truncate poppinsLight ml-3">
              fee =1%
            </h2>

            <span class="text-xs sm:text-sm truncate poppinsRegular ml-4">
                Balance ~ {{currentQuote.symbol}} {{currentQuote.balance}}
            </span>

          </div>

          <BaseButton @click="submitOrder" class="w-full px-8 bg-gray-300 py-3 mt-4">
            <span v-if="!showLoader" class="text-[16px] poppinsLight text-black text-center">Continue</span>
            <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
              animationDuration=".5s" aria-label="Custom ProgressSpinner" 
            />

          </BaseButton>



        </div>

      <BaseToast :model="toast.show" :success="toast.success" :title="toast.title" :description="toast.description" @close="toast.show = false"/>

            
  </div>
</template>
<script setup lang="ts">

  definePageMeta({
    layout: 'action'
  });

  // Toast
  const emit = defineEmits(['submitOrder'])


  const toast = reactive({
    show:false,
    title:'',
    description:'',
    success:true
  })

  const initToast=(success:boolean,title:string,description:string)=>{
    toast.title = title
    toast.description = description
    toast.success = success
    toast.show = true
  }

  // initToast(false,'Experience Required','Your work experience is required')


    const props = defineProps({
      orderType: String,
      base:String,
      quote:String,
      pair:String,
    });

    const entry = ref<number>(0.00)
    const sliderValue = ref([50])

    const currentRate = ref<number>(0)


    const order = reactive({
      orderType:props.orderType,
      amount:0.00,
      price:0.00,
      minimumEntry:0,
      maximumEntry:0
    })

    const state = useGlobalState()
    const AssetMap = state.assetMap
    const pairMap  = state.pairs
    const validThreshold = ref(false)

    const updateEntry = ()=>{
      order.amount = ((sliderValue.value[0]/100 * currentQuote.value.balance)/order.price).toFixed(6)
    }

    const showLoader = ref(false)
    const userloading = ref(true)

    // current or selected exchange Pair
    const selectedPair = ref(pairMap[props.pair])

    const currentBase = ref(AssetMap[selectedPair.value.base]);

    // current quote asset
    const currentQuote = ref(AssetMap[selectedPair.value.quote]);
    
    // filter AssetMap for all quote assets
    // const allQuotes = computed(() => Object.values(AssetMap).filter(asset => asset.quote))

    const submitOrder = async()=>{
      showLoader.value = true
      await new Promise(resolve => setTimeout(resolve, 1000));
      emit('submitOrder',order)
    }
    
    const fetchrate = async()=>{

      const response = await $fetch('/rates',{
        method: 'post',
        body: { base:currentBase.value.tatum, quote:currentQuote.value.tatum}
      })
      // console.log(response)
      currentRate.value = response.value
      order.price = Math.round(response.value)
    }


    // array of pairs with assetValue as quotes
    const Pairs = ref(Object.values(pairMap).filter(pair => pair.quote == currentQuote.value.name))

    onMounted(async() => {
      console.log(currentQuote.value.balance)
      console.log(selectedPair.value.threshold)

      const balance = currentQuote.value.balance
      const threshold = selectedPair.value.threshold
      fetchrate()

      if(balance < threshold){
        initToast(false,'Insuficient Balance','Your Balance must meet the threshold to place an order')
      }else{
        validThreshold.value = true
      }
      
    })

    // switch between quotes
    // const switchQuote = (name:string)=>{

    //   currentQuote.value = AssetMap[props.quote]
      
    //   Pairs.value = Object.values(pairMap).filter(pair => pair.quote == name)
    // }

    // Switch selected pair
    // const switchPair = (name:string)=>{
    //   selectedPair.value = pairMap[name]
    // }


    // watch for changes and reinitialize the pairs array
    // watch(() => currentQuote, (newQuote, oldQuote) => {
    //   Pairs.value = Object.values(pairMap).filter(pair => pair.quote == newQuote.value.name)
    // });



    const pinValue = ref<string[]>([])

    const handleComplete = (e: string[]) => alert(e.join(''))

    const toggleState = ref(false)

    const menu = ref();

    const toggle = (event: any) => {
        menu.value.toggle(event);
    };


   const showList = ref(false)



   
  // const handleInput = () => {
      // Call your search function here with the current search term
      // search(searchTerm.value);
  //     if(!EmailReceipientInputValue){
  //       showList.value = false
  //       console.log('switched')
  //     }else{
  //       showList.value = true
  //     }
      
  // };


</script>

<style scoped>

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield; /* Firefox */
}

</style>