<template>
    <div class="h-fit bg-white">
<!-- 
      <div class="w-full flex flex-col ml-2">

        <p class="Grotesque-Regular text-[13px] text-[#737373]">
          Account Details, Bank Address
        </p>
        <h3 class="Grotesque-Bold text-[16px] text-[#1A1A1A]">
          Bank Details
        </h3>

      </div> -->

      <div  class="w-full border flex flex-col px-2 rounded-2xl sm:shadow-md py-3 gap-y-3">

        <div class="w-full flex items-center justify-center gap-3">

          <div class="w-full relative">
              <!-- <label class="Grotesque-Regular text-[12px] text-[#010109]">Account Number</label> -->
              <input
                type="text"
                class="Grotesque-Regular text-[12px] w-full bg-gray-100 border-[1px] border-[#2F2B43]/10 px-3 py-1 rounded-3xl flex items-center justify-between focus:ring-0 border-none outline-none"
                v-model="AccountNumber"
                required
                placeholder="Account Number"
              />
          </div>

          <div class="w-full relative">
              <!-- <label class="Grotesque-Regular text-[12px] text-[#010109]">Name</label> -->
              <input
                type="text"
                class="Grotesque-Regular text-[12px] w-full bg-gray-100 border-[1px] border-[#2F2B43]/10 px-3 py-1 rounded-3xl flex items-center justify-between focus:ring-0 border-none outline-none"
                v-model="bankName"
                required
                placeholder="Bank Name"
              />
          </div>

        </div>

      
        <div class="flex items-center justify-center gap-3">

          <div class="w-full relative">
              <!-- <label class="Grotesque-Regular text-[12px] text-[#010109]">Currency</label> -->
              <SetupSelect :options="currencies" :placeholder="Currency ? Currency :'Select Currency'" @update="(value)=>{Currency = value}" />
          </div>

          <div class="w-full relative">
              <!-- <label class="Grotesque-Regular text-[12px] text-[#010109]">Account Type</label> -->
              <SetupSelect :options="[{label:'CHECKING',value:'CHECKING'}, {label:'SAVINGS',value:'SAVINGS'}]" :placeholder="Type ? Type :'Select Type'" @update="(value:any)=>{Type = value}" />
          </div>

        </div>

        <div class="w-full relative">
              <!-- <label class="Grotesque-Regular text-[12px] text-[#010109]">{{getBankField(user?.country)}}</label> -->
              <input
                type="text"
                class="Grotesque-Regular text-[12px] w-full bg-gray-100 border-[1px] border-[#2F2B43]/10 px-4 py-2 rounded-3xl flex items-center justify-between focus:ring-0 border-none outline-none"
                v-model="Optional"
                required
                :placeholder="`${getBankField(user?.country)} (optional)`"
              />
        </div>

        <div class="w-full flex flex-col items-start justify-center border-dashed border-black px-4 rounded-2xl py-2 mt-3 gap-y-3">
          <h2 class="Grotesque-Regular text-md text-[#010109]">Bank Address</h2>

          <div class="w-full flex items-center justify-center gap-3">

            <div class="w-full relative">
                <!-- <label class="Grotesque-Regular text-[12px] text-[#010109]">Country</label> -->
                <SetupSelect :options="countries" :placeholder="Country ? Country :'Select Country'" @update="(value)=>{Country = value}" />
            </div>

            <div class="w-full relative">
                <!-- <label class="Grotesque-Regular text-[12px] text-[#010109]">State</label> -->
                <input
                  type="text"
                  class="Grotesque-Regular text-[12px] w-full bg-gray-100 border-[1px] border-[#2F2B43]/10 px-4 py-1 rounded-3xl flex items-center justify-between focus:ring-0 border-none outline-none"
                  v-model="State"
                  required
                  placeholder="State"
                />
            </div>

        </div>

        <div class="w-full relative">
              <!-- <label class="Grotesque-Regular text-[12px] text-[#010109]">Address Line 1</label> -->
              <input
                type="text"
                class="Grotesque-Regular text-[12px] w-full bg-gray-100 border-[1px] border-[#2F2B43]/10 px-4 py-1 rounded-3xl flex items-center justify-between focus:ring-0 border-none outline-none"
                v-model="Address1"
                required
                placeholder="Address Line 1"
              />
        </div>

        <div class="w-full relative">
              <!-- <label class="Grotesque-Regular text-[12px] text-[#010109]">Address Line 2</label> -->
              <input
                type="text"
                class="Grotesque-Regular text-[12px] w-full bg-gray-100 border-[1px] border-[#2F2B43]/10 px-4 py-1 rounded-3xl flex items-center justify-between focus:ring-0 border-none outline-none"
                v-model="Address2"
                required
                placeholder="Address Line 2"
              />
        </div>

        <div class="w-full flex items-center justify-center gap-3">

          <div class="w-full relative">
              <!-- <label class="Grotesque-Regular text-[12px] text-[#010109]">City</label> -->
              <input
                type="text"
                class="Grotesque-Regular text-[12px] w-full bg-gray-100 border-[1px] border-[#2F2B43]/10 px-3 py-1 rounded-3xl flex items-center justify-between focus:ring-0 border-none outline-none"
                v-model="City"
                required
                placeholder="City"
              />
          </div>

          <div class="w-full relative">
              <!-- <label class="Grotesque-Regular text-[12px] text-[#010109]">Postal Code</label> -->
              <input
                type="text"
                class="Grotesque-Regular text-[12px] w-full bg-gray-100 border-[1px] border-[#2F2B43]/10 px-4 py-1 rounded-3xl flex items-center justify-between focus:ring-0 border-none outline-none"
                v-model="PostalCode"
                required
                placeholder="Postal Code"
              />
          </div>

        </div>

       
          


      </div>

        <div class="w-full flex items-center justify-center gap-x-2 mt-6" >

          <button
              @click="$emit('back')"
                type="submit"
                class="w-full py-3 text-black border text-[15px] rounded-3xl "
              >
              Back
          </button>

          <button
              @click="$emit('submit')"
                type="submit"
                class="w-full py-3 bg-black  text-white text-[15px] rounded-3xl "
              >
              Submit
          </button>

        </div>

        



        </div>
        

    </div>


  </template>

  <script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useWalletStore } from '~/store/wallet';
  import { useAuthStore } from '~/store/auth';
  const { createWallet, fetchRate} = useWalletStore();

  const { loading } = storeToRefs(useWalletStore()); // make authenticated state reactive with storeToRefs
  const { user } = storeToRefs(useAuthStore());

  const showLoader = ref(false)
  
  const insufficient = ref(false)
  // const toggleState = ref(false)

  // const state = useGlobalState()
  // const AssetMap = state.assetMap
  // const entry = ref(0.00)

  const bankName = defineModel<string>('bankName')
  const AccountNumber = defineModel<string>('AccountNumber')
  const Optional = defineModel<string>('Optional')
  const Currency = defineModel<string>('Currency')
  const Type = defineModel<string>('Type')
  const Country = defineModel<string>('Country')
  const State = defineModel<string>('State')
  const Address1 = defineModel<string>('Address1')
  const Address2 = defineModel<string>('Address2')
  const City = defineModel<string>('City')
  const PostalCode = defineModel<string>('PostalCode')



  const route = useRouter()

  const emit = defineEmits(['submit','update-value','back'])  // Declare Events




  const rate = ref(0)

  const getBankField = computed(() => (countryName: string) => {
    const countryToFieldMap: Record<string, string> = {
      'United States': 'routingNumber',
      'United Kingdom': 'sortCode',
      'Canada': 'transitNumber',
      'Australia': 'bsbNumber',
      'India': 'ifscCode',
      'Mexico': 'clabeNumber',
      'China': 'cnapsCode',
      'Nigeria': 'nubanNumber',
      'Brazil': 'pixCode',
      'Hong Kong': 'clearingCode'
      // Add more countries as needed
    };

    // Fallback logic
    return countryToFieldMap[countryName] || 'bicSwift'; // Default to SWIFT/BIC
  });

  // onMounted(async()=>{
  //   getRate()
  // })

  const currencies = ref<{label: string; value: string}[]>([
    { label: 'Algeria (DZD)', value: 'DZD' },
    { label: 'Angola (AOA)', value: 'AOA' },
    { label: 'Benin (XOF)', value: 'XOF' },
    { label: 'Botswana (BWP)', value: 'BWP' },
    { label: 'Burkina Faso (XOF)', value: 'XOF' },
    { label: 'Burundi (BIF)', value: 'BIF' },
    { label: 'Cameroon (XAF)', value: 'XAF' },
    { label: 'Cape Verde (CVE)', value: 'CVE' },
    { label: 'Central African Republic (XAF)', value: 'XAF' },
    { label: 'Chad (XAF)', value: 'XAF' },
    { label: 'Comoros (KMF)', value: 'KMF' },
    { label: 'Congo-Brazzaville (XAF)', value: 'XAF' },
    { label: 'Congo-Kinshasa (CDF)', value: 'CDF' },
    { label: "Côte d'Ivoire (XOF)", value: 'XOF' },
    { label: 'Djibouti (DJF)', value: 'DJF' },
    { label: 'Egypt (EGP)', value: 'EGP' },
    { label: 'Equatorial Guinea (XAF)', value: 'XAF' },
    { label: 'Eritrea (ERN)', value: 'ERN' },
    { label: 'Eswatini (SZL)', value: 'SZL' },
    { label: 'Ethiopia (ETB)', value: 'ETB' },
    { label: 'Gabon (XAF)', value: 'XAF' },
    { label: 'Gambia (GMD)', value: 'GMD' },
    { label: 'Ghana (GHS)', value: 'GHS' },
    { label: 'Guinea (GNF)', value: 'GNF' },
    { label: 'Guinea-Bissau (XOF)', value: 'XOF' },
    { label: 'Kenya (KES)', value: 'KES' },
    { label: 'Lesotho (LSL)', value: 'LSL' },
    { label: 'Liberia (LRD)', value: 'LRD' },
    { label: 'Libya (LYD)', value: 'LYD' },
    { label: 'Madagascar (MGA)', value: 'MGA' },
    { label: 'Malawi (MWK)', value: 'MWK' },
    { label: 'Mali (XOF)', value: 'XOF' },
    { label: 'Mauritania (MRU)', value: 'MRU' },
    { label: 'Mauritius (MUR)', value: 'MUR' },
    { label: 'Morocco (MAD)', value: 'MAD' },
    { label: 'Mozambique (MZN)', value: 'MZN' },
    { label: 'Namibia (NAD)', value: 'NAD' },
    { label: 'Niger (XOF)', value: 'XOF' },
    { label: 'Nigeria (NGN)', value: 'NGN' },
    { label: 'Rwanda (RWF)', value: 'RWF' },
    { label: 'São Tomé and Príncipe (STN)', value: 'STN' },
    { label: 'Senegal (XOF)', value: 'XOF' },
    { label: 'Seychelles (SCR)', value: 'SCR' },
    { label: 'Sierra Leone (SLL)', value: 'SLL' },
    { label: 'Somalia (SOS)', value: 'SOS' },
    { label: 'South Africa (ZAR)', value: 'ZAR' },
    { label: 'South Sudan (SSP)', value: 'SSP' },
    { label: 'Sudan (SDG)', value: 'SDG' },
    { label: 'Tanzania (TZS)', value: 'TZS' },
    { label: 'Togo (XOF)', value: 'XOF' },
    { label: 'Tunisia (TND)', value: 'TND' },
    { label: 'Uganda (UGX)', value: 'UGX' },
    { label: 'Zambia (ZMW)', value: 'ZMW' },
    { label: 'Zimbabwe (ZWL)', value: 'ZWL' }
  ]);

  const countries = ref<{label: string; value: string}[]>([
  { label: 'Algeria', value: 'Algeria' },
  { label: 'Angola', value: 'Angola' },
  { label: 'Benin', value: 'Benin' },
  { label: 'Botswana', value: 'Botswana' },
  { label: 'Burkina Faso', value: 'Burkina Faso' },
  { label: 'Burundi', value: 'Burundi' },
  { label: 'Cameroon', value: 'Cameroon' },
  { label: 'Cape Verde', value: 'Cape Verde' },
  { label: 'Central African Republic', value: 'Central African Republic' },
  { label: 'Chad', value: 'Chad' },
  { label: 'Comoros', value: 'Comoros' },
  { label: 'Congo-Brazzaville', value: 'Congo-Brazzaville' },
  { label: 'Congo-Kinshasa', value: 'Congo-Kinshasa' },
  { label: "Côte d'Ivoire", value: "Côte d'Ivoire" },
  { label: 'Djibouti', value: 'Djibouti' },
  { label: 'Egypt', value: 'Egypt' },
  { label: 'Equatorial Guinea', value: 'Equatorial Guinea' },
  { label: 'Eritrea', value: 'Eritrea' },
  { label: 'Eswatini', value: 'Eswatini' },
  { label: 'Ethiopia', value: 'Ethiopia' },
  { label: 'Gabon', value: 'Gabon' },
  { label: 'Gambia', value: 'Gambia' },
  { label: 'Ghana', value: 'Ghana' },
  { label: 'Guinea', value: 'Guinea' },
  { label: 'Guinea-Bissau', value: 'Guinea-Bissau' },
  { label: 'Kenya', value: 'Kenya' },
  { label: 'Lesotho', value: 'Lesotho' },
  { label: 'Liberia', value: 'Liberia' },
  { label: 'Libya', value: 'Libya' },
  { label: 'Madagascar', value: 'Madagascar' },
  { label: 'Malawi', value: 'Malawi' },
  { label: 'Mali', value: 'Mali' },
  { label: 'Mauritania', value: 'Mauritania' },
  { label: 'Mauritius', value: 'Mauritius' },
  { label: 'Morocco', value: 'Morocco' },
  { label: 'Mozambique', value: 'Mozambique' },
  { label: 'Namibia', value: 'Namibia' },
  { label: 'Niger', value: 'Niger' },
  { label: 'Nigeria', value: 'Nigeria' },
  { label: 'Rwanda', value: 'Rwanda' },
  { label: 'São Tomé and Príncipe', value: 'São Tomé and Príncipe' },
  { label: 'Senegal', value: 'Senegal' },
  { label: 'Seychelles', value: 'Seychelles' },
  { label: 'Sierra Leone', value: 'Sierra Leone' },
  { label: 'Somalia', value: 'Somalia' },
  { label: 'South Africa', value: 'South Africa' },
  { label: 'South Sudan', value: 'South Sudan' },
  { label: 'Sudan', value: 'Sudan' },
  { label: 'Tanzania', value: 'Tanzania' },
  { label: 'Togo', value: 'Togo' },
  { label: 'Tunisia', value: 'Tunisia' },
  { label: 'Uganda', value: 'Uganda' },
  { label: 'Zambia', value: 'Zambia' },
  { label: 'Zimbabwe', value: 'Zimbabwe' }
]);


  </script>
