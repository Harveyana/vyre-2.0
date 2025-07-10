<template>


  <div class="w-full h-full min-h-[55vh] " >

    <div class="flex flex-col w-full h-full gap-y-6 my-4">

      <div class="flex flex-col flex-wrap sm:flex-row items-center justify-start gap-4">

        <div v-if="!accounts.length" class="w-full h-auto flex items-center justify-center">
          <svg class='text-gray-200 w-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m12.67 2.217l8.5 4.75A1.5 1.5 0 0 1 22 8.31v1.44c0 .69-.56 1.25-1.25 1.25H20v8h1a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1v-8h-.75C2.56 11 2 10.44 2 9.75V8.31c0-.522.27-1.002.706-1.274l8.623-4.819a1.5 1.5 0 0 1 1.342 0ZM17 11H7v8h2v-6h2v6h2v-6h2v6h2zm-5-5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/></g></svg>
        </div>

        <div
          v-else
          v-for="account in accounts"
          :key="account.id"
          class="w-full sm:w-[25%] min-w-[25%]  border hover:border-black flex items-center justify-start gap-x-3 py-2 rounded-2xl border-[1px] px-3 cursor-pointer"
        >

          <div class="w-full flex items-center justify-start px-1 gap-x-2">

            <div class="flex w-full flex-col items-start justify-center gap-y-2">
              <div class="w-full flex items-center justify-between">
                <h1 class="text-[12px] max-w-[90%] truncate leading-none whitespace-nowrap Grotesque-Regular text-[#080708]">
                  {{account?.name}}
                </h1>
                <ActionDrop  class="absolute top-1 right-1 bg-gray-200 rounded-xl" @update="(value:string)=> actionDispatch(value,account.id)" :filters="['Delete']" />
              </div>
                          
              <h4 v-if="account?.accountNumber" class="text-[12px] whitespace-nowrap Grotesque-Regular text-[#686767]">
                {{account?.accountNumber}}***
              </h4>
            </div>

          </div>
        </div>

      </div>

      
    </div>

    <BaseDialogue :visible="showRemoveAccount">

      <div class="flex flex-col h-fit sm:w-[355px] gap-y-3">
          
        <div class="flex items-start justify-between gap-y-3">
          <div class="flex flex-col items-start">
            <h1 class="text-[18px] whitespace-nowrap SoraRegular text-[#080708]">
              Delete Account
            </h1>

            <h4 class="text-[13px] max-w-[90%] SansRegular text-[#686767]">
              Are you want to delete Account? You can always add the bank account again
            </h4>
          </div>
          

          <button @click="showRemoveAccount = false">
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


            <button @click="showRemoveAccount = false"  class="w-full sm:w-1/2 bg-white border border-black flex flex-row items-center justify-center rounded-2xl mt-6 py-2.5">
              <span  class="text-[16px] SoraRegular text-black text-center">Cancel</span>
            </button>

          </div>

        </div>
        

      </div>

    </BaseDialogue>
             
  </div>

    
  </template>


  <script setup lang="ts">

   import { useDebounceFn } from '@vueuse/core'
    import { Toaster, toast } from 'vue-sonner';
    import { storeToRefs } from 'pinia';
    import { useSwapStore } from '~/store/swap';
    import { useAuthStore } from '~/store/auth';
    const { deletePaymentAccount, getLinkedAccounts} = useSwapStore();

    const { loading } = storeToRefs(useSwapStore());
    const { user } = storeToRefs(useAuthStore());

    // const props = defineProps({
    //   type: String,
    //   currency: String,
    //   balance: Number
    // });

    // const {currency, balance, type} = props

  const emit = defineEmits(['close','refresh','switch']) 

  const showRemoveAccount = ref(false)
  const showLoader = ref(false)
  const accounts = ref<any[]>([])
  const selectedAccountId = ref('')


  const actionDispatch = (action:string,accountId:string)=>{
    selectedAccountId.value = accountId
    if(action === 'Delete'){
      showRemoveAccount.value = true
    }

  }

  


  const fetchAccounts = async()=>{

    loading.value = true
    const result = await getLinkedAccounts('FIAT')
    
    console.log(result)
    if(result?.success){
      console.log(result?.value)
      accounts.value = result?.accounts
    }
    loading.value = false
  }

  const deleteAccount = async()=>{

      console.log('started')
      showRemoveAccount.value = false

      toast.promise(() => new Promise(async(resolve,reject) =>{

        const result = await deletePaymentAccount(selectedAccountId.value);
        console.log(result)

        if(result?.success){
          resolve({msg:result.msg})
          // emit('verified', verified?.userId)
        }else{
          reject({msg:result.msg})
          // $toast.error(verified.msg)
        }
      }), 
      {
        loading: 'Deleting Account',
        success: async(data: any) => {
          await fetchAccounts()
          return data.msg
        },
        error: (data: any) => {return data.msg}
      })

  }

  

  // watch(() => tab.value, async(newValue, oldValue) => {
  //   if(newValue === 'BANKS'){
  //     await fetchAccounts()
  //   }
  // });

  onMounted(async()=>{
    await fetchAccounts()
  })




   


  

  

   


  
  </script>


  