<template>

        <div class="w-full sm:w-[60%] flex flex-col items-start justify-start gap-y-4 px-2 mt-8">

          <div class="w-full relative">
            <label class="Grotesque-Regular text-md text-[#010109]">
              New Password
            </label>

            <div class="w-full relative flex flex-row items-center justify-between border-[#E4E5E7] border text-[#080708] text-[14px] rounded-xl outline-none">
              <input
                required
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2 rounded-lg flex items-center justify-between outline-none"
              />

              <button class="absolute my-auto right-6 flex items-center justify-center " @click.prevent="showPassword = !showPassword">
                <img
                  class=""
                  :src="showPassword ? eyeSlash : eye"
                />
              </button>
            </div>

          </div>

          <div class="w-full relative">

            <label class="Grotesque-Regular text-md text-[#010109]">
              Current Password
            </label>

            <div class="w-full relative flex flex-row items-center justify-between border-[#E4E5E7] border text-[#080708] text-[14px] rounded-xl outline-none">
              <input
                required
                v-model="currentPassword"
                :type="showCurrentPassword ? 'text' : 'password'"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2 rounded-lg flex items-center justify-between outline-none"
              />

              <button class="absolute my-auto right-6 flex items-center justify-center " @click.prevent="showCurrentPassword = !showCurrentPassword">
                <img
                  class=""
                  :src="showCurrentPassword ? eyeSlash : eye"
                />
              </button>
            </div>

          </div>

          <!-- <PassWordStatus @update="(value:string)=>{passwordStrength = value}" :password="password" :confirm-password="currentPassword" /> -->

          <button :disabled="loading" @click.prevent="resetPassword()"  class="w-full bg-black flex flex-row items-center justify-center rounded-2xl mt-6 py-3">
                  <span v-if="!loading" class="text-[16px] Grotesque-Regular text-[#FFFFFF] text-center">Update</span>
                  <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
                    animationDuration=".5s" aria-label="Custom ProgressSpinner" 
                  />
          </button>


        </div>

  </template>

  <script setup lang="ts">

  import eye from "~/assets/img/Eye.png";
  import eyeSlash from "~/assets/img/eye-slash.png";

  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { changePassword } = useAuthStore();

  const { loading, progress } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

  const toast = reactive({
    show:false,
    title:'',
    description:'',
    success:true
  })

  const initToast=(success:boolean,title:string,description:string)=>{
    toast.title = title
    toast.description = description
    toast.success = success
    toast.show = true
  }

  
  const showCurrentPassword = ref(false)
  const showPassword = ref(false)

  const route = useRouter()

  const password = ref('')
  const currentPassword = ref('')

  const passwordStrength = ref('')


  const emit = defineEmits(['back'])  // Declare Events

  async function resetPassword() {
        if(passwordStrength.value == 'Weak'|| passwordStrength.value == '' ) return

        const result = await changePassword({currentPassword:currentPassword.value, newPassword:password.value}); // login user

        if (result.success) {
          initToast(true,'Successful',result.msg)
          password.value = ''
          currentPassword.value = ''
          
        }else{
          initToast(false,'Update Failed',result.msg)
        }
        
  }



</script>

<style>

  .custom-checkbox:checked {
    background-color: #22c55e; /* green-500 */
    border-color: #22c55e; /* green-500 */
  }
</style>

