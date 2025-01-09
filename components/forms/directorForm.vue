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
              Directors Information
            </h3>

          </div>

          <button
           class="bg-[#F1F0FE] py-2 px-4 text-[#0050A8] text-xs rounded-md whitespace-nowrap"
          >
            Step 3 of 4
          </button>



        </div>
        
        

        <div class="flex flex-col w-full h-full gap-y-6 my-4">

          <form
            @submit.prevent="submitForm()"
            class="w-full mt-4 flex flex-col gap-y-4"
          >
            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Portfolio
              </label>
              <DropSelect :key="resetKey" class="w-full" @update="(value:string)=>{director.portfolio = value}" :options="['Founder','Shareholder','Director']" />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                First Name
              </label>
              <input
                required
                v-model="director.firstName"
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-lg flex items-center justify-between outline-none"
                placeholder="Enter last name"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Last Name
              </label>
              <input
                required
                v-model="director.lastName"
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-lg flex items-center justify-between outline-none"
                placeholder="Enter last name"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Means of Identification
              </label>
              <DropSelect :key="resetKey" class="w-full" @update="(value:string)=>{director.idType = value}" :options="['NIN Slip','International Passport','Driver’s License']" />
            </div>



            <div v-if="director.idType" class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                {{director.idType}}
              </label>

              <fileUploader @update="(value:string)=>{director.idFile = value}" />
              <div v-if="director.idFile" class="w-full flex flex-row item-start justify-start mt-2">
                <img  class="w-20 h-20 rounded-lg" :src="director.idFile" alt="file">
              </div>
            </div>



            <baseButton
              type="submit"
              class="w-ful py-3 bg-[#0050AB] text-white text-[15px] rounded-lg mt-6"
            >
              Proceed
            </baseButton>

            <p
              class="text-sm text-[#737373] text-left cursor-pointer Grotesque-Regular my-2"
            >
              Got an existing account?
              <span
                @click="$router.push('/auth?tab=login')"
                class="text-[#0050AB] cursor-pointer"
                >Login</span
              >
            </p>
          </form>

          
        </div>
      </div>

    </div>
  </template>
  <script setup lang="ts">
   const {getImageUrl} = useConverters()
   const imageFile = ref<File>()

   const resetKey = ref(2)

    const director = reactive({
      portfolio:'',
      firstName:'',
      lastName:'',
      idType:'',
      idFile:''
    })


  const emit = defineEmits(['back','submit'])  // Declare Events 

  // const initUpload = async(file:File)=>{
  //   director.idFile = await getImageUrl(file)
  // }

  const submitForm = async()=>{
    console.log(director)
    // if(imageFile.value){
    //   director.idFile = await getImageUrl(imageFile.value!)
    // }
    if(!director.portfolio || !director.firstName || !director.lastName || !director.idType || !director.idFile ) return
    console.log(director)

    emit('submit', director)

  }




  // const props = defineProps<{
  //   model: boolean;
  //   title: string;
  //   description:string;
  //   success:boolean
  // }>()
  // const open =ref(false)
  </script>

