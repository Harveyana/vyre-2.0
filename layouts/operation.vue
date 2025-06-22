<template>
   <div class="min-h-screen h-[100dvh] bg-doodle  max-w-screen-3xl mx-auto w-full overflow-hidden flex flex-col items-center justify-center relative">

      <Toaster position="top-right" />
      <div class="relative  w-full h-full flex flex-col items-start justify-start px-2 sm:px-10 py-10">
         <!-- <VyreMobileMenu />
         <VyreMenu/> -->
         <section class="w-full relative flex flex-col items-center justify-center">
            <Transition name="page" mode="out-in">
              <slot />
            </Transition>
         </section>
      
      </div>


   </div>

</template>

<script setup lang="ts">
   import { storeToRefs } from 'pinia';
   import { useAuthStore } from '~/store/auth';

   const { progress } = storeToRefs(useAuthStore());

   const route = useRoute()
   const progressValue = ref(progress)
   
</script>

<style scoped>

   .bg-doodle {
    background: url("~/assets/img/doodle4.png");
    /* background-color: #fff; */
    background-repeat: no-repeat;
    /* background-size: auto; */
    background-size: cover;
    /* background-position: right center; */
   }


</style>

