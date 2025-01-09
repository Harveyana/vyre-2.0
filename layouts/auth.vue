<template>
   <div class="h-screen lg:max-h-[50rem] max-w-screen-3xl mx-auto w-full overflow-hidden flex flex-col items-center justify-center">

    <div class="bg-doodle w-full h-full flex  flex-col sm:flex-row items-center justify-center px-4 sm:px-10">

        <section class="w-[40%] h-full flex items-center justify-center header p-6">
            <div class="w-full h-full flex justify-center items-center rounded-3xl">
                <!-- <NuxtLink class="hidden sm:flex" >
                    <img src="~/assets/img/logo/vyreLogo.png" alt="vyre">
                </NuxtLink> -->

                <!-- <NuxtLink v-if="$route.path == '/signup' " class="flex flex-row items-center justify-center gap-x-1" to="/login">
                    <h3 class="text-[12px] sm:text-[16px] SansRegular text-[#0D0D0D] text-left ">Already have an account?</h3>
                    <span class="text-[12px] sm:text-[16px] SansRegular text-[#FF2E42] text-left ">Login</span>
                </NuxtLink>

                <NuxtLink v-if="$route.path == '/login' " class="flex flex-row items-center justify-center gap-x-1" to="/signup">
                    <h3 class="text-[12px] sm:text-[16px] SansRegular text-[#0D0D0D] text-left ">Are you a new user?</h3>
                    <span class="text-[12px] sm:text-[16px] SansRegular text-[#FF2E42] text-left ">Create account</span>
                </NuxtLink> -->
            </div>
            <!-- <div v-if="$route.path == '/signup' || $route.path == '/forgotPassword' " class="w-full bg-gray-200 rounded-full h-1 ">
            <div  class="bg-[#FF2E42] h-1 rounded-full" :style="`width: ${progress}%`"></div>
            </div> -->
        </section>

        <section class="w-full sm:w-[40%] ">
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

