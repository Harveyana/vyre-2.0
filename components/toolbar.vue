<template>
    <div class="w-full col-span-12 sm:px-4 flex items-center justify-end sm:justify-between h-fit py-3 lg:py-4">

        <h2 class="hidden sm:block text-black poppinsBold text-2xl md:text-3xl font-black">
          Overview
        </h2>

        <div class="w-fit flex flex-row items-center justify-center gap-4">
          <!-- <span class="relative"> -->
                <!-- <span class="bg-red-500 rounded-2xl absolute right-0  w-3 h-3"></span> -->
                <img v-if="true" src="~/assets/img/notification.svg" class="border rounded-full hover:border-gray-500 cursor-pointer w-9"/>
                <img v-else src="~/assets/img/notificationActive.svg" class="border rounded-full hover:border-gray-500 cursor-pointer w-9"/>
              <!-- </span> -->
              
              <!-- <div class="relative flex items-center justify-center bg-[#f2f5fa] rounded-3xl pl-14 pr-4 py-1"> -->
                <!-- <img @click="toggle" src="~/assets/img/boy.png" class="absolute -left-2 bottom-0 p-1 rounded-[50px] bg-green-300 mx-3 md:my-1 w-12" />
                <p class="text-black text-lg poppinsMedium">Zoia M.</p>
                <img src="~/assets/img/chevronDown.svg" class=" cursor-pointer w-fit mx-1"/> -->
                <DropdownMenuRoot v-model:open="toggleState">
                  <DropdownMenuTrigger
                    class="relative flex items-center justify-center bg-[#f2f5fa] rounded-3xl pl-14 pr-4 py-1"
                    aria-label="dropdown menu options"
                  >
                    <img src="~/assets/img/boy.png" class="absolute -left-2 bottom-0 p-1 rounded-[50px] bg-green-300 mx-3 md:my-1 w-12" />
                    <p class="text-black text-lg poppinsMedium">Zoia M.</p>
                    
                    <svg class=' cursor-pointer w-6 md:w-7 dark:fill-white dark:stroke-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>
                  </DropdownMenuTrigger>

                  <DropdownMenuPortal>
                    <DropdownMenuContent
                      class="min-w-[150px] z-20 mx-4 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                      :side-offset="10"
                    >
                      <DropdownMenuItem
                        @click=""
                        value="settings"
                        class="flex group capitalize text-sm cursor-pointer leading-none text-black rounded-[3px] items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-200 data-[highlighted]:text-black"
                      >
                        Settings
                        
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        @click="signOut()"
                        value="settings"
                        class="flex group capitalize text-sm cursor-pointer leading-none text-black rounded-[3px] items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-200 data-[highlighted]:text-black"
                      >
                        Sign Out
                        
                      </DropdownMenuItem>                          
                      
                      <DropdownMenuArrow class="fill-black" />

                    </DropdownMenuContent>
                  </DropdownMenuPortal>
                </DropdownMenuRoot>
              <!-- </div> -->
        </div>
            
    </div>
  </template>

  <script setup lang="ts">
  import { useAuthStore } from '~/store/auth';
  const { logUserOut } = useAuthStore();

    const menu = ref();
    const router = useRouter()
    const props = defineProps<{
      new: boolean
    }>()
    const signOut = ()=>{
      logUserOut()
      router.push('/auth')
    }
  const toggle = (event: any) => {
      menu.value.toggle(event);
  };
  
  </script>