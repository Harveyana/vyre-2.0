<template>


  <div class="w-full bg-white" >

    <!-- <SendPreference v-if="tab === 'SELECT'"
      v-model="DETAILS.TRANSFER_TYPE"
      @next="tab = 'AMOUNT'"  
      :currency="currency" 
      :type="type" 
    /> -->

    <BankDetails
      v-if="tab === 'DETAILS'"
      v-model:bank-name="DETAILS.bankName"
      v-model:-accountNumber="DETAILS.accountNumber"
      v-model:AccountName="DETAILS.accountName"
      v-model:-currency="DETAILS.currency"
      v-model:-type="DETAILS.type"
      v-model:-optional="optionalField"
      
      v-model:-country="DETAILS.Address.country"
      v-model:-address1="DETAILS.Address.addressLine1"
      v-model:-address2="DETAILS.Address.addressLine2"
      v-model:-city="DETAILS.Address.city"
      v-model:-state="DETAILS.Address.state"
      v-model:-postal-code="DETAILS.Address.postalCode"


      @submit="onSubmit()"
    />

    <!-- <Beneficiary
      v-if="tab === 'BENEFICIARY'"
      v-model:-address1="DETAILS.Beneficiary.addressLine1"
      v-model:-address2="DETAILS.Beneficiary.addressLine2"
      v-model:-city="DETAILS.Beneficiary.city"
      v-model:-state="DETAILS.Beneficiary.state"
      v-model:-postal-code="DETAILS.Beneficiary.postalCode"
      @back="tab='DETAILS'"
      @submit="onSubmit()" 
    /> -->

    <!-- optional tabs based on transfer type for the currency -->

    <!-- <SendVyre v-if="tab === 'VYRE'"
      v-model:-amount="DETAILS.AMOUNT"
      @back="tab='AMOUNT'"
      @close="$emit('close')"
      :currency="currency" 
      :type="type" 
    />

    <SendBlockchain v-if="tab === 'BLOCKCHAIN'"
      v-model:-amount="DETAILS.AMOUNT"
      @back="tab='AMOUNT'"
      @close="$emit('close')"
      :currency="currency" 
      :type="type" 
    />

    <SendBank v-if="tab === 'BANK'"
      v-model:-amount="DETAILS.AMOUNT"
      @back="tab='AMOUNT'"
      @close="$emit('close')"
      :currency="currency" 
      :type="type" 
    /> -->
             
  </div>

    
  </template>


  <script setup lang="ts">

   import { useDebounceFn } from '@vueuse/core'
    import { Toaster, toast } from 'vue-sonner';
    import { storeToRefs } from 'pinia';
    import { useSwapStore } from '~/store/swap';
    import { useAuthStore } from '~/store/auth';
    const { linkBankAccount} = useSwapStore();

    const { loading } = storeToRefs(useSwapStore());
    const { user } = storeToRefs(useAuthStore());

    // const props = defineProps({
    //   type: String,
    //   currency: String,
    //   balance: Number
    // });

    // const {currency, balance, type} = props

   const tab = ref('DETAILS');
   const emit = defineEmits(['close','refresh']) 

  
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
    

    const DETAILS = reactive({
      accountNumber: '',
      accountName:'',
      bankName:'',
      currency: '',
      type:'',

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
      clearingCode:'',

      Address:{
        country: '',
        addressLine1: '',
        addressLine2: '',
        city:'',
        state:'',
        postalCode:''
      }
   
    })

    const optionalField = computed(() => {
      const field = getBankField(DETAILS.Address.country);
      return DETAILS[field];
    });


    function validateDetails(details:any) {
      const errors = [];

      // Required fields check
      if (!details.accountNumber) errors.push("Account number is required");
      if (!details.accountName) errors.push("Account name is required");
      if (!details.bankName?.trim()) errors.push("Bank name is required");
      if (!details.currency) errors.push("Currency is required");

      // Address validation
      if (!details.Address?.country) errors.push("Country is required");
      if (!details.Address?.addressLine1?.trim()) errors.push("Address line 1 is required");
      if (!details.Address?.state?.trim()) errors.push("State is required");
      if (!details.Address?.city?.trim()) errors.push("City is required");

      return {
        isValid: errors.length === 0,
        errors: errors.length ? errors : null
      };
    }

    function validate_Complete_Details(details:any) {
      const errors = [];

      // Account Info Validation
      if (!String(details.accountNumber).trim()) errors.push("Account number is required");
      if (!String(details.accountName).trim()) errors.push("Account name is required");
      if (!details.bankName.trim()) errors.push("Bank name is required");
      if (!details.currency.trim()) errors.push("Currency is required");
      if (!details.type.trim()) errors.push("Select Account type");

      // Bank Address Validation
      if (!details.Address.country.trim()) errors.push("Bank country is required");
      if (!details.Address.addressLine1.trim()) errors.push("Bank address line 1 is required");
      if (!details.Address.state.trim()) errors.push("Bank State is required");
      if (!details.Address.city.trim()) errors.push("Bank city is required");

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
        loading: 'Processing Account...',
        success: (data: any) => {
          emit('refresh')
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


   


  

  

   


  
  </script>


  