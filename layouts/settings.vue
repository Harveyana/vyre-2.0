<template>
    <div class="w-full dark:bg-[#12171D] h-screen mx-auto fixed top-0 left-0 z-20 flex flex-col">
      <!-- <headerMain /> -->

      <Toaster position="top-right" />
      <div v-if="pending" class="flex items-center gap-x-3 justify-center h-full w-full bg-[#F7F7F7] rounded-3xl border border-8 border-white">
        <!-- <h1 class="SansMedium text-[30px] sm:text-[60px] text-[#0A0D14]">
          ParentCo
        </h1> -->
        <img class="w-60 rounded-full" src="~/assets/img/logo/vyreLogo.png" alt="vyre logo">
      </div>

      <div v-else class="h-full flex w-full rounded-2xl">
        <SideBar />
        <section class="lg:ml-64 h-fit bg-[#F2F4F5] dark:bg-[#12171D] w-full grid grid-cols-12 gap-x-2">
          <headerMain @toggle="showMobileNav = !showMobileNav" />
          <div class="col-span-12 h-[83vh] w-full flex flex-col overflow-y-auto scroll-smooth rounded-xl">
            <div class="w-full h-full bg-[#F2F4F5] dark:bg-[#12171D] rounded-xl flex flex-col items-start justify-start h-fit gap-x-1 gap-y-3 lg:gap-x-6 px-2 sm:px-6 py-5">

                <!-- <div class="flex items-start">

                  <h1 class="interBold leading-none text-[18px] text-[#010109]">
                    Settings
                  </h1>

                </div> -->

                <div class="w-full h-[90%] flex items-start justify-start gap-x-6 ">

                  <SettingSideBar />

                  <!-- form -->
                  <div class="w-full h-full sm:w-[80%] overflow-auto flex flex-col bg-[#F2F4F5] dark:bg-[#12171D] rounded-xl  px-2">

                    <slot />
                    

                  </div>
              


                </div>

            </div>
          </div>
        </section>
      </div>
      
      <MobileSideBar v-if="showMobileNav" @toggle="showMobileNav = !showMobileNav"/>
    </div>
  </template>

  <script setup>

  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { getProfile,logUserOut } = useAuthStore();

  const { user } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

  const showLoader = ref(false)
  
  // const showLogoutDialogue = ref(false)

  // const showPostDialogue = ref(false)

  // const signout = ()=>{
  //   logUserOut()
  //   router.push('/login')
  // }

  const { data, pending } = await useAsyncData( 'user', async () => {
    const userData = await getProfile()
    console.log(userData)
    
    return userData
  });

  if(!data.value.success){
    console.log('user not found')
  }


  //  const emit = defineEmits(['toggle'])

   const showMobileNav = ref(false)

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