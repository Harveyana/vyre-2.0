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
    const kycData = {
      userId,
      timestamp: new Date().getTime(),
      expiresIn: 24 * 60 * 60 * 1000 // 24 hours
    };
    
    localStorage.setItem('kycTracking', JSON.stringify(kycData));
    window.location.href = `${url}?redirect_uri='https'`;
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

  




  // const props = defineProps<{
  //   model: boolean;
  //   title: string;
  //   description:string;
  //   success:boolean
  // }>()
  // const open =ref(false)
  </script>

