<template>

  <DialogRoot v-model:open="props.visible">
      
      <DialogPortal>
        <DialogOverlay class="bg-black opacity-50 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
        <DialogContent
          class="data-[state=open]:animate-contentShow bg-white fixed top-[50%] left-[50%] overflow-y-hidden max-h-[85vh] w-[92vw] lg:w-fit translate-x-[-50%] translate-y-[-50%] rounded-xl px-4  lg:px-8 py-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
        >
          <DialogTitle v-if="props.title" class="inter leading-tight text-[#000000] text-[16px] sm:text-[20px] mb-4">
            {{props.title}}
          
          </DialogTitle>

          <slot></slot>

          
          <!-- <DialogClose
            @click="$emit('close')"
            class="text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-5 right-5 inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <svg width="50" height="50" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.25" y="1.25" width="29.5" height="29.5" rx="14.75" fill="#FAFAFA"/>
              <rect x="1.25" y="1.25" width="29.5" height="29.5" rx="14.75" stroke="#F2F2F2" stroke-width="1.5"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0581 11.0581C11.3021 10.814 11.6979 10.814 11.9419 11.0581L16 15.1161L20.0581 11.0581C20.3021 10.814 20.6979 10.814 20.9419 11.0581C21.186 11.3021 21.186 11.6979 20.9419 11.9419L16.8839 16L20.9419 20.0581C21.186 20.3021 21.186 20.6979 20.9419 20.9419C20.6979 21.186 20.3021 21.186 20.0581 20.9419L16 16.8839L11.9419 20.9419C11.6979 21.186 11.3021 21.186 11.0581 20.9419C10.814 20.6979 10.814 20.3021 11.0581 20.0581L15.1161 16L11.0581 11.9419C10.814 11.6979 10.814 11.3021 11.0581 11.0581Z" fill="#010109"/>
            </svg>
          </DialogClose> -->
        </DialogContent>
      </DialogPortal>

  </DialogRoot>



  
  </template>
  

  <script setup lang="ts">

   const emit = defineEmits(['close']) 

    const props = defineProps<{
        visible: boolean,
        title?:string
    }>()
  </script>