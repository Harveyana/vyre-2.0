<template>
    <div class="w-full h-full bg-white  rounded-xl">

  

      <div class="w-full flex flex-col items-center justify-start  h-full overflow-y-auto">
        <div class="w-full flex items-start">

          <div class="w-full flex flex-col items-start ">

            <p class="Grotesque-Regular text-[16px] text-[#737373]">
              Confirm your
            </p>
            <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A]">
              Complete Information
            </h3>

          </div>

          <button
             class="bg-[#F1F0FE] py-2 px-4 text-black text-xs rounded-md whitespace-nowrap"
            >
            Step 4 of 4
          </button>

        </div>
        
        

        <div class="flex flex-col w-full h-[70vh] gap-y-6 mb-8">

          <form
            @submit.prevent="submitForm()"
            class="w-full mt-4 flex flex-col gap-y-4"
          >
            
          

          <div class="w-full mx-auto sm:p-4 space-y-6">

              <h2 class="text-2xl font-bold text-gray-800">User Information</h2>
              
              <!-- Personal Information Section -->
              <div class="bg-white rounded-lg shadow p-2">
                <h3 class="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Personal Details</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p class="text-sm font-medium text-gray-500">First Name</p>
                    <p class="mt-1 text-gray-900">{{ firstName || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Last Name</p>
                    <p class="mt-1 text-gray-900">{{ lastName || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Phone Number</p>
                    <p class="mt-1 text-gray-900">{{ phoneNumber || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Date of Birth</p>
                    <p class="mt-1 text-gray-900">{{ DOB || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Occupation</p>
                    <p class="mt-1 text-gray-900">{{ occupation || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Employment Status</p>
                    <p class="mt-1 text-gray-900">{{ employmentStatus || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Source of Funds</p>
                    <p class="mt-1 text-gray-900">{{ sourceOfFunds || 'Not provided' }}</p>
                  </div>
                </div>
              </div>

              <!-- Address Section -->
              <div class="bg-white rounded-lg shadow p-2">
                <h3 class="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Address Information</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p class="text-sm font-medium text-gray-500">Street Address</p>
                    <p class="mt-1 text-gray-900">{{ streetLine1 || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">City</p>
                    <p class="mt-1 text-gray-900">{{ city || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">State/Region/Province</p>
                    <p class="mt-1 text-gray-900">{{ stateRegionProvince || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Postal Code</p>
                    <p class="mt-1 text-gray-900">{{ postalCode || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Country Code</p>
                    <p class="mt-1 text-gray-900">{{ countryCode || 'Not provided' }}</p>
                  </div>
                </div>
              </div>

              <!-- Document Information -->
              <div class="bg-white rounded-lg shadow p-2">
                <h3 class="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Document Details</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p class="text-sm font-medium text-gray-500">Document Type</p>
                    <p class="mt-1 text-gray-900">{{ type || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Document ID Number</p>
                    <p class="mt-1 text-gray-900">{{ documentIdNumber || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Issuance Date</p>
                    <p class="mt-1 text-gray-900">{{ issuanceDate || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Expiration Date</p>
                    <p class="mt-1 text-gray-900">{{ expirationDate || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Issuing Country</p>
                    <p class="mt-1 text-gray-900">{{ issuingCountry || 'Not provided' }}</p>
                  </div>
                </div>
              </div>

              <!-- Additional Information -->
              <div class="bg-white rounded-lg shadow p-2">
                <h3 class="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Additional Information</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p class="text-sm font-medium text-gray-500">Proof of Address Type</p>
                    <p class="mt-1 text-gray-900">{{ proofOfAddressType || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Account Purpose</p>
                    <p class="mt-1 text-gray-900">{{ accountPurpose || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Expected Monthly Payments (USD)</p>
                    <p class="mt-1 text-gray-900">{{ expectedMonthlyPaymentsUsd || 'Not provided' }}</p>
                  </div>
                </div>
              </div>

              <!-- Document Images Section -->
              <div v-if="proofOfAddressImage" class="bg-white rounded-lg shadow p-2">
                <h3 class="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Document Images</h3>
                <div>
                  <p class="text-sm font-medium text-gray-500">Proof of Address</p>
                  <div class="mt-2">
                    <a v-if="proofOfAddressImage" 
                      :href="proofOfAddressImage" 
                      target="_blank"
                      class="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100">
                      <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      </svg>
                      View PDF Document
                    </a>
                    <img v-else 
                        :src="proofOfAddressImage" 
                        alt="Proof of Address" 
                        class="mt-2 max-w-full h-auto max-h-64 rounded border border-gray-200">
                  </div>
                </div>
              </div>
            </div>



            <div class="w-full flex items-center justify-center gap-2 mt-6 ">

              <button
               @click="$emit('back')"
                class="w-[30%] sm:w-[20%] border py-3 text-black text-[15px] rounded-xl "
              >
                Back
              </button>

              <button
                type="submit"
                class="w-[70%] sm:w-[80%] py-3 bg-black text-white text-[15px] rounded-xl"
              >
                Proceed
              </button>

            </div>
            

          </form>

          
        </div>
      </div>

    </div>
  </template>
  <script setup lang="ts">
  
  // const imageFile = ref<File>()
   const resetKey = ref(2)

    const firstName = defineModel<string>('firstName')
    const lastName = defineModel<string>('lastName')
    const phoneNumber = defineModel<string>('phoneNumber')
    const DOB = defineModel<string>('DOB')
    const occupation = defineModel<string>('occupation')
    const sourceOfFunds = defineModel<string>('sourceOfFunds')
    const employmentStatus = defineModel<string>('employmentStatus')



    const streetLine1 = defineModel<string>('streetLine1')
    const city = defineModel<string>('city')
    const stateRegionProvince = defineModel<string>('stateRegionProvince')
    const postalCode = defineModel<string>('postalCode')
    const countryCode = defineModel<string>('countryCode')

    const proofOfAddressType = defineModel<string>('proofOfAddressType')
    const proofOfAddressImage = defineModel<string>('proofOfAddressImage')


    const type = defineModel<string>('type')
    const documentIdNumber = defineModel<string>('documentIdNumber')
    const issuanceDate = defineModel<string>('issuanceDate')
    const expirationDate = defineModel<string>('expirationDate')
    const accountPurpose = defineModel<string>('accountPurpose')
    const expectedMonthlyPaymentsUsd = defineModel<string>('expectedMonthlyPaymentsUsd')
    const issuingCountry = defineModel<string>('issuingCountry')

    // const address = reactive({
    //   streetLine1:'',
    //   city:'',
    //   stateRegionProvince:'',
    //   postalCode:'',
    //   countryCode:''
    // })

  const emit = defineEmits(['back','submit'])  // Declare Events

  const submitForm = async()=>{
    
    if(!streetLine1.value || 
      !city.value || 
      !stateRegionProvince.value || 
      !postalCode.value ||
      !countryCode.value || 
      !proofOfAddressImage.value
    ) return
    console.log({
      streetLine1:streetLine1.value, 
      city:city.value, 
      stateRegionProvince: stateRegionProvince.value, 
      postalCode: postalCode.value, 
      countryCode: countryCode.value, 
      proofOfAddressImage: proofOfAddressImage.value
    })

    emit('submit', {
      streetLine1:streetLine1.value, 
      city:city.value, 
      stateRegionProvince: stateRegionProvince.value, 
      postalCode: postalCode.value, 
      countryCode: countryCode.value, 
      proofOfAddressImage: proofOfAddressImage.value
    })

  }

  


  // const props = defineProps<{
  //   model: boolean;
  //   title: string;
  //   description:string;
  //   success:boolean
  // }>()
  // const open =ref(false)


  

</script>
<style scoped>

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .info-card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .info-card h3 {
    margin-top: 0;
    color: #2c3e50;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }

  .info-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px dashed #f0f0f0;
  }

  .info-label {
    font-weight: 500;
    color: #666;
  }

  .info-value {
    text-align: right;
    color: #333;
  }

  @media (max-width: 768px) {
    .cards-container {
      grid-template-columns: 1fr;
    }
  }

</style>

