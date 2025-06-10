<template>
    <div class="h-fit">

      <div class="w-full flex flex-col ml-2">

        <p class="Grotesque-Regular text-[16px] text-[#737373]">
          Enter user Vyre email
        </p>
        <!-- <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A]">
          Choose Your Preference
        </h3> -->

      </div>

      <div  class="w-full border flex flex-col px-4 rounded-2xl sm:shadow-md py-3">

        <div class="w-full flex items-start justify-between sm:justify-center sm:gap-x-16 border px-4 sm:px-8 rounded-2xl py-4">

          <div class="flex flex-col items-start justify-center">
           
            <input v-model="entry" class="w-full bg-gray-200 outline-none rounded-xl focus-none border-none text-black Grotesque-Bold text-lg py-2 px-3" name="numberInput" placeholder="receipient email" />

          </div>

     
          


        </div>

        <div v-if="allUsers.length" class="flex flex-col w-full h-[35vh] gap-y-6 my-4">

          <div
           v-for="user in allUsers"
           :key="user?.id"
            class="w-full border hover:border-black flex items-center justify-start gap-x-5 py-4 bg-white rounded-lg border-[1px] px-4 cursor-pointer"
            @click="userId = user?.id"
            :class="
              userId === user.id
                ? 'border-black'
                : ' border-[#F8F8FC]'
            "
          >
            
            <svg xmlns="http://www.w3.org/2000/svg" class="bg-[#F1F0FE] p-1 rounded-full" width="38" height="38" viewBox="0 0 32 32"><path fill="#000" d="M11.61 29.92a1 1 0 0 1-.6-1.07L12.83 17H8a1 1 0 0 1-1-1.23l3-13A1 1 0 0 1 11 2h10a1 1 0 0 1 .78.37a1 1 0 0 1 .2.85L20.25 11H25a1 1 0 0 1 .9.56a1 1 0 0 1-.11 1l-13 17A1 1 0 0 1 12 30a1.1 1.1 0 0 1-.39-.08"/></svg>
            <div class="flex flex-col justify-start items-start">
              <h3 class="Grotesque-Regular text-[14px] text-[#1A1A1A]">
                {{user?.firstName}} {{user?.lastName}}
              </h3>
              <p class="Grotesque-Regular text-[12px] text-[#737373]">
                {{user.email}}
              </p>
            </div>
          </div>

        </div>

        

        <!-- <div class="w-full flex items-start justify-start border rounded-2xl py-2 px-2 mt-2">
          <h2 class="text-sm truncate poppinsLight ml-3">
            <span class="poppinsSemiBold text-xs sm:text-sm">Expected Output :</span>  <span class="poppinsRegular">0.00 btc</span> 
          </h2> 

        </div> -->

        <!-- <BaseButton  class="w-full px-8 bg-gray-300 py-3 mt-4">
          <span v-if="!showLoader" class="text-[16px] poppinsLight text-black text-center">Continue</span>
          <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" 
          />

        </BaseButton> -->

        <div class="w-full flex items-center justify-center gap-x-2 mt-6" >

          <BaseButton @click="$emit('back')" class="w-[25%] px-8 bg-gray-300 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l-64 64l64 64"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 224h294c58.76 0 106 49.33 106 108v20"/></svg>
          </BaseButton>


          <baseButton
              @click="sendAsset()"
                type="submit"
                class="w-[70%] py-3 bg-black  text-white text-[15px] rounded-lg "
              >
              Send
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
  const { vyreTransfer} = useWalletStore();
  const { queryUser } = useAuthStore();

  const { loading } = storeToRefs(useAuthStore());

  const entry = ref('')



  const amount = defineModel<number>('Amount')
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

  const emit = defineEmits(['next','update-value','back','close'])  // Declare Events

  const sendAsset = async()=>{
      if(!userId.value) return
      emit('close')
      toast.promise(() => new Promise(async(resolve,reject) =>{
        const transfered = await vyreTransfer(
          {
            amount: amount.value!,
            currency: currency!,
            receipient_id: userId.value
          })

        if (transfered.success) {
          resolve({msg:transfered.msg})
          // emit('verified', verified?.userId)
        }else{
          reject({msg:transfered.msg})
          // $toast.error(verified.msg)
        }
      }), 
      {
        loading: `Sending ${currency}`,
        success: (data: any) => {
          return data.msg
        },
        error: (data: any) => {return data.msg}
      })

  }

  const rate = ref(0)

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

  // const submitUser = ()=>{
  //   if(!userId.value) return
  //   emit('update-value',userId.value)
  // }

  // onMounted(async()=>{
  //   getRate()
  // })


  </script>
