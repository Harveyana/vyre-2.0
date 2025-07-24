<template>
  <div class="w-full h-full flex flex-col items-center justify-start">
     
      <div class="w-full sm:w-[50%] h-full flex items-start justify-start">

        <button @click="$router.back()" class="rounded-xl px-3 py-2 flex items-center justify-center gap-1 text-[12px] sm:text-[15px] text-black Grotesque-Regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000" d="m4.836 12l6.207 6.207l1.414-1.414L7.664 12l4.793-4.793l-1.414-1.414zm5.65 0l6.207 6.207l1.414-1.414L13.314 12l4.793-4.793l-1.414-1.414z"/></svg>
          Back
        </button>
        
      </div>
     
     <div class="w-full sm:w-[50%] h-full flex flex-col items-center justify-center"> 

        <!-- <div class="w-full flex items-start">

            <div class="w-full flex flex-col">

              <p class="Grotesque-Regular text-[16px] text-[#737373]">
                Select Order Pair
              </p>
              <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A]">
                Choose Your Preference
              </h3>

            </div>

            <button
             class="bg-[#F1F0FE] py-2 px-4 text-black text-xs rounded-md whitespace-nowrap"
            >
              Step 2 of 4
            </button>



        </div> -->


      <div class="w-full h-fit flex flex-col items-center justify-start gap-3 rounded-lg overflow-y-auto sm:pt-8">
        
        
          
        <div class="w-full h-fit flex flex-col items-center justify-start gap-3 rounded-3xl px-2 pt-4 sm:pt-6 pb-4">
          <!-- <TabsRoot v-model:modelValue="DETAILS.type" class="w-full bg-[#F8F8FC] h-fit rounded-2xl" default-value="BUY">
                <TabsList class="h-full p-1 rounded-2xl bg-black shrink-0 flex items-center justify-center" aria-label="Manage your account">

                  <TabsTrigger
                        class="Grotesque-Regular py-2.5 flex-1 flex flex-col gap-2 items-center justify-center text-[14px] sm:text-[16px] leading-none text-[#A7A7A7] select-none  rounded-2xl  data-[state=active]:bg-white data-[state=active]:text-black outline-none cursor-default transition ease-in-out duration-300"                      
                        value="BUY"
                      >
                      Buy
                      <p class=" Grotesque-Light text-[11px] text-[#A7A7A7] data-[state=active]:text-black">
                        Purchase crypto from other users
                      </p>
                  </TabsTrigger>

                  <TabsTrigger
                        class="Grotesque-Regular py-2.5 flex-1 flex flex-col gap-2 items-center justify-center text-[14px] sm:text-[16px] leading-none text-[#A7A7A7] select-none  rounded-2xl  data-[state=active]:bg-white data-[state=active]:text-black outline-none cursor-default transition ease-in-out duration-300"                      
                        value="SELL"
                      >
                      Sell
                      <p class=" Grotesque-Light text-[11px] text-[#A7A7A7] data-[state=active]:text-black">
                        Sell your crypto to other users
                      </p>
                  </TabsTrigger>
                      
                </TabsList>
                          
          </TabsRoot> -->

          

          <div class="w-full px-2 sm:px-10" >

              <Personal v-if="tab === 'PERSONAL'"
               v-model:firstName="DETAILS.legalFirstName" 
               v-model:lastName="DETAILS.legalLastName" 
               v-model:phoneNumber="DETAILS.phoneNumber"
               v-model:DOB="DETAILS.dateOfBirth"
               v-model:occupation="DETAILS.mostRecentOccupation"
               v-model:sourceOfFunds="DETAILS.sourceOfFunds"
               v-model:employmentStatus="DETAILS.employmentStatus"

                @next="tab = 'ADDRESS'"
              />

              <Address v-if="tab === 'ADDRESS'"
                @next="tab = 'IDENTITY'" 
                @back="tab='PERSONAL'"

                v-model:streetLine1="DETAILS.address.streetLine1" 
                v-model:city="DETAILS.address.city" 
                v-model:stateRegionProvince="DETAILS.address.stateRegionProvince"
                v-model:postalCode="DETAILS.address.postalCode"
                v-model:countryCode="DETAILS.address.countryCode"

                v-model:proofOfAddressType="DETAILS.documents.proof_of_Address.type"
                v-model:proofOfAddressImage="DETAILS.documents.proof_of_Address.proofOfAddressImage"
              />

              <Identity v-if="tab === 'IDENTITY'"
                @next="tab = 'SUBMIT'"
                @back="tab='ADDRESS'"
                v-model:accountPurpose="DETAILS.accountPurpose"

                v-model:type="DETAILS.documents.governmentId.type"
                v-model:documentIdNumber="DETAILS.documents.governmentId.documentIdNumber"
                v-model:issuanceDate="DETAILS.documents.governmentId.issuanceDate"
                v-model:expirationDate="DETAILS.documents.governmentId.expirationDate"
                
                v-model:expectedMonthlyPaymentsUsd="DETAILS.expectedMonthlyPaymentsUsd"
                v-model:countryCode="DETAILS.documents.governmentId.countryCode"
                v-model:frontIdImage="DETAILS.documents.governmentId.frontIdImage"
              />

              <Submit v-if="tab === 'SUBMIT'"
                @back="tab='IDENTITY'"
                @submit="(value:any)=>submitOrder(value.amount,value.minimumAmount)"

                v-model:firstName="DETAILS.legalFirstName" 
                v-model:lastName="DETAILS.legalLastName" 
                v-model:phoneNumber="DETAILS.phoneNumber"
                v-model:DOB="DETAILS.dateOfBirth"
                v-model:occupation="DETAILS.mostRecentOccupation"
                v-model:sourceOfFunds="DETAILS.sourceOfFunds"
                v-model:employmentStatus="DETAILS.employmentStatus"

                
                v-model:streetLine1="DETAILS.address.streetLine1" 
                v-model:city="DETAILS.address.city" 
                v-model:stateRegionProvince="DETAILS.address.stateRegionProvince"
                v-model:postalCode="DETAILS.address.postalCode"
                v-model:countryCode="DETAILS.address.countryCode"

                v-model:proofOfAddressType="DETAILS.documents.proof_of_Address.type"
                v-model:proofOfAddressImage="DETAILS.documents.proof_of_Address.proofOfAddressImage"


                v-model:accountPurpose="DETAILS.accountPurpose"
                v-model:type="DETAILS.documents.governmentId.type"
                v-model:documentIdNumber="DETAILS.documents.governmentId.documentIdNumber"
                v-model:issuanceDate="DETAILS.documents.governmentId.issuanceDate"
                v-model:expirationDate="DETAILS.documents.governmentId.expirationDate"
                
                v-model:expectedMonthlyPaymentsUsd="DETAILS.expectedMonthlyPaymentsUsd"
                v-model:issuingCountry="DETAILS.documents.governmentId.countryCode"
                v-model:frontIdImage="DETAILS.documents.governmentId.frontIdImage"




              />

             

              
          </div>


        </div>


      
        
      </div>

     </div>

  </div>
 
    
