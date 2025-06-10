<template>


          <div class="w-full flex flex-col items-start justify-start gap-y-8 pt-5">

            <div class="w-full flex  items-start justify-start">

              <div class="w-full flex flex-col gap-y-2 items-start gap-x-2">

                  <h1 class="Grotesque-Regular leading-none text-[16px] text-[#010109]">
                    Bank
                  </h1>
                  <h4 class="text-[13px] whitespace-nowrap Grotesque-Regular text-[#686767]">
                    add and delete bank account
                  </h4>                
                
              </div>


              <button @click="showAddBank = true"  class="bg-black flex flex-row items-center justify-center rounded-xl mr-auto py-2.5 px-6">
                <span  class="text-[14px] Grotesque-Regular text-[#FFFFFF] text-center whitespace-nowrap">Add Bank</span>
              </button>
              

            </div>

      
            <div class="w-full flex flex-col">

              <div v-if="!showLoader" class="w-full flex flex-wrap items-start justify-start gap-4">

                
                <div v-if="userBanks.length" v-for="bank in userBanks" :key="bank.id" class="w-full lg:w-[48%] hover:bg-gray-100 relative flex items-start justify-between border rounded-2xl px-2 py-2.5">

                      <div class="w-full flex items-center justify-start px-1 gap-x-2">

                        <div class="flex w-full flex-col items-start justify-center gap-y-2">
                          <div class="w-full flex items-center justify-between">
                            <h1 class="text-[12px] max-w-[80%] truncate leading-none whitespace-nowrap SoraRegular text-[#080708]">
                              {{bank.bank.name}}
                            </h1>

                            <ActionDrop  class="absolute top-1 right-2 bg-gray-200 rounded-xl" @update="(value:string)=>{actionDispatch(value,bank.id)}" :filters="['Delete Bank']" />
                          </div>
                          

                          <h4 class="text-[12px] whitespace-nowrap SansRegular text-[#686767]">
                            {{bank.accountNumber}}
                          </h4>

                          <h4 class="text-[13px] truncate whitespace-nowrap SansRegular text-[#686767]">
                            {{bank.accountName}}
                          </h4>
                        </div>

                      </div>

                </div>

                <div v-else class="w-full h-full flex flex-col items-center justify-center gap-y-2">

                  <svg width="93" height="92" viewBox="0 0 93 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <rect x="0.5" width="92" height="92" rx="46" fill="#EDEDED"/>
                   <path d="M29.75 59.8H64.25V63.25H29.75V59.8ZM33.2 46H36.65V58.075H33.2V46ZM41.825 46H45.275V58.075H41.825V46ZM48.725 46H52.175V58.075H48.725V46ZM57.35 46H60.8V58.075H57.35V46ZM29.75 37.375L47 28.75L64.25 37.375V44.275H29.75V37.375ZM33.2 39.5071V40.825H60.8V39.5071L47 32.6071L33.2 39.5071ZM47 39.1C46.5425 39.1 46.1037 38.9183 45.7802 38.5948C45.4567 38.2713 45.275 37.8325 45.275 37.375C45.275 36.9175 45.4567 36.4787 45.7802 36.1552C46.1037 35.8317 46.5425 35.65 47 35.65C47.4575 35.65 47.8963 35.8317 48.2198 36.1552C48.5433 36.4787 48.725 36.9175 48.725 37.375C48.725 37.8325 48.5433 38.2713 48.2198 38.5948C47.8963 38.9183 47.4575 39.1 47 39.1Z" fill="#000000"/>
                  </svg>

                  <!-- <h1  class=" text-[23px] SansRegular font text-[#080708] font-semibold">
                    You have no banks added yet. Please add bank
                  </h1> -->

                  <span class="text-[16px] Grotesque-Regular text-[#686767] text-center ">
                    You have no banks added yet. Please add bank 
                  </span>

                </div>

                  
              </div>

              <div v-else role="status" class="w-full flex flex-col gap-y-4 animate-pulse">
                  
                  <div class="flex w-full gap-x-4">
                    <div class="h-10 bg-gray-200  dark:bg-gray-700 w-10 mb-4"></div>
                    <div class='flex flex-col'>
                      <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2.5"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    </div>
                  </div>

                  <div class="flex w-full gap-x-4">
                    <div class="h-10 bg-gray-200  dark:bg-gray-700 w-10 mb-4"></div>
                    <div class='flex flex-col'>
                      <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2.5"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    </div>
                  </div>

                  <div class="flex w-full gap-x-4">
                    <div class="h-10 bg-gray-200  dark:bg-gray-700 w-10 mb-4"></div>
                    <div class='flex flex-col'>
                      <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2.5"></div>
                      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    </div>
                  </div>

                  
              </div>

            </div>
            

          
          </div>

        <BaseDialogue :visible="showRemoveBank">

          <div class="flex flex-col h-fit w-[355px] gap-y-3">
              
            <div class="flex items-start justify-between gap-y-3">
              <div class="flex flex-col items-start">
                <h1 class="text-[18px] whitespace-nowrap SoraRegular text-[#080708]">
                  Delete Bank
                </h1>

                <h4 class="text-[13px] max-w-[90%] SansRegular text-[#686767]">
                  Are you want to delete bank? You can always add the bank account again
                </h4>
              </div>
              

              <button @click="showRemoveBank = false">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                  <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
                </svg>
              </button>
            </div>

            <div class="flex flex-col items-center justify-center">


              <div class="w-full flex items-center justify-center gap-x-4">

                <button @click="deleteAccount()"  class="w-full sm:w-1/2 bg-black flex flex-row items-center justify-center rounded-2xl mt-6 py-3">
                  <span v-if="!showLoader" class="text-[16px] SoraRegular text-[#FFFFFF] text-center">Yes, Delete</span>
                  <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
                    animationDuration=".5s" aria-label="Custom ProgressSpinner" 
                  />
                </button>


                <button @click="showRemoveBank = false"  class="w-full sm:w-1/2 bg-white border border-black flex flex-row items-center justify-center rounded-2xl mt-6 py-2.5">
                  <span  class="text-[16px] SoraRegular text-black text-center">Cancel</span>
                </button>

              </div>

            </div>
            

          </div>

        </BaseDialogue>


        <BaseDialogue :visible="showAddBank">

          <div class="flex flex-col h-fit w-[355px] gap-y-3">
              
            <div class="flex items-start justify-between gap-y-3">
              <div class="flex flex-col items-start">
                <h1 class="text-[18px] whitespace-nowrap Grotesque-Regular text-[#080708]">
                  Add Bank
                </h1>

                <h4 class="text-[13px] Grotesque-Regular text-[#686767]">
                  add bank account
                </h4>
              </div>
              

              <button @click="showAddBank = false">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                  <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
                </svg>
              </button>
            </div>

            <AddBank @close="refresh()" />
            

          </div>

        </BaseDialogue>


  </template>

  <script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { getbankAccounts, deleteBankAccount } = useAuthStore();

  const { loading, user, store, organisation } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

  const showLoader = ref(false)
  const showAddBank = ref(false)

  const showRemoveBank = ref(false)
  const tab = ref('BANKS')
  const emit = defineEmits(['add'])  // Declare Events
  interface bank {
   id: string;
   accountNumber: string;
   accountName: string;
   userId: string;
   bankId: string;
   bank:{
    id:string;
    name:string;
   }
 }
  const userBanks = ref<bank[]>([])
  const userBankId = ref('')

  const inputs = reactive({
    emailNotification: false,
    pushNotification: false,
    smsNotification: false
  })

  const toast = reactive({
    show:false,
    title:'',
    description:'',
    success:true
  })

  const initToast=(success:boolean,title:string,description:string)=>{
    toast.title = title
    toast.description = description
    toast.success = success
    toast.show = true
  }

  
  const actionDispatch = (action:string,bankId:string)=>{
    userBankId.value = bankId
    if(action === 'Delete Bank'){
      showRemoveBank.value = true
    }

  }

  const deleteAccount = async()=>{
    showLoader.value = true
    const result = await deleteBankAccount(userBankId.value);
    console.log(result)
    if(result?.success){
      userBanks.value = result.userBanks
      initToast(true,'Bank Account Deleted', result?.msg)
      showLoader.value = false
      showRemoveBank.value = false
    }
    initToast(false,'Operation Failed', result?.msg)
    showLoader.value = false
    showRemoveBank.value = false
  }

  const fetchBankAccounts = async()=>{
    showLoader.value = true
    const result = await getbankAccounts();
    console.log(result)
    if(result?.success){
      userBanks.value = result.userBanks
      showLoader.value = false
    }
    showLoader.value = false
  }

  const refresh = async()=>{
    showAddBank.value = false
    await fetchBankAccounts()
  }


  onMounted(async()=>{
    await fetchBankAccounts()
  })
  
  </script>