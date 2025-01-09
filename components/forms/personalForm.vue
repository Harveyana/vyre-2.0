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
              Personal Information
            </h3>

          </div>

          <!-- <button
          class="bg-[#F1F0FE] py-2 px-4 text-black text-xs rounded-md whitespace-nowrap"
          >
            Step 1 of 4
          </button> -->

        </div>
        
        

        <div class="flex flex-col w-full h-full gap-y-6 my-4">

          <form
            @submit.prevent="submitForm()"
            class="w-full mt-4 flex flex-col gap-y-4"
          >

            <div class="w-full flex gap-x-4 items-center justify-center">

              <div class="w-1/2 relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  First Name
                </label>

                <input
                  required
                  v-model="person.firstName"
                  type="text"
                  class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-lg flex items-center justify-between outline-none"
                  placeholder="Anayo"
                />
              </div>
              <div class="w-1/2 relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  Last Name
                </label>

                <input
                  required
                  v-model="person.lastName"
                  type="text"
                  class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-lg flex items-center justify-between outline-none"
                  placeholder="Obiajulu"
                />
              </div>

            </div>
            

            <div v-if="props.AccountType == 'BUSINESS'" class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Business Name
              </label>

              <input
                :required="props.AccountType == 'BUSINESS'"
                v-model="person.businessName"
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-lg flex items-center justify-between outline-none"
                placeholder="Obiajulu"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Email
              </label>

              <input
                required
                type="email"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-lg flex items-center justify-between outline-none"
                v-model="person.email"
                placeholder="Obii@dynamo.com"
              />
            </div>
            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                phone
              </label>

              <input
                v-model="person.phoneNumber"
                v-mask="'+234 ##########'"
                type="tel"
                required
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-lg flex items-center justify-between outline-none"
                placeholder="+234 810000000"
              />

              
            </div>

            <baseButton
              type="submit"
              class="w-full flex items-center justify-center py-2.5 bg-black text-white text-[15px] rounded-lg mt-6"
            >
              <span v-if="!loading"  class="text-white text-[14px] Grotesque-Light text-center whitespace-nowrap">Proceed</span>
              <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" 
              />

            </baseButton>

            <p
              class="text-sm text-[#737373] text-left cursor-pointer Grotesque-Regular my-2"
            >
              Got an existing account?
              <span
                @click="$router.push('/login')"
                class="text-black cursor-pointer"
                >Login</span
              >
            </p>
          </form>

          
        </div>
      </div>

    </div>
  </template>
  <script setup lang="ts">

    import { storeToRefs } from 'pinia';
    import { useAuthStore } from '~/store/auth';
    const { register_User } = useAuthStore();   
    const { loading } = storeToRefs(useAuthStore());
    

   const resetKey = ref(2)

   const props = defineProps<{
      AccountType: string;
   }>()

    const person = reactive({
      firstName:'',
      lastName:'',
      businessName:'',
      email:'',
      phoneNumber:''
    })


  const emit = defineEmits(['back','submit'])  // Declare Events

  const submitForm = ()=>{
    console.log(person)
    if(!person.firstName || !person.lastName || !person.email || !person.phoneNumber ) return
    console.log(person)
    emit('submit', person)

  }

  




  // const props = defineProps<{
  //   model: boolean;
  //   title: string;
  //   description:string;
  //   success:boolean
  // }>()
  // const open =ref(false)
  </script>

