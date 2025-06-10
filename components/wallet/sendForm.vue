<template>


  <div class="w-full" >

    <SendPreference v-if="tab === 'SELECT'"
      v-model="DETAILS.TRANSFER_TYPE"
      @next="tab = 'AMOUNT'"  
      :currency="currency" 
      :type="type" 
    />

    <EnterAmount v-if="tab === 'AMOUNT'"
      v-model="DETAILS.AMOUNT"
      @back="tab='SELECT'"
      @next="tab = DETAILS.TRANSFER_TYPE" 
      :currency="currency" 
      :type="type" 
      :balance="balance"
    />

    <!-- optional tabs based on transfer type for the currency -->

    <SendVyre v-if="tab === 'VYRE'"
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
    />
             
  </div>

    
  </template>


  <script setup lang="ts">

   import { useDebounceFn } from '@vueuse/core'
    import { Toaster, toast } from 'vue-sonner';
    import { storeToRefs } from 'pinia';
    import { useWalletStore } from '~/store/wallet';
    const { createWallet, fetchRate} = useWalletStore();

    const { loading } = storeToRefs(useWalletStore());

    const props = defineProps({
      type: String,
      currency: String,
      balance: Number
    });

    const {currency, balance, type} = props

   const tab = ref('SELECT');
   const emit = defineEmits(['close']) 

   const showList = ref(false)

   const DETAILS = reactive({
      CURRENCY_TYPE: type,
      CURRENCY: currency,
      TRANSFER_TYPE: '',
      AMOUNT: 0.00,
      RECEIPIENT_ID:'',
      BLOCKCHAIN:{
          address: '',
          destinationTag: '',
      },
      BANK:{
          accountNumber: '',
          accountName: '',
          name:'',
      }
   
    })

    const onSubmitTransferType = (transferType:string)=>{
      DETAILS.TRANSFER_TYPE = transferType
      tab.value = 'tab2'
    }

    const onSubmitAmount = (amount:number)=>{
      DETAILS.AMOUNT = amount
      tab.value = DETAILS.TRANSFER_TYPE
    }

    const onSubmitVyreUser = (userId:string)=>{
      DETAILS.RECEIPIENT_ID = userId
      // tab.value = 'tab3'
    }

    const onSubmitBlockchain = (blockchainDetails:{address:string; destinationTag:string})=>{
      DETAILS.BLOCKCHAIN = blockchainDetails
      // tab.value = 'tab3'
    }

    const onSubmitBank = (bankDetails:{accountNumber:string;accountName:string;name:string})=>{
      DETAILS.BANK = bankDetails
      // tab.value = 'tab3'
    }


  //  watch(() => receipient, (newSearchTerm, oldSearchTerm) => {
  //     Call your search function here with the new search term
  //     if (receipient.value.trim() !== '') {
  //        showList.value = true
  //       // Call your search function here with the new search term
  //       // search(newSearchTerm);
  //     }else{
  //           showList.value = false
  //         }
  //       });

  

   


  //  const toast = useToast();
  //  const {addUser,nover} = useFireBase()
  //  const {objectToArray} = useConverters()

  //  const showLoader = ref(false)
  
  //   const props = defineProps<{
  //     visible: boolean
  //     bar?: number
  //   }>()

  //   const amount = ref(0);
  


    // const persons:{name:string;imgurl:URL;email:string}[]=[
    //   {
    //     name:'Emana Clems',
    //     imgurl:new URL("~/assets/img/person3.png",import.meta.url),
    //     email:'eamsclems3@gmail.com'
    //   },
    //   {
    //     name:'Harvey Ana',
    //     imgurl:new URL("~/assets/img/person2.png",import.meta.url),
    //     email:'harveyana3@yahoo.com'
    //   },
    //   {
    //     name:'Hilda one',
    //     imgurl:new URL("~/assets/img/person.png",import.meta.url),
    //     email:'hildaana2@yahoo.com'
    //   },
    //   {
    //     name:'Emana Clems',
    //     imgurl:new URL("~/assets/img/person3.png",import.meta.url),
    //     email:'eamsclems3@gmail.com'
    //   }
    // ]

  </script>


  