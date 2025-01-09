<template>
    <div class="w-full bg-white  rounded-xl">

  

      <div class="w-full">
        <div class="w-full flex items-start">

          <div class="w-full flex flex-col items-start ">

            <button
             @click="$emit('back')"
             class="flex mb-4 gap-x-1 items-center justify-center text-[#737373] text-[14px] rounded-md whitespace-nowrap"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1049_16461)">
                <path d="M15 6L9 12L15 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1049_16461">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
              </svg>
              Back
            </button>

            <p class="Grotesque-Regular text-[16px] text-[#737373]">
              Get started with
            </p>
            <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A]">
              Business Information
            </h3>

          </div>

          <button
           class="bg-[#F1F0FE] py-2 px-4 text-[#0050A8] text-xs rounded-md whitespace-nowrap"
          >
            Step 2 of 4
          </button>



        </div>
        
        

        <div class="flex flex-col w-full h-full gap-y-6 my-4">

          <form
            @submit.prevent="submitForm()"
            class="w-full mt-4 flex flex-col gap-y-4"
          >
            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Business Type
              </label>
              <DropSelect :key="resetKey" class="w-full" @update="(value:string)=>{business.type = value}" :options="['Registered Businesss','Non-Registered Business']" />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Business Name
              </label>
              <input
                required
                v-model="business.name"
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-lg flex items-center justify-between outline-none"
                placeholder="Legal Business Name"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                CAC Registration Number
              </label>
              <input
                required
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-lg flex items-center justify-between outline-none"
                v-model="business.regNo"
                placeholder="RC8990776"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Business Address
              </label>
              <input
                required
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-lg flex items-center justify-between outline-none"
                v-model="business.address"
                placeholder="23 Alh Pelu Street"
              />
            </div>


            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Utility Bill
              </label>

              <fileUploader @update="(value:string)=>{business.file = value}" />
              <div v-if="business.file" class="w-full flex flex-row item-start justify-start mt-2">
                <img  class="w-20 h-20 rounded-lg" :src="business.file" alt="file">
              </div>
            </div>



            <baseButton
              type="submit"
              class="w-ful py-3 bg-[#0050AB] text-white text-[15px] rounded-lg mt-6"
            >
              Proceed
            </baseButton>

            <p
              class="text-sm text-[#737373] text-left cursor-pointer Grotesque-Regular my-2"
            >
              Got an existing account?
              <span
                @click="$router.push('/auth?tab=login')"
                class="text-[#0050AB] cursor-pointer"
                >Login</span
              >
            </p>
          </form>

          
        </div>
      </div>

    </div>
  </template>
  <script setup lang="ts">
  
  // const imageFile = ref<File>()
   const resetKey = ref(2)

    const business = reactive({
      type:'',
      name:'',
      regNo:'',
      address:'',
      file:''
    })

  const emit = defineEmits(['back','submit'])  // Declare Events

  const submitForm = async()=>{
    console.log(business)
    
    if(!business.type || 
      !business.name || 
      !business.regNo || 
      !business.address || 
      !business.file 
    ) return
    console.log(business)

    emit('submit', business)

  }


  // const props = defineProps<{
  //   model: boolean;
  //   title: string;
  //   description:string;
  //   success:boolean
  // }>()
  // const open =ref(false)
  </script>

