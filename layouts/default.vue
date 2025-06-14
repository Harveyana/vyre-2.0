<template>
   <div class="min-h-screen h-[100dvh] bg-doodle  max-w-screen-3xl mx-auto w-full overflow-hidden flex flex-col items-center justify-center relative">

      <VyreMobileMenu />

      <Toaster position="top-right" />
      <div v-if="pending" class="flex items-center gap-x-3 justify-center h-full w-full bg-[#F7F7F7] rounded-3xl border border-8 border-white">
        <img class="w-60 rounded-full" src="~/assets/img/logo/vyreLogo.png" alt="vyre logo">
      </div>


      <div v-else class="relative  w-full h-full flex flex-col items-center justify-start px-2 sm:px-10 py-6 sm:py-0">

         <VyreMenu/>
        <section class="w-full relative flex flex-col items-center justify-center ">
            <Transition name="page" mode="out-in">
              <slot />
            </Transition>
        </section>
        
        <!-- <VyreMobileMenu /> -->
      </div>


   </div>

   <BaseDialogue class="bg-white" :visible="showVerificationBox">

      <div class="relative flex flex-col lg:w-[350px] gap-y-4 bg-white">
            
            <!-- <div class=" w-full flex items-center justify-between ">
               <h1 class="text-[18px] whitespace-nowrap SoraRegular text-[#080708]">
                  Link Bank Account
               </h1>

               <button @click="showVerificationBox = false">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                     <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
                  </svg>
               </button>
            </div> -->

            <div class=" rainbow-border-box col-span-12  flex flex-row items-center justify-between rounded-full p-[1px]  bg-black">

               <div class=" w-full flex flex-row items-center justify-between sm:gap-y-2 rounded-full p-4 py-6 sm:p-6  bg-black">

                  <div class="flex flex-col px-4">
                     <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] sm:text-[16px] text-white relative">
                        Verification in progress
                        <span class="Grotesque-Light text-[11px] sm:text-[12px] text-black absolute px-2 mx-2 bg-white rounded-xl"> {{user.userStatus}}</span>
                     </h1> 
                     <h3 class="Grotesque-Light text-[11px] sm:text-[13px] text-white">
                        We are currently verifying your account, and this should take 10 - 20mins .
                     </h3>
                  </div>
                  <!-- <button class="p-1 sm:p-2 bg-white flex items-center justify-center rounded-full">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M41.9999 24H5.99994"/><path d="M30 12L42 24L30 36"/></g></svg>
                  </button> -->


               </div>
         
      
            </div>

         </div>


   </BaseDialogue>

   <BaseDialogue class="bg-white" :visible="showAddAccount">
      <div class="relative flex flex-col lg:w-[450px] bg-white">
         <div v-if="SELECT ==='START'" class="w-full h-fit flex flex-col items-center justify-center gap-3 rounded-3xl shadow-md px-2 pt-4 sm:pt-6 pb-4">

            <div class="flex flex-col items-center justify-center gap-y-4">

               <button @click="SELECT = 'ADD'" class="w-full rainbow-border-box flex flex-col items-center justify-center gap-y-2 rounded-2xl p-[5px]  bg-black">

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

               </button>

               <button @click="showAddAccount = false" class="p-1 self-end mr-2 sm:p-2 bg-white flex items-center justify-center rounded-full">
                Skip
               </button>

            </div>
      
         </div>
         <General v-if="SELECT ==='ADD'" @close="showAddAccount = false" />
      </div>
   </BaseDialogue>

</template>

<script setup lang="ts">
   import { storeToRefs } from 'pinia';
   import { useAuthStore } from '~/store/auth';
   const { getProfile,logUserOut } = useAuthStore();

   const { user } = storeToRefs(useAuthStore()); 

   const { progress } = storeToRefs(useAuthStore());

   const showVerificationBox = ref(false)
   const showAddAccount = ref(false)
   const SELECT = ref('START');

   const { data, pending } = await useAsyncData( 'user', async () => {
     const userData = await getProfile()
     console.log(userData)

     if(userData?.user && userData?.user?.userStatus !=='ACTIVE'){
       showVerificationBox.value = true
       return userData
     }

     if(!userData?.hasAnyPaymentMethod){
       showAddAccount.value = true
       return userData
     }

    return userData
   });

   if(!data.value.success){
    console.log('user not found')
   }

   const route = useRoute()
   const progressValue = ref(progress)
   
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

