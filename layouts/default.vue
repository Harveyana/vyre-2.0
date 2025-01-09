<template>
    <div class="w-full dark:bg-[#12171D] h-screen mx-auto fixed top-0 left-0 z-20 flex flex-col">
       <!-- <headerMain /> -->
      <div class="h-full flex w-full rounded-2xl">
        <SideBar />
        <section class="lg:ml-64 h-full bg-[#F2F4F5] dark:bg-[#12171D] w-full grid grid-cols-12 gap-x-2">
          <headerMain @toggle="showMobileNav = !showMobileNav" />
          <div class="col-span-12 h-full w-full flex flex-col overflow-y-scroll scroll-smooth ">
            <!-- <div class="col-span-12 py-16 bg-[url('~/assets/img/doodle2.png')] bg-white dark:bg-[#12171D]">
            </div> -->
            <slot />
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