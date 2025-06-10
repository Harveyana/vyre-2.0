<template>


  <div class="w-full bg-white" >

    <!-- <SendPreference v-if="tab === 'SELECT'"
      v-model="DETAILS.TRANSFER_TYPE"
      @next="tab = 'AMOUNT'"  
      :currency="currency" 
      :type="type" 
    /> -->

    <CryptoDetails
      v-model:-address="DETAILS.address"
      v-model:-chain="DETAILS.chain"
      v-model:-token="DETAILS.currency"

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
    const { linkCryptoAccount} = useSwapStore();

    const { loading } = storeToRefs(useSwapStore());
    const { user } = storeToRefs(useAuthStore());

    // const props = defineProps({
    //   type: String,
    //   currency: String,
    //   balance: Number
    // });

    // const {currency, balance, type} = props

  //  const tab = ref('DETAILS');
   const emit = defineEmits(['close','refresh']) 
    

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


  