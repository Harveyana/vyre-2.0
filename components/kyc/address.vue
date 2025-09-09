<template>
    <div class="w-full h-full bg-white  rounded-xl">

  

      <div class="w-full flex flex-col items-center justify-start">
        <div class="w-full flex items-start">

          <div class="w-full flex flex-col items-start ">

            <p class="Grotesque-Regular text-[16px] text-[#737373]">
              Enter your
            </p>
            <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A]">
              Address Information
            </h3>

          </div>

          <button
             class="bg-[#F1F0FE] py-2 px-4 text-black text-xs rounded-md whitespace-nowrap"
            >
            Step 2 of 4
          </button>

        </div>
        
        

        <div class="flex flex-col w-full h-[70vh] items-start justify-start overflow-y-auto gap-y-6 mb-12">

          <form
            @submit.prevent="submitForm()"
            class="w-full mt-4 flex flex-col gap-y-4"
          >
            <!-- <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Business Type
              </label>
              <DropSelect :key="resetKey" class="w-full" @update="(value:string)=>{business.type = value}" :options="['Registered Businesss','Non-Registered Business']" />
            </div> -->

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Street Address
              </label>
              <input
                required
                v-model="streetLine1"
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                placeholder="street Line 1"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                City
              </label>
              <input
                required
                v-model="city"
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                placeholder="city"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                State/Province
              </label>
              <input
                required
                v-model="stateRegionProvince"
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                placeholder="state, Region or Province"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Postal Code
              </label>
              <input
                required
                v-model="postalCode"
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                placeholder="Postal Code"
              />
            </div>

            <div class="w-full relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  Country
                </label>
                <CountrySelect :options="countries" @update="(value:string)=> countryCode = value"/>
            </div>

            <!-- <div class="w-full flex flex-col items-center justify-center gap-y-4 border-[1px] border-gray-300 rounded-2xl p-4">

              <div class="w-full relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  Proof of Address
                </label>
                <DropSelect :key="resetKey" class="w-full" @update="(value:string)=>{proofOfAddressType = value}" :options="proofTypes" />
              </div>

              <div class="w-full relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  Upload ID (Front)
                </label>
               
                <input type="file" @change="handleFileUpload('frontIdImage', $event)" accept="image/*" required>

              </div>

            </div> -->

            

            


            <!-- <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Business Address
              </label>
              <input
                required
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                v-model="business.address"
                placeholder="23 Alh Pelu Street"
              />
            </div> -->


            <!-- <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Utility Bill
              </label>

              <fileUploader @update="(value:string)=>{business.file = value}" />
              <div v-if="business.file" class="w-full flex flex-row item-start justify-start mt-2">
                <img  class="w-20 h-20 rounded-2xl" :src="business.file" alt="file">
              </div>
            </div> -->



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

    const streetLine1 = defineModel<string>('streetLine1')
    const city = defineModel<string>('city')
    const stateRegionProvince = defineModel<string>('stateRegionProvince')
    const postalCode = defineModel<string>('postalCode')
    const countryCode = defineModel<string>('countryCode')

    // const proofOfAddressType = defineModel<string>('proofOfAddressType')
    // const proofOfAddressImage = defineModel<string>('proofOfAddressImage')

    // const address = reactive({
    //   streetLine1:'',
    //   city:'',
    //   stateRegionProvince:'',
    //   postalCode:'',
    //   countryCode:''
    // })

  const emit = defineEmits(['back','next'])  // Declare Events

  const submitForm = async()=>{
    
    if(!streetLine1.value || 
      !city.value || 
      !stateRegionProvince.value || 
      !postalCode.value ||
      !countryCode.value
      // !proofOfAddressImage.value
    ) return
    console.log({
      streetLine1:streetLine1.value, 
      city:city.value, 
      stateRegionProvince: stateRegionProvince.value, 
      postalCode: postalCode.value, 
      countryCode: countryCode.value, 
      // proofOfAddressImage: proofOfAddressImage.value
    })

    emit('next', {
      streetLine1:streetLine1.value, 
      city:city.value, 
      stateRegionProvince: stateRegionProvince.value, 
      postalCode: postalCode.value, 
      countryCode: countryCode.value, 
      // proofOfAddressImage: proofOfAddressImage.value
    })

  }

  // const handleFileUpload = (field:string, event:any) => {
  //   const file = event.target.files[0]
  //   if (file) {
  //     const reader = new FileReader()
  //     reader.onload = (e) => {
  //       proofOfAddressImage.value = e.target?.result as string
  //     }
  //     reader.readAsDataURL(file)
  //   }
  // }


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

