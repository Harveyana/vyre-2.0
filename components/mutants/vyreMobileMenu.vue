<template>
   <div class="relative flex w-fit top-0 left-[1px] flex lg:hidden items-center justify-start rounded-3xl bg-black px-2 py-2 gap-3 my-4">
     <!-- Menu Button -->
      <button 
       @click.stop="toggleMenu"
       class="border border-white flex items-center justify-center gap-1 py-2 px-2 text-base text-gray-900 rounded-full group"
      >
       <svg v-if="!expanded" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 transition duration-75 text-white" viewBox="0 0 24 24">\<path fill="#fff" d="M7 11.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m10-10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9"/></svg>
       <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 transition duration-75 text-white" viewBox="0 0 21 21">
         <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m7.5 7.5l6 6m0-6l-6 6" stroke-width="1"/>
       </svg>
     </button>
     
     <!-- Navigation Links -->
     <transition name="fade">
       <ul 
         v-if="expanded" 
         v-click-outside="closeMenu"
         class="absolute left-20 mt-0 flex items-center justify-between gap-2.5 bg-black rounded-3xl p-2 z-50 shadow-lg"
       >
         <li>
           <NuxtLink 
             href="/" 
             :class="$route.path == '/' ? 'text-black bg-white' : 'text-white bg-black hover:bg-white'"  
             class="flex items-center justify-center gap-1 py-2 px-2 text-base rounded-full group"
             @click="closeMenu"
           >
             <svg :class="$route.path == '/' ? 'text-black' : 'text-gray-500 dark:text-gray-400'" class="w-6 h-6 transition duration-75 group-hover:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
               <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
             </svg>
           </NuxtLink>
         </li>
 
         <li>
           <NuxtLink 
             href="/swap" 
             :class="$route.path.includes('/swap') ? 'text-black bg-[#e5f2fe]' : 'text-white bg-black'"  
             class="flex items-center justify-center gap-1 py-2 px-2 text-base rounded-full group"
             @click="closeMenu"
           >
             <svg xmlns="http://www.w3.org/2000/svg" :class="$route.path.includes('/swap') ? 'text-black' : 'text-gray-500'" class="flex-shrink-0 w-6 h-6 transition duration-75" viewBox="0 0 24 24">
               <path fill="currentColor" d="M21.5 9a6.5 6.5 0 0 1-4 6.002V15A8.5 8.5 0 0 0 9 6.5h-.002A6.502 6.502 0 0 1 21.5 9M7 3a4 4 0 0 0-4 4v1.5h2V7a2 2 0 0 1 2-2h1.5V3zm12 12.5V17a2 2 0 0 1-2 2h-1.5v2H17a4 4 0 0 0 4-4v-1.5zm-10 6a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0-9l2.5 2.5L9 17.5L6.5 15z"/>
             </svg>
           </NuxtLink>
         </li>
 
         <li>
           <NuxtLink 
             href="" 
             :class="$route.path == '/send' ? 'text-black bg-white' : 'text-white bg-black '"  
             class="flex items-center justify-center gap-1 py-2 px-2 text-base rounded-full group"
             @click="closeMenu"
           >
             <svg xmlns="http://www.w3.org/2000/svg" :class="$route.path == '/send' ? 'text-black' : 'text-gray-500'" class="flex-shrink-0 w-6 h-6 transition duration-75 " viewBox="0 0 24 24">
               <path fill="currentColor" d="M20.04 2.323c1.016-.355 1.992.621 1.637 1.637l-5.925 16.93c-.385 1.098-1.915 1.16-2.387.097l-2.859-6.432l4.024-4.025a.75.75 0 0 0-1.06-1.06l-4.025 4.024l-6.432-2.859c-1.063-.473-1-2.002.097-2.387z"/>
             </svg>
           </NuxtLink>
         </li>
 
         <li>
           <NuxtLink 
             href="/settings" 
             :class="$route.path == '/settings' ? 'text-black bg-white' : 'text-white bg-black hover:bg-white dark:hover:bg-gray-700'"  
             class="flex items-center justify-center gap-1 py-2 px-2 text-base rounded-full group"
             @click="closeMenu"
           >
             <!-- <svg xmlns="http://www.w3.org/2000/svg" :class="$route.path == '/settings' ? 'text-black' : 'text-gray-500'" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black" viewBox="0 0 512 512">
               <path fill="currentColor" d="M258 21.89c-.5 0-1.2 0-1.8.12c-4.6.85-10.1 5.1-13.7 14.81c-3.8 9.7-4.6 23.53-1.3 38.34c3.4 14.63 10.4 27.24 18.2 34.94c7.6 7.7 14.5 9.8 19.1 9c4.8-.7 10.1-5.1 13.7-14.7c3.8-9.64 4.8-23.66 1.4-38.35c-3.5-14.8-10.4-27.29-18.2-34.94c-6.6-6.8-12.7-9.22-17.4-9.22M373.4 151.4c-11 .3-24.9 3.2-38.4 8.9c-15.6 6.8-27.6 15.9-34.2 24.5c-6.6 8.3-7.2 14.6-5.1 18.3c2.2 3.7 8.3 7.2 20 7.7c11.7.7 27.5-2.2 43-8.8c15.5-6.7 27.7-15.9 34.3-24.3c6.6-8.3 7.1-14.8 5-18.5c-2.1-3.8-8.3-7.1-20-7.5c-1.6-.3-3-.3-4.6-.3m-136.3 92.9c-6.6.1-12.6.9-18 2.3c-11.8 3-18.6 8.4-20.8 14.9c-2.5 6.5 0 14.3 7.8 22.7c8.2 8.2 21.7 16.1 38.5 20.5c16.7 4.4 32.8 4.3 44.8 1.1c12.1-3.1 18.9-8.6 21.1-15c2.3-6.5 0-14.2-8.1-22.7c-7.9-8.2-21.4-16.1-38.2-20.4c-9.5-2.5-18.8-3.5-27.1-3.4m160.7 58.1L336 331.7c4.2.2 14.7.5 14.7.5l6.6 8.7l54.7-28.5zm-54.5.1l-57.4 27.2c5.5.3 18.5.5 23.7.8l49.8-23.6zm92.6 10.8l-70.5 37.4l14.5 18.7l74.5-44.6zm-278.8 9.1a40.3 40.3 0 0 0-9 1c-71.5 16.5-113.7 17.9-126.2 17.9H18v107.5s11.6-1.7 30.9-1.8c37.3 0 103 6.4 167 43.8c3.4 2.1 10.7 2.9 19.8 2.9c24.3 0 61.2-5.8 69.7-9C391 452.6 494 364.5 494 364.5l-32.5-28.4s-79.8 50.9-89.9 55.8c-91.1 44.7-164.9 16.8-164.9 16.8s119.9 3 158.4-27.3l-22.6-34s-82.8-2.3-112.3-6.2c-15.4-2-48.7-18.8-73.1-18.8"/>
             </svg> -->
            <svg xmlns="http://www.w3.org/2000/svg" :class="$route.path == '/settings' ? 'text-black' : 'text-gray-500'" class="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-black" viewBox="0 0 24 24"><path fill="currentColor" d="M9.954 2.21a10 10 0 0 1 4.09-.002A4 4 0 0 0 16 5.07a4 4 0 0 0 3.457.261A10 10 0 0 1 21.5 8.877a4 4 0 0 0-1.5 3.122c0 1.264.586 2.391 1.501 3.124a10 10 0 0 1-2.045 3.543a4 4 0 0 0-3.456.261a4 4 0 0 0-1.955 2.86a10 10 0 0 1-4.09.004A4 4 0 0 0 8 18.927a4 4 0 0 0-3.457-.26A10 10 0 0 1 2.5 15.121A4 4 0 0 0 4 11.999c0-1.264-.587-2.39-1.502-3.124a10 10 0 0 1 2.045-3.542A4 4 0 0 0 8 5.07a4 4 0 0 0 1.954-2.86M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></svg>

           </NuxtLink>
         </li>

         <li>
            <button @click="showLogout = true" class=" bg-white hover:bg-gray-400 flex items-center justify-center gap-1 py-1 px-1 text-base text-gray-900 rounded-full  group">
              <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black" viewBox="0 0 24 24"><path fill="#000" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.99 9.99 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.99 9.99 0 0 1 12 22m7-6v-3h-8v-2h8V8l5 4z"/></svg>
            </button>
         </li>
       </ul>
     </transition>
 
     <!-- Connect Wallet Button -->
     <button 
       v-if="!expanded" 
       class="text-gray-200 bg-black Grotesque-Regular hover:bg-white hover:text-black rounded-3xl text-[12px] sm:text-[16px] sm:px-6 sm:py-3 px-3 py-2"
     >
       Connect Wallet
     </button>
   </div>

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

                <button @click="signOut"  class="w-full sm:w-1/2 bg-black flex flex-row items-center justify-center rounded-2xl mt-6 py-3">
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

   const expanded = ref(false)
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


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>