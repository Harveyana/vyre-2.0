<template>
  <div class="w-full  py-16 px-7 sm:px-10">
    <div class="w-full h-fit ">
      <div class="w-full flex flex-col justify-start items-start">
        <p class="Grotesque-Regular text-[16px] text-[#737373]">
          Welcome Back,
        </p>
        <h3 class="Grotesque-Regular text-[20px] text-[#1A1A1A]">Login</h3>
      </div>
    </div>
    <form @submit.prevent="login()" class="w-full mt-6 flex flex-col gap-y-4">
      <div class="w-full relative">
        <label class="Grotesque-Regular text-md text-[#010109]"> Email </label>

        <input
          type="email"
          class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-none focus:ring-0 px-3 py-3 rounded-xl flex items-center justify-between outline-none"
          v-model="inputs.email"
          required
          placeholder="Email"
        />
      </div>

      <div class="w-full flex flex-col relative">

        <label class="Grotesque-Regular text-md text-[#010109]">
          Password
        </label>

        <div class="w-full relative flex flex-row items-center justify-between text-[#080708] text-[14px] rounded-xl outline-none">
          <input
            required
            v-model="inputs.password"
            :type="passwordVisible ? 'text' : 'password'"
            @keyup.enter="login()"
            placeholder="Password"
            class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-none focus:ring-0 px-3 py-2.5 rounded-xl flex items-center justify-between outline-none"
          />

          <button class="absolute my-auto right-6 flex items-center justify-center " @click.prevent="passwordVisible = !passwordVisible">
            <img
              class=""
              :src="passwordVisible ? eyeSlash : eye"
            />
          </button>
        </div>

      </div>

      <NuxtLink href="/forgotPassword" class="text-sm text-[#0050AB] text-left cursor-pointer mt-[-2px] Grotesque-Regular" >
        Forgot password?
      </NuxtLink>

      <button @keyup.enter="login()" :disabled="loading" type="submit" class="w-full flex items-center justify-center py-3 bg-black text-white rounded-2xl mt-6">
        <span v-if="!loading" class="text-[16px] text-white text-center">Login</span>
        <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" 
        />
      </button>

      <NuxtLink
       href="/signup"
        class="text-sm text-[#737373] text-left cursor-pointer Grotesque-Regular my-2"
      >
        Don’t have an account?

        <span class="text-[#0050AB] cursor-pointer">
          Create New
        </span>

      </NuxtLink>

    </form>
    <!-- <Toaster position="top-right" /> -->
  </div>
</template>

<script setup lang="ts">
import { Toaster, toast } from 'vue-sonner'

import eye from "~/assets/img/Eye.png";
import eyeSlash from "~/assets/img/eye-slash.png";
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';
const { loginUser } = useAuthStore();   
const { loading } = storeToRefs(useAuthStore());

const { $toast } = useNuxtApp()

const router = useRouter( )
const passwordVisible = ref(false);

const inputs = reactive({
  password:'',
  email:''
})


const emit = defineEmits(["next"]);

async function login() {
        const signedIn = await loginUser(inputs); // login user

        if (signedIn.success) {
          $toast.success(signedIn.msg)

          if(signedIn.twoFactorEnabled){
            return emit('next',signedIn.userId)
          }
          router.push('/')
          
        }else{
          $toast.error(signedIn.msg)
        }
        
}


</script>

<style>
* {
  font-family: "cabinetGrotesk", sans-serif;
}

.extraboldCabinet {
  font-family: "cabinetGroteskBold", sans-serif;
}

.blackCabinet {
  font-family: "cabinetGroteskBlack", sans-serif;
}
</style>
