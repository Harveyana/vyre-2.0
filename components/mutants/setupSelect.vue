<template>


      <Menu as="div" class="w-full relative inline-block text-left">
        <div class="w-full">
          <MenuButton :class="selected ? 'text-black':'text-gray-500'" class="w-full inline-flex items-center justify-between whitespace-nowrap interRegular py-2 px-3 gap-x-2 text-[12px]  bg-gray-100 hover:bg-white rounded-lg shadow-sm">
            {{selected ? selected : props.placeholder!}}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14.6997L8.18127 10.881L9.45477 9.6084L12 12.1545L14.5452 9.6084L15.8187 10.881L12 14.6997Z" fill="#686767"/>
            </svg>
          </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <MenuItems class="w-full max-h-[25vh] overflow-y-auto absolute right-0 z-20 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="py-1">
              <MenuItem v-slot="{ active }"
                v-for="(option, index) in props.options"
                :key="index"
                class="bg-none hover:bg-gray-200 cursor-pointer"
                @click="update(option.value)"
              >
                <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-1 interRegular text-[12px]']">{{option.label}}</a>
              </MenuItem>
              
            </div>
          </MenuItems>
        </transition>
      </Menu>


    
  </template>
  <script setup lang="ts">
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'


  // const Statuses = defineModel<string[]>("Statuses")

  interface option {
    label:string;
    value:string;
  }

  const props = defineProps<{
    options: option[];
    placeholder?: string;
  }>()

  const selected = ref('')

  const emit = defineEmits(['update'])  // Declare Events


  const update = (value:string)=>{
    selected.value = value
    emit('update',value)
  }
  
  </script>

