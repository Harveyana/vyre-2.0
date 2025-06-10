<template>
    <div class="w-full flex flex-col items-start justify-center gap-y-4 lg:pr-10">


            <div class="w-full flex flex-col items-center justify-start gap-y-4">

              <div class="w-full flex flex-col items-start justify-start gap-y-1">
                <span class="text-[15px] interRegular text-[#6B7280] text-left ">Family Name</span>
                <input
                  type="text"
                  v-model="inputs.name"
                  class="w-full bg-[#F9FAFB] interRegular appearance-none border-none outline-none focus:outline-none focus:ring-0 text-[#4B5563] text-[14px] py-2 px-3 rounded-xl outline-none"
                />
              </div>

              <div class="w-full flex flex-col items-start justify-start gap-y-1">
                <span class="text-[15px] interRegular text-[#6B7280] text-left ">Family Setup</span>
                <SetupSelect :placeholder="inputs.setup" :options="familySetups" @update="(value:string)=> inputs.setup = value" />
              </div>

              <div class="w-full flex flex-col items-start justify-start gap-y-1">
                <span class="text-[15px] interRegular text-[#6B7280] text-left ">Notification Frequency</span>
                <SetupSelect :placeholder="inputs.frequency" :options="frequencies" @update="(value:string)=> inputs.frequency = value" />
              </div>



              <div class="w-full flex flex-col items-start justify-start gap-y-1">
                <span class="text-[15px] interRegular text-[#6B7280] text-left ">Topics Of interest</span>

                <div class="w-full flex flex-wrap items-center justify-start gap-4 relative">
            
                  <button
                      v-for="(topic,idx) in topics"
                      :key="idx"
                      @click="toggleStringInArray(topic.id)"
                      class="w-full lg:w-[48%] relative flex items-center justify-start py-3 px-3 gap-x-2 bg-[#FFFFFF] text-white text-[12px] rounded-lg"
                      >
                      <svg class="absolute -top-2 right-0" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 9C22 15.0751 21.5751 18.5 15.5 18.5C6.5 5.5 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 2.92487 22 9Z" fill="#FFA071"/>
                      </svg>

                      <svg v-if="inputs.topics.includes(topic.id)" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="24" height="24" rx="6" fill="#D1D5DB"/>
                        <rect x="1" y="1" width="24" height="24" rx="6" stroke="#F9FAFB" stroke-width="2"/>
                        <rect x="6" y="6" width="14" height="14" rx="2" fill="#FF5400"/>
                      </svg>

                      <svg v-else width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="24" height="24" rx="6" fill="#D1D5DB"/>
                        <rect x="1" y="1" width="24" height="24" rx="6" stroke="#F9FAFB" stroke-width="2"/>
                      </svg>

                      <span class="text-[#9CA3AF] text-[12px] interRegular text-center whitespace-nowrap truncate">{{topic.name}}</span>

                  </button>

                </div>
                
              </div>


              

              <button :disable="showLoader" @click="updateDetails()" class="w-full sm:w-[30%] self-end mt-6 flex items-center justify-center whitespace-nowrap interRegular py-3.5 px-6 gap-x-2 text-[16px] text-[#FFFFFF] bg-[#FF5400] rounded-lg border shadow-sm border-gray-300" type="button">
                <span v-if="!showLoader" class="text-[14px] interRegular text-[#FFFFFF] text-center">Save Changes</span>
                <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
                  animationDuration=".5s" aria-label="Custom ProgressSpinner" 
                />
              </button>

            </div>

          
          </div>



  </template>

  <script setup lang="ts">

  import { Toaster, toast } from 'vue-sonner'

  import { storeToRefs } from 'pinia';
  import { usePromptStore } from '~/store/prompt';
  import { useAuthStore } from '~/store/auth';

  const { fetchTopics } = usePromptStore();
  const { getFamily, updateFamily } = useAuthStore();
  // const { loading } = storeToRefs(usePromptStore());


  const showLoader = ref(false)

  interface family {
    name: string;
    setup: string;
    notificationFrequency: string;
    topics: string[]
  }

  interface topic {
    id: string;
    name: string;
    createdAt: string
  }

  const topics = ref<topic[]>([])
  const Family = ref<family>()
  

  const inputs = reactive({
    name: Family.value?.name ? Family.value?.name :'',
    setup: Family.value?.setup ? Family.value?.setup :'',
    frequency: Family.value?.notificationFrequency ? Family.value?.notificationFrequency :'',
    topics: Family.value?.topics ? Family.value?.topics : []
  })

  const familySetups = [
    {label:'Parenting Family (With Kids)',value:'PARENTING'},
    {label:'Partnered Family (Without Kids)',value:'PARTNERED'},
    {label:'Single Parent Family',value:'SINGLE'}
  ]

  const frequencies = [
    {label:'Daily',value:'DAILY'},
    {label:'Twice weekly',value:'TWICE_WEEKLY'},
    {label:'Weekly',value:'WEEKLY'},
    {label:'Never',value:'NEVER'}
  ]



  const updateDetails = async()=>{
    showLoader.value = true

    console.log(inputs)
    const result = await updateFamily(inputs);

    console.log(result)
    if(result?.success){
      toast.success(result?.msg)
    }else{
      toast.error(result?.msg)
    }

    showLoader.value = false

  }

  function toggleStringInArray(stringToAddOrRemove: string) {
    const index = inputs.topics.indexOf(stringToAddOrRemove);

    if (index === -1) {
      // If the string is not found, add it to the array
      return inputs.topics = [...inputs.topics, stringToAddOrRemove]; 
    } else {
      // If the string is found, remove it from the array
      return inputs.topics = inputs.topics.filter((item) => item !== stringToAddOrRemove);
    }
  }

  const fetchFamily = async()=>{
    const data = await getFamily()
    console.log(data)

    if(data?.success){
      // Family.value = data?.family
      inputs.name = data?.family.name
      inputs.setup = data?.family.setup
      inputs.topics = data?.family.topics
    }

  }

  const fetchData = async()=>{
    const result = await fetchTopics()

    console.log(result)
    if(result?.success){
      // topics.value = []
      topics.value = result?.topics
    }

  }

  onMounted(async()=>{
    showLoader.value = true

    await fetchFamily()
    await fetchData()
    showLoader.value = false

  })
  
  </script>