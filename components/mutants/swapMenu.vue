<template>


  <Aside class="absolute top-0 -left-3 sm:-left-20 w-fit h-fit flex  sm:p-6">

    <div class="flex items-center justify-center gap-2 bg-white rounded-r-3xl">
      <div class="flex items-center justify-center rounded-r-3xl bg-black px-1.5 py-3 sm:px-2 sm:py-2">
          <ul class="flex flex-col items-center justify-center gap-4">
            
            <li>
                <NuxtLink href="/swap" :class="$route.path == '/swap'? 'text-black bg-white':'text-white bg-black hover:bg-white'"  class="flex items-center justify-center gap-1 p-1 sm:py-2  sm:px-3 text-base text-gray-900 rounded-full group">
                      <!-- <svg :class="$route.path == '/swap'? 'text-black':'text-gray-500 dark:text-gray-400'" class="min-w-4 w-4 h-4 sm:w-6 sm:h-6 transition duration-75 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg> -->
                      <svg :class="$route.path == '/swap'? 'text-black':'text-gray-500'" class="min-w-4 w-4 h-4 sm:w-6 sm:h-6 transition duration-75 group-hover:text-black"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"/></svg>
                      <!-- <span v-if="$route.path == '/'" class="text-[14px] Grotesque-Regular text-black">Home</span> -->
                </NuxtLink>
            </li>

            <li>
                <NuxtLink href="/swap/orders" :class="$route.path == '/swap/orders'? 'text-black bg-[#e5f2fe]':'text-white bg-black hover:bg-white'"  class="flex items-center justify-center gap-1 p-1 sm:py-2 sm:px-3 text-base text-gray-900 rounded-full  group">
                  <svg xmlns="http://www.w3.org/2000/svg" :class="$route.path == '/swap/orders'? 'text-black':'text-gray-500'" class="flex-shrink-0 min-w-4 w-4 h-4 sm:w-6 sm:h-6 transition duration-75 group-hover:text-black" viewBox="0 0 24 24"><path fill="currentColor" d="M21.5 9a6.5 6.5 0 0 1-4 6.002V15A8.5 8.5 0 0 0 9 6.5h-.002A6.502 6.502 0 0 1 21.5 9M7 3a4 4 0 0 0-4 4v1.5h2V7a2 2 0 0 1 2-2h1.5V3zm12 12.5V17a2 2 0 0 1-2 2h-1.5v2H17a4 4 0 0 0 4-4v-1.5zm-10 6a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0-9l2.5 2.5L9 17.5L6.5 15z"/></svg>
                </NuxtLink>
            </li>

          </ul>
      </div>

    </div>

  </Aside>


  </template>

  <script setup lang="ts">
   import { useDark, useToggle } from '@vueuse/core'
   import { storeToRefs } from 'pinia';
    import { useAuthStore } from '~/store/auth';
    const { getProfile,logUserOut } = useAuthStore();

    const { user } = storeToRefs(useAuthStore()); 
   const emit = defineEmits(['toggle'])

   const showNotification = ref(false)
   const showApps = ref(false)
   const router = useRouter()

   const showLogout = ref(false)

    const signOut = ()=>{
      logUserOut()
      showLogout.value = false
      router.push('/login')
    }
   

   const isDark = useDark()
   const toggleDark = useToggle(isDark)

   function getItem(item:string) {
      if (process.client) {
        return localStorage.getItem(item)
      } else {
        return undefined
      }
    }

    function setItem(item:string, value:string) {
      if (process.client) {
        localStorage.setItem(item, value)
      
        return true
      } else {
        return false
      }
    }
          
  </script>


  <style>
    .bg-doodle {
        background: url("~/assets/img/doodle2.png");
        /* background-color: #4eacea; */
        background-repeat: no-repeat;
        /* background-size: auto; */
        background-size: cover;
        /* background-position: right center; */
    }
  </style>