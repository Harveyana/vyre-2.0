<template>
    <div class="w-full flex flex-col gap-y-4 px-8">

      <h2 class="text-lg sm:text-2xl poppinsSemiBold">
      Identity Verification
      </h2>
      <p class="text-sm poppinsRegular">
          fill your details below
      </p>

      <div
          class="rounded-2xl w-full h-fit flex flex-col justify-center text-grass11 bg-gray-200 py-4 px-2 gap-x-1 sm:gap-x-2 gap-y-2 outline-none px-4"
          aria-label="dropdown menu options"
        >
        <!-- @click="toggle" -->
          <div class="w-full flex flex-col">

            <h2 class="text-sm poppinsRegular ml-2">
              Select Method
            </h2>

            <DropdownMenuRoot v-model:open="toggleState">
            
              <DropdownMenuTrigger
                class=" w-fit rounded-xl border border-gray-300 h-fit flex items-center justify-between text-grass11 bg-gray-200 py-2 px-4 outline-none"
                aria-label="dropdown menu options"
              >
                  <span class="text-sm capitalize truncate text-black poppinsMedium">
                    {{IdMethod}}
                  </span>

                <svg class=' cursor-pointer w-6 md:w-7 dark:fill-white dark:stroke-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>
              </DropdownMenuTrigger>

              <DropdownMenuPortal>
                <DropdownMenuContent
                  class="min-w-[150px] z-20 mx-4 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                  :side-offset="10"
                >
                  <DropdownMenuItem
                  v-for="method in identityMethods"
                    @click="switchMethod(method)"
                    :key="method"
                    :value="method"
                    class="flex group capitalize text-sm cursor-pointer leading-none text-black rounded-[3px] items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-200 data-[highlighted]:text-black"
                  >
                    {{method}}
                    
                  </DropdownMenuItem>                      
                  
                  <DropdownMenuArrow class="fill-black" />

                </DropdownMenuContent>
              </DropdownMenuPortal>
            </DropdownMenuRoot>

          </div>

          <!-- Enter Id number -->
          <input v-model="info.Idnumber" class="w-full rounded-xl bg-gray-200 border border-gray-300 outline-none focus-none text-black poppinsRegular text-sm py-2 px-3" :placeholder="`Enter ${IdMethod}`"  type="text" />

        <!-- Enter First Name -->
          <input v-model="info.firstName" class="w-full rounded-xl bg-gray-200 border border-gray-300  outline-none focus-none text-black poppinsRegular text-sm py-2 px-3" :placeholder="`First Name`"  type="text" />
          
        <!-- Enter Last Name -->
        <input v-model="info.lastName" class="w-full rounded-xl bg-gray-200 border border-gray-300  outline-none focus-none text-black poppinsRegular text-sm py-2 px-3" :placeholder="`Last Name`"  type="text" />
          
        <!-- Enter Phone Number -->
        <!-- <div class=flex>
          <input v-model="info.phoneNumber" class="w-[60%] bg-gray-200 border border-b-gray-300  outline-none focus-none text-black poppinsRegular text-sm px-3" :placeholder="`Phone Number`"  type="text" />
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-3 19h-2v-1h2zm3-2H8V5h8z"/></svg>               
        </div> -->

        <!-- DATE OF BIRTH -->
        <!-- <div class=" flex gap-x-2 ">
          <input v-model="date.year" class="w-16 bg-gray-200 border border-b-gray-300  outline-none focus-none text-black poppinsRegular text-sm px-2" :placeholder="`YYYY`"  type="text" />
          <input v-model="date.month" class="w-12 bg-gray-200 border border-b-gray-300  outline-none focus-none text-black poppinsRegular text-sm px-2" :placeholder="`MM`"  type="text" />
          <input v-model="date.day" class="w-12 bg-gray-200 border border-b-gray-300  outline-none focus-none text-black poppinsRegular text-sm px-2" :placeholder="`DD`"  type="text" />
        </div> -->

        <!-- Gender -->

        <!-- <DropdownMenuRoot v-model:open="genderState">
            
            <DropdownMenuTrigger
              class=" w-fit border border-b-gray-300 h-fit flex items-center justify-between text-grass11 bg-gray-200 px-4 outline-none"
              aria-label="dropdown menu options"
            >
                <span class="text-sm capitalize truncate text-black poppinsMedium">
                  {{gender}}
                </span>

              <svg class=' cursor-pointer w-6 md:w-7 dark:fill-white dark:stroke-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>
            </DropdownMenuTrigger>

            <DropdownMenuPortal>
              <DropdownMenuContent
                class="min-w-[150px] z-20 mx-4 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                :side-offset="10"
              >
                <DropdownMenuItem
                v-for="gender in Genders"
                  @click="switchGender(gender)"
                  :key="gender"
                  :value="gender"
                  class="flex group capitalize text-sm cursor-pointer leading-none text-black rounded-[3px] items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-200 data-[highlighted]:text-black"
                >
                  {{gender}}
                  
                </DropdownMenuItem>                      
                
                <DropdownMenuArrow class="fill-black" />

              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenuRoot> -->


          

          <BaseButton @click="" class="w-[50%] py-2 mt-4 bg-black">
              <span v-if="!showLoader" class="text-[16px] poppinsLight text-white text-center">verify</span>
            <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
              animationDuration=".5s" aria-label="Custom ProgressSpinner" 
            />

          </BaseButton>
      </div>

      <BaseButton @click="verify" class="w-full px-8 bg-[#89ead9] py-3 mt-4">
            <span v-if="!showLoader2" class="text-[16px] poppinsLight text-black text-center">continue</span>
            <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
              animationDuration=".5s" aria-label="Custom ProgressSpinner" 
            />

      </BaseButton>


    </div>

</template>

<script setup lang="ts">
   import { useAuthStore } from '~/store/auth';
    const { refreshSession,verifyIdentity,logUserOut } = useAuthStore();
    const token = useCookie('token');

    const identityMethods = ref(['NIN','BVN'])
    // const Genders = ref(['MALE','FEMALE'])
    const IdMethod = ref('BVN')
    const emit = defineEmits(['submit'])

    // const gender = ref('MALE')

    // const date = reactive({
    //   year:'',
    //   month:'',
    //   day:''
    // })

    const info = reactive({
      IdMethod:IdMethod.value,
      Idnumber:'',
      firstName:'',
      lastName:'',
      // phoneNumber:''
      // DOB:`${date.year}-${date.month}-${date.day}`
    })

    const route = useRoute()
    const router = useRouter()

    const toggleState = ref(false)
    const showLoader = ref(false)
    const showLoader2 = ref(false)

    const menu = ref();

    const toggle = (event: any) => {
        menu.value.toggle(event);
    };

   const switchMethod =(value:string)=>{
    IdMethod.value = value
   }

   const switchGender =(value:string)=>{
    gender.value = value
   }

   const verify = async()=>{
    showLoader2.value = true
    const refreshed = await refreshSession()
    if(refreshed){
      const verified = await verifyIdentity(info.Idnumber)
      if (verified){
        showLoader2.value = false
        emit('submit')
      }
      
    }
  }



</script>