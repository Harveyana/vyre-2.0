<template>


  <div class="w-full h-full  min-h-[55vh] bg-white flex flex-col items-center justify-start gap-y-2" >

    <div class="w-full flex flex-col flex-wrap sm:flex-row items-center justify-start gap-4">

        <div v-if="!accounts.length" class="w-full h-auto flex items-center justify-center">
          <svg class='text-gray-200 w-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.24 10.56c-.31 1.24-2.24.61-2.84.44l.55-2.18c.62.18 2.61.44 2.29 1.74m-3.11 1.56l-.6 2.41c.74.19 3.03.92 3.37-.44c.36-1.42-2.03-1.79-2.77-1.97m10.57 2.3c-1.34 5.36-6.76 8.62-12.12 7.28S.963 14.94 2.3 9.58A9.996 9.996 0 0 1 14.42 2.3c5.35 1.34 8.61 6.76 7.28 12.12m-7.49-6.37l.45-1.8l-1.1-.25l-.44 1.73c-.29-.07-.58-.14-.88-.2l.44-1.77l-1.09-.26l-.45 1.79c-.24-.06-.48-.11-.7-.17l-1.51-.38l-.3 1.17s.82.19.8.2c.45.11.53.39.51.64l-1.23 4.93c-.05.14-.21.32-.5.27c.01.01-.8-.2-.8-.2L6.87 15l1.42.36c.27.07.53.14.79.2l-.46 1.82l1.1.28l.45-1.81c.3.08.59.15.87.23l-.45 1.79l1.1.28l.46-1.82c1.85.35 3.27.21 3.85-1.48c.5-1.35 0-2.15-1-2.66c.72-.19 1.26-.64 1.41-1.62c.2-1.33-.82-2.04-2.2-2.52"/></svg>
        </div>

        <div
          v-else
          v-for="account in accounts"
          :key="account.id"
          class="w-full sm:w-[25%] min-w-[25%] border hover:border-black flex items-start justify-start gap-x-3 py-2 rounded-2xl border-[1px] px-4 cursor-pointer"
        >         

          <div class="w-full flex items-center justify-start px-1 gap-x-2">

            <div class="flex w-full flex-col items-start justify-center gap-y-2">
              <div class="w-full flex items-center justify-between">
                <h1 v-if="account?.chain" class="text-[12px] max-w-[90%] truncate leading-none whitespace-nowrap Grotesque-Regular text-[#080708]">
                  {{account?.name}}
                </h1>
                <ActionDrop  class="absolute top-1 right-1 bg-gray-200 rounded-xl" @update="(value:string)=> actionDispatch(value,account.id)" :filters="['Delete']" />
              </div>
                          
              <h4 v-if="account?.chain" class="text-[12px] whitespace-nowrap Grotesque-Regular text-[#686767]">
                {{account?.chain}}
              </h4>
            </div>

          </div>
                
        </div>

    </div>

    <BaseDialogue :visible="showRemoveAccount">

          <div class="flex flex-col h-fit sm:w-[355px] gap-y-3">
              
            <div class="flex items-start justify-between gap-y-3">
              <div class="flex flex-col items-start">
                <h1 class="text-[18px] whitespace-nowrap SoraRegular text-[#080708]">
                  Delete Bank
                </h1>

                <h4 class="text-[13px] max-w-[90%] SansRegular text-[#686767]">
                  Are you want to delete bank? You can always add the bank account again
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
    const { deletePaymentAccount,getLinkedAccounts} = useSwapStore();

    const { loading } = storeToRefs(useSwapStore());
    const { user } = storeToRefs(useAuthStore());

    // const props = defineProps({
    //   type: String,
    //   currency: String,
    //   balance: Number
    // });

    // const {currency, balance, type} = props

   const react = ref(2);
   const emit = defineEmits(['close','refresh']) 

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

  const deleteAccount = async()=>{

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


    

    const fetchAccounts = async()=>{

      loading.value = true
      const result = await getLinkedAccounts('CRYPTO')
      
      console.log(result)
      if(result?.success){
          console.log(result?.value)
          accounts.value = result?.accounts
      }
      loading.value = false
    }

  

    // watch(() => react.value, async(newValue, oldValue) => {
    //   // if(newValue === 'BANKS'){
    //     await fetchAccounts()
    // });

    onMounted(async()=>{
      await fetchAccounts()
    })


   


  

  

   


  
  </script>


  