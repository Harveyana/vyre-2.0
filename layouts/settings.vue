<template>
   <div class="min-h-screen h-[100dvh] bg-doodle  max-w-screen-3xl mx-auto w-full overflow-hidden flex flex-col items-center justify-center relative">

      
      <Toaster position="top-right" />

      <div v-if="loading" class="h-full flex flex-col items-center justify-center gap-3 text-center">
        <LottieLoader />
       
      </div>


      <div v-else class="relative  w-full xl:w-[95%] 2xl:w-[60%] h-full flex flex-col items-start justify-start px-2 sm:px-10 py-6 sm:py-0">

         <div v-if="showOnlineModal" id="online-modal" class="w-full absolute left-0 bottom-0 rounded-t-2xl bg-green-400 flex items-center justify-center p-2 z-50">
            <h3 class="Grotesque-Regular text-[18px] text-white">Back Online!</h3>
         </div>

         <div v-if="showOfflineModal" id="online-modal" class="w-full absolute left-0 bottom-0 rounded-t-2xl bg-black flex items-center justify-center p-2 z-50">
            <h3 class="Grotesque-Regular text-[18px] text-white">You are offline!</h3>
         </div>


         <VyreMobileMenu />
         <VyreMenu/>
        <section class="w-full relative flex flex-col items-center justify-center ">
            <Transition name="page" mode="out-in">
              <slot />
            </Transition>
        </section>
        
        <!-- <VyreMobileMenu /> -->
      </div>


   </div>

   <BaseDialogue class="bg-white" :visible="showOnboard">

      <div class="relative flex flex-col lg:w-[450px] gap-y-4 bg-white">
            
         <OnboardModal :user="user" @close="showOnboard = false" />

      </div>

   </BaseDialogue>

   <BaseDialogue class="bg-white" :visible="showAddAccount">
      <div class="relative flex flex-col lg:w-[450px] bg-white">
         <div v-if="SELECT ==='START'" class="w-full h-fit flex flex-col items-center justify-center gap-3 rounded-3xl shadow-md px-2 pt-4 sm:pt-6 pb-4">

            <div class="flex flex-col items-center justify-center gap-y-4">

               <NuxtLink href="/accounts" class="w-full rainbow-border-box flex flex-col items-center justify-center gap-y-2 rounded-2xl p-[5px]  bg-black">

                  <div class=" w-full flex flex-row items-center justify-between sm:gap-y-2 rounded-3xl p-2 py-4 sm:p-4  bg-black">

                     <div class="flex flex-col items-start justify-start px-4">
                        <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] sm:text-[17px] text-white relative">
                           Payment Accounts
                        </h1> 
                        <h3 class="Grotesque-Light text-start text-[11px] sm:text-[12px] text-white">
                           To start swapping, please add your payment methods
                        </h3>
                     </div>

                     <div class="p-1 sm:p-2 bg-white flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M41.9999 24H5.99994"/><path d="M30 12L42 24L30 36"/></g></svg>
                     </div>


                  </div>

               </NuxtLink>

               <button @click="showAddAccount = false" class="p-1 self-end mr-2 sm:p-2 bg-white flex items-center justify-center rounded-full">
                Skip
               </button>

            </div>
      
         </div>
      </div>
   </BaseDialogue>

</template>

<script setup lang="ts">
   import { storeToRefs } from 'pinia';
   import { useOnline } from '@vueuse/core';
   import { useAuthStore } from '~/store/auth';
   const { getProfile,logUserOut } = useAuthStore();

   const { loading } = storeToRefs(useAuthStore());

   // definePageMeta({
   //    middleware: 'auth'
   // });


   const { user } = storeToRefs(useAuthStore()); 

   const { progress } = storeToRefs(useAuthStore());

   const online = useOnline();
   const showOnlineModal = ref<boolean>(false);
   const showOfflineModal = ref<boolean>(false);
   let modalTimeout: NodeJS.Timeout | null = null;

   const showOnboard = ref(false)
   const showAddAccount = ref(false)
   const SELECT = ref('START');

   const showStatusModal = () => {
    // Clear any existing timeout
      if (modalTimeout) {
         clearTimeout(modalTimeout);
         modalTimeout = null;
      }

      // Show the appropriate modal
      if (online.value) {
         showOnlineModal.value = true;
         showOfflineModal.value = false;
      } else {
         showOfflineModal.value = true;
         showOnlineModal.value = false;
      }

      // Auto-hide after 5 seconds
      modalTimeout = setTimeout(() => {
         showOnlineModal.value = false;
         showOfflineModal.value = false;
         modalTimeout = null;
      }, 5000);
   };

  // Watch for online status changes
  watch(online, (newValue, oldValue) => {
    if (newValue !== oldValue) {
      showStatusModal();
    }
  });

   // const { data, pending } = await useAsyncData( 'user', async () => {
   //   const userData = await getProfile()
   //   console.log(userData)


   //   if(userData?.user && userData?.user?.userStatus !=='ACTIVE'){
   //     showVerificationBox.value = true
   //     return userData
   //   }

   //   if(!userData?.hasAnyPaymentMethod){
   //     showAddAccount.value = true
   //     return userData
   //   }

   //  return userData
   // });

   // if(!data.value.success){
   //  console.log('user not found')
   // }

   const route = useRoute()
   const progressValue = ref(progress)

   onMounted(async()=>{

      try {
         const {success, user, isNewUser} = await getProfile()
         if(success){
            console.log('user', user)
            user.value = user
         }
         if(isNewUser)return showOnboard.value = true
        // router.push('/')
      } catch (e) {
        console.error(e)
        // navigateTo('/login?error=auth_failed');
      }
   })
   
</script>

<style scoped>

   /* .router-link-exact-active{
    border-left:4px solid #0050A8;
    background-color: black;
     color: white
   } */

   .bg-doodle {
    background: url("~/assets/img/doodle4.png");
    /* background-color: #fff; */
    background-repeat: no-repeat;
    /* background-size: auto; */
    background-size: cover;
    /* background-position: right center; */
   }

</style>

