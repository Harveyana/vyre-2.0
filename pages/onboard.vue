<template>
  <div
    class="w-fit h-[80vh] rounded-xl flex items-center justify-center "
  >
    <div v-if="loading" class="w-full bg-white flex items-center justify-center h-fit rounded-xl px-4 sm:px-8 py-6 overflow-y-auto">

      <div class="h-full flex flex-col items-center justify-center gap-3 text-center">
        <LottieLoader />
        <h3 class="Grotesque-Regular text-[28px] text-[#1A1A1A]">
          setting up account...
        </h3>
      </div>

    </div>

    <OnboardModal v-else v-model="user" />
  </div>
</template>

<script setup lang="ts">

  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
 import OnboardModal from '../components/signup/onboardModal.vue';
  const { register_User } = useAuthStore();

  const { loading } = storeToRefs(useAuthStore());

  definePageMeta({
    layout: 'operation'
  })

  interface User {
    id: string;
    authId?: string | null;
    firstName: string;
    lastName: string;
    email: string;
    userStatus: UserStatus;
    type: AccountType;
    photoUrl?: string | null;
    phoneNumber?: string | null;

    // Security fields
    emailVerified?: boolean | null;
    accountVerified?: boolean | null;
  }


  const { $auth } = useNuxtApp()

  const router = useRouter()

  const user = ref<User>()




onMounted(async()=>{

  try {
    const {success, user, msg} = await register_User()
    if(success){
      console.log('user', user)
      user.value = user
    }
    // router.push('/')
  } catch (e) {
    console.error(e)
    // navigateTo('/login?error=auth_failed');
  }
})


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
