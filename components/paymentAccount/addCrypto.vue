<template>


  <div class="w-full h-full  min-h-[55vh] bg-white flex flex-col items-center justify-start gap-y-2" >

    <CryptoDetails
      v-model:-address="DETAILS.address"
      v-model:-chain="DETAILS.chain"
      v-model:-token="DETAILS.currency"

      @submit="onSubmit()"
    />

    <div class="w-full flex flex-col flex-wrap sm:flex-row items-center justify-start gap-4">

        <div v-if="!accounts.length" class="w-full h-auto flex items-center justify-center">
          <svg class='text-gray-200 w-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.24 10.56c-.31 1.24-2.24.61-2.84.44l.55-2.18c.62.18 2.61.44 2.29 1.74m-3.11 1.56l-.6 2.41c.74.19 3.03.92 3.37-.44c.36-1.42-2.03-1.79-2.77-1.97m10.57 2.3c-1.34 5.36-6.76 8.62-12.12 7.28S.963 14.94 2.3 9.58A9.996 9.996 0 0 1 14.42 2.3c5.35 1.34 8.61 6.76 7.28 12.12m-7.49-6.37l.45-1.8l-1.1-.25l-.44 1.73c-.29-.07-.58-.14-.88-.2l.44-1.77l-1.09-.26l-.45 1.79c-.24-.06-.48-.11-.7-.17l-1.51-.38l-.3 1.17s.82.19.8.2c.45.11.53.39.51.64l-1.23 4.93c-.05.14-.21.32-.5.27c.01.01-.8-.2-.8-.2L6.87 15l1.42.36c.27.07.53.14.79.2l-.46 1.82l1.1.28l.45-1.81c.3.08.59.15.87.23l-.45 1.79l1.1.28l.46-1.82c1.85.35 3.27.21 3.85-1.48c.5-1.35 0-2.15-1-2.66c.72-.19 1.26-.64 1.41-1.62c.2-1.33-.82-2.04-2.2-2.52"/></svg>
        </div>

        <div
          v-else
          v-for="account in accounts"
          :key="account.id"
          class="w-full sm:w-[45%] min-w-[45%] border hover:border-black flex items-start justify-start gap-x-3 py-2 rounded-2xl border-[1px] px-4 cursor-pointer"
        >         

          <div class="w-full flex items-center justify-start px-1 gap-x-2">

            <div class="flex w-full flex-col items-start justify-center gap-y-2">
              <div class="w-full flex items-center justify-between">
                <h1 v-if="account?.chain" class="text-[12px] max-w-[90%] truncate leading-none whitespace-nowrap Grotesque-Regular text-[#080708]">
                  {{account?.name}}
                </h1>
                <ActionDrop  class="absolute top-1 right-1 bg-gray-200 rounded-xl" @update="(value:string)=>{actionDispatch(value,bank.id)}" :filters="['Delete Bank']" />
              </div>
                          
              <h4 v-if="account?.chain" class="text-[12px] whitespace-nowrap Grotesque-Regular text-[#686767]">
                {{account?.chain}}
              </h4>
            </div>

          </div>
                
        </div>

    </div>

    
             
  </div>

    
  </template>


  <script setup lang="ts">

   import { useDebounceFn } from '@vueuse/core'
    import { Toaster, toast } from 'vue-sonner';
    import { storeToRefs } from 'pinia';
    import { useSwapStore } from '~/store/swap';
    import { useAuthStore } from '~/store/auth';
    const { linkCryptoAccount,getLinkedAccounts} = useSwapStore();

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

   const accounts = ref<any[]>([])
    

    const DETAILS = reactive({
      address: '',
      chain:'',
      currency: ''
   
    })

    function validate_Complete_Details(details:any) {
      const errors = [];

      // Account Info Validation
      if (!details.address.trim()) errors.push("Address is required");
      if (!details.chain.trim()) errors.push("Select Chain");
      if (!details.currency.trim()) errors.push("Select Token");

      return {
        isValid: !errors.length,
        errors: errors.length ? errors : null
      };
    }

    


    const submit = async()=>{

      console.log('started')
      emit('close')

      toast.promise(() => new Promise(async(resolve,reject) =>{
        const linked = await linkCryptoAccount(DETAILS)
        if (linked.success) {
          resolve({msg:linked.msg})
          // emit('verified', verified?.userId)
        }else{
          reject({msg:linked.msg})
          // $toast.error(verified.msg)
        }
      }), 
      {
        loading: 'Linking Account',
        success: (data: any) => {
          emit('refresh')
          react.value++
          return data.msg
        },
        error: (data: any) => {return data.msg}
      })

    }

    const onSubmit = async()=>{
      console.log('DETAILS',DETAILS)

      const { isValid, errors } = validate_Complete_Details(DETAILS);
      if (!isValid) {
        console.error("Validation errors:", errors);
        toast.error(errors[0])
        // Show errors to user
      } else {
        await submit()
      }
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

  

    watch(() => react.value, async(newValue, oldValue) => {
      // if(newValue === 'BANKS'){
        await fetchAccounts()
    });

    onMounted(async()=>{
      await fetchAccounts()
    })


   


  

  

   


  
  </script>


  