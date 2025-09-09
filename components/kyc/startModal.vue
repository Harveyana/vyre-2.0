<template>
    <div class="w-full h-fit flex flex-col  items-center justify-start gap-3 rounded-3xl px-2 pt-4 pb-4" >
          <div class="flex flex-col items-center justify-start  w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <!-- Header -->
              <div class="bg-black text-white py-6 w-full px-4">
                  <div class="flex items-center justify-between">
                      <div>
                          <h1 class="text-xl font-bold">KYC Verification</h1>
                          <p class="text-gray-300 text-[12px]">Prepare your documents to get started</p>
                      </div>
                  </div>
              </div>

              <!-- Content -->
              <div class="w-full p-8">
                  <div class="mb-5">
                      <h2 class="text-xl font-semibold mb-4">Required Documents</h2>
                      <p class="text-gray-600 text-[12px]">Please have these documents ready before starting the verification process. This will help complete your KYC quickly and efficiently.</p>
                  </div>

                  <!-- Document Cards -->
                  <div class="w-full flex flex-wrap items-start justify-start gap-6 mb-10">
                      <!-- ID Document Card -->
                      <div class="w-full sm:w-[45%] document-card border border-gray-200 rounded-xl p-6 transition-all duration-300">
                          <div class="flex items-start mb-4">
                              <div class="bg-gray-100 p-3 rounded-lg mr-4">
                                  <i class="fas fa-id-card text-xl text-gray-800"></i>
                              </div>
                              <h3 class="font-semibold text-[13px]">Government ID</h3>
                          </div>
                          <ul class="text-gray-600 space-y-2 text-[11px]">
                              <li class="flex items-start">
                                  <i class="fas fa-check text-black mt-1 mr-2 text-[8px]"></i>
                                  <span>Passport, Driver's License or National ID</span>
                              </li>
                              <li class="flex items-start">
                                  <i class="fas fa-check text-black mt-1 mr-2 text-[9px]"></i>
                                  <span>Must be valid and not expired</span>
                              </li>
                              <li class="flex items-start">
                                  <i class="fas fa-check text-black mt-1 mr-2 text-[9px]"></i>
                                  <span>Clear photo of the entire document</span>
                              </li>
                          </ul>
                      </div>

                      <!-- Proof of Address Card -->
                      <!-- <div class="w-full sm:w-[45%] document-card border border-gray-200 rounded-xl p-6 transition-all duration-300">
                          <div class="flex items-start mb-4">
                              <div class="bg-gray-100 p-3 rounded-lg mr-4">
                                  <i class="fas fa-home text-2xl text-gray-800"></i>
                              </div>
                              <h3 class="font-semibold text-[13px]">Proof of Address</h3>
                          </div>
                          <ul class="text-gray-600 space-y-2 text-[11px]">
                              <li class="flex items-start">
                                  <i class="fas fa-check text-black mt-1 mr-2 text-xs"></i>
                                  <span>Utility bill (electricity, water, gas)</span>
                              </li>
                              <li class="flex items-start">
                                  <i class="fas fa-check text-black mt-1 mr-2 text-xs"></i>
                                  <span>Bank statement or credit card statement</span>
                              </li>
                              <li class="flex items-start">
                                  <i class="fas fa-check text-black mt-1 mr-2 text-xs"></i>
                                  <span>Issued within last 3 months</span>
                              </li>
                          </ul>
                      </div> -->

                      

                      <!-- Additional Documents Card -->
                      <div class="w-full sm:w-[45%] document-card border border-gray-200 rounded-xl p-6 transition-all duration-300">
                          <div class="flex items-start mb-4">
                              <div class="bg-gray-100 p-3 rounded-lg mr-4">
                                  <i class="fas fa-file-alt text-2xl text-gray-800"></i>
                              </div>
                              <h3 class="font-semibold text-[12px]">Address Details</h3>
                          </div>
                          <ul class="text-gray-600 space-y-2 text-[11px]">
                              <li class="flex items-start">
                                  <i class="fas fa-check text-black mt-1 mr-2 text-xs"></i>
                                  <span>The primary street address, including house number and street name</span>
                              </li>
                              <li class="flex items-start">
                                  <i class="fas fa-check text-black mt-1 mr-2 text-xs"></i>
                                  <span>State / Province / Region</span>
                              </li>
                              <li class="flex items-start">
                                  <i class="fas fa-check text-black mt-1 mr-2 text-xs"></i>
                                  <span>The name of the country</span>
                              </li>
                          </ul>
                      </div>
                  </div>

                  <!-- Tips Section -->
                  <div class="bg-gray-100 rounded-xl p-6 mb-10">
                      <h3 class="font-semibold text-lg mb-4 flex items-center">
                          <i class="fas fa-lightbulb text-black mr-2"></i>
                          Preparation Tips
                      </h3>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div class="flex items-start">
                              <i class="fas fa-check-circle text-black mt-1 mr-3"></i>
                              <span>Ensure all documents are clear and readable</span>
                          </div>
                          <div class="flex items-start">
                              <i class="fas fa-check-circle text-black mt-1 mr-3"></i>
                              <span>Use natural light for photos when possible</span>
                          </div>
                          <div class="flex items-start">
                              <i class="fas fa-check-circle text-black mt-1 mr-3"></i>
                              <span>Check that your name and address match across all documents</span>
                          </div>
                          <div class="flex items-start">
                              <i class="fas fa-check-circle text-black mt-1 mr-3"></i>
                              <span>Have both physical and digital copies ready</span>
                          </div>
                      </div>
                  </div>

                  <!-- Action Buttons -->
                  <div class="flex flex-col sm:flex-row justify-between items-center">
                      <!-- <div class="text-gray-600 text-sm mb-4 sm:mb-0">
                          <i class="fas fa-lock mr-2"></i>
                          Your information is securely encrypted
                      </div> -->
                      <div class="w-full flex items-end justify-end gap-x-4">

                          <button @click="$router.back()" class="px-6 py-3 bg-white text-black rounded-2xl font-medium  transition-colors flex items-center">
                            Cancel
                          </button>

                          <button
                          @click="$emit('start')"
                          class="px-6 py-3 bg-black text-white rounded-2xl font-medium  transition-colors flex items-center"
                          :class="user?.userStatus !=='CREATED' ? 'bg-gray-300' : 'bg-black hover:bg-gray-800'"
                          >
                              Begin Verification
                              <i class="fas fa-arrow-right ml-2"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>

        </div>
  </template>
  <script setup lang="ts">

  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { user,loading } = storeToRefs(useAuthStore());
  const { SubmitKyc } = useAuthStore();

  
  // const imageFile = ref<File>()
   const resetKey = ref(2)

    // const address = reactive({
    //   streetLine1:'',
    //   city:'',
    //   stateRegionProvince:'',
    //   postalCode:'',
    //   countryCode:''
    // })

  const emit = defineEmits(['back','start'])  // Declare Events

  // const submitForm = async()=>{

  //   emit('next')

  // }

  // :disabled="user?.userStatus !=='CREATED'"


  // const props = defineProps<{
  //   model: boolean;
  //   title: string;
  //   description:string;
  //   success:boolean
  // }>()
  // const open =ref(false)

  const proofTypes = [
    'BANK_STATEMENT',
    'NATIONAL_ID',
    'DRIVERS_LICENSE',
    'PASSPORT'
    // 'Insurance statement',
    // 'Credit Card statement',
    // 'Employment contract',
    // 'University letter',
    // 'Mortgage Statement',
    // 'Council tax bill',
    // 'Electoral register',
    // 'Driving license',
    // 'Social security Statement',
    // 'Payslip'
  ]

  const countries = ref<{label: string; value: string}[]>([
    // Africa
    { label: 'Algeria', value: 'DZ' },
    { label: 'Angola', value: 'AO' },
    { label: 'Benin', value: 'BJ' },
    { label: 'Botswana', value: 'BW' },
    { label: 'Burkina Faso', value: 'BF' },
    { label: 'Burundi', value: 'BI' },
    { label: 'Cameroon', value: 'CM' },
    { label: 'Cape Verde', value: 'CV' },
    { label: 'Central African Republic', value: 'CF' },
    { label: 'Chad', value: 'TD' },
    { label: 'Comoros', value: 'KM' },
    { label: 'Congo (Brazzaville)', value: 'CG' },
    { label: 'Congo (Kinshasa)', value: 'CD' },
    { label: "Côte d'Ivoire", value: 'CI' },
    { label: 'Djibouti', value: 'DJ' },
    { label: 'Egypt', value: 'EG' },
    { label: 'Equatorial Guinea', value: 'GQ' },
    { label: 'Eritrea', value: 'ER' },
    { label: 'Eswatini', value: 'SZ' },
    { label: 'Ethiopia', value: 'ET' },
    { label: 'Gabon', value: 'GA' },
    { label: 'Gambia', value: 'GM' },
    { label: 'Ghana', value: 'GH' },
    { label: 'Guinea', value: 'GN' },
    { label: 'Guinea-Bissau', value: 'GW' },
    { label: 'Kenya', value: 'KE' },
    { label: 'Lesotho', value: 'LS' },
    { label: 'Liberia', value: 'LR' },
    { label: 'Libya', value: 'LY' },
    { label: 'Madagascar', value: 'MG' },
    { label: 'Malawi', value: 'MW' },
    { label: 'Mali', value: 'ML' },
    { label: 'Mauritania', value: 'MR' },
    { label: 'Mauritius', value: 'MU' },
    { label: 'Morocco', value: 'MA' },
    { label: 'Mozambique', value: 'MZ' },
    { label: 'Namibia', value: 'NA' },
    { label: 'Niger', value: 'NE' },
    { label: 'Nigeria', value: 'NG' },
    { label: 'Rwanda', value: 'RW' },
    { label: 'São Tomé and Príncipe', value: 'ST' },
    { label: 'Senegal', value: 'SN' },
    { label: 'Seychelles', value: 'SC' },
    { label: 'Sierra Leone', value: 'SL' },
    { label: 'Somalia', value: 'SO' },
    { label: 'South Africa', value: 'ZA' },
    { label: 'South Sudan', value: 'SS' },
    { label: 'Sudan', value: 'SD' },
    { label: 'Tanzania', value: 'TZ' },
    { label: 'Togo', value: 'TG' },
    { label: 'Tunisia', value: 'TN' },
    { label: 'Uganda', value: 'UG' },
    { label: 'Zambia', value: 'ZM' },
    { label: 'Zimbabwe', value: 'ZW' },
    
    // Americas
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
    { label: 'Brazil', value: 'BR' },
    { label: 'Mexico', value: 'MX' },
    { label: 'Argentina', value: 'AR' },
    { label: 'Colombia', value: 'CO' },
    { label: 'Peru', value: 'PE' },
    { label: 'Venezuela', value: 'VE' },
    { label: 'Chile', value: 'CL' },
    { label: 'Ecuador', value: 'EC' },
    
    // Asia
    { label: 'China', value: 'CN' },
    { label: 'India', value: 'IN' },
    { label: 'Japan', value: 'JP' },
    { label: 'South Korea', value: 'KR' },
    { label: 'Singapore', value: 'SG' },
    { label: 'United Arab Emirates', value: 'AE' },
    { label: 'Saudi Arabia', value: 'SA' },
    { label: 'Turkey', value: 'TR' },
    { label: 'Pakistan', value: 'PK' },
    { label: 'Indonesia', value: 'ID' },
    
    // Europe
    { label: 'United Kingdom', value: 'GB' },
    { label: 'Germany', value: 'DE' },
    { label: 'France', value: 'FR' },
    { label: 'Italy', value: 'IT' },
    { label: 'Spain', value: 'ES' },
    { label: 'Portugal', value: 'PT' },
    { label: 'Netherlands', value: 'NL' },
    { label: 'Switzerland', value: 'CH' },
    { label: 'Russia', value: 'RU' },
    { label: 'Ukraine', value: 'UA' },
    
    // Oceania
    { label: 'Australia', value: 'AU' },
    { label: 'New Zealand', value: 'NZ' },
    { label: 'Fiji', value: 'FJ' }
  ]);


  </script>

