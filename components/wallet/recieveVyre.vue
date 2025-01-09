<template>
    <div class="h-fit">


      <div  class="w-full border flex flex-col px-4 rounded-2xl sm:shadow-md py-3">

        <div class="w-full p-2 flex flex-col flex-wrap items-start justify-center gap-3">


          <div class="w-full flex flex-col items-start justify-center sm:gap-x-16 border px-4 rounded-2xl py-4">

            <div class="w-full flex flex items-start">
              
              <div class="flex flex-col items-start ">

                <div class="text-xl flex flex-row items-center justify-center gap-x-2 truncate text-black poppinsBold">
                  <svg xmlns="http://www.w3.org/2000/svg" class="bg-[#F1F0FE] p-1 rounded-full" width="38" height="38" viewBox="0 0 32 32"><path fill="#000" d="M11.61 29.92a1 1 0 0 1-.6-1.07L12.83 17H8a1 1 0 0 1-1-1.23l3-13A1 1 0 0 1 11 2h10a1 1 0 0 1 .78.37a1 1 0 0 1 .2.85L20.25 11H25a1 1 0 0 1 .9.56a1 1 0 0 1-.11 1l-13 17A1 1 0 0 1 12 30a1.1 1.1 0 0 1-.39-.08"/></svg>
                  <div class="flex flex-col items-start">
                    Vyre Network 
                    <span class="Grotesque-Regular text-[12px] text-wrap leading-none py-1 text-[#737373]">
                      Receive {{currency}} instantly with your Vyre email 
                    </span>
                  </div>
                    
                </div>

                
              </div>
                          
            </div>

            <div class="w-full flex mt-4 rounded-full px-2 py-1 items-center justify-center text-white gap-2 bg-gray-200">
              <button @click="copyToClipboard(user?.email)">
                <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192c.373-.03.748-.057 1.124-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9"/></svg>
              </button>
                <span class="text-xs truncate text-black poppinsBold">
                  {{user?.email}}
                </span>
            </div>


          </div>

        </div>

        

        

        <div class="w-full flex items-center justify-center gap-x-2 mt-6" >

          <BaseButton @click="$emit('back')" class="w-[25%] px-8 bg-gray-300 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l-64 64l64 64"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 224h294c58.76 0 106 49.33 106 108v20"/></svg>
          </BaseButton>


          <baseButton
              @click="$emit('close')"
                type="submit"
                class="w-[70%] py-3 bg-black  text-white text-[15px] rounded-lg "
              >
              Close
          </baseButton>

        </div>

        



        </div>
        

    </div>


  </template>

  <script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useWalletStore } from '~/store/wallet';
  import { useAuthStore } from '~/store/auth';
  const { createWallet, fetchRate} = useWalletStore();
  const { queryUser } = useAuthStore();

  const { loading, user } = storeToRefs(useAuthStore()); 
  const showLoader = ref(false)
  
  const visible = ref(false)
  const toggleState = ref(false)

  // const state = useGlobalState()
  // const AssetMap = state.assetMap
  const entry = ref('')

  const userId = ref('')

  interface user {
    id:string;
    firstName:string;
    lastName:string;
    email:string;
    photoUrl:string
  }


  const allUsers = ref<user[]>([])

  const props = defineProps({
    type: String,
    currency: String,
  });

  const {currency, type} = props



  const route = useRouter()

  const emit = defineEmits(['close','back'])  // Declare Events

  async function copyToClipboard(text:string) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard')
    } catch (err) {
      // console.error('Failed to copy text: ', err);
      toast.error('failed to copy text')
    }
  }

  const getUser = async()=>{
    const result = await queryUser(entry.value)
    
      console.log(result)
      if(result?.success){
        console.log(result?.value)
        allUsers.value = result?.users
      }
  }

  const debouncedFn = useDebounceFn(async() => {
    getUser()
  }, 1000)

  watch(() => entry.value, async(newvalue, oldvalue) => {
    await debouncedFn()
  });

  const submitUser = ()=>{
    if(!userId.value) return
    emit('update-value',userId.value)
  }

  // onMounted(async()=>{
  //   getRate()
  // })


  </script>
