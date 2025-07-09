<template>


  <div class="w-full" >

    <ReceiveTab1 v-if="tab === 'tab1'" 
      @update-value="(value:string)=> onSubmitTransferType(value)"  
      :currency="wallet?.currency?.ISO" 
      :type="wallet?.currency?.type" 
    />

    

    <!-- optional tabs based on transfer type for the currency -->
    

    <RecieveVyre v-if="tab === 'VYRE'"
      @back="tab='tab1'"
      @close="$emit('close')"
      :currency="wallet?.currency?.ISO" 
      :type="wallet?.currency?.type" 
    />

    <RecieveBlockChain v-if="tab === 'BLOCKCHAIN'"
      @back="tab='tab1'"
      @close="$emit('close')"
      v-model:wallet="wallet"
    />

    <RecieveBank v-if="tab === 'BANK'"
      @close="$emit('close')"
      @back="tab='tab1'"
      :currency="wallet?.currency?.ISO" 
      :type="wallet?.currency?.type" 
    />

    <!-- <SendBank v-if="tab === 'BANK'"
      @back="tab='tab2'"
      @update-value="(value:any)=> onSubmitBank(value)"
      :currency="currency" 
      :type="type" 
    /> -->
             
  </div>

    
  </template>


  <script setup lang="ts">

   import { useDebounceFn } from '@vueuse/core'
    import { Toaster, toast } from 'vue-sonner';
    import { storeToRefs } from 'pinia';
    import { useWalletStore } from '~/store/wallet';
    const { createWallet, fetchRate} = useWalletStore();

    const { loading } = storeToRefs(useWalletStore());
    const emit = defineEmits(['close','update_TransferType'])  // Declare Events

    interface currency {
    type: string;
    name: string;
    ISO: string;
    chain?: string;
    imgUrl?: string;
    chainImgUrl?: string;
    flagEmoji?: string;
    isStablecoin: boolean;
    createdAt: string
  }

 interface wallet {
    currency: currency;
    id:string;
    createdAt:string;
    depositAddress?:string;
    destinationTag?:string;
    accountBalance: string;
    availableBalance: string;
  }
  const wallet = defineModel<wallet>('wallet')

    // const props = defineProps({
    //   wallet: {
    //     type: Object as PropType<Wallet>,
    //     required: true, // or false depending on your needs
    //   },
    // });

    // const {
    //   currency,
    //   type,
    //   imgurl, 
    //   depositAddress,
    //   destinationTag,

    // } = props.wallet

   const tab = ref('tab1');

   const showList = ref(false)

   const DETAILS = reactive({
      CURRENCY_TYPE: wallet.value?.currency.type,
      CURRENCY: wallet.value?.currency.ISO,
      TRANSFER_TYPE: '',
      AMOUNT: 0,
      USERID:'',
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
      tab.value = transferType
      emit('update_TransferType',transferType)
    }

    // const onSubmitAmount = (amount:number)=>{
    //   DETAILS.AMOUNT = amount
    //   tab.value = DETAILS.TRANSFER_TYPE
    // }

    // const onSubmitVyreUser = (userId:string)=>{
    //   DETAILS.USERID = userId
    //   // tab.value = 'tab3'
    // }

    // const onSubmitBlockchain = (blockchainDetails:{address:string; destinationTag:string})=>{
    //   DETAILS.BLOCKCHAIN = blockchainDetails
    //   // tab.value = 'tab3'
    // }

    // const onSubmitBank = (bankDetails:{accountNumber:string;accountName:string;name:string})=>{
    //   DETAILS.BANK = bankDetails
    //   // tab.value = 'tab3'
    // }


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


  