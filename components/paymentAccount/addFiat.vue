<template>


  <div class="w-full h-full min-h-[55vh] " >

    <div v-if="tab === 'BANKS'" class="flex flex-col w-full h-full gap-y-6 my-4">

      <div
        class="w-full border border-dashed hover:border-black flex items-center justify-center gap-x-5 py-4 rounded-lg border-[1px] px-4 cursor-pointer"
      >
                
        <button @click="tab = 'DETAILS'" class="flex justify-center items-center gap-3 h-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 12"><path fill="#000" d="M4.12 11c-.84 0-1.62-.32-2.2-.91a3.11 3.11 0 0 1 0-4.4l2.77-2.77a3.12 3.12 0 0 1 4.4 0a3.1 3.1 0 0 1 0 4.4c-.2.2-.51.2-.71 0s-.2-.51 0-.71c.82-.82.82-2.16 0-2.99c-.83-.83-2.17-.83-2.99 0L2.62 6.39c-.82.82-.83 2.16 0 2.99c.4.4.92.63 1.5.62c.56 0 1.09-.22 1.49-.62c.2-.2.51-.2.71 0s.2.51 0 .71c-.59.59-1.37.91-2.2.91"/><path fill="#000" d="M9.14 9.97c-.83 0-1.62-.32-2.2-.91a3.11 3.11 0 0 1 0-4.4c.2-.2.51-.19.71 0c.2.2.19.51 0 .71c-.82.82-.83 2.16 0 2.99c.4.4.95.63 1.5.62c.56 0 1.09-.22 1.49-.62l2.75-2.75c.4-.4.62-.93.62-1.49s-.22-1.1-.62-1.49c-.83-.83-2.17-.83-2.99 0c-.2.2-.51.19-.71 0c-.2-.2-.19-.51 0-.71a3.12 3.12 0 0 1 4.4 0c.59.59.91 1.37.91 2.2s-.32 1.61-.91 2.2l-2.75 2.75c-.59.59-1.37.91-2.2.91Z"/></svg>
          <h3 class="Grotesque-Regular text-[14px] sm:text-[17px] text-[#1A1A1A]">
            Add Bank Account
          </h3>
        </button>

      </div>

      <div class="flex flex-col flex-wrap sm:flex-row items-center justify-start gap-4">

        <div v-if="!accounts.length" class="w-full h-auto flex items-center justify-center">
          <svg class='text-gray-200 w-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m12.67 2.217l8.5 4.75A1.5 1.5 0 0 1 22 8.31v1.44c0 .69-.56 1.25-1.25 1.25H20v8h1a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1v-8h-.75C2.56 11 2 10.44 2 9.75V8.31c0-.522.27-1.002.706-1.274l8.623-4.819a1.5 1.5 0 0 1 1.342 0ZM17 11H7v8h2v-6h2v6h2v-6h2v6h2zm-5-5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/></g></svg>
        </div>

        <div
          v-else
          v-for="account in accounts"
          :key="account.id"
          class="w-full sm:w-[45%] min-w-[45%]  border hover:border-black flex items-center justify-start gap-x-3 py-2 rounded-2xl border-[1px] px-3 cursor-pointer"
        >

          <div class="w-full flex items-center justify-start px-1 gap-x-2">

            <div class="flex w-full flex-col items-start justify-center gap-y-2">
              <div class="w-full flex items-center justify-between">
                <h1 class="text-[12px] max-w-[90%] truncate leading-none whitespace-nowrap Grotesque-Regular text-[#080708]">
                  {{account?.name}}
                </h1>
                <ActionDrop  class="absolute top-1 right-1 bg-gray-200 rounded-xl" @update="(value:string)=>{actionDispatch(value,bank.id)}" :filters="['Delete Bank']" />
              </div>
                          
              <h4 v-if="account?.accountNumber" class="text-[12px] whitespace-nowrap Grotesque-Regular text-[#686767]">
                {{account?.accountNumber}}***
              </h4>
            </div>

          </div>
        </div>

      </div>

      

      <!-- <baseButton
        v-if="accounts.length"
          @click="$emit('switch')"
          type="submit"
          class="self-end gap-3 flex items-center justify-center w-full py-3 bg-black  text-white text-[15px] rounded-3xl mt-6"
        >
          Continue
          <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9"><path fill="#fff" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="#fff" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg>
      </baseButton> -->

    </div>

    <BankDetails
      v-if="tab === 'DETAILS'"

      v-model:bankId="DETAILS.bankId"
      v-model:-accountNumber="DETAILS.accountNumber"
      v-model:-type="DETAILS.type"
      v-model:-optional="optionalField"

      @submit="onSubmit()"
      @back="tab = 'BANKS'"
    />
             
  </div>

    
  </template>


  <script setup lang="ts">

   import { useDebounceFn } from '@vueuse/core'
    import { Toaster, toast } from 'vue-sonner';
    import { storeToRefs } from 'pinia';
    import { useSwapStore } from '~/store/swap';
    import { useAuthStore } from '~/store/auth';
    const { linkBankAccount, getLinkedAccounts} = useSwapStore();

    const { loading } = storeToRefs(useSwapStore());
    const { user } = storeToRefs(useAuthStore());

    // const props = defineProps({
    //   type: String,
    //   currency: String,
    //   balance: Number
    // });

    // const {currency, balance, type} = props

   const tab = ref('BANKS');
   const emit = defineEmits(['close','refresh','switch']) 

  
    const COUNTRY_FIELD_MAP = {
      'United States': 'routingNumber',
      'United Kingdom': 'sortCode',
      'Canada': 'institutionNumber',
      'Australia': 'bsbNumber',
      'India': 'ifscCode',
      'Mexico': 'clabeNumber',
      'China': 'cnapsCode',
      'Nigeria': 'nubanNumber',
      'Brazil': 'pixCode',
      'Hong Kong': 'clearingCode',
    } as const; // <-- 'as const' makes it type-safe

    type Country = keyof typeof COUNTRY_FIELD_MAP;
    type BankField = typeof COUNTRY_FIELD_MAP[Country];

    const getBankField = (country: string): BankField | 'bicSwift' => {
      return COUNTRY_FIELD_MAP[country as Country] ?? 'bicSwift';
    };
    
    const accounts = ref<any[]>([])

    const DETAILS = reactive({
      bankId:'',
      accountNumber: '',
      type:'',
      currency:'',

      routingNumber:'',
      sortCode:'',
      bicSwift:'',
      institutionNumber:'',
      bsbNumber:'',
      ifscCode:'',
      clabeNumber:'',
      cnapsCode:'',
      nubanNumber:'',
      pixCode:'',
      clearingCode:''
   
    })

    const optionalField = computed(() => {
      const field = getBankField(user.value?.country!);
      return DETAILS[field];
    });


    function validate_Complete_Details(details:any) {
      const errors = [];

      // Account Info Validation
      if (!String(details.accountNumber).trim()) errors.push("Account number is required");
      if (!details.bankId.trim()) errors.push("Bank is required");
      if (!details.type.trim()) errors.push("Select Account type");
      if (!details.currency.trim()) errors.push("currency Required");

      return {
        isValid: !errors.length,
        errors: errors.length ? errors : null
      };
    }

    const submit = async()=>{

      console.log('started')
      emit('close')

      toast.promise(() => new Promise(async(resolve,reject) =>{
        const linked = await linkBankAccount(DETAILS)
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
          tab.value = 'BANKS'
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
    const result = await getLinkedAccounts('FIAT')
    
    console.log(result)
    if(result?.success){
        console.log(result?.value)
        accounts.value = result?.accounts
    }
    loading.value = false
  }

  

  watch(() => tab.value, async(newValue, oldValue) => {
    if(newValue === 'BANKS'){
      await fetchAccounts()
    }
  });

  onMounted(async()=>{
    await fetchAccounts()
  })




   


  

  

   


  
  </script>


  