<template>
  <div class="w-full px-7 sm:px-10">
    <div class="w-full h-full">
      <button
             @click="$router.back()"
             class="flex mb-4 gap-x-1 items-center justify-center text-[#737373] text-[16px] rounded-md whitespace-nowrap"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1049_16461)">
                <path d="M15 6L9 12L15 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1049_16461">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
              </svg>
              Back
      </button>

      <div class="">
        <p class="Grotesque-Regular text-[16px] text-[#737373]">
          Get started with
        </p>
        <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A] mt-1">
          Forgot Password
        </h3>

        <form
          @submit.prevent="submit"
          class="w-full mt-5 flex flex-col gap-y-16"
        >
          <div class="w-full flex flex-col gap-y-2">
            <label class="Grotesque-Regular text-md text-[#010109]">
              Email
            </label>

            <input
              required
              type="email"
              v-model="email"
              class="w-full text-sm bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 py-2.5 px-3 rounded-lg flex items-center justify-between outline-none"
            />
          </div>

          <button :disabled="loading" type="submit" class="w-full flex flex-row items-center justify-center py-3 bg-[#0050AB] text-white rounded-lg">
            <span v-if="!loading" class="text-[16px] text-white text-center">Proceed</span>
            <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
              animationDuration=".5s" aria-label="Custom ProgressSpinner"
            />
          </button>

        </form>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

import { Toaster, toast } from 'vue-sonner'
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';
const { recoverAccount } = useAuthStore();

const { loading } = storeToRefs(useAuthStore());
const { $toast } = useNuxtApp()

// const currentStep = ref(1);
const emit = defineEmits(['back','recovered'])  // Declare Events
const email = ref('')

const submit = async()=>{

  const recovered = await recoverAccount({email:email.value})
    if (recovered.success) {
      $toast.success(recovered.msg)
      emit('recovered',recovered.user)
    }else{
      $toast.error(recovered.msg)
    }
    
}

</script>
