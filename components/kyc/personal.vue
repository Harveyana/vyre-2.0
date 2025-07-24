<template>
    <div class="w-full h-full bg-white  rounded-xl">

  

      <div class="w-full h-full overflow-y-auto">
        <div class="w-full h-fit overflow-y-auto flex items-start">

          <div class="w-full flex flex-col items-start ">

            <p class="Grotesque-Regular text-[16px] text-[#737373]">
              Enter your
            </p>
            <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A]">
              Personal Information
            </h3>

          </div>

          <button
             class="bg-[#F1F0FE] py-2 px-4 text-black text-xs rounded-md whitespace-nowrap"
            >
            Step 1 of 4
          </button>

        </div>
        
        

        <div class="flex flex-col w-full h-full gap-y-6 my-4">

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
                First Name
              </label>
              <input
                required
                v-model="firstName"
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                placeholder="Legal First Name"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Last Name
              </label>
              <input
                required
                v-model="lastName"
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                placeholder="Legal last Name"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Phone Number
              </label>
              <input
                required
                type="tel"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                v-model="phoneNumber"
                placeholder="+234 816754587"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Date of Birth
              </label>
              <input
                required
                type="date"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                v-model="DOB"
                placeholder=""
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Occupation
              </label>
              <input
                required
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                v-model="occupation"
                placeholder="Hardware Engineer"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Employment Status
              </label>
              <Options :key="resetKey" class="w-full" @update="(value:string)=>{employmentStatus = value}" :options="employmentStatusOptions" />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Source Of Funds
              </label>
              <Options :key="resetKey" class="w-full" @update="(value:string)=>{sourceOfFunds = value}" :options="sourceOfFundsOptions" />
            </div>



            <button
              type="submit"
              class="w-ful py-3 bg-black text-white text-[15px] rounded-xl mt-6"
            >
              Proceed
            </button>

            <!-- <p
              class="text-sm text-[#737373] text-left cursor-pointer Grotesque-Regular my-2"
            >
              Got an existing account?
              <span
                @click="$router.push('/auth?tab=login')"
                class="text-[#0050AB] cursor-pointer"
                >Login</span
              >
            </p> -->
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

    // const currency = defineModel<string>('currency',{ default: selectedCurrency.value?.currency  })

    // const personal = reactive({
    //   // type:'',
    //   firstName:'',
    //   lastName:'',
    //   phoneNumber:'',
    //   DOB:'',
    //   occupation:'',
    //   sourceOfFunds:''
    // })

  const emit = defineEmits(['back','submit'])  // Declare Events

  const submitForm = async()=>{
    // console.log(personal)
    
    if(!firstName.value || 
      !lastName.value || 
      !phoneNumber.value || 
      !DOB.value
    ) return
    // console.log(personal)

    emit('submit', {
      firstName: firstName.value,
      lastName:lastName.value, 
      phoneNumber: phoneNumber.value, 
      DOB:DOB.value
    })

  }

  const sourceOfFundsOptions = [

    { label: "Company Funds", value: "COMPANY_FUNDS" },
    { label: "E-commerce Reseller", value: "E_COMMERCE_RESELLER" },
    { label: "Gambling Proceeds", value: "GAMBLING_PROCEEDS" },
    { label: "Gifts", value: "GIFTS" },
    { label: "Government Benefits", value: "GOVERNMENT_BENEFITS" },
    { label: "Inheritance", value: "INHERITANCE" },
    { label: "Investments or Loans", value: "INVESTMENTS_OR_LOANS" },
    { label: "Pension/Retirement Funds", value: "PENSION_RETIREMENT_FUNDS" },
    { label: "Real Estate Sales Proceeds", value: "PROCEEDS_FROM_REAL_ESTATE_SALES" },
    { label: "Salary", value: "SALARY" },
    { label: "Savings", value: "SAVINGS" },
    { label: "Someone Else's Funds", value: "SOMEONE_ELSES_FUNDS" },
    { label: "Business Loans", value: "BUSINESS_LOANS" },
    { label: "Grants", value: "GRANTS" },
    { label: "Inter-Company Funds", value: "INTER_COMPANY_FUNDS" },
    { label: "Investment Proceeds", value: "INVESTMENT_PROCEEDS" },
    { label: "Legal Settlement", value: "LEGAL_SETTLEMENT" },
    { label: "Owner's Capital", value: "OWNERS_CAPITAL" },
    { label: "Pension or Retirement", value: "PENSION_OR_RETIREMENT" },
    { label: "Sale of Assets", value: "SALE_OF_ASSETS" },
    { label: "Sale of Goods/Services", value: "SALE_OF_GOODS_AND_SERVICES" },
    { label: "Tax Refund", value: "TAX_REFUND" },
    { label: "Third Party Funds", value: "THIRD_PARTY_FUNDS" },
    { label: "Treasury Reserves", value: "TREASURY_RESERVES" }
  ]

  const employmentStatusOptions = [
    { label: "Employed", value: "EMPLOYED" },
    { label: "Self-Employed", value: "SELF_EMPLOYED" },
    { label: "Unemployed", value: "UNEMPLOYED" },
    { label: "Retired", value: "RETIRED" },
    { label: "Student", value: "STUDENT" },
    { label: "Homemaker", value: "HOMEMAKER" }
  ]

  // const props = defineProps<{
  //   model: boolean;
  //   title: string;
  //   description:string;
  //   success:boolean
  // }>()
  // const open =ref(false)
  </script>

