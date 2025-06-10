<template>
   <div class="min-h-screen h-[100dvh] max-w-screen-3xl mx-auto w-full overflow-hidden flex flex-col items-center justify-center">

    <div class="bg-doodle w-full h-full flex  flex-col sm:flex-row items-center justify-center px-4 sm:px-10">

        <!-- <section class="w-[40%] h-full flex items-center justify-center header p-6">
          
        </section> -->

        <section class="w-full sm:w-[40%] bg-white p-3 flex items-center justify-center rounded-2xl shadow-md">
           <slot /> 
        </section>
        
        
    </div>

      <!-- <MobileMenu /> -->

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
    background: url("~/assets/img/doodle2.png");
    /* background-color: #4eacea; */
    background-repeat: no-repeat;
    /* background-size: auto; */
    background-size: cover;
    /* background-position: right center; */
    }

</style>

