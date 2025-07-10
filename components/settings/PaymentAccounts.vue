<template>


          <div class="w-full flex flex-col items-start justify-start gap-y-8 pt-5">

            <div class="w-full flex items-start justify-between">

              <TabsRoot v-model:modelValue="TAB" class="w-32 bg-[#F8F8FC] h-fit rounded-2xl" default-value="FIAT">
                    <TabsList class="h-full p-1 rounded-2xl bg-[#F8F8FC] shrink-0 flex items-center justify-center" aria-label="Manage your account">

                      <TabsTrigger
                            class="Grotesque-Regular py-2.5 flex-1 flex items-center justify-center text-[11px] sm:text-[13px] leading-none text-[#A7A7A7] select-none  rounded-2xl  data-[state=active]:bg-white data-[state=active]:text-black outline-none cursor-default transition ease-in-out duration-300"                      
                            value="FIAT"
                          >
                          Fiat
                      </TabsTrigger>

                      <TabsTrigger
                            class="Grotesque-Regular py-2.5 flex-1 flex items-center justify-center text-[11px] sm:text-[13px] leading-none text-[#A7A7A7] select-none  rounded-2xl  data-[state=active]:bg-white data-[state=active]:text-black outline-none cursor-default transition ease-in-out duration-300"                      
                            value="CRYPTO"
                          >
                          Crypto
                      </TabsTrigger>
                          
                    </TabsList>
                              
              </TabsRoot>


              <NuxtLink href="/accounts"  class="bg-black flex flex-row items-center justify-center rounded-xl py-2.5 px-6">
                <span  class="text-[14px] Grotesque-Regular text-[#FFFFFF] text-center whitespace-nowrap">Add Account</span>
              </NuxtLink>
              

            </div>

      
            <div class="w-full flex flex-col">

              <div class="w-full flex flex-wrap items-start justify-start gap-4">

                
                <!-- <div v-if="userBanks.length" v-for="bank in userBanks" :key="bank.id" class="w-full lg:w-[48%] hover:bg-gray-100 relative flex items-start justify-between border rounded-2xl px-2 py-2.5">

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

                </div> -->

                

                  
              </div>

              <FiatAccounts v-if="TAB === 'FIAT'" />
              <CryptoAccounts v-if="TAB === 'CRYPTO'"  />

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


  </template>

  <script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { getbankAccounts, deleteBankAccount } = useAuthStore();

  const { loading, user, store, organisation } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

  const showLoader = ref(false)
  const TAB = ref('FIAT');

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