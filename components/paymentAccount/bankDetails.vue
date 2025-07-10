<template>
    <div class="h-[59vh] bg-white">

      <div class="w-full flex items-center justify-between px-4 my-6">
        <div :class="['h-1 rounded-full w-[30%]', Tab === 'CURRENCY'? 'bg-black' : 'bg-gray-100']"></div>
        <div :class="['h-1 rounded-full w-[30%]', Tab === 'BANK'? 'bg-black' : 'bg-gray-100']"></div>
        <div :class="['h-1 rounded-full w-[30%]', Tab === 'SUBMIT'? 'bg-black' : 'bg-gray-100']"></div>
      </div>
 

      <!-- select currency -->
      <div v-if="Tab === 'CURRENCY'" class="w-full h-[80%] flex flex-col px-2 rounded-2xl sm:shadow-md py-3 gap-y-3">
        <!-- Continent Tabs -->
        <div class="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
          <button
            v-for="(_, continent) in currenciesByContinent"
            :key="`tab-${continent}`"
            @click="activeContinent = continent"
            :class="[
              'px-4 py-2 text-[12px] rounded-full whitespace-nowrap transition-colors',
              activeContinent === continent 
                ? 'bg-black text-white shadow-md'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700 '
            ]"
          >
            {{ continent.replace('_', ' ') }}
          </button>
        </div>

        <!-- Currency Grid -->
        <div class="w-full gap-2 flex items-center justify-start flex-wrap overflow-y-auto">
          <button
            v-for="currency in currentContinentCurrencies"
            :key="currency.currency"
            @click="selectCurrency(currency)"
            :class="[
              'p-3 rounded-xl border transition-all text-left',
              'hover:shadow-md hover:border-blue-300',
              'flex items-start gap-3 bg-white',
              selectedCurrency?.currency === currency.currency
                ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                : 'border-gray-200'
            ]"
          >
           
            <div class="">
              <div class="flex gap-x-2 justify-start items-center">
                <span class=" sm:text-2xl  mt-0.5">{{ getFlagEmoji(currency.country) }}</span>
                <span class="text-[10px] sm:text-[18px] font-bold text-gray-900">{{ currency.currency }}</span>
              </div>
              <span class="block text-sm text-gray-600 mt-1 whitespace-nowrap">{{ currency.country }}</span>
            </div>

          </button>
        </div>

      </div>

      <!-- select bank -->
      <div v-if="Tab === 'BANK'"  class="w-full h-[80%] flex flex-col px-2 rounded-2xl sm:shadow-md py-3 gap-y-3">

        <div class="w-full h-full overflow-y-auto items-center justify-start">

          <!-- banks list -->
          <div class="w-full gap-2 flex flex-col items-start justify-start overflow-y-auto px-2">
            <button
              v-for="bank in BanksByCurrency"
              :key="bank.id"
              @click="selectBank(bank)"
              :class="[
                'px-3 py-2 rounded-xl border transition-all text-left',
                'hover:shadow-md hover:border-blue-300',
                'flex items-start gap-3 bg-white',
                selectedBank?.name === bank.name
                  ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                  : 'border-gray-200'
              ]"
            >
            
              <div class="w-full flex items-center justify-start gap-2">
                <div class="flex gap-x-2 justify-start items-center">
                  <svg v-if="selectedBank?.name === bank.name" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000" d="m10 17l-5-5l1.41-1.42L10 14.17l7.59-7.59L19 8m-7-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#979494" d="m10 17l-5-5l1.41-1.42L10 14.17l7.59-7.59L19 8m-7-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
                </div>
                <span class="text-[10px] sm:text-[13px] text-gray-900 Grotesque-Regular">{{ bank.name }}</span>
              </div>

            </button>

          </div>

        
        </div>

        <div v-if="selectedBank?.name" class="flex items-center justify-start gap-x-2 px-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20"><path fill="#000" d="M10 2L3 6v1h14V6zM5 8l-.2 7h2.5L7 8zm4 0l-.2 7h2.5L11 8zm4 0l-.2 7h2.5L15 8zM3 18h14v-2H3z"/></svg>
          <h2 class="text-[12px] sm:text-[13px] text-gray-900 Grotesque-Regular">{{ selectedBank?.name }}</h2>
        </div>
        
      </div>

      <!-- bank details -->
      <div v-if="Tab === 'SUBMIT'"  class="w-full h-[80%] flex flex-col px-2 rounded-2xl sm:shadow-md py-3 gap-y-3">

        <div class="w-full items-center justify-start">

          <div class="w-full flex flex-col items-start justify-start gap-y-2">
            <!-- preview -->
            <div class="w-full flex flex-col items-start justify-start gap-2" >

              <div class="">
                <div class="flex gap-x-2 justify-start items-center">
                  <span class=" sm:text-2xl  mt-0.5">{{ getFlagEmoji(selectedCurrency?.country as string) }}</span>
                  <span class="text-[10px] sm:text-[18px] font-bold text-gray-900">{{ selectedCurrency?.currency }}</span>
                </div>
                <span class="block text-sm text-gray-600 mt-1 whitespace-nowrap">{{ selectedCurrency?.country }}</span>
              </div>

              <h2 class="text-[12px] sm:text-[15px] text-gray-900 Grotesque-Regular">{{ selectedBank?.name }}</h2>
            </div>

            <div class="w-full flex flex-col sm:flex-row items-start justify-start gap-2" >

              <input
                id="place"
                type="text"
                v-model="AccountNumber"
                class="Grotesque-Regular text-[12px] w-full sm:w-1/2 bg-gray-100 border-[1px] border-[#2F2B43]/10 px-3 py-2 rounded-xl focus:ring-0 border-none outline-none"
                placeholder="Account number || IBAN"
              />

              <div class="w-full sm:w-1/2 relative">
                <SetupSelect :options="[{label:'CHECKING',value:'CHECKING'}, {label:'SAVINGS',value:'SAVINGS'}]" :placeholder="Type ? Type :'Select Type'" @update="(value:any)=>{Type = value}" />
              </div>

            </div>


            <div class="w-full flex flex-col sm:flex-row items-start justify-start gap-2" >

              <input
                  type="text"
                  class="Grotesque-Regular text-[12px] w-full sm:w-1/2 bg-gray-100 border-[1px] border-[#2F2B43]/10 px-4 py-2 rounded-xl flex items-center justify-between focus:ring-0 border-none outline-none"
                  v-model="Optional"
                  required
                  :placeholder="`${getBankField(selectedCurrency?.currency as string)} (optional)`"
              />

            </div>

            

          </div>


        </div>

        
      </div>

      <div class="flex items-center justify-center gap-2"> 

        <baseButton
          @click="returnTab()"
          v-if="Tab === 'BANK' || Tab === 'SUBMIT'"
            type="submit"
            class="self-end gap-3 flex items-center justify-center w-full py-3 bg-white border border-black  text-black text-[15px] rounded-3xl mt-6"
          >
            Back
        </baseButton>

        <baseButton
           @click="nextTab()"
            type="submit"
            :disabled="!currency || showLoader"
            :class="currency ? 'bg-black': 'bg-gray-300'"
            class="self-end gap-3 flex items-center justify-center w-full py-3 text-white text-[15px] rounded-3xl mt-6"
          > 

          <div v-if="showLoader"  class="w-full h-full flex flex-col items-center justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
          </div>

          <div v-else class="flex items-center justify-center gap-x-2">
            {{Tab === 'CURRENCY' || Tab === 'BANK'? 'Continue': 'Submit'}}
            <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9"><path fill="#fff" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="#fff" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg>
          </div>
            
        </baseButton>
      </div>
        

    </div>


  </template>

  <script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useWalletStore } from '~/store/wallet';
  import { useAuthStore } from '~/store/auth';
  const { getbanks, verifyBank, getBanksByCurrency } = useAuthStore();
  const { createWallet, fetchRate} = useWalletStore();

  const { loading } = storeToRefs(useWalletStore()); // make authenticated state reactive with storeToRefs
  const { user } = storeToRefs(useAuthStore());

  const showLoader = ref(false)
  // const nameLoading = ref(false)
  const Tab = ref('CURRENCY')

  


  interface bank {
   id: string;
   name: string;
   code: string;
   country: string
  }
  interface Currency {
    currency: string
    country: string
    method: string
  }
  interface ContinentCurrencies {
    [continent: string]: Currency[]
  }

  const activeContinent = ref<string>('AFRICA')
  const selectedCurrency = ref<Currency | null>()
  const BanksByCurrency = ref<bank[]>([])

  const selectedBank = ref<bank>()
  // const AccountNumber = ref()
  // const resolvedName = ref('')

  const bankId = defineModel<string>('bankId')
  const currency = defineModel<string>('currency')
  // const country = defineModel<string>('country')
  const Type = defineModel<string>('Type')
  const AccountNumber = defineModel<string>('AccountNumber')
  const Optional = defineModel<string>('Optional')

  



  const route = useRouter()

  const emit = defineEmits(['submit','update-value','back'])  // Declare Events

  watch([activeContinent, selectedCurrency], async(newVal) => {
    selectedBank.value = undefined
  });

  const getBankField = computed(() => (currency: string) => {
    const currencyToFieldMap: Record<string, string> = {
      'USD': 'routingNumber',
      'GBP': 'sortCode',
      'CAD': 'transitNumber',
      'AUD': 'bsbNumber',
      'INR': 'ifscCode',
      'MXN': 'clabeNumber',
      'CNY': 'cnapsCode',
      'NGN': 'nubanNumber',
      'BRL': 'pixCode',
      'HKD': 'clearingCode'
      // Add more countries as needed
    };

    // Fallback logic
    return currencyToFieldMap[currency] || 'bicSwift'; // Default to SWIFT/BIC
  });

  const selectCurrency = (value: Currency) => {
    selectedCurrency.value = value
    currency.value = value.currency
    // emit('currency-selected', currency)
  }

  const selectBank = async(bank:bank)=>{
    selectedBank.value = bank
    bankId.value = bank.id
  }


  const fetchCurrencyBanks = async()=>{

    showLoader.value = true
    const result = await getBanksByCurrency(currency.value as string)
    
    console.log(result)
    if(result?.success){
        console.log(result?.value)
        BanksByCurrency.value = result?.banks
    }
    showLoader.value = false
  }

  const nextTab = async()=> {
    

    if(Tab.value === 'CURRENCY'){
      await fetchCurrencyBanks()
      return Tab.value = 'BANK'
    }
    if(Tab.value === 'BANK'){
      if(!bankId.value || !selectedBank.value ) return toast.error('Please Select bank')
      return Tab.value = 'SUBMIT'
    }

    if(Tab.value === 'SUBMIT'){
      if(!AccountNumber.value) return toast.error('Enter Account Number')
      if(!Type.value) return toast.error('Select Account Type')
      
      emit('submit')
    }

  }

  const returnTab = ()=> {
    if(Tab.value === 'CURRENCY') return

    if(Tab.value === 'BANK'){
      return Tab.value = 'CURRENCY'
    }
    if(Tab.value === 'SUBMIT'){
      return Tab.value = 'BANK'
    }
  }

  

  // onMounted(async()=>{
  //   getRate()
  // })

  const getFlagEmoji = (country: string): string => {
    const flagMap: Record<string, string> = {
      'Egypt': '🇪🇬',
      'Ghana': '🇬🇭',
      'Kenya': '🇰🇪',
      'Nigeria': '🇳🇬',
      'Tanzania': '🇹🇿',
      'South Africa': '🇿🇦',
      
      // Additional African countries for future expansion
      'Algeria': '🇩🇿',
      'Angola': '🇦🇴',
      'Benin': '🇧🇯',
      'Botswana': '🇧🇼',
      'Burkina Faso': '🇧🇫',
      'Burundi': '🇧🇮',
      'Cameroon': '🇨🇲',
      'Cape Verde': '🇨🇻',
      'Central African Republic': '🇨🇫',
      'Chad': '🇹🇩',
      'Comoros': '🇰🇲',
      'Congo': '🇨🇬',
      'DR Congo': '🇨🇩',
      'Djibouti': '🇩🇯',
      'Equatorial Guinea': '🇬🇶',
      'Eritrea': '🇪🇷',
      'Eswatini': '🇸🇿',
      'Ethiopia': '🇪🇹',
      'Gabon': '🇬🇦',
      'Gambia': '🇬🇲',
      'Guinea': '🇬🇳',
      'Guinea-Bissau': '🇬🇼',
      'Ivory Coast': '🇨🇮',
      'Lesotho': '🇱🇸',
      'Liberia': '🇱🇷',
      'Libya': '🇱🇾',
      'Madagascar': '🇲🇬',
      'Malawi': '🇲🇼',
      'Mali': '🇲🇱',
      'Mauritania': '🇲🇷',
      'Mauritius': '🇲🇺',
      'Morocco': '🇲🇦',
      'Mozambique': '🇲🇿',
      'Namibia': '🇳🇦',
      'Niger': '🇳🇪',
      'Rwanda': '🇷🇼',
      'Sao Tome and Principe': '🇸🇹',
      'Senegal': '🇸🇳',
      'Seychelles': '🇸🇨',
      'Sierra Leone': '🇸🇱',
      'Somalia': '🇸🇴',
      'Sudan': '🇸🇩',
      'South Sudan': '🇸🇸',
      'Togo': '🇹🇬',
      'Tunisia': '🇹🇳',
      'Uganda': '🇺🇬',
      'Zambia': '🇿🇲',
      'Zimbabwe': '🇿🇼',

      // Asia
      'Bangladesh': '🇧🇩',
      'China': '🇨🇳',
      'Hong Kong': '🇭🇰',
      'India': '🇮🇳',
      'Indonesia': '🇮🇩',
      'Israel': '🇮🇱',
      'Japan': '🇯🇵',
      'South Korea': '🇰🇷',
      'Sri Lanka': '🇱🇰',
      'Malaysia': '🇲🇾',
      'Pakistan': '🇵🇰',
      'Philippines': '🇵🇭',
      'Singapore': '🇸🇬',
      'Thailand': '🇹🇭',
      'Vietnam': '🇻🇳',

      // Europe
      'Czech Republic': '🇨🇿',
      'Denmark': '🇩🇰',
      'Eurozone': '🇪🇺', // For EUR currency
      'Hungary': '🇭🇺',
      'Norway': '🇳🇴',
      'Poland': '🇵🇱',
      'Romania': '🇷🇴',
      'Sweden': '🇸🇪',
      'Turkey': '🇹🇷',
      'United Kingdom': '🇬🇧',

      // Americas
      'Argentina': '🇦🇷',
      'Bolivia': '🇧🇴',
      'Brazil': '🇧🇷',
      'Canada': '🇨🇦',
      'Chile': '🇨🇱',
      'Colombia': '🇨🇴',
      'Costa Rica': '🇨🇷',
      'Dominican Republic': '🇩🇴',
      'Guatemala': '🇬🇹',
      'Jamaica': '🇯🇲',
      'Mexico': '🇲🇽',
      'Peru': '🇵🇪',
      'United States': '🇺🇸',

      // Oceania
      'Australia': '🇦🇺',
      'New Zealand': '🇳🇿',

      // Middle East
      'United Arab Emirates': '🇦🇪',
      'Jordan': '🇯🇴',
      'Qatar': '🇶🇦',
      'Saudi Arabia': '🇸🇦'
    }
    return flagMap[country] || '🌐'
  }

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

  const currenciesByContinent: ContinentCurrencies = {
    AFRICA: [
      { currency: "EGP", country: "Egypt", method: "EG_RTGS_IPN" },
      { currency: "GHS", country: "Ghana", method: "GH_GHIPSS" },
      { currency: "KES", country: "Kenya", method: "KE_KIBBS_PESALINK" },
      { currency: "NGN", country: "Nigeria", method: "NG_NIBSS_NEFT" },
      { currency: "TZS", country: "Tanzania", method: "TZ_RTGS" },
      { currency: "ZAR", country: "South Africa", method: "ZA_RTGS_EFT" },
    ],
    ASIA: [
      { currency: "BDT", country: "Bangladesh", method: "BD_BEFTN" },
      { currency: "CNY", country: "China", method: "CN_CNAPS" },
      { currency: "HKD", country: "Hong Kong", method: "HK_HKICL_CHATS_ECG" },
      { currency: "IDR", country: "Indonesia", method: "ID_SKN_RTGS" },
      { currency: "INR", country: "India", method: "IN_NEFT_RTGS_IMPS" },
      { currency: "JPY", country: "Japan", method: "JP_ZENGIN" },
      { currency: "KRW", country: "South Korea", method: "KR_LOCAL" },
      { currency: "LKR", country: "Sri Lanka", method: "LK_LOCAL" },
      { currency: "MYR", country: "Malaysia", method: "MY_IBG_RENTAS" },
      { currency: "PKR", country: "Pakistan", method: "PK_RAAST_IBFT" },
      { currency: "PHP", country: "Philippines", method: "PH_INSTAPAY_PESONET" },
      { currency: "SGD", country: "Singapore", method: "SG_FAST_MEPS" },
      { currency: "THB", country: "Thailand", method: "TH_BAHTNET_PROMPTPAY" },
      { currency: "VND", country: "Vietnam", method: "VN_IBPS" },
    ],
    EUROPE: [
      { currency: "EUR", country: "Eurozone", method: "SEPA" },
      { currency: "CZK", country: "Czech Republic", method: "CZ_CERTIS" },
      { currency: "DKK", country: "Denmark", method: "DK_NEMKONTO_FI" },
      { currency: "GBP", country: "United Kingdom", method: "GB_BACS_CHAPS_FPS" },
      { currency: "HUF", country: "Hungary", method: "HU_GIRO" },
      { currency: "NOK", country: "Norway", method: "NO_NICS" },
      { currency: "PLN", country: "Poland", method: "PL_ELIXIR_BLUE_CASH" },
      { currency: "RON", country: "Romania", method: "RO_RTGS" },
      { currency: "SEK", country: "Sweden", method: "SE_BANKGIROT" },
      { currency: "TRY", country: "Turkey", method: "TR_FAST_EFT" },
    ],
    AMERICAS: [
      { currency: "USD", country: "United States", method: "ACH" },
      { currency: "ARS", country: "Argentina", method: "AR_TRANSFERS_3" },
      { currency: "BOB", country: "Bolivia", method: "BO_RTGS" },
      { currency: "BRL", country: "Brazil", method: "BR_TED_DOC_PIX" },
      { currency: "CAD", country: "Canada", method: "CA_INTERAC" },
      { currency: "CLP", country: "Chile", method: "CL_TEF" },
      { currency: "COP", country: "Colombia", method: "CO_ACH" },
      { currency: "CRC", country: "Costa Rica", method: "CR_SINPE" },
      { currency: "DOP", country: "Dominican Republic", method: "DO_ACH" },
      { currency: "GTQ", country: "Guatemala", method: "GT_ACH" },
      { currency: "JMD", country: "Jamaica", method: "JM_LOCAL" },
      { currency: "MXN", country: "Mexico", method: "MX_SPEI" },
      { currency: "PEN", country: "Peru", method: "PE_CCE" },
    ],
    OCEANIA: [
      { currency: "AUD", country: "Australia", method: "AU_BECS" },
      { currency: "NZD", country: "New Zealand", method: "NZ_LOCAL" },
    ],
    MIDDLE_EAST: [
      { currency: "AED", country: "United Arab Emirates", method: "AE_UAEFTS" },
      { currency: "JOD", country: "Jordan", method: "JO_ACH" },
      { currency: "QAR", country: "Qatar", method: "QA_QPS" },
      { currency: "SAR", country: "Saudi Arabia", method: "SA_MADA" },
      { currency: "ILS", country: "Israel", method: "IL_ZAHAV" },
    ],
  };

  const currentContinentCurrencies = computed<Currency[]>(() => {
    return currenciesByContinent[activeContinent.value] || []
  })


  </script>

  
