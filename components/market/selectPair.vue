<template>
    <div class="w-full bg-gray-200  rounded-xl">


      <div class="w-full">
        <div class="w-full flex items-start">

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



        </div>


        <div v-if="loading" class="flex flex-col gap-y-4 w-full rounded-xl items-center justify-center">

          <div class="flex flex-col h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
            <div class="w-full flex flex-col items-center gap-y-2">
              <div class="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
          </div>

          <div class="flex flex-col h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
            <div class="w-full flex flex-col items-center gap-y-2">
              <div class="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
          </div>

          <div class="flex flex-col h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
            <div class="w-full flex flex-col items-center gap-y-2">
              <div class="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
          </div>
          
        </div>
        
        
        <div v-else class="flex flex-col w-full h-full max-h-60 overflow-y-auto gap-y-2 my-4">
          <!-- Pairs -->
          <div
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
              <img :src="pair?.baseWallet?.imgurl" class="w-12 sm:w-12 -mr-3  rounded-full"/>
              <img :src="pair?.quoteWallet?.imgurl" class="w-12 sm:w-10 rounded-full"/>
            </div>

            <div class="flex flex-col justify-start items-start">
                <h3 class="Grotesque-Regular text-[14px] text-[#1A1A1A]">
                  {{pair.base}}/{{pair.quote}}
                </h3>
                <p class="Grotesque-Regular text-[12px] text-[#737373]">
                  {{pair.name}}
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

    // const props = defineProps({
    //   type: String,
    //   currency: String
    // });

    // const {currency, type} = props
    
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

