<template>
                  <TabsContent
                    class="grow bg-white rounded-b-md outline-none"
                    :value="$props.value"
                  >
                    <div class="gap-3 w-[16rem] sm:w-[25rem] flex flex-col items-center rounded-2xl">

                      <div class=" w-full rounded-2xl flex flex-col items-center justify-center gap-2">
                        <span for="amount" class="text-sm font-semibold mt-5">Amount in USD</span>

                        <span class=" w-full flex flex-row items-center justify-between sm:justify-center ">
                            <div clas="w-[85%]">
                              <InputNumber v-model="amount" inputId="amount" class="w-full h-12 p-2 bg-gray-200 rounded-xl" />
                            </div>
                            <img src="~/assets/img/currency/dollar.png" class="w-[15%] sm:w-[10%] bg-[#DAA520] border-2 border-black p-1 sm:mx-3 rounded-2xl" alt='asset image'/>
                        </span>

                        <!-- <span class="w-[80%] border border-gray-300 my-3 "></span> -->

                        <span for="amount" class="text-sm font-semibold">Amount in BTC</span>

                        <span class=" w-full flex flex-row items-center justify-between sm:justify-center">
                          <div clas="w-[85%]">
                            <InputNumber :maxFractionDigits="5" v-model="amount" inputId="amount" class="w-full h-12 p-2 bg-gray-200 rounded-xl" />
                          </div>
                          <img src="~/assets/img/currency/bitcoin.png" class="w-[15%] sm:w-[10%] border-2 border-black p-1 sm:mx-3 rounded-2xl" alt='asset image'/>
                        </span>
                                      
                      </div>

                      <div class="w-full sm:w-3/4 flex items-center justify-between py-3">
                        <Button label="Back" @click="$emit('previousTab')" text class="p-2 text-xs rounded-xl w-full border-black"></Button>
                        <button @click="$emit('nextTab')" class="text-black text-xs font-bold bg-blue-100 rounded-2xl py-2 px-4">Confirm</button>                  
                      </div>

                    </div>
                  </TabsContent>
  </template>

  <script setup lang="ts">

  const amount = ref()
  const tab = ref('Receipient');

  const props = defineProps<{
        value:string
    }>()
  </script>