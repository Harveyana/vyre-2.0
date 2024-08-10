<template>
  <!-- <div class="w-full"> -->
    <!-- <div class=" w-full" style="border-radius: 12px;"> -->

     

    <div  class="col-span-12 rounded-2xl mt-32 sm:mt-20 lg:mt-8 flex flex-col items-center justify-center sm:pt-12">


        <h2 class="text-lg sm:text-2xl text-center mb-8 w-full truncate poppinsBold">
            Choose Your Order Type...
        </h2>


        <div v-if="orderType == ''" class="w-full flex flex-wrap items-center justify-center gap-3">

          <!-- buy order -->
          <div  @click="init('buy')" class="bg-[#e5f2fe] hover:bg-white border-2 hover:border-black cursor-pointer min-w-fit w-[50%] lg:w-[28%] flex-none mx-2 p-3 sm:p-4 gap-y-4 sm:gap-y-8 flex flex-col items-start justify-between rounded-2xl">
             
          
            <img src="~/assets/img/instant.svg" class="w-20 sm:w-32 bg-[#bfcbdf] rounded-full p-2 border-4 border-white"/>

            <div class="w-full flex flex-col items-start justify-center">
              <span class="w-full text-black poppinsBold text-3xl sm:text-4xl">
                  <span class="truncate">Buy</span>
              </span>
              <span class="text-xs w-full truncate poppinsLight">
                Buy Base with Quote Currency
              </span>
            </div>

          
          </div>


          <!-- sell order  -->
          <div @click="init('sell')" class="bg-[#D6EDDA] hover:bg-white border-2 hover:border-black cursor-pointer min-w-fit w-[50%] lg:w-[28%] flex-none mx-2 p-3 sm:p-4 gap-y-4 sm:gap-y-8 flex flex-col items-start justify-between rounded-2xl">
             
          
             <img src="~/assets/img/blockchain.svg" class="w-20 sm:w-32 bg-[#bfcbdf] rounded-full p-2 border-4 border-white"/>
 
             <div class="w-full flex flex-col items-start justify-center">
               <span class="w-full text-black poppinsBold text-3xl sm:text-4xl">
                   <span class="truncate">Sell</span>
               </span>
               <span class="w-full text-xs truncate poppinsLight">
                 Sell Base for Quote Currency
               </span>
             </div>
 
           
          </div>

        </div>

        <createOrder v-else :orderType="orderType"/>
  
    
  </div>
</template>
<script setup lang="ts">

definePageMeta({
  layout: 'action'
});

import { useToast } from "primevue/usetoast";

    type person = {
    email: string;
    name: string;
    imgurl:URL;
    }

    const state = useGlobalState()
    const AssetMap = state.assetMap

    const route = useRoute()
    const router = useRouter()

   const appConfig = useAppConfig()

    const baseColor = appConfig.theme.colors.primary
    const vyreYellow = appConfig.theme.colors.vyreYellow
    const vyreGreen = appConfig.theme.colors.vyreGreen
    const vyreLemon = appConfig.theme.colors.vyreLemon
    const vyreGrey = appConfig.theme.colors.vyreGrey

    const entry = ref('0.00')

    const toggleState = ref(false)

    const menu = ref();

    const toggle = (event: any) => {
        menu.value.toggle(event);
    };

  //  const tab = ref('tab1');

   //  TRANSFER MODE
  //  const mode = ref('');
   const orderType = ref('');
   const isMode = ref(false)

   const init = (value:string)=>{
      orderType.value = value
   }

  //  const name = ref(route.query.name)

   

  //  //  FOR EMAIL MODE
  //  const EmailReceipientInputValue = ref()
  //  const EmailReciepientValue = ref<person>()

  //  //  FOR BLOCKCHAIN MODE
  //  const BlockchainReceipientInputValue = ref()

  //  //  FOR BANK TRANSFER MODE
  //  const bankMode = ref('SWIFT');

   const showList = ref(false)

  
  // const emitPerson = (person:person)=>{
  //   EmailReciepientValue.value = person
  // }


  //  watch(() => receipient, (newSearchTerm, oldSearchTerm) => {
  //     Call your search function here with the new search term
  //     if (receipient.value.trim() !== '') {
  //        showList.value = true
  //       // Call your search function here with the new search term
  //       // search(newSearchTerm);
  //     }else{
  //           showList.value = false
  //         }
  //       });

  // const handleInput = () => {
  //     // Call your search function here with the current search term
  //     // search(searchTerm.value);
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