<template>
  <div class="w-full  py-16 px-7 sm:px-10 flex flex-col items-center justify-center gap-y-2">
    <div class="w-full h-fit ">
      <div class="w-full flex flex-col justify-start items-start">
        <p class="Grotesque-Regular text-[16px] text-[#737373]">
           Let's get started,
        </p>
        <h3 class="Grotesque-Bold text-[25px] text-[#1A1A1A]">Create Account</h3>
      </div>
    </div>

    <CoinsLottie />

    <form @submit.prevent="login()" class="w-full mt-2 flex flex-col gap-y-1">

      <input
        v-if="showEmail"
        required
        type="email"
        class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border border-black focus:ring-1 focus:ring-black px-3 py-3 rounded-xl flex items-center justify-between outline-none"
        v-model="inputs.email"
        placeholder="Email"
      />


      <div v-if="showPassword" class="w-full relative flex flex-row items-center justify-between text-[#080708] text-[14px] rounded-xl border border-black outline-none">
        <input
          v-model="inputs.password"
          :type="passwordVisible ? 'text' : 'password'"
          @keyup.enter="login()"
          placeholder="Password"
          class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-none focus:ring-0 px-3 py-3 rounded-xl flex items-center justify-between outline-none"
        />

        <button class="absolute my-auto right-6 flex items-center justify-center " @click.prevent="passwordVisible = !passwordVisible">
          <img
            class=""
            :src="passwordVisible ? eyeSlash : eye"
          />
        </button>

      </div>

      <!-- <NuxtLink href="/forgotPassword" class="text-sm text-[#0050AB] text-left cursor-pointer mt-[-2px] Grotesque-Regular" >
        Forgot password?
      </NuxtLink> -->

      <button @keyup.enter="login()" :disabled="loading" type="submit" class="w-full flex items-center justify-center py-3.5 bg-black text-white rounded-2xl mt-6">
        <span v-if="!loading" class="text-[16px] text-white text-center">Continue</span>
        <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" 
        />
      </button>


    </form>

    <div class="w-[70%] h-[0.1px] bg-gray-300 my-3">
    </div>

    <button 
        @click="loginWithGoogle()"
        class="google-signin-button w-full"
      >
        <svg class="google-icon" viewBox="0 0 24 24" width="20" height="20">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span class="button-text">Continue with Google</span>
    </button>

    <NuxtLink
       href="/login"
        class="text-sm text-[#737373] text-left cursor-pointer Grotesque-Regular my-2"
      >
        Already have an account?

        <span class="text-[#0050AB] cursor-pointer">
          sign in
        </span>

    </NuxtLink>



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

const { $auth } = useNuxtApp()

const router = useRouter()
const route = useRoute()

const passwordVisible = ref(false);

const showEmail = ref(true);
const showPassword = ref(false);


const loginWithGoogle = async () => {
  await $auth.client.loginWithRedirect({
    authorizationParams: {
      connection: 'google-oauth2',
      prompt: 'select_account' // Force account selection
    },
    appState: { 
      target: route.query.return_to || '/onboard'
    }
  });
};

const inputs = reactive({
  password:'',
  email:''
})


const emit = defineEmits(["next"]);

function isValidRedirect(path?: string | null): path is string {
  if (!path) return false;
  
  // Only allow redirects to specific prefixes
  const allowedPrefixes = ['/', '/app'];
  return allowedPrefixes.some(prefix => path.startsWith(prefix)) &&
  !['/login', '/signup'].includes(path);
}

const login = async()=>{
  if(inputs.email && !inputs.password){
    showEmail.value = false
    return showPassword.value = true
  }

  if(inputs.email && inputs.password){
    
    toast.promise(() => new Promise(async(resolve,reject) =>{

      try{

        await $auth.client.loginWith('auth0', {
          loginParams: {
            connection: 'Username-Password-Authentication',
            email: inputs.email,
            password: inputs.password,
          }
        });

        resolve({msg:'Signin Successful'})

      } catch (error) {
        console.error(error)
        reject({msg:'Operation failed'})
      }
      }), 
      {
        loading: 'Signing in...',
        success: (data: any) => {
          // emit('verified', data.userId)
          navigateTo('/')
          return data.msg
        },
        error: (data: any) => {return data.msg}
      })

  }

  

}




// async function login() {
//   const signedIn = await loginUser(inputs);

//   if (signedIn.success) {
//     $toast.success(signedIn.msg);

//     if (signedIn.twoFactorEnabled) {
//       return emit('next', signedIn.userId);
//     }

//     // Check for stored redirect path
//     const redirectPath = sessionStorage.getItem('preLoginRoute');
    
//     // Validate the redirect path
//     if (isValidRedirect(redirectPath)) {
//       sessionStorage.removeItem('preLoginRoute');
//       return navigateTo(redirectPath);
//     }
    
//     // Default redirect
//     return navigateTo('/');
//   } else {
//     $toast.error(signedIn.msg);
//   }
// }


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

.google-signin-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 13px 16px;
  background-color: #000;
  color: white;
  border: 1px solid #333;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.google-signin-button:hover {
  background-color: #111;
  border-color: #444;
}

.google-signin-button:active {
  background-color: #0a0a0a;
}

.google-icon {
  flex-shrink: 0;
}

.button-text {
  white-space: nowrap;
}
</style>
