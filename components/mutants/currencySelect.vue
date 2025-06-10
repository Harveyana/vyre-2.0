<template>


      <Menu as="div" class="w-full relative inline-block text-left">
        <div class="w-full">
          <MenuButton class="w-full inline-flex Grotesque-Regular items-center justify-start whitespace-nowrap Grotesque-Regular py-2 px-3 gap-x-2 text-[14px] text-[#686767] bg-white hover:bg-gray-100 rounded-lg">
            <div class="flex items-center justify-center gap-2">
              <h3 class="border rounded-full bg-black text-white text-[12px] px-2 py-3 ">{{selected ? selected.value : options[placeholder].value }}</h3> 

              <div class="flex flex-col items-start justify-center">
                <h2 class='text-[15px] Grotesque-Bold text-[#686767] leading-none'>{{selected ? selected.label : options[placeholder].label}}</h2>
                <p class='text-[11px] Grotesque-Regular text-[#686767]'>{{selected ? (selected.type =='CRYPTO'? selected.chain :selected.label) : (options[placeholder].label)}}</p>
              </div>
            
            </div>
            <svg class="ml-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14.6997L8.18127 10.881L9.45477 9.6084L12 12.1545L14.5452 9.6084L15.8187 10.881L12 14.6997Z" fill="#686767"/>
            </svg>
          </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <MenuItems class="w-full max-h-[35vh] sm:max-h-[30vh] border-4 border-gray-200 overflow-y-auto absolute right-0 z-20 mt-2 origin-top-right rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="py-1">
              <MenuItem v-slot="{ active }"
                v-for="(option, index) in options"
                :key="index"
                class="bg-none hover:bg-gray-200 cursor-pointer"
                @click="update(option)"
              >
                <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex items-center justify-start gap-3 px-4 py-2 Grotesque-Regular text-[14px]']">
                  
                  <div class="flex items-center justify-center gap-2">
                    <h3 class="border rounded-full bg-black text-white text-[10px] px-2 py-3 ">{{ option.value }}</h3> 

                    <div class="flex flex-col items-start justify-center">
                      <h2 class='text-[14px] Grotesque-Bold text-[#686767] leading-none'>{{option.label}}</h2>
                      <p class='text-[10px] Grotesque-Regular text-[#686767]'>{{option.type =='CRYPTO'? option.chain : option.label}}</p>
                    </div>
                  
                  </div>
                </a>
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
    chain:string;
    type:string
  }

  const props = defineProps<{
    options: option[];
    placeholder: number;
  }>()

  const {options,placeholder} = props

  const selected = ref<option>()

  const emit = defineEmits(['update'])  // Declare Events


  const update = (option:option)=>{
    selected.value = option
    emit('update',option)
  }

  onMounted(async()=>{
    emit('update',options[0])
  })

  
  </script>

