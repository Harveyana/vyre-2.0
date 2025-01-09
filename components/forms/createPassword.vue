<template>
  <!-- <p class="Grotesque-Regular text-[16px] text-[#737373]">Get started with</p> -->
  <div class="w-full px-4 sm:px-8  flex flex-col items-start justify-center">

    <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A] mt-1">
      Create Password
    </h3>

    <form
      @submit.prevent="submit()"
      class="w-full my-5 flex flex-col gap-y-5"
    >
      <div class="w-full relative">
        <label class="Grotesque-Regular text-md text-[#010109]">
          Enter New Password
        </label>

        <div class="w-full relative flex flex-row items-center justify-between border-[#E4E5E7] border text-[#080708] text-[14px] rounded-xl outline-none">
            <input
              required
              v-model="password"
              :type="passwordVisible ? 'text' : 'password'"
              type="text"
              class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-3 rounded-lg flex items-center justify-between outline-none"
            />

            <button class="absolute my-auto right-6 flex items-center justify-center " @click.prevent="passwordVisible = !passwordVisible">
              <img
                class=""
                :src="passwordVisible ? eyeSlash : eye"
              />
            </button>
        </div>

      </div>


      <div class="w-full relative">
        <label class="Grotesque-Regular text-md text-[#010109]">
          Confirm New Password
        </label>

        <div class="w-full relative flex flex-row items-center justify-between border-[#E4E5E7] border text-[#080708] text-[14px] rounded-xl outline-none">
          <input
            required
            v-model="confirmNewPassword"
            :type="confirmNewPasswordVisible ? 'text' : 'password'"
            type="text"
            class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-3 rounded-lg flex items-center justify-between outline-none"
          />

          <button class="absolute my-auto right-6 flex items-center justify-center " @click.prevent="confirmNewPasswordVisible = !confirmNewPasswordVisible">
            <img
              class=""
              :src="confirmNewPasswordVisible ? eyeSlash : eye"
            />
          </button>
        </div>

      </div>

      <PasswordChecker @update="(value)=>{passwordChecks = value}" v-model:password="password" class="mt-1 mb-10" />

      <button :disabled="loading" type="submit" class="w-full flex flex-row items-center justify-center py-3 bg-black text-white rounded-lg">
        <span v-if="!loading" class="text-[16px] text-white text-center">Proceed</span>
        <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
          animationDuration=".5s" aria-label="Custom ProgressSpinner"
        />
      </button>

    </form>

  </div>
 

  
</template>

<script setup lang="ts">
  import eye from "~/assets/img/Eye.png";
  import eyeSlash from "~/assets/img/eye-slash.png";
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { setupPassword } = useAuthStore();   
  const { loading } = storeToRefs(useAuthStore());

  const emit = defineEmits(["passwordCreated"]);

  const passwordVisible = ref(false);
  const password = ref("");
  const passwordChecks = ref({})
  const confirmNewPasswordVisible = ref(false);
  const confirmNewPassword = ref("");

  const props = defineProps<{
    userId: string;
  }>()

  const submit = async()=>{
    if(!passwordChecks.value.UPPERCASE || 
    !passwordChecks.value.LOWERCASE || 
    !passwordChecks.value.SPECIAL || 
    !passwordChecks.value.NUMBER || 
    !passwordChecks.value.COUNT ) return

    const PasswordCreated = await setupPassword({userId:props.userId,password: password.value})
    if (PasswordCreated.success) {
      emit('passwordCreated')
    }
  }

 

</script>
