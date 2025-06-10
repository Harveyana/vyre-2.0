<template>
   <div class="h-screen lg:max-h-[50rem] max-w-screen-3xl mx-auto w-full overflow-hidden flex flex-col items-center justify-center">

    <div class="bg-doodle w-full h-full flex  flex-col sm:flex-row items-center justify-center px-4 sm:px-10">

        <section class="w-[40%] h-full flex items-center justify-center header p-6">
          
        </section>

        <section class="w-full sm:w-[40%] ">
           <slot /> 
        </section>
        
        
    </div>

      <!-- <MobileMenu /> -->

      <BaseDialogue class="bg-white" :visible="showKYCModal">

         <div class="relative flex flex-col lg:w-[350px] gap-y-4 bg-white">
               
            <KycModal @close="showKYCModal = false" />

         </div>


      </BaseDialogue>

   </div>
</template>

<script setup lang="ts">
   import { storeToRefs } from 'pinia';
   import { useAuthStore } from '~/store/auth';

   const { progress } = storeToRefs(useAuthStore());

   const route = useRoute()
   const progressValue = ref(progress)

   const showKYCModal = ref(false)

   const checkKYCStatus = () => {
      const kycData = JSON.parse(localStorage.getItem('kycTracking') as string);
      
      if (kycData) {
         // Check if expired
         const isExpired = (new Date().getTime() > kycData.timestamp + kycData.expiresIn);
         
         if (!isExpired) {
            showKYCModal.value = true;
         } else {
            localStorage.removeItem('kycTracking');
         }
      }
   };

   onMounted(async()=>{
      checkKYCStatus()
   })
   
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

