<template>
    <div class="w-full flex items-center justify-center bg-white  rounded-xl">

     

      <div class="w-full flex items-center justify-center relative">

        <baseButton @click="$emit('back')" class="hidden absolute top-0 left-0 sm:flex flex-row items-center justify-center p-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1061_19444)"><path d="M15 6L9 12L15 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1061_19444"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
          <h4 class="Grotesque-Regular text-[16px] text-[#737373]">
            Back
          </h4>
        </baseButton>
        

        <div class="flex flex-col w-full sm:w-[75%] lg:w-[55%] sm:py-12 p-4 sm:px-10 h-full gap-y-6 my-4">

          <div class="flex flex-col justify-center gap-y-4">
            <h1 class="Grotesque-Regular text-[18px] text-[#1A1A1A]">
              Recommended Price
            </h1>

            <div class="flex items-center justify-between bg-[#F9F9FC] p-3 rounded-xl">

              <span class="flex items-center justify-center gap-x-3">

                <h1 class="Grotesque-Semi-Bold text-[18px] text-[#1A1A1A]">
                  ₦ {{paymentDetails.price}}
                </h1>
                <p class="Grotesque-Regular text-[13px] text-[#737373]">
                  Tap to offer your own fare
                </p>

              </span>
              

              <button @click="showEdit = true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1767_4548)">
                  <path d="M4 20.0003H8L18.5 9.5003C19.0304 8.96987 19.3284 8.25045 19.3284 7.5003C19.3284 6.75016 19.0304 6.03074 18.5 5.5003C17.9696 4.96987 17.2501 4.67188 16.5 4.67188C15.7499 4.67187 15.0304 4.96987 14.5 5.5003L4 16.0003V20.0003Z" stroke="#B2AEBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.5 6.5L17.5 10.5" stroke="#B2AEBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1767_4548">
                  <rect width="24" height="24" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </button>

            </div>
          </div>


          <div class="flex flex-col justify-center gap-y-3">

            <h1 class="Grotesque-Regular text-[18px] text-[#1A1A1A]">
              Payment Method
            </h1>

            <!-- Pay from wallet -->
            <div
              class="w-full border hover:border-[#0050A8] flex items-center justify-start gap-x-5 py-4 bg-white rounded-lg border-[1px] px-4 cursor-pointer"
              @click="paymentDetails.AccountType = 'WALLET'"
              :class="
                AccountType === 'WALLET'
                  ? 'border-[#0050A8]'
                  : ' border-[#F8F8FC]'
              "
            >
              
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="18" fill="#F1F0FE"/>
                <g clip-path="url(#clip0_1767_4602)">
                <path d="M23 14V11C23 10.7348 22.8946 10.4804 22.7071 10.2929C22.5196 10.1054 22.2652 10 22 10H12C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12M10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14H24C24.2652 14 24.5196 14.1054 24.7071 14.2929C24.8946 14.4804 25 14.7348 25 15V18M10 12V24C10 24.5304 10.2107 25.0391 10.5858 25.4142C10.9609 25.7893 11.4696 26 12 26H24C24.2652 26 24.5196 25.8946 24.7071 25.7071C24.8946 25.5196 25 25.2652 25 25V22" stroke="#0050A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26 18V22H22C21.4696 22 20.9609 21.7893 20.5858 21.4142C20.2107 21.0391 20 20.5304 20 20C20 19.4696 20.2107 18.9609 20.5858 18.5858C20.9609 18.2107 21.4696 18 22 18H26Z" stroke="#0050A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1767_4602">
                <rect width="24" height="24" fill="white" transform="translate(6 6)"/>
                </clipPath>
                </defs>
              </svg>
              <div class="flex flex-col justify-start items-start">
                <h3 class="Grotesque-Regular text-[14px] text-[#1A1A1A]">
                  Pay From Wallet
                </h3>
                <p class="Grotesque-Regular text-[12px] text-[#737373]">
                  Wallet Balance (65,302,98NGN)
                </p>
              </div>
            </div>


            <!-- Pay with cash -->
            <div
              class="w-full border hover:border-[#0050A8] flex items-center justify-start gap-x-5 py-4 bg-white rounded-lg border-[1px] px-4 cursor-pointer"
              @click="paymentDetails.AccountType = 'CASH'"
              :class="
                AccountType === 'CASH' ? 'border-[#0050A8]' : ' border-[#F8F8FC]'
              "
            >
            
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="18" fill="#F1F0FE"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2561 15.6527H13.528C12.8912 15.6527 12.375 15.1365 12.375 14.4997C12.375 14.0103 12.6839 13.5742 13.1456 13.4119L17.1637 11.9993C17.6351 11.8336 18.149 11.8336 18.6204 11.9993L22.6385 13.4119C23.1002 13.5742 23.4091 14.0103 23.4091 14.4997C23.4091 15.1365 22.8929 15.6527 22.2561 15.6527ZM11.25 14.4997C11.25 13.5328 11.8603 12.6713 12.7725 12.3506L16.7906 10.938C17.5035 10.6873 18.2806 10.6873 18.9935 10.938L23.0117 12.3506C23.9238 12.6713 24.5341 13.5328 24.5341 14.4997C24.5341 15.6449 23.689 16.5928 22.5884 16.7536V20.5835C23.7293 21.0454 24.5341 22.164 24.5341 23.4706C24.5341 23.9005 24.1856 24.249 23.7558 24.249H12.0284C11.5985 24.249 11.25 23.9005 11.25 23.4706C11.25 22.1775 12.0383 21.0685 13.1606 20.598V16.7482C12.0772 16.5726 11.25 15.6327 11.25 14.4997ZM18.4355 16.7777H21.4634V20.3574L21.4207 20.3571H18.4355V16.7777ZM17.3105 20.3571V16.7777H14.2856V20.3581C14.3115 20.3575 14.3374 20.3571 14.3635 20.3571H17.3105ZM21.4207 21.4821C22.4006 21.4821 23.215 22.191 23.379 23.124H12.4051C12.5691 22.191 13.3835 21.4821 14.3635 21.4821H17.8921H21.4207ZM16.8552 13.8701C16.8552 14.442 17.3211 14.9079 17.893 14.9079C18.465 14.9079 18.9309 14.442 18.9309 13.8701C18.9309 13.2981 18.465 12.8322 17.893 12.8322C17.3211 12.8322 16.8552 13.2981 16.8552 13.8701Z" fill="#352D9C"/>
              </svg>
              <div class="flex flex-col justify-start items-start">
                <h3 class="Grotesque-Regular text-[14px] text-[#1A1A1A]">
                  Pay With Cash
                </h3>
                <p class="Grotesque-Regular text-[12px] text-[#737373]">
                  Pay to the rider yourself
                </p>
              </div>
            </div>

          </div>

          


          <baseButton
            @click="submitPreference()"
              type="submit"
              class="w-ful py-3 bg-[#0050AB] text-white text-[15px] rounded-lg mt-6"
            >
            Submit Request
          </baseButton>


        </div>
      </div>

    </div>

    <BaseDialogue :visible="showEdit" @close="showEdit = false" title="">
      <div class="w-full flex flex-col items-center justify-start gap-y-6 my-4">


              <div class="w-full flex flex-col items-start justify-center ">
                
                <div class="w-full relative">
                  <label class="Grotesque-Regular text-lg text-[#010109]">
                    Enter Price Offer
                  </label>
                  <input
                    required
                    v-model="customPrice"
                    type="number"
                    class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-lg flex items-center justify-between outline-none"
                    placeholder="Price"
                  />
                </div>

                <div class="flex items-center justify-center gap-x-2">
                  <baseButton @click="changePrice()" class="bg-[#0050A8] Grotesque-Light w-full py-2.5 px-6 text-white text-[16px] mt-10">
                    submit
                  </baseButton>

                  <baseButton @click="showEdit = false" class=" Grotesque-Light w-full py-2.5 px-6 text-[#0050A8] text-[16px] mt-10">
                    Close
                  </baseButton>

                </div>
                

              </div>


          </div>
    </BaseDialogue>


  </template>
  <script setup lang="ts">

  // import { storeToRefs } from 'pinia';
  // import { useTripStore } from '~/store/trip';
  // const { getRecommendedPrice } = useTripStore();   
  // const { loading } = storeToRefs(useTripStore());


  const emit = defineEmits(['close','update-value','back'])  // Declare Events

  const customPrice = ref(0)
  const showEdit =ref(false)

  const props = defineProps<{
    price: number;
  }>()

  const paymentDetails = reactive({
    AccountType: '',
    price: props.price ? props.price: 0
  })

  const submitPreference = ()=>{
    if(!AccountType.value) return
    emit('update-value',paymentDetails)
  }

  const changePrice = ()=>{
    if(customPrice.value <= 0 ) return
    paymentDetails.price = customPrice.value
    return showEdit.value = false
  }

  
  const open =ref(false)



  // onMounted(async () => 
  // })
  
  </script>

