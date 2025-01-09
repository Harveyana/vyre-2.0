<template>
    <div class="w-full relative py-3 gap-y-4 flex flex-row items-center justify-center">

      <baseButton @click="$emit('back')" class="hidden absolute top-0 left-0 sm:flex flex-row items-center justify-center p-3">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1061_19444)"><path d="M15 6L9 12L15 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1061_19444"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
        <h4 class="Grotesque-Regular text-[16px] text-[#737373]">
          Back
        </h4>
      </baseButton>

      <!-- receivers details -->

      <div class="w-full sm:w-[55%] sm:py-12 p-4 sm:px-10 gap-y-8 flex flex-col items-center justify-between rounded-lg border border-[#F4F4FB]">


        <div class="w-full flex flex-col items-star justify-center gap-y-4">
          <h4 class="Grotesque-Regular text-[16px] text-[#010109]">
            Offers Available
          </h4>

          <div class="flex flex-row items-start justify-between rounded-lg border hover:border-[#0050A8]  bg-[#F9F9FC] pr-4">

            <img src="~/assets/img/truck.svg" class="w-[30%] sm:w-fit"/>

            <div class="flex flex-col items-start justify-center mt-3">
              <h2 class="Grotesque-Semi-Bold text-[12px] sm:text-[14px] text-[#010109]">
                Mini Truck
              </h2>
              <h4 class="Grotesque-Regular text-[12px] sm:text-[14px] text-[#737373]">
                10 tons Capacity
              </h4>

            </div>

            <div class="flex flex-col items-center justify-center mt-3">
              <h2 class="Grotesque-Regular text-[14px] sm:text-[16px] text-[#010109]">
                ₦ 1,200,000
              </h2>
            </div>

          </div>

          <div class="flex flex-row items-start justify-between rounded-lg border hover:border-[#0050A8]  bg-[#F9F9FC] pr-4">

            <img src="~/assets/img/truck.svg" class="w-[30%] sm:w-fit"/>

            <div class="flex flex-col items-start justify-center mt-3">
              <h2 class="Grotesque-Semi-Bold text-[12px] sm:text-[14px] text-[#010109]">
                Mini Truck
              </h2>
              <h4 class="Grotesque-Regular text-[12px] sm:text-[14px] text-[#737373]">
                10 tons Capacity
              </h4>

            </div>

            <div class="flex flex-col items-center justify-center mt-3">
              <h2 class="Grotesque-Regular text-[14px] sm:text-[16px] text-[#010109]">
                ₦ 1,200,000
              </h2>
            </div>

          </div>

        </div>



        <!-- <div class="w-full flex flex-col items-star justify-center gap-y-1">
          <h4 class="Grotesque-Regular text-[16px] text-[#010109]">
            Choose Yours
          </h4>

          <div class="flex flex-row items-start justify-between rounded-lg border hover:border-[#0050A8] bg-[#F9F9FC] pr-4">

            <img src="~/assets/img/truck.svg" class="w-[30%] sm:w-fit"/>

            <div class="flex flex-col items-start justify-center mt-3">
              <h2 class="Grotesque-Semi-Bold text-[12px] sm:text-[14px] text-[#010109]">
                Mini Truck
              </h2>
              <h4 class="Grotesque-Regular text-[12px] sm:text-[14px] text-[#737373]">
                10 tons Capacity
              </h4>

            </div>

            <div class="flex flex-col items-center justify-center mt-3">
              <h2 class="Grotesque-Regular text-[14px] sm:text-[16px] text-[#010109]">
                ₦ 1,200,000
              </h2>
            </div>

          </div>

        </div> -->

        



        <!-- <div class="w-full flex flex-row items-center justify-center mt-20 gap-x-4">

          <baseButton @click="$emit('back')" class="w-fit sm:hidden flex flex-row items-center justify-center p-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1061_19444)"><path d="M15 6L9 12L15 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1061_19444"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
            <h4 class="Grotesque-Regular text-[16px] text-[#737373]">
              Back
            </h4>
          </baseButton>

          <baseButton @click="$emit('proceed')" class="bg-[#0050A8] Grotesque-Light w-full py-2.5 px-6 text-white text-[14px]">
            Proceed
          </baseButton>

        </div> -->


      </div>



    </div>


  </template>

  <script setup lang="ts">


  const showAdditional = ref(false)

  const emit = defineEmits(['proceed','back'])  // Declare Events

  const receiver = reactive({
    location:'',
    name:'',
    phoneNumber:'',
    additional_Number:''
  })
  
  </script>