</template>

<script setup lang="ts">

  import { identity, useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useOrderStore } from '~/store/order';
  import Address from '../components/kyc/address.vue';
  const { createOrder } = useOrderStore();

  const { loading } = storeToRefs(useOrderStore());

  definePageMeta({
    layout: 'operation'
  })

    // const props = defineProps({
    //   type: String,
    //   currency: String,
    //   balance: Number
    // });

    // const {currency, balance, type} = props

   const tab = ref('SUBMIT');
   const emit = defineEmits(['close'])
   
   const order = ref()

   const showList = ref(false)

   const DETAILS = reactive({
    legalFirstName: '',
    legalLastName: '',
    phoneNumber: '',
    dateOfBirth: '',
    address: {
      streetLine1: '',
      city: '',
      stateRegionProvince: '',
      postalCode: '',
      countryCode: ''
    },
    taxIdNumber: '',
    documents:{
      governmentId:{
        type: 'PASSPORT',
        countryCode: '',
        documentIdNumber: '',
        issuanceDate: '',
        expirationDate: '',
        frontIdImage: null
      },
      proof_of_Address:{
        type: "UTILITY_BILL",
        description: "Electric bill from January 2024",
        proofOfAddressImage: "data:application/pdf;base64,..."
      }
        
    },
    employmentStatus: '',
    mostRecentOccupation: '',
    sourceOfFunds: '',
    accountPurpose: '',
    expectedMonthlyPaymentsUsd: '',
    // isIntermediary: false
    })

    

  const submitOrder = async(amount:number,minimumAmount:number)=>{
    DETAILS.amount = amount
    DETAILS.minimumAmount = minimumAmount
    // emit('close')
    toast.promise(() => new Promise(async(resolve,reject) =>{

      const created = await createOrder(DETAILS)
      if (created?.success) {
          order.value = created?.order
          tab.value = 'SUCCESS'

          resolve({msg:created.msg})
          // emit('verified', verified?.userId)
        }else{
          reject({msg:created.msg})
          // $toast.error(verified.msg)
      }

    }), 
    {
        loading: 'Creating Order',
        success: (data: any) => {
          // emit('close')
          return data.msg
        },
        error: (data: any) => {return data.msg}
    })

  }








</script>

<style>
* {
  font-family: "cabinetGrotesk", sans-serif;
}

.extraboldCabinet {
  font-family: "cabinetGroteskBold", sans-serif;
}

.blackCabinet {
  font-family: "cabinetGroteskBlack", sans-serif;
}
</style>