<template>


  <div class="w-full" >

    <SendTab1 v-if="tab === 'tab1'" 
      @update-value="(value:string)=> onSubmitTransferType(value)"  
      :currency="currency" 
      :type="type" 
    />

    <SendTab2 v-if="tab === 'tab2'"
      @back="tab='tab1'"
      @update-value="(value:number)=> onSubmitAmount(value)"
      :currency="currency" 
      :type="type" 
      :balance="balance"
    />

    <!-- optional tabs based on transfer type for the currency -->

    <SendVyre v-if="tab === 'VYRE'"
      @back="tab='tab2'"
      @update-value="(value:string)=> onSubmitVyreUser(value)"
      :currency="currency" 
      :type="type" 
    />

    <SendBlockchain v-if="tab === 'BLOCKCHAIN'"
      @back="tab='tab2'"
      @update-value="(value:any)=> onSubmitBlockchain(value)"
      :currency="currency" 
      :type="type" 
    />

    <SendBank v-if="tab === 'BANK'"
      @back="tab='tab2'"
      @update-value="(value:any)=> onSubmitBank(value)"
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

   const tab = ref('tab1');

   const showList = ref(false)

   const DETAILS = reactive({
      CURRENCY_TYPE: type,
      CURRENCY: currency,
      TRANSFER_TYPE: '',
      AMOUNT: 0,
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


  