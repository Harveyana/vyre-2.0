<template>

    <DialogRoot v-model:open="props.visible">
    
      <DialogPortal>
        <DialogOverlay class="bg-black opacity-50 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
        <DialogContent
          class="data-[state=open]:animate-contentShow absolute bottom-0 right-0 overflow-y-scroll h-[100vh] w-[92vw] sm:w-fit rounded-xl bg-white px-4  lg:px-8 py-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
        >

          <slot></slot>

          
          
        </DialogContent>
      </DialogPortal>

  </DialogRoot>



  
  </template>
  

  <script setup lang="ts">

   const emit = defineEmits(['close']) 

    const props = defineProps<{
      visible: boolean
    }>()
  </script>