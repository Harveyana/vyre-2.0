<template>
    <div class="w-full h-full bg-white  rounded-xl">

  

      <div class="w-full h-full overflow-y-auto">
        <div class="w-full flex items-start">

          <div class="w-full flex flex-col items-start ">

            <p class="Grotesque-Regular text-[16px] text-[#737373]">
              Enter your
            </p>
            <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A]">
              Identity Information
            </h3>

          </div>

          <button
             class="bg-[#F1F0FE] py-2 px-4 text-black text-xs rounded-md whitespace-nowrap"
            >
            Step 3 of 4
          </button>

        </div>
        
        

        <div class="flex flex-col w-full h-[70vh] gap-y-6 my-4">

          <form
            @submit.prevent="submitForm()"
            class="w-full mt-4 flex flex-col gap-y-4"
          >
            <!-- <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Identity Type
              </label>
              <DropSelect :key="resetKey" class="w-full" @update="(value:string)=>{identity.type = value}" :options="['Registered Businesss','Non-Registered Business']" />
            </div> -->

            <div class="w-full relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  Issuing country
                </label>
                <CountrySelect :options="countries" @update="(value:string)=> countryCode = value"/>
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Issuance Date
              </label>
              <input
                required
                v-model="issuanceDate"
                type="date"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                placeholder="issuance Date"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Expiration Date
              </label>
              <input
                required
                v-model="expirationDate"
                type="date"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                placeholder="expiration Date"
              />
            </div>

            <div class="w-full relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  Account Purpose
                </label>
                <Options :key="resetKey" class="w-full" @update="(value:string)=>{accountPurpose = value}" :options="accountPurposeOptions" />
            </div>


            <div class="w-full relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  Expected Monthly Amounts
                </label>
                <Options :key="resetKey" class="w-full" @update="(value:string)=>{expectedMonthlyPaymentsUsd = value}" :options="amountRangeOptions" />
            </div>

            <div class="w-full flex flex-col items-center justify-center gap-y-4 border-[1px] border-gray-300 rounded-2xl p-4">

              <div class="w-full relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  Identity Type
                </label>
                <DropSelect :key="resetKey" class="w-full" @update="(value:string)=>{type = value}" :options="identityTypes" />
              </div>

              <div class="w-full relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  ID Number
                </label>
                <input
                  required
                  v-model="documentIdNumber"
                  type="text"
                  class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                  placeholder="Document Id Number"
                />
              </div>

              <div class="w-full relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  Upload ID (Front)
                </label>
                <!-- <input
                  required
                  v-model="address.postalCode"
                  type="text"
                  class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                  placeholder="Postal Code"
                /> -->
                <input type="file" @change="handleFileUpload($event)" accept="image/*" required>

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

    const type = defineModel<string>('type')
    const documentIdNumber = defineModel<string>('documentIdNumber')
    const issuanceDate = defineModel<string>('issuanceDate')
    const expirationDate = defineModel<string>('expirationDate')
    const accountPurpose = defineModel<string>('accountPurpose')
    const expectedMonthlyPaymentsUsd = defineModel<string>('expectedMonthlyPaymentsUsd')
    const countryCode = defineModel<string>('countryCode')
    const frontIdImage = defineModel<string>('frontIdImage')

    // const identity = reactive({
    //   type:'',
    //   documentIdNumber:'',
    //   issuanceDate:'',
    //   expirationDate:'',
    //   accountPurpose:'',
    //   expectedMonthlyPaymentsUsd:'',
    //   countryCode:'',
    //   frontIdImage:''
    // })

  const emit = defineEmits(['back','submit'])  // Declare Events

  const submitForm = async()=>{
    // console.log(identity)
    
     if(!type.value || 
       !documentIdNumber.value || 
       !issuanceDate.value || 
       !expirationDate.value ||
       !countryCode.value || 
        !frontIdImage.value
     ) return
     console.log({
        type:type.value,
        documentIdNumber:documentIdNumber.value,
        issuanceDate: issuanceDate.value,
        expirationDate: expirationDate.value,
        countryCode: countryCode.value,
        frontIdImage: frontIdImage.value
     })

     emit('submit', {
        type: type.value,
        documentIdNumber: documentIdNumber.value,
        issuanceDate: issuanceDate.value,
        expirationDate: expirationDate.value,
        countryCode: countryCode.value,
        frontIdImage: frontIdImage.value
      })

  }

  const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB
  const MIN_FILE_SIZE = 10 * 1024; // 10KB
  const uploadError = ref<string | null>(null);
  const fileInfo = ref<{name: string, size: number} | null>(null);

  const handleFileUpload = (event: Event) => {
    uploadError.value = null;
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      uploadError.value = 'No file selected';
      return;
    }

    // Validate file size
    if (file.size < MIN_FILE_SIZE) {
      uploadError.value = `File too small (min ${formatFileSize(MIN_FILE_SIZE)})`;
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      uploadError.value = `File too large (max ${formatFileSize(MAX_FILE_SIZE)})`;
      return;
    }

    // Validate MIME type
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
      uploadError.value = 'Invalid file type (JPEG, PNG or PDF only)';
      return;
    }

    fileInfo.value = {
      name: file.name,
      size: file.size
    };

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      
      // For backend processing, you might want to include the MIME type
      const base64WithPrefix = `data:${file.type};base64,${result.split(',')[1]}`;
      
      // Assign to your data model
      frontIdImage.value = base64WithPrefix;
      
    };
    reader.onerror = () => {
      uploadError.value = 'Error reading file';
    };
    reader.readAsDataURL(file);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };


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
  
  const identityTypes = [
    // International Standard Documents
    "NATIONAL_ID",
    "DRIVERS_LICENSE", 
    "PASSPORT",
    // 'Residence permit'
  ];

  const amountRangeOptions = [
  { label: "Less than $5,000", value: "LESS_THAN_5000" },
  { label: "$5,000 - $9,999", value: "BETWEEN_5000_9999" },
  { label: "Less than $10,000", value: "LESS_THAN_10000" },
  { label: "$10,000 - $49,999", value: "BETWEEN_10000_49999" },
  { label: "$10,000 - $99,999", value: "BETWEEN_10000_99999" },
  { label: "Over $50,000", value: "OVER_50000" },
  { label: "$100,000 - $999,999", value: "BETWEEN_100000_999999" },
  { label: "$1,000,000 - $9,999,999", value: "BETWEEN_1000000_9999999" },
  { label: "Over $10,000,000", value: "OVER_10000000" }
  ]

  const accountPurposeOptions = [
  { label: "Charitable Donations", value: "CHARITABLE_DONATIONS" },
  { label: "Company Operations", value: "COMPANY_OPERATIONS" },
  { label: "E-commerce Payments", value: "E_COMMERCE_PAYMENTS" },
  { label: "Freelance Payments", value: "FREELANCE_PAYMENTS" },
  { label: "Investment", value: "INVESTMENT" },
  { label: "Payments to Friends/Family Abroad", value: "PAYMENTS_TO_FRIENDS_FAMILY_ABROAD" },
  { label: "Personal Expenses", value: "PERSONAL_EXPENSES" },
  { label: "Purchasing Goods or Services", value: "PURCHASING_GOODS_OR_SERVICES" },
  { label: "Salary Payments", value: "SALARY_PAYMENTS" },
  { label: "Wealth Protection", value: "WEALTH_PROTECTION" },
  { label: "Other", value: "OTHER" },
  { label: "Payroll", value: "PAYROLL" },
  { label: "Receiving Goods or Services", value: "RECEIVING_GOODS_OR_SERVICES" },
  { label: "Tax Optimization", value: "TAX_OPTIMIZATION" },
  { label: "Third Party Payments", value: "THIRD_PARTY_PAYMENTS" },
  { label: "Treasury Management", value: "TREASURY_MANAGEMENT" }
  ]


  // const props = defineProps<{
  //   model: boolean;
  //   title: string;
  //   description:string;
  //   success:boolean
  // }>()
  // const open =ref(false)
  </script>

