<template>
  <div
    class="bg-white w-full sm:w-[450px] h-full rounded-lg py-10 sm:px-4 flex flex-col gap-y-8"
  >
    <div class="space-y-1 text-center">
      
      <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A] mt-1">
        🎉 Welcome, {{user.firstName}}!
      </h3>
      
      <span class="flex justify-center items-center gap-x-2">
        <p class="Grotesque-Regular text-[13px] text-[#737373]">Your account is ready. Let’s get you started</p>
      </span>
    </div>


    <div class="mt-6 space-y-4">
      <!-- Step 1 (Current) -->
      <div class="flex items-start">
        <!-- <div class="flex-shrink-0  rounded-full bg-black flex items-center justify-center text-white font-bold ">1</div> -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mr-3" viewBox="0 0 2048 2048"><path fill="#000" d="M1024 640q79 0 149 30t122 82t83 123t30 149q0 80-30 149t-82 122t-123 83t-149 30q-80 0-149-30t-122-82t-83-122t-30-150q0-79 30-149t82-122t122-83t150-30"/></svg>
        <div>
          <p class="font-medium">Verify Your Email</p>
          <p class="text-sm text-gray-500">Check your inbox for a confirmation link</p>
        </div>
      </div>

      <!-- Step 2 (KYC) -->
      <div class="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mr-3" viewBox="0 0 2048 2048"><path fill="#000" d="M1024 640q79 0 149 30t122 82t83 123t30 149q0 80-30 149t-82 122t-123 83t-149 30q-80 0-149-30t-122-82t-83-122t-30-150q0-79 30-149t82-122t122-83t150-30"/></svg>
        <div>
          <p class="font-medium">Complete KYC</p>
          <p class="text-sm text-gray-500">Upload ID and proof of address (takes 2 mins)</p>
          <NuxtLink href="/kyc" class="mt-1 text-sm text-blue-500 hover:underline">Start Verification → </NuxtLink>
        </div>
      </div>

      <!-- Step 3 (Customize) -->
      <div class="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mr-3" viewBox="0 0 2048 2048"><path fill="#000" d="M1024 640q79 0 149 30t122 82t83 123t30 149q0 80-30 149t-82 122t-123 83t-149 30q-80 0-149-30t-122-82t-83-122t-30-150q0-79 30-149t82-122t122-83t150-30"/></svg>
        <div>
          <p class="font-medium">Set Up Your Profile</p>
          <p class="text-sm text-gray-500">Add a photo and personal preferences</p>
        </div>
      </div>

    </div>

    <!-- <p class="Grotesque-Regular text-[14px] text-[#737373]">
        We’ll notify you via email once verification is complete (typically within an hour)
    </p> -->

    <button @click="$emit('close')" class="flex flex-col items-center justify-center gap-y-2">
      <h2 class="w-full py-2.5 bg-black text-white text-center rounded-3xl">
        Skip for now  → 
      </h2>
    </button>

  </div>
</template>

<script setup lang="ts">

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

  const emits = defineEmits(['close'])

  const user = defineModel<User>('user')

</script>
