<template>
    <div class="w-full bg-[#F7F7F7] flex flex-col sm:flex-row items-center sm:items-start justify-start rounded-xl">

      <div class="bg-white rounded-xl">
        <DatePickerRoot
          id="date-field"
          :is-date-unavailable="date => date.day === 19"
          :open="true"
          @update:modelValue="(date)=>{console.log(date?.day,date?.month,date?.year,date)}"
          v-model:modelValue="selectedDate"
          class=""
        >
        
          <DatePickerCalendar
            v-slot="{ weekDays, grid }"
            class="px-8 py-8"
          >
              <DatePickerHeader class="w-full flex flex-col items-center">

                <div class="w-full flex items-center justify-between">
                  <DatePickerPrev
                    class="inline-flex items-center cursor-pointer text-black justify-center rounded-[9px] border border-transparent w-8 h-8 hover:border-gray-300 hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"
                  >
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1086 5.05806C12.3526 5.30214 12.3526 5.69786 12.1086 5.94194L7.55051 10.5L12.1086 15.0581C12.3526 15.3021 12.3526 15.6979 12.1086 15.9419C11.8645 16.186 11.4688 16.186 11.2247 15.9419L6.22468 10.9419C5.98061 10.6979 5.98061 10.3021 6.22468 10.0581L11.2247 5.05806C11.4688 4.81398 11.8645 4.81398 12.1086 5.05806Z" fill="#737373"/>
                    </svg>
                  </DatePickerPrev>

                  <DatePickerHeading class="text-[#010109] text-[13px] font-medium" />
                  <DatePickerNext
                    class="inline-flex items-center cursor-pointer text-black justify-center rounded-[9px] border border-transparent w-8 h-8 hover:border-gray-300 hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"
                  >
                    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.89131 1.05806C1.13539 0.813981 1.53112 0.813981 1.77519 1.05806L6.77519 6.05806C7.01927 6.30214 7.01927 6.69786 6.77519 6.94194L1.77519 11.9419C1.53112 12.186 1.13539 12.186 0.89131 11.9419C0.647233 11.6979 0.647233 11.3021 0.89131 11.0581L5.44937 6.5L0.89131 1.94194C0.647233 1.69786 0.647233 1.30214 0.89131 1.05806Z" fill="#737373"/>
                    </svg>
                  </DatePickerNext>
                </div>
              
              </DatePickerHeader>
              <div
                class="w-full flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              >
                <DatePickerGrid v-for="month in grid" :key="month.value.toString()" class="w-full border-collapse select-none space-y-1">
                  <DatePickerGridHead>
                    <DatePickerGridRow class="mb-1 flex w-full justify-between">
                      <DatePickerHeadCell
                        v-for="day in weekDays" :key="day"
                        class="w-8 rounded-md text-xs text-[#737373]"
                      >
                        {{ day }}
                      </DatePickerHeadCell>
                    </DatePickerGridRow>
                  </DatePickerGridHead>

                  <DatePickerGridBody class="w-full">
                    <DatePickerGridRow
                      v-for="(weekDates, index) in month.rows"
                      :key="`weekDate-${index}`"
                      class="w-full flex"
                    >
                      <DatePickerCell
                        v-for="weekDate in weekDates"
                        :key="weekDate.toString()"
                        :date="weekDate"
                      >
                        <DatePickerCellTrigger
                          :day="weekDate"
                          :month="month.value"
                          class="relative flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-transparent text-[12px] font-normal text-[#010109] w-8 h-8 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black hover:border-[#0050A8] data-[selected]:bg-[#0050A8] data-[selected]:font-medium data-[disabled]:text-black/30 data-[selected]:text-white data-[unavailable]:pointer-events-none data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block data-[today]:before:bg-green9 data-[selected]:before:bg-white"
                        />
                      </DatePickerCell>
                    </DatePickerGridRow>
                  </DatePickerGridBody>
                </DatePickerGrid>
              </div>
    
            </DatePickerCalendar>
        </DatePickerRoot>
      </div>
      
      <div class="w-full bg-[#F7F7F7] h-full max-h-[100%] overflow-y-scroll flex flex-col items-center justify-center py-2 px-2 gap-y-3 rounded-xl">
        
         <ScrollAreaRoot
            class="w-full h-[285px] bg-[#F7F7F7] rounded overflow-hidden"
            style="--scrollbar-size: 10px"
          >
            <ScrollAreaViewport class="w-full h-full bg-[#F7F7F7] rounded">
              <div class="flex flex-col gap-y-4 px-2 py-1">
                
                <div class="w-full cursor-pointer flex items-center justify-start py-6 sm:py-3 px-4 bg-white rounded-xl">
                  <h1 class="Grotesque-Regular text-[14px] text-[#010109] ">
                    10:00a.m
                  </h1>
                </div>

                <div class="w-full cursor-pointer flex items-center justify-start py-6 sm:py-3 px-4 bg-white rounded-xl">
                  <h1 class="Grotesque-Regular text-[14px] text-[#010109] ">
                    10:30a.m
                  </h1>
                </div>

                <div class="w-full flex items-center justify-start py-6 sm:py-3 px-4 bg-white rounded-xl">
                  <h1 class="Grotesque-Regular text-[14px] text-[#010109] ">
                    11:00a.m
                  </h1>
                </div>

                <div class="w-full flex items-center justify-start py-6 sm:py-3 px-4 bg-white rounded-xl">
                  <h1 class="Grotesque-Regular text-[14px] text-[#010109] ">
                    11:30a.m
                  </h1>
                </div>

                <div class="w-full flex items-center justify-start py-6 sm:py-3 px-4 bg-white rounded-xl">
                  <h1 class="Grotesque-Regular text-[14px] text-[#010109] ">
                    12:00a.m
                  </h1>
                </div>

                <div class="w-full flex items-center justify-start py-6 sm:py-3 px-4 bg-white rounded-xl">
                  <h1 class="Grotesque-Regular text-[14px] text-[#010109] ">
                    12:30a.m
                  </h1>
                </div>

              </div>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar
              class="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
              orientation="vertical"
            >
              <ScrollAreaThumb
                class="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]"
              />
            </ScrollAreaScrollbar>
            <ScrollAreaScrollbar
              class="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
              orientation="horizontal"
            >
              <ScrollAreaThumb
                class="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]"
              />
            </ScrollAreaScrollbar>
          </ScrollAreaRoot>

      </div>
 
    </div>
  </template>
  
  <script setup lang="ts">
  const emit = defineEmits(['updateValue'])

  const toggleState = ref(false)

  const selectedDate = ref()

  const submitValue = ()=>{
    emit('updateValue',selectedDate.value)
    toggleState.value = false
  }

  const props = defineProps({
      operation: String,
  });


  </script>
  
  <style scoped>

  </style>