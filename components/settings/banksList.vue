<template>

      <PopoverRoot 
             :modal="true"
             :open="openList"
             >
                <PopoverTrigger
                  class="w-full rounded-full inline-flex items-center justify-center outline-none"
                  aria-label="Update dimensions"
                >
                <div class="w-full flex flex-col items-start justify-start gap-y-2">
                  <input
                    type="text"
                    v-model="queryName"
                    class="w-full border-[#E4E5E7] SansRegular border text-[#080708] text-[14px] py-2 px-3 rounded-xl outline-none"
                    placeholder="Start Typing"
                    @input="fetchbanks()"
                    @focusin="openList = true"
                  />
                </div>
                
                </PopoverTrigger>
                <PopoverPortal class="w-full">
                  <PopoverContent
                    side="bottom"
                    v-if="queryBanks.length || showLoader"
                    class="w-full h-60 overflow-scroll bg-[#F9F9FC] rounded will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"
                  >
                    <ul v-if="!showLoader" class="w-full p-3 gap-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                      <li
                        v-for="(bank, index) in queryBanks"
                        :key="index"
                        class="bg-none hover:bg-gray-200 cursor-pointer"
                        @click="update(bank)"
                      >
                        <h1 class="text-[15px] SansRegular my-2 leading-none text-[#010109] rounded-lg flex items-center py-2 pr-[35px] pl-[25px]">
                          {{ bank.name }}
                        </h1>
                      </li>
                    </ul>
                    <div v-else class="w-full flex items-center justify-center p-3">
                      <span class="text-[#010109]">Loading...</span>
                    </div>
                    <PopoverArrow class="fill-white" />
                  </PopoverContent>
                </PopoverPortal>
      </PopoverRoot>


      <!-- <Menu as="div" class="w-full relative inline-block text-left">
        <div class="w-full">
          <MenuButton class="w-full inline-flex items-center justify-between whitespace-nowrap SansRegular py-2.5 px-3 gap-x-2 text-[14px] text-[#686767] bg-white hover:bg-gray-100 rounded-xl border shadow-sm border-gray-300">
            <input
                    type="text"
                    v-model="queryName"
                    class="w-full border-[#E4E5E7] SansRegular border text-[#080708] text-[14px] py-2 px-3 rounded-xl outline-none"
                    placeholder="Start Typing"
                    @input="fetchbanks()"
                    @focusin="openList = true"
            />
          </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <MenuItems class="w-full absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="py-1">
              <MenuItem v-slot="{ active }"
               v-for="(bank, index) in queryBanks"
               :key="index"
               class="bg-none hover:bg-gray-200 cursor-pointer"
               @click="update(bank)"
              >
                <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">{{bank.name}}</a>
              </MenuItem>
              
            </div>
          </MenuItems>
        </transition>
      </Menu> -->


    
  </template>
  <script setup lang="ts">
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { useDebounceFn } from '@vueuse/core'

  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { getbanks, verifyBank, saveBank } = useAuthStore();

  const { loading, user, store, organisation } = storeToRefs(useAuthStore());


 interface bank {
   id: string;
   name: string;
   code: string;
   country: string
 }
  // const props = defineProps<{
  //   banks: bank[]
  // }>()

  const selectedBank = ref<bank>()
  const showLoader = ref(false)
  const openList = ref(false)

  const queryName = ref('')
  const queryBanks = ref<bank[]>([])

  const fetchbanks = async()=>{
    showLoader.value = true
    const result = await getbanks(queryName.value);
    console.log(result)
    if(result?.success){
      console.log(result.banks)
      queryBanks.value = result.banks
      showLoader.value = false
    }
    showLoader.value = false
  }

  // const debouncedFn = useDebounceFn(async() => {
  //   await fetchbanks()
  // }, 1000)

  // watch(() => queryName.value, async(newvalue, oldvalue) => {
  //   // showClearSearch.value = true
  //   await debouncedFn()
  // });

  // watch(() => queryName.value, async(newvalue, oldvalue) => {
  //   showLoader.value = true
  //   const result = await getbanks(queryName.value);
  //   console.log(result)
  //   if(result?.success){
  //     console.log(result.banks)
  //     queryBanks.value = result.banks
  //     showLoader.value = false
  //   }
  //   showLoader.value = false
  // });


  const emit = defineEmits(['update'])  // Declare Events


  const update = (bank:bank)=>{
    selectedBank.value = bank
    queryName.value = bank.name
    openList.value = false
    emit('update',bank)
  }
  
  </script>

