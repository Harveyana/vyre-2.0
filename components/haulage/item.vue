<template>
    <div class="w-full relative py-3 gap-y-4 flex flex-row items-center justify-center">

      <baseButton @click="$emit('back')" class="hidden absolute top-0 left-0 sm:flex flex-row items-center justify-center p-3">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1061_19444)"><path d="M15 6L9 12L15 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1061_19444"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
        <h4 class="Grotesque-Regular text-[16px] text-[#737373]">
          Back
        </h4>
      </baseButton>

      <!-- items details -->

      <div class="w-full sm:w-[55%] sm:py-12 p-4 sm:px-10 gap-y-6 flex flex-col items-center justify-between rounded-lg border border-[#F4F4FB]">


        <div class="w-full flex flex-col items-star justify-center gap-y-1">
          <h4 class="Grotesque-Regular text-[16px] text-[#010109] -mr-8">
            Item Type
          </h4>
          <BaseDropDown @update="(value:string)=>{item.type = value}" :options="options" />
        </div>

        <div class="w-full flex flex-col items-star justify-center gap-y-1">
          <h4 class="Grotesque-Regular text-[16px] text-[#010109] -mr-8">
            Sub Category
          </h4>
          <BaseDropDown @update="(value:string)=>{item.category = value}" :options="options" />
        </div>

        <div class="w-full flex flex-col items-star justify-center gap-y-1">
          <h4 class="Grotesque-Regular text-[16px] text-[#010109] -mr-8">
            Item Name
          </h4>
          <input  @input="" v-model="item.name" placeholder="" class="w-full bg-[#F9F9FC] rounded-lg border border-gray-300 text-[12px] px-3 py-3 text-gray-800 outline-black"></input>
        </div>


        <div class="w-full flex flex-col items-star justify-center gap-y-1">
          <h4 class="Grotesque-Regular text-[16px] text-[#010109] -mr-8">
            Quantity of Item
          </h4>
          <input v-model="item.quantity" placeholder="0" class="w-full bg-[#F9F9FC] rounded-lg border border-gray-300 text-[12px] px-3 py-3 text-gray-800 outline-black"></input>
        </div>


        <div class="w-full flex flex-col items-star justify-center gap-y-1">

          <h4 class="Grotesque-Regular text-[16px] text-[#010109] -mr-8">
            Upload Images
          </h4>

          <div @click="open" class="w-full bg-[#F9F9FC] cursor-pointer flex flex-row items-center justify-between rounded-lg border border-gray-300 px-3 py-3">
            <h4 class="Grotesque-Regular text-[13px] text-[#010109] -mr-8">
              select
            </h4>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.10156 5.3926L3.23293 4.26123L8.16725 9.19555L13.1016 4.26123L14.2329 5.3926L8.16725 11.4583L2.10156 5.3926Z" fill="#696E79"/>
            </svg>
          </div>

        </div>
        

        <div v-if="files?.length" class="w-full flex flex-row flex-wrap items-center justify-start gap-x-[3%]">
          <!-- images -->
          <div v-for="(preview, index) in images" :key="index" class="w-[30%] h-[30%] relative flex flex-row items-center justify-center rounded-lg border border-black">
            <button class="w-fit absolute -top-3 -right-3" @click="removeImage(index)">
              <img src="~/assets/img/close.svg" class="w-6"/>
            </button>

            <img v-if="imageURL[index]" :src="imageURL[index]" class="w-full"/>

          </div>

        </div>

        <div class="w-full flex items-center justify-start gap-x-12">

          <div class="flex items-center justify-center gap-x-2">

            <div @click="scheduled = !scheduled" :class=" !scheduled ? 'rounded-full border-[7px] border-[#0050A8] cursor-pointer mb-0.5 ': 'mb-0.5 rounded-full border-2 border-black cursor-pointer'">
              <div :class="scheduled ? 'rounded-full p-[7px]':'rounded-full p-[5px]'"></div>
            </div>

            <h4 class="Grotesque-Regular text-[16px] text-[#010109] -mr-8">
              Instant
            </h4>

          </div>

          <div class="flex items-center justify-center gap-x-2">


            <div @click="scheduled = !scheduled" :class=" scheduled ? 'rounded-full border-[7px] border-[#0050A8] cursor-pointer mb-0.5': ' mb-0.5 rounded-full border-2 border-black cursor-pointer'">
              <div :class="scheduled ? 'rounded-full p-[5px]':'rounded-full p-[7px]'"></div>
            </div>

            <h4 class="Grotesque-Regular text-[16px] text-[#010109] -mr-8">
              Scheduled
            </h4>

          </div>

        </div>

        

        <div class="w-full flex flex-row items-center justify-center mt-20 gap-x-4">

          <baseButton @click="$emit('back')" class="w-fit sm:hidden flex flex-row items-center justify-center p-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1061_19444)"><path d="M15 6L9 12L15 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1061_19444"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
            <h4 class="Grotesque-Regular text-[16px] text-[#737373]">
              Back
            </h4>
          </baseButton>

          <baseButton @click="$emit('proceed')" class="bg-[#0050A8] Grotesque-Light w-full py-2.5 px-6 text-white text-[14px]">
            Proceed
          </baseButton>

        </div>


      </div>

    </div>


  </template>

  <script setup lang="ts">

    const images = ref<File[]>([])
    const imageURL = ref<string[]>([]);  

    const options = ref(['Partyer', 'DJ', 'Hypeman', 'Club Manager', 'Event Organizer'])

    const emit = defineEmits(['proceed','back'])  // Declare Events

    const scheduled = ref(false)

    const instant = ref(true)


    const item = reactive({
      type: '',
      category: '',
      name: '',
      quantity: '',
      additional_Number: '',
      scheduled: scheduled.value,
      instant: instant.value
    })

      

    const { files, open, reset, onChange } = useFileDialog({
    accept: 'image/*', // Set to accept what type of files
    multiple: true
    })

    onChange((files) => {
      /** do something with files */
      console.log(files)
      if(files?.length)images.value.push(files[0])
      updateImageURLs();
      
    })

    const updateImageURLs = () => {
      imageURL.value = images.value.map(file => window.URL.createObjectURL(file));
    };

    const removeImage = (index: number) => {
      images.value.splice(index, 1);
      imageURL.value.splice(index, 1);
    };

  
  </script>