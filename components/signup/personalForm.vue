<template>
    <div class="w-full bg-white  rounded-xl">

  

      <div class="w-full">

        <div class="w-full flex items-start">

          <div class="w-full flex flex-col items-start ">

            <p class="Grotesque-Regular text-[16px] text-[#737373]">
              Get started with
            </p>
            <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A]">
              Personal Information
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
            @submit.prevent="submitForm()"
            class="w-full mt-4 flex flex-col gap-y-4"
          >

            <div class="w-full flex flex-col sm:flex-row gap-4 items-center justify-center">

              <div class="w-full sm:w-1/2 relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  First Name
                </label>

                <input
                  required
                  v-model="person.firstName"
                  type="text"
                  class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                  placeholder="Anayo"
                />
              </div>
              
              <div class="w-full sm:w-1/2 relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  Last Name
                </label>

                <input
                  required
                  v-model="person.lastName"
                  type="text"
                  class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                  placeholder="Obiajulu"
                />
              </div>

            </div>
            

            <!-- <div v-if="props.AccountType == 'BUSINESS'" class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Business Name
              </label>

              <input
                :required="props.AccountType == 'BUSINESS'"
                v-model="person.businessName"
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-lg flex items-center justify-between outline-none"
                placeholder="Obiajulu"
              />
            </div> -->

            <!-- <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Email
              </label>

              <input
                required
                type="email"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                v-model="person.email"
                placeholder="Obii@dynamo.com"
              />
            </div> -->

            <div class="w-full flex flex-col sm:flex-row gap-4 items-center justify-center">

              <div class="w-full sm:w-1/2 relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  Email
                </label>

                <input
                  required
                  type="email"
                  class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                  v-model="person.email"
                  placeholder="Obii@dynamo.com"
                />
              </div>

              <div class="w-full sm:w-1/2 relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  phone
                </label>

                <input
                  v-model="person.phoneNumber"
                  v-mask="'+234 ##########'"
                  type="tel"
                  required
                  class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                  placeholder="+234 810000000"
                />

                
              </div>

              <!-- <div class="w-full sm:w-1/2 relative">
                <label class="Grotesque-Regular text-md text-[#010109]">
                  Country
                </label>
                <CountrySelect :placeholder="person.country ? person.country : 'Select Country'" :options="countries" @update="(value:string)=>person.country = value"/>
              </div> -->

              


            </div>
            

            

            <baseButton
              type="submit"
              class="w-full flex items-center justify-center py-2.5 bg-black text-white text-[15px] rounded-lg mt-6"
            >
              <span v-if="!loading"  class="text-white text-[14px] Grotesque-Light text-center whitespace-nowrap">Proceed</span>
              <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" 
              />

            </baseButton>

            <p
              class="text-sm text-[#737373] text-left cursor-pointer Grotesque-Regular my-2"
            >
              Got an existing account?
              <span
                @click="$router.push('/login')"
                class="text-black cursor-pointer"
                >Login</span
              >
            </p>
          </form>

          
        </div>
      </div>

    </div>
  </template>
  <script setup lang="ts">

    import { storeToRefs } from 'pinia';
    import { useAuthStore } from '~/store/auth';
    const { register_User } = useAuthStore();   
    const { loading } = storeToRefs(useAuthStore());
    

   const resetKey = ref(2)

  //  const props = defineProps<{
  //     AccountType: string;
  //  }>()

    const person = reactive({
      firstName:'',
      lastName:'',
      businessName:'',
      email:'',
      phoneNumber:'',
      // country:''
    })


  const emit = defineEmits(['back','submit'])  // Declare Events

  const submitForm = ()=>{
    console.log(person)
    if(!person.firstName || !person.lastName || !person.email || !person.phoneNumber ) return
    console.log(person)
    emit('submit', person)

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

