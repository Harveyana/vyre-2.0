<template>
    <div class="w-full flex items-center justify-center">
       <DatePickerRoot
          id="date-field"
          :is-date-unavailable="date => date.day === 19"
          :open="toggleState"
          @update:modelValue="(date)=>{console.log(date?.day,date?.month,date?.year)}"
          v-model:modelValue="selectedDate"
        >
        <DatePickerField
          class="flex select-none hover:bg-[#F9F9FC] items-start justify-between rounded-lg w-full h-full"
        >
          <DatePickerTrigger class="w-full h-full">
            <!-- <Icon icon="radix-icons:calendar" /> -->
            <h1 @click="toggleState = true" class="Grotesque-Regular text-left text-[13px] text-[#010109]">
              Select Start Date
            </h1>
          </DatePickerTrigger>

        </DatePickerField>

        <DatePickerContent
          side="left"
          :avoidCollisions="true"
          :collisionPadding="10"
          class="rounded-xl z-20 bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.green7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
        >
          <!-- <DatePickerArrow class="fill-white" /> -->
          <DatePickerCalendar
            v-slot="{ weekDays, grid }"
            class="p-4"
          >
            <DatePickerHeader class="flex flex-col items-center">
              <div class="w-full flex items-center justify-between">

                <h1 class="Grotesque-Bold text-[15px] text-[#010109]">
                  {{props.operation}}
                </h1>

                <button class="w-fit" @click="toggleState = false">
                  <img src="~/assets/img/close.svg" class="w-6"/>
                </button>

              </div>
              
              <Separator
                class="bg-[#F4F4FA] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]"
              />

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
              class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
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
                <DatePickerGridBody>
                  <DatePickerGridRow
                    v-for="(weekDates, index) in month.rows"
                    :key="`weekDate-${index}`"
                    class="flex w-full"
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
            <button @click="submitValue()" class="w-full bg-[#0050A8] py-2 rounded-md mb-4 mt-6">
              <h1 class="Grotesque-Regular text-[12px] text-white">
                Choose Date
              </h1>
            </button>
          </DatePickerCalendar>
        </DatePickerContent>
      </DatePickerRoot>
      <div>
        <h1 class="Grotesque-Regular text-[12px] text-white">
                Choose Date
              </h1>
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