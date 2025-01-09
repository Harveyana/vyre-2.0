<template>
    <div class="w-full flex items-center justify-center bg-white  rounded-xl">


      <div class="w-full flex items-center justify-center relative">
        

        <baseButton @click="$emit('back')" class="hidden absolute top-0 left-0 sm:flex flex-row items-center justify-center p-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1061_19444)"><path d="M15 6L9 12L15 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1061_19444"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
          <h4 class="Grotesque-Regular text-[16px] text-[#737373]">
            Back
          </h4>
        </baseButton>
        
        
        <div class="flex flex-col w-full sm:w-[75%] lg:w-[55%] sm:py-12 p-4 sm:px-10 h-full gap-y-6 my-4">

          <form
            @submit.prevent="submitForm()"
            class="w-full mt-4 flex flex-col gap-y-4"
          >
            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Item Type
              </label>
              <DropSelect :key="resetKey" class="w-full" @update="(value:string)=>{item.type = value}" :options="['Non-Perishable','Perishable']" />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Sub Category
              </label>
              <DropSelect :key="resetKey" class="w-full" @update="(value:string)=>{item.category = value}" :options="['Food','Documents','Gadgets']" />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Item Name
              </label>
              <input
                required
                v-model="item.name"
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-lg flex items-center justify-between outline-none"
                placeholder="Enter last name"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Quantity of Item
              </label>
              <input
                required
                v-model="item.quantity"
                type="number"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-lg flex items-center justify-between outline-none"
                placeholder="0"
              />
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
              <div v-for="(preview, index) in images" :key="index" class="w-[30%] relative flex flex-row items-center justify-center rounded-lg border border-black">
                <button class="w-fit absolute -top-3 -right-3" @click="removeImage(index)">
                  <img src="~/assets/img/close.svg" class="w-6"/>
                </button>

                <img v-if="imageURL[index]" :src="imageURL[index]" class="object-fill w-full h-32 rounded-xl"/>

              </div>

            </div>


            <div class="w-full flex flex-row items-center justify-center mt-10 gap-x-4">

              <baseButton @click="$emit('back')" class="w-fit sm:hidden flex flex-row items-center justify-center p-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1061_19444)"><path d="M15 6L9 12L15 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1061_19444"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                <h4 class="Grotesque-Regular text-[16px] text-[#737373]">
                  Back
                </h4>
              </baseButton>

              <baseButton :disabled="showLoader" type="submit" class="bg-[#0050A8] w-full py-2.5 px-6 flex items-center justify-center">
                <span v-if="!showLoader"  class="text-white text-[14px] Grotesque-Light text-center whitespace-nowrap">Proceed</span>
                <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
                  animationDuration=".5s" aria-label="Custom ProgressSpinner" 
                />
              </baseButton>

            </div>
            

          </form>

          
        </div>
      </div>

    </div>
  </template>
  <script setup lang="ts">
   const {getImageUrl,getImageUrls} = useConverters()
   const imageFile = ref<File>()

    const images = ref<File[]>([])
    const imageURL = ref<string[]>([]);

   const resetKey = ref(2)
    const showLoader =ref(false)
    const scheduled = ref(false)

    const instant = ref(true)


    const item = reactive({
      type: '',
      category: '',
      name: '',
      quantity: '',
      images: [] as string[],
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


   const emit = defineEmits(['back','submit'])  // Declare Events 

  // const initUpload = async(file:File)=>{
  //   director.idFile = await getImageUrl(file)
  // }

  const submitForm = async()=>{
    showLoader.value = true 
    console.log(item)
    if(images.value){
      item.images = await getImageUrls(images.value!)
    }
    if(!item.type || !item.category || !item.quantity || !item.images.length ) return
    console.log(item)

    emit('submit', item)
    showLoader.value = false

  }




  // const props = defineProps<{
  //   model: boolean;
  //   title: string;
  //   description:string;
  //   success:boolean
  // }>()
  // const open =ref(false)
  </script>

