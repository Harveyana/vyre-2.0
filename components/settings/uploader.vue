<template>
      <div class="flex flex-col items-center justify-center gap-y-3">

                <!-- Import product from file -->
                <div class="w-full flex flex-col items-center justify-center gap-y-2">

                  <div class="w-full flex flex-row item-center justify-center">
                    <img  class="w-28 max-h-28 rounded-full" :src="imageURL[0]? imageURL[0] : props.defaultImg" alt="avatar">
                  </div>

                  <div ref="dropZoneRef" :class="{ 'border border-dashed border-green-400': isOverDropZone }" class="w-full border border-dashed border-[#E4E5E7] hover:border-white rounded-3xl flex flex-col items-center justify-center bg-transparent py-5 gap-y-4">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.0001 12.5274L15.8188 16.3452L14.5452 17.6187L12.9001 15.9735V21H11.1V15.9717L9.45485 17.6187L8.18135 16.3452L12.0001 12.5274ZM12.0001 3C13.5453 3.00007 15.0367 3.568 16.1906 4.59581C17.3445 5.62361 18.0805 7.03962 18.2587 8.5746C19.3785 8.87998 20.3554 9.56919 21.0186 10.5218C21.6819 11.4744 21.9893 12.6297 21.8871 13.786C21.7849 14.9422 21.2797 16.0257 20.4597 16.8472C19.6396 17.6687 18.557 18.1759 17.401 18.2802V16.4676C17.8151 16.4085 18.2133 16.2674 18.5724 16.0527C18.9314 15.8379 19.2441 15.5539 19.4922 15.217C19.7402 14.8801 19.9187 14.4972 20.0171 14.0906C20.1156 13.6839 20.1321 13.2618 20.0656 12.8488C19.9991 12.4357 19.851 12.0401 19.63 11.6849C19.4089 11.3297 19.1194 11.0221 18.7781 10.78C18.4369 10.538 18.0509 10.3663 17.6426 10.2751C17.2343 10.1838 16.812 10.1748 16.4002 10.2486C16.5411 9.5924 16.5335 8.91297 16.3778 8.2601C16.2222 7.60722 15.9225 6.99743 15.5007 6.47538C15.0789 5.95333 14.5456 5.53225 13.94 5.24298C13.3343 4.9537 12.6717 4.80357 12.0005 4.80357C11.3293 4.80357 10.6667 4.9537 10.061 5.24298C9.45539 5.53225 8.92214 5.95333 8.50031 6.47538C8.07849 6.99743 7.77879 7.60722 7.62315 8.2601C7.46752 8.91297 7.4599 9.5924 7.60085 10.2486C6.77974 10.0944 5.93101 10.2727 5.24136 10.7443C4.55171 11.2159 4.07765 11.9421 3.92345 12.7632C3.76925 13.5843 3.94756 14.433 4.41914 15.1227C4.89072 15.8123 5.61694 16.2864 6.43805 16.4406L6.60005 16.4676V18.2802C5.44396 18.1761 4.36122 17.669 3.54107 16.8476C2.72093 16.0261 2.21555 14.9426 2.11326 13.7863C2.01097 12.6301 2.31828 11.4747 2.98148 10.522C3.64468 9.56934 4.62159 8.88005 5.74145 8.5746C5.91939 7.03954 6.65532 5.62342 7.80927 4.59558C8.96323 3.56774 10.4547 2.99988 12.0001 3Z" fill="#686767"/>
                    </svg>

                    <h4 class="interRegular text-[14px] text-center text-[#686767] font-bold">
                      Choose a file or drag & drop it here. <br>
                      JPEG, PNG, and MP4 formats, up to 50 MB.
                    </h4>

                    <button @click="open" class="border-[#E4E5E7] interRegular border text-[#686767] text-[14px] px-3 py-2 rounded-xl">
                      Browse File
                    </button>

                  </div>

                
                </div>


                <button :disable="showLoader" @click="saveImage()" class="w-full bg-black flex flex-row items-center justify-center rounded-lg mt-6 py-3">
                  <span v-if="!showLoader" class="text-[16px] interSemiBold text-[#FFFFFF] text-center">Save</span>
                  <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
                    animationDuration=".5s" aria-label="Custom ProgressSpinner" 
                  />
                </button>

              </div>
  </template>

  <script setup lang="ts">

  const props = defineProps<{
      defaultImg:string
  }>()

  const showLoader = ref(false)


  const { files, open, reset, onChange } = useFileDialog({
      accept: 'image/*', // Set to accept what type of files
      multiple: false 
  })

  const imagefiles = ref<File[]>([]);
  const imageURL = ref<string[]>([]);
  const images = ref<string[]>([]);


  const updateImageURLs = () => {
    imageURL.value = imagefiles.value.map(file => window.URL.createObjectURL(file));
  };

  onChange((files) => {
    console.log(files)
    if(files?.length)imagefiles.value.push(files[0])
    updateImageURLs();
  
  })

  const {getImageUrls} = useConverters()

  const dropZoneRef = ref<HTMLDivElement>()

  function onDrop(files: File[]) {
    console.log(files)
    if(files?.length)imagefiles.value.push(files[0])
    updateImageURLs();
  }

  const { isOverDropZone } = useDropZone(dropZoneRef, {
    onDrop,
    // specify the types of data to be received.
    dataTypes: ['image/png','image/jpeg']
  })

  const emit = defineEmits(['update'])

  const saveImage = async()=>{
    showLoader.value = true
    images.value.push(...await getImageUrls(imagefiles.value))
    showLoader.value = false
    
    emit('update',images.value[0])
  }


  
  </script>