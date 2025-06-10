<template>

      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton class="flex items-start p-2 rounded-lg">
            <div class="flex items-center justify-center w-fit text-sm bg-black rounded-full focus:ring-0 " id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
              <img v-if="user && user?.photoUrl" class="max-w-8 min-w-6 min-h-6 rounded-full" :src="user?.photoUrl" alt="user photo">
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-1" width="16" height="16" viewBox="0 0 24 24"><path fill="#ffff" d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569z"/></svg>
            </div>
          </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95" >
          <MenuItems class="absolute right-0 z-20 -mt-32 sm:mt-2 w-fit origin-top-right rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="py-1">

              <MenuItem v-slot="{ active }"
              class="bg-none hover:bg-gray-200 cursor-pointer"
              >
                <NuxtLink href="/settings" :class="[active ? 'bg-gray-100 whitespace-nowrap text-gray-900' : 'text-gray-700 whitespace-nowrap', 'block whitespace-nowrap px-4 py-2 text-sm flex items-center justify-between gap-x-2 rounded-t-2xl']">
                  Settings
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                </NuxtLink>
              </MenuItem>

              <MenuItem v-slot="{ active }"
              class="bg-none hover:bg-gray-200 cursor-pointer"
              >
                <button @click="$emit('signout')" :class="[active ? 'bg-gray-100 whitespace-nowrap text-gray-900' : 'text-gray-700 whitespace-nowrap', 'w-full block whitespace-nowrap px-4 py-2 text-sm flex items-center justify-between gap-2 rounded-b-2xl']">
                  Logout
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 24 24"><g fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2"/><path d="M9 12h12l-3-3m0 6l3-3"/></g>
                  </svg>
                </button>
              </MenuItem>

            </div>
          </MenuItems>
        </transition>
      </Menu>


    
  </template>
  <script setup lang="ts">
    import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

    import { storeToRefs } from 'pinia';
    import { useAuthStore } from '~/store/auth';
    const { getProfile,logUserOut } = useAuthStore();

    const { user } = storeToRefs(useAuthStore()); 



  // const Statuses = defineModel<string[]>("Statuses")

  // const props = defineProps<{
  //   filters: string[]
  // }>()

  const links = ref(['settings'])

  

  const emit = defineEmits(['update','signout'])  // Declare Events


  // const update = (value:string)=>{
  //   emit('update',value)
  // }
  
  </script>

