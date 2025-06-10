<template>
    <div class="w-full bg-gray-200 rounded-xl">


      <div class="w-full">
        <div class="w-full flex items-start">

          <div class="w-full flex flex-col">

            <p class="Grotesque-Regular text-[16px] text-[#737373]">
              Select Order type
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
        
        

        <div class="flex flex-col w-full h-full gap-y-6 my-4">

          <!-- BUY -->
          <div
            class="w-full border hover:border-black flex items-center justify-start gap-x-5 py-4 bg-white rounded-lg border-[1px] px-4 cursor-pointer"
            @click="OrderType = 'BUY'"
            :class="
              OrderType === 'BUY'
                ? 'border-black'
                : ' border-[#F8F8FC]'
            "
          >
            
            <svg xmlns="http://www.w3.org/2000/svg" class="bg-[#F1F0FE] p-1.5 rounded-full" width="45" height="45" viewBox="0 0 24 24"><path fill="#000" d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19"/></svg>
            <div class="flex flex-col justify-start items-start">
                <h3 class="Grotesque-Regular text-[14px] text-[#1A1A1A]">
                  Buy Order
                </h3>
                <p class="Grotesque-Regular text-[12px] text-[#737373]">
                  Buy any amount of Base currency with quote
                </p>
            </div>
          </div>


          <!-- SELL -->
          <div
            class="w-full border hover:border-black flex items-center justify-start gap-x-5 py-4 bg-white rounded-lg border-[1px] px-4 cursor-pointer"
            @click="OrderType = 'SELL'"
            :class="
              OrderType === 'SELL' ? 'border-black' : ' border-[#F8F8FC]'
            "
          >
          
            <svg xmlns="http://www.w3.org/2000/svg" class="bg-[#F1F0FE] p-1.5 rounded-full" width="45" height="45" viewBox="0 0 24 24"><path fill="#000" d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569z"/></svg>
            <div class="flex flex-col justify-start items-start">
              <h3 class="Grotesque-Regular text-[14px] text-[#1A1A1A]">
                Sell Order
              </h3>
              <p class="Grotesque-Regular text-[12px] text-[#737373]">
                Sell any amount of base currency for quote 
              </p>
            </div>
          </div>


          <baseButton
            @click="submitPreference()"
              type="submit"
              class="w-ful py-3 bg-black  text-white text-[15px] rounded-lg mt-6"
            >
             Continue
          </baseButton>


        </div>
      </div>

    </div>
  </template>
  <script setup lang="ts">
  import { Toaster, toast } from 'vue-sonner'

  // const props = defineProps({
  //   type: String,
  //   currency: String
  // });

  // const {currency, type} = props
  
  const emit = defineEmits(['close','update-value','next'])  // Declare Events

  // const TransferType = ref('')
  const OrderType = defineModel()

  const submitPreference = ()=>{
    if(!OrderType.value) return
    emit('next')
  }
  
  </script>

