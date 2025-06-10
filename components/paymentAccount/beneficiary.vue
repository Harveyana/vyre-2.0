<template>
    <div class="h-fit bg-white">

      <div class="w-full flex flex-col ml-2">

        <p class="Grotesque-Regular text-[13px] text-[#737373]">
         Ensure your profile details matches the beneficiary bank records
        </p>
        <h3 class="Grotesque-Bold text-[16px] text-[#1A1A1A]">
          Beneficiary Details
        </h3>

      </div>

      <div  class="w-full border flex flex-col px-2 sm:px-4 rounded-2xl sm:shadow-md py-3 gap-y-2">

        <div class="w-full relative">
              <label class="Grotesque-Regular text-[12px] text-[#010109]">Address Line 1</label>
              <input
                type="text"
                class="Grotesque-Regular text-[12px] w-full bg-gray-100 border-[1px] border-[#2F2B43]/10 px-3 py-1 rounded-lg flex items-center justify-between focus:ring-0 border-none outline-none"
                v-model="Address1"
                required
                placeholder="Address Line 1"
              />
        </div>

        <div class="w-full relative">
              <label class="Grotesque-Regular text-[12px] text-[#010109]">Address Line 2</label>
              <input
                type="text"
                class="Grotesque-Regular text-[12px] w-full bg-gray-100 border-[1px] border-[#2F2B43]/10 px-3 py-1 rounded-lg flex items-center justify-between focus:ring-0 border-none outline-none"
                v-model="Address2"
                required
                placeholder="Address Line 2  (optional)"
              />
        </div>

        <div class="w-full flex items-center justify-center gap-3">

          <div class="w-full relative">
              <label class="Grotesque-Regular text-[12px] text-[#010109]">City</label>
              <input
                type="text"
                class="Grotesque-Regular text-[12px] w-full bg-gray-100 border-[1px] border-[#2F2B43]/10 px-3 py-1 rounded-lg flex items-center justify-between focus:ring-0 border-none outline-none"
                v-model="City"
                required
                placeholder="City"
              />
          </div>

          <div class="w-full relative">
              <label class="Grotesque-Regular text-[12px] text-[#010109]">State</label>
              <input
                type="text"
                class="Grotesque-Regular text-[12px] w-full bg-gray-100 border-[1px] border-[#2F2B43]/10 px-3 py-1 rounded-lg flex items-center justify-between focus:ring-0 border-none outline-none"
                v-model="State"
                required
                placeholder="state"
              />
          </div>

        </div>

        <div class="w-1/2 flex items-center justify-center gap-3">

          <div class="w-full relative">
              <label class="Grotesque-Regular text-[12px] text-[#010109]">Postal Code</label>
              <input
                type="text"
                class="Grotesque-Regular text-[12px] w-full bg-gray-100 border-[1px] border-[#2F2B43]/10 px-3 py-1 rounded-lg flex items-center justify-between focus:ring-0 border-none outline-none"
                v-model="PostalCode"
                required
                placeholder="Postal Code"
              />
          </div>

        </div>
       

      </div>

      <div class="w-full flex items-center justify-center gap-x-2 mt-6" >

        <BaseButton @click="$emit('back')" class="w-[25%] px-8 bg-gray-300 py-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l-64 64l64 64"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 224h294c58.76 0 106 49.33 106 108v20"/></svg>
        </BaseButton>


        <button
          @click="submitAmount()"
            type="submit"
            class="w-[70%] py-3 bg-black  text-white text-[15px] rounded-3xl "
           >
            Submit
        </button>

      </div>

        



        

    </div>


  </template>

  <script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useWalletStore } from '~/store/wallet';
  const { createWallet, fetchRate} = useWalletStore();

  const { loading } = storeToRefs(useWalletStore()); // make authenticated state reactive with storeToRefs

  const showLoader = ref(false)
  
  const insufficient = ref(false)
  // const toggleState = ref(false)

  // const state = useGlobalState()
  // const AssetMap = state.assetMap
  // const entry = ref(0.00)

  const State = defineModel<string>('State')
  const Address1 = defineModel<string>('Address1')
  const Address2 = defineModel<string>('Address2')
  const City = defineModel<string>('City')
  const PostalCode = defineModel<string>('PostalCode')

  // const props = defineProps({
  //   type: String,
  //   currency: String,
  //   balance: Number
  // });

  // const {currency, balance, type} = props



  const route = useRouter()

  const emit = defineEmits(['submit','update-value','back'])  // Declare Events




  const rate = ref(0)

  // const getRate = async()=>{
  //   const result = await fetchRate(currency as string,'NGN')
    
  //     console.log(result)
  //     if(result?.success){
  //       console.log(result?.value)
  //       rate.value = result?.rate.value
  //     }
  // }

  // watch(() => entry.value, async(newvalue, oldvalue) => {
  //   if(balance! <= entry.value!){ 
  //     insufficient.value = true
  //   }else{
  //     insufficient.value = false
  //   }
  // });

  const submitAmount = ()=>{
    // if(entry.value === 0 || insufficient.value) return
    emit('submit')
  }

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


  </script>
