<template>
    <div class="w-full bg-white  rounded-xl">

  

      <div class="w-full">

        <div class="w-full flex items-start">

          <div class="w-full flex flex-col items-start ">

            <button
             @click="$emit('back')"
             class="flex mb-4 gap-x-1 items-center justify-center text-[#737373] text-[14px] rounded-md whitespace-nowrap"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1049_16461)">
                <path d="M15 6L9 12L15 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1049_16461">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
              </svg>
              Back
            </button>

            <p class="Grotesque-Regular text-[16px] text-[#737373]">
              Get started with
            </p>
            <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A]">
              Address Information
            </h3>

          </div>

          <!-- <button
          class="bg-[#F1F0FE] py-2 px-4 text-black text-xs rounded-md whitespace-nowrap"
          >
            Step 1 of 4
          </button> -->

        </div>
        
        

        <div class="flex flex-col w-full h-full gap-y-6 my-4">

          <form
            @submit.prevent="submit()"
            class="w-full mt-4 flex flex-col gap-y-4"
          > 

            <div class="w-full flex flex-col sm:flex-row gap-4 items-start justify-start">

              <div class="w-full sm:w-1/2 relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  Country
                </label>
                <CountrySelect :placeholder="person.country ? person.country : 'Select Country'" :options="countries" @update="(value:string)=>person.country = value" />
              </div>

              <div class="w-full sm:w-1/2 relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  State
                </label>

                <input
                  required
                  v-model="person.state"
                  type="text"
                  class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                  placeholder="State"
                />
              </div>

            
            </div>

            
            <div class="w-full flex flex-col sm:flex-row gap-4 items-center justify-center">
              
              <div class="w-full sm:w-1/2 relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  City
                </label>

                <input
                  required
                  v-model="person.city"
                  type="text"
                  class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                  placeholder="City"
                />
              </div>

              <div class="w-full sm:w-1/2 relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  Postal Code
                </label>

                <input
                  required
                  v-model="person.postalCode"
                  type="text"
                  class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                  placeholder=""
                />
              </div>

            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Address 
              </label>

              <input
                required
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                v-model="person.address"
                placeholder="Enter Address"
              />
            </div>

      

            <button
              type="submit"
              class="w-full flex items-center justify-center py-3 bg-black text-white text-[15px] rounded-3xl mt-6"
            >
              <span class="flex items-center justify-center gap-x-4 text-white text-[14px] Grotesque-Regular text-center whitespace-nowrap">
                Proceed To kyc (3mins) 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8" clip-rule="evenodd"/></svg>
              </span>

            </button>

    
          </form>

          
        </div>
      </div>

    </div>
  </template>
  <script setup lang="ts">
    import { Toaster, toast } from 'vue-sonner';

    import { storeToRefs } from 'pinia';
    import { useAuthStore } from '~/store/auth';
    const { register_User, userAddress } = useAuthStore();   
    const { loading } = storeToRefs(useAuthStore());
    

   const resetKey = ref(2)

   const props = defineProps<{
      userId: string;
   }>()

    const person = reactive({
      country:'',
      address:'',
      state:'',
      city:'',
      postalCode:'',
      userId:props.userId
    })


  const emit = defineEmits(['back','submit'])  // Declare Events

  // const submitForm = ()=>{
  //   console.log(person)
  //   if(!person.country || !person.address || !person.state || !person.city ||!person.postalCode ) return
  //   console.log(person)
  //   emit('submit', person)

  // }

  const startKYC = (userId:string,url:string) => {
    // const kycData = {
    //   userId,
    //   timestamp: new Date().getTime(),
    //   expiresIn: 24 * 60 * 60 * 1000 // 24 hours
    // };
    
    // localStorage.setItem('kycTracking', JSON.stringify(kycData));
    window.location.href = `${url}?redirect_uri=https://app.vyre.africa/login?kyc_User=${userId}`;
  };

  const submit = async()=>{

    if(!person.country || !person.address || !person.state || !person.city ||!person.postalCode ) return
    console.log(person)

    console.log('started')
    toast.promise(() => new Promise(async(resolve,reject) =>{
      const updated = await userAddress(person)
      if (updated.success) {
        resolve({
          msg:updated.msg, 
          url:updated?.user.fernKycLink, 
          userId:updated?.user.id 
        })
        // emit('verified', verified?.userId)
      }else{
        reject({msg: updated.msg})
        // $toast.error(verified.msg)
      }
    }), 
    {
      loading: 'Starting KYC...',
      success: async(data: any) => {
        startKYC(data.userId, data.url)
        // await navigateTo(data.url, {
        //   external: true,
        // });
          // return data.msg
      },
      error: (data: any) => {return data.msg}
    })

  }


  const countries = ref<{label: string; value: string}[]>([
  // Africa (existing)
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
  { label: 'Zimbabwe', value: 'Zimbabwe' },

  // Asia
  { label: 'Afghanistan', value: 'Afghanistan' },
  { label: 'Armenia', value: 'Armenia' },
  { label: 'Azerbaijan', value: 'Azerbaijan' },
  { label: 'Bahrain', value: 'Bahrain' },
  { label: 'Bangladesh', value: 'Bangladesh' },
  { label: 'Bhutan', value: 'Bhutan' },
  { label: 'Brunei', value: 'Brunei' },
  { label: 'Cambodia', value: 'Cambodia' },
  { label: 'China', value: 'China' },
  { label: 'Cyprus', value: 'Cyprus' },
  { label: 'Georgia', value: 'Georgia' },
  { label: 'India', value: 'India' },
  { label: 'Indonesia', value: 'Indonesia' },
  { label: 'Iran', value: 'Iran' },
  { label: 'Iraq', value: 'Iraq' },
  { label: 'Israel', value: 'Israel' },
  { label: 'Japan', value: 'Japan' },
  { label: 'Jordan', value: 'Jordan' },
  { label: 'Kazakhstan', value: 'Kazakhstan' },
  { label: 'Kuwait', value: 'Kuwait' },
  { label: 'Kyrgyzstan', value: 'Kyrgyzstan' },
  { label: 'Laos', value: 'Laos' },
  { label: 'Lebanon', value: 'Lebanon' },
  { label: 'Malaysia', value: 'Malaysia' },
  { label: 'Maldives', value: 'Maldives' },
  { label: 'Mongolia', value: 'Mongolia' },
  { label: 'Myanmar (Burma)', value: 'Myanmar (Burma)' },
  { label: 'Nepal', value: 'Nepal' },
  { label: 'North Korea', value: 'North Korea' },
  { label: 'Oman', value: 'Oman' },
  { label: 'Pakistan', value: 'Pakistan' },
  { label: 'Palestine', value: 'Palestine' },
  { label: 'Philippines', value: 'Philippines' },
  { label: 'Qatar', value: 'Qatar' },
  { label: 'Russia', value: 'Russia' },
  { label: 'Saudi Arabia', value: 'Saudi Arabia' },
  { label: 'Singapore', value: 'Singapore' },
  { label: 'South Korea', value: 'South Korea' },
  { label: 'Sri Lanka', value: 'Sri Lanka' },
  { label: 'Syria', value: 'Syria' },
  { label: 'Taiwan', value: 'Taiwan' },
  { label: 'Tajikistan', value: 'Tajikistan' },
  { label: 'Thailand', value: 'Thailand' },
  { label: 'Timor-Leste', value: 'Timor-Leste' },
  { label: 'Turkey', value: 'Turkey' },
  { label: 'Turkmenistan', value: 'Turkmenistan' },
  { label: 'United Arab Emirates', value: 'United Arab Emirates' },
  { label: 'Uzbekistan', value: 'Uzbekistan' },
  { label: 'Vietnam', value: 'Vietnam' },
  { label: 'Yemen', value: 'Yemen' },

  // Europe
  { label: 'Albania', value: 'Albania' },
  { label: 'Andorra', value: 'Andorra' },
  { label: 'Austria', value: 'Austria' },
  { label: 'Belarus', value: 'Belarus' },
  { label: 'Belgium', value: 'Belgium' },
  { label: 'Bosnia and Herzegovina', value: 'Bosnia and Herzegovina' },
  { label: 'Bulgaria', value: 'Bulgaria' },
  { label: 'Croatia', value: 'Croatia' },
  { label: 'Czech Republic', value: 'Czech Republic' },
  { label: 'Denmark', value: 'Denmark' },
  { label: 'Estonia', value: 'Estonia' },
  { label: 'Finland', value: 'Finland' },
  { label: 'France', value: 'France' },
  { label: 'Germany', value: 'Germany' },
  { label: 'Greece', value: 'Greece' },
  { label: 'Hungary', value: 'Hungary' },
  { label: 'Iceland', value: 'Iceland' },
  { label: 'Ireland', value: 'Ireland' },
  { label: 'Italy', value: 'Italy' },
  { label: 'Kosovo', value: 'Kosovo' },
  { label: 'Latvia', value: 'Latvia' },
  { label: 'Liechtenstein', value: 'Liechtenstein' },
  { label: 'Lithuania', value: 'Lithuania' },
  { label: 'Luxembourg', value: 'Luxembourg' },
  { label: 'Malta', value: 'Malta' },
  { label: 'Moldova', value: 'Moldova' },
  { label: 'Monaco', value: 'Monaco' },
  { label: 'Montenegro', value: 'Montenegro' },
  { label: 'Netherlands', value: 'Netherlands' },
  { label: 'North Macedonia', value: 'North Macedonia' },
  { label: 'Norway', value: 'Norway' },
  { label: 'Poland', value: 'Poland' },
  { label: 'Portugal', value: 'Portugal' },
  { label: 'Romania', value: 'Romania' },
  { label: 'San Marino', value: 'San Marino' },
  { label: 'Serbia', value: 'Serbia' },
  { label: 'Slovakia', value: 'Slovakia' },
  { label: 'Slovenia', value: 'Slovenia' },
  { label: 'Spain', value: 'Spain' },
  { label: 'Sweden', value: 'Sweden' },
  { label: 'Switzerland', value: 'Switzerland' },
  { label: 'Ukraine', value: 'Ukraine' },
  { label: 'United Kingdom', value: 'United Kingdom' },
  { label: 'Vatican City', value: 'Vatican City' },

  // Americas (North, Central, South, Caribbean)
  { label: 'Antigua and Barbuda', value: 'Antigua and Barbuda' },
  { label: 'Argentina', value: 'Argentina' },
  { label: 'Bahamas', value: 'Bahamas' },
  { label: 'Barbados', value: 'Barbados' },
  { label: 'Belize', value: 'Belize' },
  { label: 'Bolivia', value: 'Bolivia' },
  { label: 'Brazil', value: 'Brazil' },
  { label: 'Canada', value: 'Canada' },
  { label: 'Chile', value: 'Chile' },
  { label: 'Colombia', value: 'Colombia' },
  { label: 'Costa Rica', value: 'Costa Rica' },
  { label: 'Cuba', value: 'Cuba' },
  { label: 'Dominica', value: 'Dominica' },
  { label: 'Dominican Republic', value: 'Dominican Republic' },
  { label: 'Ecuador', value: 'Ecuador' },
  { label: 'El Salvador', value: 'El Salvador' },
  { label: 'Grenada', value: 'Grenada' },
  { label: 'Guatemala', value: 'Guatemala' },
  { label: 'Guyana', value: 'Guyana' },
  { label: 'Haiti', value: 'Haiti' },
  { label: 'Honduras', value: 'Honduras' },
  { label: 'Jamaica', value: 'Jamaica' },
  { label: 'Mexico', value: 'Mexico' },
  { label: 'Nicaragua', value: 'Nicaragua' },
  { label: 'Panama', value: 'Panama' },
  { label: 'Paraguay', value: 'Paraguay' },
  { label: 'Peru', value: 'Peru' },
  { label: 'Saint Kitts and Nevis', value: 'Saint Kitts and Nevis' },
  { label: 'Saint Lucia', value: 'Saint Lucia' },
  { label: 'Saint Vincent and the Grenadines', value: 'Saint Vincent and the Grenadines' },
  { label: 'Suriname', value: 'Suriname' },
  { label: 'Trinidad and Tobago', value: 'Trinidad and Tobago' },
  { label: 'United States', value: 'United States' },
  { label: 'Uruguay', value: 'Uruguay' },

  // Oceania (Pacific Islands)
  { label: 'Australia', value: 'Australia' },
  { label: 'Fiji', value: 'Fiji' },
  { label: 'Kiribati', value: 'Kiribati' },
  { label: 'Marshall Islands', value: 'Marshall Islands' },
  { label: 'Micronesia', value: 'Micronesia' },
  { label: 'Nauru', value: 'Nauru' },
  { label: 'New Zealand', value: 'New Zealand' },
  { label: 'Palau', value: 'Palau' },
  { label: 'Papua New Guinea', value: 'Papua New Guinea' },
  { label: 'Samoa', value: 'Samoa' },
  { label: 'Solomon Islands', value: 'Solomon Islands' },
  { label: 'Tonga', value: 'Tonga' },
  { label: 'Tuvalu', value: 'Tuvalu' },
  { label: 'Vanuatu', value: 'Vanuatu' },


  ])
  




  // const props = defineProps<{
  //   model: boolean;
  //   title: string;
  //   description:string;
  //   success:boolean
  // }>()
  // const open =ref(false)
  </script>

