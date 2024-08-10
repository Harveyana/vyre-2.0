<template>

      <div  class="col-span-12 rounded-2xl flex flex-col items-center justify-center">

        <!-- First send Modal  -->

        <div v-if="tab == 'tab1'" class="w-full sm:w-fit flex flex-col px-4 rounded-2xl sm:shadow-md py-3">

          <h2 class="text-black poppinsBold capitalize text-xl sm:text-2xl ml-2 mb-2">
                {{props.orderType}} order
          </h2>

          <div class="w-full flex items-start justify-between sm:justify-center gap-x-8 sm:gap-x-16 border px-4 sm:px-8 rounded-2xl py-4">

            <div class="flex flex-col items-center justify-center">
              <!-- <span class="text-black poppinsBold text-2xl sm:text-5xl">
                <span class="truncate">0.00</span>
              </span> -->
              <!-- <input v-model="entry" class="w-36 sm:w-60 outline-none focus-none text-black poppinsBold text-2xl sm:text-4xl"  type="number" id="numberInput" name="numberInput" pattern="[0-9]*" inputmode="numeric" /> -->
              <!-- <h2 class="text-black poppinsBold text-xl sm:text-2xl">
                {{selectedPair.name}}
              </h2> -->
              <div class="w-fit flex items-end mb-2">
                <img :src="AssetMap[selectedPair.base].img" class="w-14 sm:w-16 bg-[#bfcbdf] rounded-full border-2 border-gray-300"/>
                <img :src="AssetMap[selectedPair.quote].img" class="w-10 -ml-3 sm:w-12 bg-[#bfcbdf] rounded-full border-2 border-gray-300"/>
              </div>

              <h4 class="text-sm truncate poppinsBold">
                {{selectedPair.name}}
              </h4>
              <!-- <p class="text-[9px] poppinsRegular ml-2">
                Buying btc with naira >>
              </p> -->
            </div>

            <div class="flex flex-col items-center jhustify-center gap-y-1 sm:gap-y-2">

                <DropdownMenuRoot v-model:open="toggleState">
                  <DropdownMenuTrigger
                    class="rounded-full w-fit h-fit inline-flex items-center justify-center text-grass11 bg-gray-200 py-1  outline-none hover:bg-green3"
                    aria-label="dropdown menu options"
                  >
                    <div @click="toggle" class="flex items-center justify-center cursor-pointer text-white gap-2">
                      <img :src="currentQuote.img" class="w-7 sm:w-8 bg-[#bfcbdf] rounded-full border-2 border-white"/>
                      <span class="text-sm capitalize truncate text-black poppinsMedium">
                        {{currentQuote.name}}
                      </span>
                    </div>
                    <svg class=' cursor-pointer w-6 md:w-7 dark:fill-white dark:stroke-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>
                  </DropdownMenuTrigger>

                  <DropdownMenuPortal>
                    <DropdownMenuContent
                      class="min-w-[150px] z-20 mx-4 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                      :side-offset="10"
                    >
                      <DropdownMenuItem
                       v-for="asset in allQuotes"
                        @click="switchQuote(asset.name)"
                        :key="asset.name"
                        :value="asset.name"
                        class="flex group capitalize text-sm cursor-pointer leading-none text-black rounded-[3px] items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-200 data-[highlighted]:text-black"
                      >
                        {{asset.name}}
                        
                      </DropdownMenuItem>                      
                      
                      <DropdownMenuArrow class="fill-black" />

                    </DropdownMenuContent>
                  </DropdownMenuPortal>
                </DropdownMenuRoot>

                <span class="text-xs sm:text-sm truncate poppinsLight ml-4">
                    Balance = 0.2135
                </span>

            </div>
            


          </div>


          <div class="w-fit flex items-center justify-center gap-2 mt-2">
            <h2 class="text-xs truncate poppinsLight ml-3">
              fee =1%
            </h2>

            <svg class=' cursor-pointer w-5 bg-gray-200 rounded-full' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>

          </div>

          <div v-for="pair in Pairs" :key="pair.name" @click="switchPair(pair.name)" class="w-full flex items-start justify-start rounded-2xl hover:bg-gray-200 py-1 px-4 mt-2">
            <div class="w-full flex flex-col items-start justify-start rounded-2xl ">
              <h2 class="text-sm sm:text-md truncate poppinsBold">
                  {{pair.name}}
              </h2>
              <span class="poppinsRegular text-[10px] ml-1">{{pair.base}}/{{pair.quote}}</span> 

            </div>

            <div class="flex">
              <svg v-if="pair.name !== selectedPair.name" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#808080" d="m10 17l-5-5l1.41-1.42L10 14.17l7.59-7.59L19 8m-7-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#088c22" d="m10 17l-5-5l1.41-1.42L10 14.17l7.59-7.59L19 8m-7-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>            </div>

            </div>

          <BaseButton @click="switchtab('tab2')" class="w-full px-8 bg-gray-300 py-3 mt-4">
            <span v-if="!showLoader" class="text-[16px] poppinsLight text-black text-center">Continue</span>
            <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
              animationDuration=".5s" aria-label="Custom ProgressSpinner" 
            />

          </BaseButton>
         


        </div>



        <!-- Second Modal Order input -->
        <div v-if="tab == 'tab2'">
          <sellOrder v-if="orderType == 'sell'" @submitOrder="(order)=>{handleOrder(order)}"  :orderType="orderType" :pair="selectedPair.name" />
          <buyOrder v-else @submitOrder="(order)=>{handleOrder(order)}" :orderType="orderType" :pair="selectedPair.name" />
        </div>
        

        <!-- Second Send Modal -->



        <!-- <div v-if="tab == 'tab2'" class="w-full sm:w-fit flex flex-col px-4 rounded-2xl sm:shadow-md py-3">

          <svg @click="tab='tab1'" xmlns="http://www.w3.org/2000/svg" class="m-2 cursor-pointer" width="1.78em" height="1em" viewBox="0 0 16 9"><path fill="currentColor" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="currentColor" d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0c.2.2.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"/></svg>

          <div class="w-full flex flex-col items-center justify-center sm:gap-y-8 border px-4 sm:px-8 rounded-2xl py-4">

            <div class="flex flex-row items-start justify-center">
              
              <input v-model="entry" class="w-36 sm:w-60 outline-none focus-none text-black poppinsBold text-2xl sm:text-4xl" readonly type="number" id="numberInput" name="numberInput" pattern="[0-9]*" inputmode="numeric" />
              <span class="text-sm sm:text-lg truncate poppinsRegular ml-2">
                ₦ 0.00
              </span>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" class="animate-bounce" width="3em" height="3em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M10.5 16.035L7.404 12.94a1.5 1.5 0 1 0-2.122 2.121l5.657 5.657a1.5 1.5 0 0 0 2.122 0l5.657-5.656a1.5 1.5 0 1 0-2.122-2.122L13.5 16.035V4.5a1.5 1.5 0 0 0-3 0z"/></g></svg>

          </div>


          <BaseButton @click="switchtab('tab3')" class="w-full px-8 bg-gray-300 py-3 mt-4">
            <span v-if="!showLoader" class="text-[16px] poppinsLight text-black text-center">Send</span>

            <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
              animationDuration=".5s" aria-label="Custom ProgressSpinner" 
            />

          </BaseButton>



        </div> -->

        <div v-if="tab == 'tab3'" class="flex flex-col items-center">
          <h2 class="text-lg sm:text-2xl text-center mb-8 w-full truncate poppinsBold">
            Authorise Transaction
        </h2>
          <PinInputRoot
            id="pin-input"
            v-model="pinValue"
            placeholder="○"
            class="flex gap-2 items-center mt-1"
            @complete="handleComplete"
                >
            <PinInputInput
              v-for="(id, index) in 5"
                :key="id"
                :index="index"
              class="w-12 h-12 bg-white border rounded text-center shadow-lg text-black placeholder:text-gray-200 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#DAA520]"
            />
          </PinInputRoot>
        </div>
        
            
  
    
  </div>
