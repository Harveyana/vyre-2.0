<template>
    <div class="w-full  rounded-xl">


      <div class="w-full">


        <div v-if="loading" class="flex flex-col gap-y-4 w-full rounded-xl items-center justify-center">

          <div class="flex flex-col h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
            <div class="w-full flex flex-col items-center gap-y-2">
              <div class="h-5 bg-gray-300 rounded-full  w-full"></div>
            </div>
          </div>

          <div class="flex flex-col h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
            <div class="w-full flex flex-col items-center gap-y-2">
              <div class="h-5 bg-gray-300 rounded-full  w-full"></div>
            </div>
          </div>

          <div class="flex flex-col h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
            <div class="w-full flex flex-col items-center gap-y-2">
              <div class="h-5 bg-gray-300 rounded-full w-full"></div>
            </div>
          </div>
          
        </div>
        
        
        <div v-else class="flex w-full h-full max-h-60 overflow-y-auto gap-2 my-4">
          <!-- Pairs -->
          <!-- <div
            v-for="pair in allPairs"
            :key="pair.id"
            class="w-full border hover:border-black flex items-center justify-start gap-x-5 py-4 bg-white rounded-lg border-[1px] px-4 cursor-pointer"
            @click="pairId = pair.id"
            :class="
              pairId === pair.id
                ? 'border-black'
                : ' border-[#F8F8FC]'
            "
          >
            
            <div class="flex items-center justift-center">
              <div class="flex items-center justift-center gap-2">
                <div class="z-10 flex items-center justify-center -mr-2 sm:-mr-2.5">
                  <div v-if="pair?.baseCurrency && pair?.baseCurrency.type ==='CRYPTO'" class="flex items-end justify-center">
                  <img class="w-[50px] rounded-full" :src="pair?.baseCurrency?.imgUrl" alt="avatar">
                  <img v-if="pair?.baseCurrency?.isStablecoin" class="w-[20px] bg-black rounded-full -ml-5" :src="pair?.baseCurrency?.chainImgUrl" alt="avatar">
                  </div>
                  <h3 v-else class="text-white text-[30px] bg-white rounded-full  ">{{ pair?.baseCurrency?.flagEmoji }}</h3>
                </div>


                <div class="z-20 flex items-center justify-center self-end">
                  <div v-if="pair?.quoteCurrency && pair?.quoteCurrency.type ==='CRYPTO'" class="flex items-end justify-center">
                  <img class="w-[30px] rounded-full" :src="pair?.quoteCurrency?.imgUrl" alt="avatar">
                  <img v-if="pair?.quoteCurrency?.chainImgUrl" class="w-[20px] bg-black rounded-full -ml-5" :src="pair?.quoteCurrency?.chainImgUrl" alt="avatar">
                  </div>
                  <h3 v-else class="text-white text-[30px] ">{{ pair?.quoteCurrency?.flagEmoji }}</h3>
                </div>

              </div>
            </div>

            <div class="flex flex-col justify-start items-start">
                <h3 class="Grotesque-Regular text-[14px] text-[#1A1A1A]">
                  {{pair.name}}
                </h3>
                <p v-if="orderType ==='BUY'" class="Grotesque-Regular text-[12px] text-[#737373]">
                 Buy {{pair?.baseCurrency?.ISO}} with {{ pair?.quoteCurrency?.ISO }}
                </p>

                <p v-if="orderType ==='SELL'" class="Grotesque-Regular text-[12px] text-[#737373]">
                 Sell {{pair?.baseCurrency?.ISO}} for {{ pair?.quoteCurrency?.ISO }}
                </p>
            </div>
          </div> -->

          <div
            v-for="pair in allPairs"
            :key="pair.id"
            class="w-fit min-w-40 border hover:bg-white flex flex-col items-center justify-start gap-x-5 py-4 rounded-2xl border-[1px] px-4 cursor-pointer relative"
            @click="pairId = pair.id"
            :class="
              pairId === pair.id
                ? 'bg-white'
                : ' border-[#F8F8FC] bg-gray-100'
            "
          >
            
            <div class="w-full flex items-center justify-center">
              <div class="min-w-fit flex items-center justift-center gap-2 ">

                <div class=" bg-white rounded-full z-10 flex items-center justify-center p-2">
                  <div v-if="pair?.baseCurrency && pair?.baseCurrency.type ==='CRYPTO'" class="flex items-end justify-center">
                    <img class="w-[50px] rounded-full" :src="pair?.baseCurrency?.imgUrl" alt="avatar">
                    <!-- <img v-if="pair?.baseCurrency?.isStablecoin" class="w-[20px] bg-black rounded-full -ml-5" :src="pair?.baseCurrency?.chainImgUrl" alt="avatar"> -->
                  </div>
                  <h3 v-else class="text-white text-[30px] bg-white rounded-full  ">{{ pair?.baseCurrency?.flagEmoji }}</h3>
                </div>


                <div class="absolute top-0 right-0 z-20 flex items-center justify-center self-end">
                  <div v-if="pair?.quoteCurrency && pair?.quoteCurrency.type ==='CRYPTO'" class="flex items-end justify-center">
                    <img class="w-[30px] rounded-full" :src="pair?.quoteCurrency?.imgUrl" alt="avatar">
                    <img v-if="pair?.quoteCurrency?.chainImgUrl" class="w-[20px] bg-black rounded-full -ml-5" :src="pair?.quoteCurrency?.chainImgUrl" alt="avatar">
                  </div>

                  <h3 v-else class="text-white text-[20px] bg-white rounded-full ">{{ pair?.quoteCurrency?.flagEmoji }}</h3>
                </div>

              </div>
            </div>

            <div class="w-full flex items-center justify-center">

                <img v-if="pair?.baseCurrency?.isStablecoin" class="w-[20px] bg-black rounded-full " :src="pair?.baseCurrency?.chainImgUrl" alt="avatar">
                <!-- <h3 class="Grotesque-Regular text-[11px] text-[#1A1A1A] whitespace-nowrap">
                  {{pair.name}}
                </h3> -->
            </div>

            <div class="mt-4">
              <p v-if="orderType ==='BUY'" class="Grotesque-Regular text-[12px] text-[#737373] whitespace-nowrap">
                Buy {{pair?.baseCurrency?.ISO}} with {{ pair?.quoteCurrency?.ISO }}
              </p>

              <p v-if="orderType ==='SELL'" class="Grotesque-Regular text-[12px] text-[#737373] whitespace-nowrap">
                Sell {{pair?.baseCurrency?.ISO}} for {{ pair?.quoteCurrency?.ISO }}
              </p>
            </div>

          </div>

          

        </div>

        <baseButton
            @click="submitPair()"
              type="submit"
              class="w-full py-3 bg-black  text-white text-[15px] rounded-lg mt-6"
            >
             Continue
        </baseButton>

      </div>

    </div>
  </template>

  <script setup lang="ts">
    import { Toaster, toast } from 'vue-sonner';
    import { storeToRefs } from 'pinia';
    import { useOrderStore } from '~/store/order';
    const { fetchPairs} = useOrderStore();

    const { loading } = storeToRefs(useOrderStore());

    const orderType = defineModel<string>('orderType')
    
    const emit = defineEmits(['close','update-value','next'])  // Declare Events

    // const TransferType = ref('')
    const pairId = defineModel()

    const submitPair = ()=>{
      if(!pairId.value) return
      emit('next')
    }

    const allPairs = ref<any[]>([])

    const fetchData = async()=>{
    
      const result = await fetchPairs()
    
      console.log(result)

      if(result?.success){
        allPairs.value = []
        allPairs.value.push(...result?.pairs)
        
      }
    }

    onMounted(async()=>{
      await fetchData()
    })
  
  </script>

