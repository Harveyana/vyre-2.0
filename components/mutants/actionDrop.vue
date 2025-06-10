<template>

      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton class="flex items-start p-2 rounded-lg">
            <svg width="13" height="3" viewBox="0 0 13 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#2C2929"/>
              <circle cx="6.5" cy="1.5" r="1.5" fill="#2C2929"/>
              <circle cx="11.5" cy="1.5" r="1.5" fill="#2C2929"/>
            </svg>
          </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95" >
          <MenuItems class="absolute right-0 z-20 mt-2 w-fit origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="py-1">
              <MenuItem v-slot="{ active }"
              v-for="(option, index) in props.filters"
              :key="index"
              class="bg-none hover:bg-gray-200 cursor-pointer"
              @click="update(option)"
              >
                <button :class="[active ? 'bg-gray-100 whitespace-nowrap text-gray-900' : 'text-gray-700 whitespace-nowrap', 'block whitespace-nowrap px-4 py-2 text-sm']">{{option}}</button>
              </MenuItem>
              
            </div>
          </MenuItems>
        </transition>
      </Menu>


    
  </template>
  <script setup lang="ts">
    import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'


  // const Statuses = defineModel<string[]>("Statuses")

  const props = defineProps<{
    filters: string[]
  }>()

  

  const emit = defineEmits(['update'])  // Declare Events


  const update = (value:string)=>{
    emit('update',value)
  }
  
  </script>

