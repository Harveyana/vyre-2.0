<template>
    <div class="w-full flex flex-col items-start justify-center gap-y-4 pr-10">

            <div class="w-full flex flex-col items-center justify-start gap-y-4">

              <div class="w-full flex flex-col items-start justify-start gap-y-2">
                <span class="text-[15px] SansRegular text-[#0D0D0D] text-left ">Select Bank Account</span>
                <BanksList  @update="(bank: bank)=>{selectedBank = bank}" />
              </div>

              <div class="w-full flex flex-col items-start justify-start gap-y-2">
                <span class="text-[15px] SansRegular text-[#0D0D0D] text-left ">Account Number</span>
                <input
                  id="place"
                  type="text"
                  v-model="accountNumber"
                  class="w-full border-[#E4E5E7] SansRegular border text-[#080708] text-[14px] py-2 px-3 rounded-xl outline-none"
                  placeholder="123446"
                />
                <div class="flex items-center justify-center gap-x-3">
                  <span v-if="resolvedName" class="text-[15px] SansRegular text-[#0D0D0D] text-left ">{{resolvedName}}</span>
                  <ProgressSpinner v-if="nameLoading" class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
                    animationDuration=".5s" aria-label="Custom ProgressSpinner" 
                  />
                </div>
              </div>


              <button :disable="showLoader" @click="addBank()" class="w-full mt-6 flex items-center justify-center whitespace-nowrap Grotesque-Regular py-3 px-6 gap-x-2 text-[16px] text-white bg-black rounded-2xl border shadow-sm border-gray-300" type="button">
                <span v-if="!showLoader" class="text-[16px] SoraRegular text-[#FFFFFF] text-center">Save Changes</span>
                <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
                  animationDuration=".5s" aria-label="Custom ProgressSpinner" 
                />
              </button>

            </div>

            <!-- <div v-else role="status" class="w-full flex flex-col p-4 gap-y-4 divide-y divide-gray-200 rounded animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div class="w-full" >
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
                    <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>

                <div class="w-full" >
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
                    <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div class="w-full" >
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
                    <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
            </div> -->



          

        </div>


  </template>

  <script setup lang="ts">

  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { getbanks, verifyBank, saveBank } = useAuthStore();

  const { loading, user, store, organisation } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

  const showLoader = ref(false)
  const nameLoading = ref(false)
  const showUpload = ref(false)
  const emit = defineEmits(['close'])  // Declare Events

  interface bank {
   id: string;
   name: string;
   code: string;
   country: string
 }

  const AllBanks = ref<bank[]>([])

  const selectedBank = ref<bank>()
  const accountNumber = ref()
  const resolvedName = ref('')

  

  watch([selectedBank, accountNumber], async(newVal) => {
    nameLoading.value = true
    if(!selectedBank.value || !accountNumber.value ) return nameLoading.value = false
      const result = await verifyBank({bankId: selectedBank.value.id, accountNumber: accountNumber.value});
      console.log(result)
      if(result?.success){
        console.log(result.data)
        const detail = result.data
        resolvedName.value = detail.accountName
        nameLoading.value = false
      }
      nameLoading.value = false
  });

  const addBank = async()=>{
    showLoader.value = true
    if(!selectedBank.value || !accountNumber.value || !resolvedName.value ) return
    const result = await saveBank({bankId: selectedBank.value.id, accountNumber: accountNumber.value, accountName:resolvedName.value});
    if(result?.success){
      toast.success(result?.msg)
    }else{
      toast.error(result?.msg)
    }
    showLoader.value = false
    emit('close')
  }

  // onMounted(async()=>{
  //   const result = await getbanks();
  //   console.log(result)
  //   if(result?.success){
  //     console.log(result.banks)
  //     AllBanks.value = result.banks
  //   }
    
  // })


  
  </script>