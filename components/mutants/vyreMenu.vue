<template>


  <section class=" hidden lg:flex self-start w-full relative sm:top-2 right-0 h-fit items-center justify-between sm:justify-center sm:p-6 mb-2 sm:mb-0">

    <!-- <button class="sm:absolute left-10 text-black bg-[#ffff] Grotesque-Regular hover:text-white hover:bg-black rounded-3xl text-[12px] sm:text-[16px] sm:px-6 sm:py-3 px-3 py-2">
      <-- Back
    </button> -->

    <a href="/" class="hidden lg:flex sm:absolute left-10 text-black bg-[#ffff] Grotesque-Regular hover:text-white hover:bg-black rounded-3xl text-[12px] sm:text-[16px] sm:px-6 sm:py-3 px-3 py-2">
      <img src="~/assets/img/logo/vyreLogo.png" class="h-8 w-8 sm:w-12 sm:h-12" alt="vyre Logo" />
      <!-- <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Vyre</span> -->
    </a>

    <div class="flex items-center justify-center gap-2 bg-white p-2 rounded-3xl">
      <div class="flex items-center justify-center rounded-3xl bg-black px-6 py-2">
          <ul class="flex items-center justify-center gap-4">
            
            <li>
                <NuxtLink href="/" :class="$route.path == '/'? 'text-black bg-white':'text-white bg-black hover:bg-white'"  class="flex items-center justify-center gap-1 py-2 px-3 text-base text-gray-900 rounded-full  group">
                      <svg :class="$route.path == '/'? 'text-black':'text-gray-500'" class="w-6 h-6 transition duration-75 group-hover:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                      <span v-if="$route.path == '/'" class="text-[14px] Grotesque-Regular text-black">Home</span>
                </NuxtLink>
            </li>

            <li>
                <NuxtLink href="/swap" :class="$route.path.includes('/swap')? 'text-black bg-[#e5f2fe]':'text-white bg-black hover:bg-white'"  class="flex items-center justify-center gap-1 py-2 px-3 text-base text-gray-900 rounded-full  group">
                  <svg xmlns="http://www.w3.org/2000/svg" :class="$route.path.includes('/swap')? 'text-black':'text-gray-500'" class="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-black" viewBox="0 0 24 24"><path fill="currentColor" d="M21.5 9a6.5 6.5 0 0 1-4 6.002V15A8.5 8.5 0 0 0 9 6.5h-.002A6.502 6.502 0 0 1 21.5 9M7 3a4 4 0 0 0-4 4v1.5h2V7a2 2 0 0 1 2-2h1.5V3zm12 12.5V17a2 2 0 0 1-2 2h-1.5v2H17a4 4 0 0 0 4-4v-1.5zm-10 6a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0-9l2.5 2.5L9 17.5L6.5 15z"/></svg>
                  <span v-if="$route.path.includes('/swap')" class="text-[14px] Grotesque-Regular text-black">Swap</span>
                </NuxtLink>
            </li>
 

            <!-- add back this for hover  : "hover:bg-white" -->
            <!-- add back this at the svg class : "group-hover:text-black" -->
            <!-- <li>
                <NuxtLink href="" :class="$route.path == '/send'? 'text-black bg-white':'text-white bg-black'"  class="flex items-center justify-center gap-1 py-2 px-3 text-base text-gray-900 rounded-full  group">
                  <svg xmlns="http://www.w3.org/2000/svg" :class="$route.path == '/send'? 'text-black':'text-gray-500'" class="flex-shrink-0 w-6 h-6  transition duration-75" viewBox="0 0 24 24"><path fill="currentColor" d="M20.04 2.323c1.016-.355 1.992.621 1.637 1.637l-5.925 16.93c-.385 1.098-1.915 1.16-2.387.097l-2.859-6.432l4.024-4.025a.75.75 0 0 0-1.06-1.06l-4.025 4.024l-6.432-2.859c-1.063-.473-1-2.002.097-2.387z"/></svg>
                  <span v-if="$route.path == '/send'" class="text-[14px] Grotesque-Regular text-black">Send</span>
                </NuxtLink>
            </li> -->

            <li>
                <NuxtLink href="/accounts" :class="$route.path.includes('/accounts')? 'text-black bg-[#e5f2fe]':'text-white bg-black hover:bg-white'"  class="flex items-center justify-center gap-1 py-2 px-3 text-base text-gray-900 rounded-full  group">
                  <svg xmlns="http://www.w3.org/2000/svg" :class="$route.path.includes('/accounts')? 'text-black':'text-gray-500'" class="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-black" viewBox="0 0 28 28"><path fill="currentColor" d="M3 5.75A2.75 2.75 0 0 1 5.75 3h13.5A2.75 2.75 0 0 1 22 5.75v1.258a3.75 3.75 0 0 1 3.5 3.742v10.5A3.75 3.75 0 0 1 21.75 25H6.754a3.75 3.75 0 0 1-3.75-3.75v-10.5H3V6h.011A3 3 0 0 1 3 5.75m17.5 0c0-.69-.56-1.25-1.25-1.25H5.75a1.25 1.25 0 1 0 0 2.5H20.5zM18.75 16a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"/>
                  </svg>
                  <span v-if="$route.path == '/accounts'" class="text-[14px] Grotesque-Regular text-black">Accounts</span>
                </NuxtLink>
            </li>

            <li>
                  <NuxtLink href="/settings" :class="$route.path.includes('/settings')? 'text-black bg-[#e5f2fe]':'text-white bg-black hover:bg-white'"  class="flex items-center justify-center gap-1 py-2 px-3 text-base text-gray-900 rounded-full  group">
                    <svg xmlns="http://www.w3.org/2000/svg" :class="$route.path.includes('/settings')? 'text-black':'text-gray-500'" class="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-black" viewBox="0 0 24 24"><path fill="currentColor" d="M9.954 2.21a10 10 0 0 1 4.09-.002A4 4 0 0 0 16 5.07a4 4 0 0 0 3.457.261A10 10 0 0 1 21.5 8.877a4 4 0 0 0-1.5 3.122c0 1.264.586 2.391 1.501 3.124a10 10 0 0 1-2.045 3.543a4 4 0 0 0-3.456.261a4 4 0 0 0-1.955 2.86a10 10 0 0 1-4.09.004A4 4 0 0 0 8 18.927a4 4 0 0 0-3.457-.26A10 10 0 0 1 2.5 15.121A4 4 0 0 0 4 11.999c0-1.264-.587-2.39-1.502-3.124a10 10 0 0 1 2.045-3.542A4 4 0 0 0 8 5.07a4 4 0 0 0 1.954-2.86M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></svg>
                    <span  v-if="$route.path.includes('/settings')" class="text-[14px] Grotesque-Regular text-black">Settings</span>
                  </NuxtLink>
            </li>

          </ul>
      </div>

      <div v-if="user?.userStatus !=='ACTIVE'" class="flex items-center justify-center rounded-full bg-black px-2 py-1">
          <ul class="flex items-center justify-center gap-1">

            <li>
                  <NuxtLink href="/kyc" class=" bg-black hover:bg-white flex items-center justify-center gap-1 py-2 px-2 text-base rounded-full group">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-white transition duration-75 group-hover:text-black"  viewBox="0 0 24 24"><g fill="currentColor"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 13c2.396 0 4.575.694 6.178 1.672c.8.488 1.484 1.064 1.978 1.69c.486.615.844 1.351.844 2.138c0 .845-.411 1.511-1.003 1.986c-.56.45-1.299.748-2.084.956c-1.578.417-3.684.558-5.913.558s-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C3.41 20.01 3 19.345 3 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69C7.425 13.695 9.605 13 12 13m0-11a5 5 0 1 1 0 10a5 5 0 0 1 0-10"/></g></svg>
                    <span  class="text-[14px] Grotesque-Regular text-white group-hover:text-black">Submit KYC</span>
                  </NuxtLink>
              </li>

          </ul>
          
      </div>
    </div>


    <!-- <button class="hidden sm:flex sm:absolute right-10 text-gray-200 bg-black Grotesque-Regular hover:bg-white hover:text-black rounded-3xl text-[12px] sm:text-[16px] sm:px-6 sm:py-3 px-3 py-2 ">
      Connect Wallet
    </button> -->
    <div class="hidden sm:flex sm:absolute right-10 flex items-center justify-center rounded-full bg-black px-2 py-1">
          <ul class="flex items-center justify-center gap-1">

            <button 
              @click.stop="toggleMenu" 
              @mouseenter="toggleMenu"
              class="flex items-center justify-center w-fit text-sm bg-black rounded-full focus:ring-0 " id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
              <img v-if="user && user?.photoUrl" class="max-w-8 min-w-6 min-h-6 rounded-full" :src="user?.photoUrl" alt="user photo">
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-1" width="18" height="18" viewBox="0 0 32 32"><path fill="#fff" d="M11.166 23.963L22.36 17.5c1.43-.824 1.43-2.175 0-3L11.165 8.037c-1.43-.826-2.598-.15-2.598 1.5v12.926c0 1.65 1.17 2.326 2.598 1.5z"/></svg>
            </button>

          </ul>

          <transition name="fade">
            <ul
              v-if="expanded" 
              v-click-outside="closeMenu"
              @mouseleave="closeMenu"
              class="flex items-center justify-center gap-1"
            >

              <li>
                  <button @click="showLogout = true" class=" bg-white hover:bg-gray-400 flex items-center justify-center gap-1 py-2 px-2 text-base text-gray-900 rounded-full  group">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black" viewBox="0 0 24 24"><path fill="#000" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.99 9.99 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.99 9.99 0 0 1 12 22m7-6v-3h-8v-2h8V8l5 4z"/></svg>
                  </button>
              </li>

            </ul>
          </transition>
          
    </div>

  </section>



  <BaseDialogue :visible="showLogout">

    <div class="w-full flex flex-col h-fit lg:w-[400px] gap-y-6">
        
        <div class="w-full flex items-start justify-between">

            <div class="flex flex-col items-start justify-center gap-y-[2px]">
                <h1 class="Grotesque-Bold text-[20px] text-[#1A1A1A]">
                Logout
                </h1>

                <h4 class=" max-w-[90%] Grotesque-Regular text-[14px] text-[#737373]">
                    Are you sure you want to log out? You can always come back. We will be here
                </h4>
            </div>

            <button @click="showLogout = false">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                    <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
                </svg>
            </button>
        </div>

        <div class="flex flex-col items-center justify-center gap-y-3">


            <div class="w-full flex items-center justify-center gap-x-4">

                <button @click="signOut()"  class="w-full sm:w-1/2 bg-black flex flex-row items-center justify-center rounded-2xl mt-6 py-3">
                <span class="text-[16px] SoraRegular text-[#FFFFFF] text-center">Yes, Logout</span>
                </button>

                <button @click="showLogout = false"  class="w-full sm:w-1/2 bg-white flex flex-row items-center justify-center rounded-2xl mt-6 py-3">
                <span class="text-[16px] SoraRegular text-[#686767] text-center">Cancel</span>
                </button>

            </div>

        </div>


    </div>

  </BaseDialogue>


  </template>

  <script setup lang="ts">
   import { useDark, useToggle } from '@vueuse/core'
   import { storeToRefs } from 'pinia';
    import { useAuthStore } from '~/store/auth';
    const { getProfile,logUserOut } = useAuthStore();

    const { user } = storeToRefs(useAuthStore()); 
   const emit = defineEmits(['toggle'])

   const { signOut } = useAuth();

   const showNotification = ref(false)
   const showApps = ref(false)
   const router = useRouter()

   const showLogout = ref(false)
   const expanded = ref(false)

    

    // const signOut = async()=>{
    //   // logUserOut()
      
    //   await $auth.client.logout({
    //     returnTo: window.location.origin + '/login',
    //     federated: true
    //   });
    //   showLogout.value = false
    //   // router.push('/login')
    // }
   

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

    const toggleMenu = () => {
      expanded.value = !expanded.value
    }

    const closeMenu = () => {
      expanded.value = false
    }

    // Click outside directive
    const vClickOutside = {
      beforeMount(el, binding) {
        el.clickOutsideEvent = function(event) {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value()
          }
        }
        document.addEventListener('click', el.clickOutsideEvent)
      },
      unmounted(el) {
        document.removeEventListener('click', el.clickOutsideEvent)
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