</template>
<script setup lang="ts">

definePageMeta({
  layout: 'action'
});
    type order = {
      orderType:string,
      amount:number,
      price:number,
      minimumEntry:number,
      maximumEntry:number
    }

    const props = defineProps({
      orderType: String,
    });

    const state = useGlobalState()
    const AssetMap = state.assetMap
    const pairMap  = state.pairs

    const entry = ref('0.00')

   // Receipient 
    const emailReceipient = ref('')
    const blockchainReceipient = ref('')
    const bankdetails = reactive({
      AccNumber:'',
      AccName:'',
      bankName:''
    })


    const route = useRoute()
    const router = useRouter()

    const currentOrder = ref({})

    const tab = ref('tab1')

    const showLoader = ref(false)
    const userloading = ref(true)

    const switchtab = async(newTab:string)=>{
      showLoader.value = true
      await new Promise(resolve => setTimeout(resolve, 1000));
      showLoader.value = false
      tab.value = newTab
    }

    const handleOrder = (newOrder:order)=>{
      currentOrder.value = newOrder
      switchtab('tab3')
    }

    // const name = ref(route.query.name)

    // current quote asset
    const currentQuote = ref(AssetMap['naira']);

    // current or selected exchange Pair
    const selectedPair = ref(pairMap['BTC/NGN'])
    
    // filter AssetMap for all quote assets
    const allQuotes = computed(() => Object.values(AssetMap).filter(asset => asset.quote))

    // array of pairs with assetValue as quotes
    const Pairs = ref(Object.values(pairMap).filter(pair => pair.quote == currentQuote.value.name))

    // switch between quotes
    const switchQuote = (name:string)=>{
      currentQuote.value = AssetMap[name]
      Pairs.value = Object.values(pairMap).filter(pair => pair.quote == name)
    }

    // Switch selected pair
    const switchPair = (name:string)=>{
      selectedPair.value = pairMap[name]
    }


    // watch for changes and reinitialize the pairs array
    // watch(() => currentQuote, (newQuote, oldQuote) => {
    //   Pairs.value = Object.values(pairMap).filter(pair => pair.quote == newQuote.value.name)
    // });



    const pinValue = ref<string[]>([])

    const handleComplete = (e: string[]) => {
      const pin = parseFloat(e.join(''))
      console.log(pin)

    }

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