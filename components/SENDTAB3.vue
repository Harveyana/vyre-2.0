<template>
    <TabsContent
                    class="grow bg-white rounded-b-md outline-none"
                    :value="$props.value"
                  >
                    <div class="gap-3 w-[16rem] sm:w-[25rem] flex flex-col items-center rounded-2xl">

                      <div class=" w-full rounded-2xl flex flex-col items-center justify-center gap-2">
                        <span for="amount" class="text-sm font-semibold mt-5 text-center">You're sending <br> <span class="font-bold text-lg">$300</span> to <br> <span class="font-bold text-lg">Harvey Ana</span> </span>


                        <span for="amount" class="text-sm font-semibold">Please Confirm Transaction </span>

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
                            class="w-12 h-12 bg-white rounded text-center shadow-lg text-black placeholder:text-gray-200 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#DAA520]"
                          />
                        </PinInputRoot>
                        <span for="amount" class="text-sm font-semibold">Enter Pin</span>
                      </div>

                      <div class="w-full sm:w-3/4 flex items-center justify-between py-3">
                        <Button label="Back" @click="$emit('previousTab')" text class="p-2 text-xs rounded-xl w-full border-black"></Button>
                        <button @click="tab='Confirm'" class="text-black text-xs font-bold bg-blue-100 rounded-2xl py-2 px-4">Confirm</button>                  
                      </div>

                    </div>
                  </TabsContent>
  </template>

  <script setup lang="ts">
    
    const amount = ref()
    const tab = ref('Receipient');

    const pinValue = ref<string[]>([])

    const handleComplete = (e: string[]) => alert(e.join(''))

    const props = defineProps<{
        value:string
    }>()
  </script>