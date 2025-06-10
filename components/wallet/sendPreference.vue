<template>
    <div class="w-full bg-white  rounded-xl">


      <div class="w-full">
        <div class="w-full flex items-start">

          <div class="w-full flex flex-col">

            <p class="Grotesque-Regular text-[16px] text-[#737373]">
              Select transfer type
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

          <!-- vyre transfer -->
          <div
            class="w-full border hover:border-black flex items-center justify-start gap-x-5 py-4 bg-white rounded-lg border-[1px] px-4 cursor-pointer"
            @click="TransferType = 'VYRE'"
            :class="
              TransferType === 'VYRE'
                ? 'border-black'
                : ' border-[#F8F8FC]'
            "
          >
            
          <svg xmlns="http://www.w3.org/2000/svg" class="bg-[#F1F0FE] p-1 rounded-full" width="38" height="38" viewBox="0 0 32 32"><path fill="#000" d="M11.61 29.92a1 1 0 0 1-.6-1.07L12.83 17H8a1 1 0 0 1-1-1.23l3-13A1 1 0 0 1 11 2h10a1 1 0 0 1 .78.37a1 1 0 0 1 .2.85L20.25 11H25a1 1 0 0 1 .9.56a1 1 0 0 1-.11 1l-13 17A1 1 0 0 1 12 30a1.1 1.1 0 0 1-.39-.08"/></svg>
            <div class="flex flex-col justify-start items-start">
              <h3 class="Grotesque-Regular text-[14px] text-[#1A1A1A]">
                Vyre Transfer
              </h3>
              <p class="Grotesque-Regular text-[12px] text-[#737373]">
                Instant transfer to any vyre user (Zero fees)
              </p>
            </div>
          </div>


          <!-- Blockchain -->
          <div
            v-if="type === 'CRYPTO'"
            class="w-full border hover:border-black flex items-center justify-start gap-x-5 py-4 bg-white rounded-lg border-[1px] px-4 cursor-pointer"
            @click="TransferType = 'BLOCKCHAIN'"
            :class="
              TransferType === 'BLOCKCHAIN' ? 'border-black' : ' border-[#F8F8FC]'
            "
          >
          
            <svg xmlns="http://www.w3.org/2000/svg" class="bg-[#F1F0FE] p-1 rounded-full" width="38" height="38" viewBox="0 0 24 24"><path fill="#000" d="m19.829 6.612l-5.52-5.535a3.135 3.135 0 0 0-4.5 0L4.272 6.612l7.755 3.87zm2.117 2.235l1.095 1.095a3.12 3.12 0 0 1 0 4.5L14.22 23.35a2.7 2.7 0 0 1-.72.525V13.077zm-19.893 0L.958 9.942a3.12 3.12 0 0 0 0 4.5L9.78 23.35c.21.214.453.392.72.525V13.077z"/></svg>
            <div class="flex flex-col justify-start items-start">
              <h3 class="Grotesque-Regular text-[14px] text-[#1A1A1A]">
                Blockchain Transfer
              </h3>
              <p class="Grotesque-Regular text-[12px] text-[#737373]">
                Transfer to any blockchain Address 
              </p>
            </div>
          </div>


          <!-- Bank transfer -->
          <div
            v-if="type === 'FIAT'"
            class="w-full border hover:border-black flex items-center justify-start gap-x-5 py-4 bg-white rounded-lg border-[1px] px-4 cursor-pointer"
            @click="TransferType = 'BANK'"
            :class="
              TransferType === 'BANK' ? 'border-black' : ' border-[#F8F8FC]'
            "
          >
          
            <svg xmlns="http://www.w3.org/2000/svg" class="bg-[#F1F0FE] p-1 rounded-full" width="38" height="38" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#000" d="m12.67 2.217l8.5 4.75A1.5 1.5 0 0 1 22 8.31v1.44c0 .69-.56 1.25-1.25 1.25H20v8h1a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1v-8h-.75C2.56 11 2 10.44 2 9.75V8.31c0-.522.27-1.002.706-1.274l8.623-4.819a1.5 1.5 0 0 1 1.342 0ZM17 11H7v8h2v-6h2v6h2v-6h2v6h2zm-5-5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/></g></svg>
            <div class="flex flex-col justify-start items-start">
              <h3 class="Grotesque-Regular text-[14px] text-[#1A1A1A]">
                Bank Transfer
              </h3>
              <p class="Grotesque-Regular text-[12px] text-[#737373]">
                Withdraw to bank account
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

  const props = defineProps({
    type: String,
    currency: String
  });

  const {currency, type} = props
  
  const emit = defineEmits(['close','update-value','next'])  // Declare Events

  // const TransferType = ref('')
  const TransferType = defineModel()

  const submitPreference = ()=>{
    if(!TransferType.value) return
    emit('next')
  }
  
  </script>

