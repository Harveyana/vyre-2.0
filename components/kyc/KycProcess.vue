  <template>
     <div class="w-full h-fit flex flex-col items-center justify-start gap-3 rounded-3xl px-2 pt-4 pb-4">

        <div class="w-full px-2 sm:px-10" >

            <Personal v-if="tab === 'PERSONAL'"
                v-model:firstName="DETAILS.legalFirstName" 
                v-model:lastName="DETAILS.legalLastName" 
                v-model:phoneNumber="DETAILS.phoneNumber"
                v-model:DOB="DETAILS.dateOfBirth"
                v-model:occupation="DETAILS.mostRecentOccupation"
                v-model:sourceOfFunds="DETAILS.sourceOfFunds"
                v-model:employmentStatus="DETAILS.employmentStatus"

                @next="goToNextTab('PERSONAL', 'ADDRESS')"
            />

            <Address v-if="tab === 'ADDRESS'"

                @next="() => goToNextTab('ADDRESS', 'IDENTITY')"
                @back="() => goToPreviousTab('PERSONAL')"

                v-model:streetLine1="DETAILS.address.streetLine1" 
                v-model:city="DETAILS.address.city" 
                v-model:stateRegionProvince="DETAILS.address.stateRegionProvince"
                v-model:postalCode="DETAILS.address.postalCode"
                v-model:countryCode="DETAILS.address.countryCode"

            />

            <Identity v-if="tab === 'IDENTITY'"

                @next="() => goToNextTab('IDENTITY', 'SUBMIT')"
                @back="() => goToPreviousTab('ADDRESS')"


                v-model:accountPurpose="DETAILS.accountPurpose"

                v-model:type="DETAILS.documents.governmentId.type"
                v-model:documentIdNumber="DETAILS.documents.governmentId.documentIdNumber"
                v-model:issuanceDate="DETAILS.documents.governmentId.issuanceDate"
                v-model:expirationDate="DETAILS.documents.governmentId.expirationDate"
                
                v-model:expectedMonthlyPaymentsUsd="DETAILS.expectedMonthlyPaymentsUsd"
                v-model:nationalIdType="DETAILS.nationalIdType"
                v-model:nationalIdNumber="DETAILS.nationalIdNumber"
                v-model:frontIdImage="DETAILS.documents.governmentId.frontIdImage"
            />

            <Submit v-if="tab === 'SUBMIT'"
                @back="tab='IDENTITY'"
                @submit="()=>submitKyc()"

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


                v-model:accountPurpose="DETAILS.accountPurpose"
                v-model:type="DETAILS.documents.governmentId.type"
                v-model:documentIdNumber="DETAILS.documents.governmentId.documentIdNumber"
                v-model:issuanceDate="DETAILS.documents.governmentId.issuanceDate"
                v-model:expirationDate="DETAILS.documents.governmentId.expirationDate"
                
                v-model:expectedMonthlyPaymentsUsd="DETAILS.expectedMonthlyPaymentsUsd"
                v-model:frontIdImage="DETAILS.documents.governmentId.frontIdImage"

            />

        
        </div>


        </div>
  </template>
  <script setup lang="ts">

  import { identity, useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useOrderStore } from '~/store/order';
  import { useAuthStore } from '~/store/auth';
  const { user } = storeToRefs(useAuthStore());
  const { SubmitKyc } = useAuthStore();
  const { createOrder } = useOrderStore();

  const { loading } = storeToRefs(useOrderStore());

  
   const resetKey = ref(2)
    

  const emit = defineEmits(['back','next','close'])  // Declare Event

  const tab = ref('PERSONAL');
   
  //  const Tab = ref()

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
    nationalIdType: '',
    nationalIdNumber:'',
    documents:{
      governmentId:{
        type: 'PASSPORT',
        // countryCode: '',
        documentIdNumber: '',
        issuanceDate: '',
        expirationDate: '',
        frontIdImage: undefined
      }

      // proof_of_Address:{
      //   type: "BANK_STATEMENT",
      //   description: "Electric bill from January 2024",
      //   proofOfAddressImage: "data:application/pdf;base64,..."
      // }
        
    },
    employmentStatus: '',
    mostRecentOccupation: '',
    sourceOfFunds: '',
    accountPurpose: '',
    expectedMonthlyPaymentsUsd: '',
    // isIntermediary: false
    })

    const submitKyc = async()=>{
        // DETAILS.amount = amount
        // DETAILS.minimumAmount = minimumAmount
        // emit('close')
        console.log('DETAILS',DETAILS)
        
        toast.promise(() => new Promise(async(resolve,reject) =>{

        const submitted = await SubmitKyc(DETAILS)
        if (submitted?.success) {
            resolve({msg:submitted.msg})
          }else{
            reject({msg:submitted.msg})
        }

        }), 
        {
            loading: 'Submitting Details...',
            success: (data: any) => {
            emit('close')
            return data.msg
            },
            error: (data: any) => {return data.msg}
        })

    }


  const validateRequired = (value: any): boolean => {
    return value !== undefined && value !== null && value !== '' && value.toString().trim() !== '';
  };
  
  const validatePhone = (phone: string): boolean => {
    return phone.replace(/\D/g, '').length >= 10;
  };

  const validateDate = (date: string): boolean => {
    return !isNaN(new Date(date).getTime());
  };

  const validatePersonalStep = (): boolean => {
    return (
      validateRequired(DETAILS.legalFirstName) &&
      validateRequired(DETAILS.legalLastName) &&
      validatePhone(DETAILS.phoneNumber) &&
      validateDate(DETAILS.dateOfBirth) &&
      validateRequired(DETAILS.employmentStatus) &&
      validateRequired(DETAILS.mostRecentOccupation) &&
      validateRequired(DETAILS.sourceOfFunds)
    );
  };

  const validateAddressStep = (): boolean => {
    return (
      validateRequired(DETAILS.address.streetLine1) &&
      validateRequired(DETAILS.address.city) &&
      validateRequired(DETAILS.address.stateRegionProvince) &&
      validateRequired(DETAILS.address.postalCode) &&
      validateRequired(DETAILS.address.countryCode)
      // validateRequired(DETAILS.documents.proof_of_Address.proofOfAddressImage)
    );
  };

  const validateIdentityStep = (): boolean => {
    const issuanceDateValid = validateDate(DETAILS.documents.governmentId.issuanceDate);
    
    // Only validate expiration date if it's provided
    const expirationDateValid = DETAILS.documents.governmentId.expirationDate 
        ? validateDate(DETAILS.documents.governmentId.expirationDate) 
        : true;
    
    // Only check if not expired if expiration date is provided and valid
    const notExpired = !DETAILS.documents.governmentId.expirationDate || (expirationDateValid && new Date(DETAILS.documents.governmentId.expirationDate) > new Date());
    
    return (
        validateRequired(DETAILS.nationalIdType) &&
        validateRequired(DETAILS.nationalIdNumber) &&
        validateRequired(DETAILS.accountPurpose) &&
        validateRequired(DETAILS.documents.governmentId.documentIdNumber) &&
        issuanceDateValid &&
        expirationDateValid &&
        notExpired &&
        validateRequired(DETAILS.expectedMonthlyPaymentsUsd) &&
        // validateRequired(DETAILS.documents.governmentId.countryCode) &&
        DETAILS.documents.governmentId.frontIdImage !== undefined
    );
  };

  const validateStep = (step: string): boolean => {
    switch (step) {
      case 'PERSONAL':
        if (!validatePersonalStep()) {
          toast.error('Please fill all personal information correctly');
          return false;
        }
        break;
      case 'ADDRESS':
        if (!validateAddressStep()) {
          toast.error('Please fill all address information correctly');
          return false;
        }
        break;
      case 'IDENTITY':
        if (!validateIdentityStep()) {
          toast.error('Please fill all identity information correctly');
          return false;
        }
        break;
    }
    return true;
  };

  
  const goToNextTab = (currentTab: string, nextTab: string) => {
    if (validateStep(currentTab)) {
      tab.value = nextTab;
    }
  };

  const goToPreviousTab = (previousTab: string) => {
    tab.value = previousTab;
  };


  

  

  


  </script>

