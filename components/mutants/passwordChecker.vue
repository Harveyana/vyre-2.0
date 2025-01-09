<template>
  <div class="flex flex-col gap-y-2 justify-start items-start w-full">
    <div class="w-full flex justify-start items-center gap-x-2">
      <div>
        <svg v-if="result.UPPERCASE" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" fill="#66C27C"/>
          <path d="M7.0835 10.4167L8.75016 12.0834L12.9168 7.91669" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125ZM1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10Z" fill="#E4E4E4"/>
        </svg>
      </div>
      <h3 class="text-[#737373] text-sm">A uppercase letter (A)</h3>
    </div>

    <div class="w-full flex justify-start items-center gap-x-2">
      <div>
        <svg v-if="result.LOWERCASE" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" fill="#66C27C"/>
          <path d="M7.0835 10.4167L8.75016 12.0834L12.9168 7.91669" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125ZM1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10Z" fill="#E4E4E4"/>
        </svg>
      </div>
      <h3 class="text-[#737373] text-sm">A lowercase letter (a)</h3>
    </div>
    
    <div class="w-full flex justify-start items-center gap-x-2">
      <div>
        <svg v-if="result.SPECIAL" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" fill="#66C27C"/>
          <path d="M7.0835 10.4167L8.75016 12.0834L12.9168 7.91669" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125ZM1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10Z" fill="#E4E4E4"/>
        </svg>
      </div>
      <h3 class="text-[#737373] text-sm">
        Must contain a special character ($,@,)
      </h3>
    </div>
    <div class="w-full flex justify-start items-center gap-x-2">
      <div>
        <svg v-if="result.NUMBER" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" fill="#66C27C"/>
          <path d="M7.0835 10.4167L8.75016 12.0834L12.9168 7.91669" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125ZM1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10Z" fill="#E4E4E4"/>
        </svg>
      </div>
      <h3 class="text-[#737373] text-sm">Must contain a number (0-9)</h3>
    </div>
    <div class="w-full flex justify-start items-center gap-x-2">
      <div>
        <svg v-if="result.COUNT" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" fill="#66C27C"/>
          <path d="M7.0835 10.4167L8.75016 12.0834L12.9168 7.91669" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125ZM1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10Z" fill="#E4E4E4"/>
        </svg>
      </div>
      <h3 class="text-[#737373] text-sm">At least 8+ Characters</h3>
    </div>

    <!-- <div class="w-full flex justify-start items-center gap-x-2 ms-1">
      <input
        type="checkbox"
        class="appearance-none bg-white border-[1px] border-[#737373] rounded-full w-4 h-4 cursor-pointer custom-checkbox relative"
      />
      <h3 class="text-[#737373] text-sm">Comfirm password</h3>
    </div> -->
  </div>
</template>
<script setup lang="ts">

const password = defineModel<string>("password")
const emit = defineEmits(['update'])

  const result = reactive({
    UPPERCASE: false,
    LOWERCASE: false,
    SPECIAL: false,
    NUMBER: false,
    COUNT: false
  })

    watch(() => [password.value], async(newvalue, oldvalue) => {

      const hasUpperCase = /[A-Z]/.test(password.value!);
      const hasLowerCase = /[a-z]/.test(password.value!);
      const hasSpecialChar = /[^\w\s]/.test(password.value!);
      const hasNumber = /\d/.test(password.value!);
      const hasMinLength = (password.value! as string).length >= 8;

      result.UPPERCASE = hasUpperCase
      result.LOWERCASE = hasLowerCase
      result.SPECIAL = hasSpecialChar
      result.NUMBER = hasNumber
      result.COUNT = hasMinLength

      emit('update',result)

    });

</script>

<style scoped>
.custom-checkbox:checked::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background-color: #0050ab;
  border-radius: 50%;
}

.custom-radio {
  appearance: none;
  background-color: #d9d9d9;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
}

.custom-radio:checked::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: #0050ab;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
</style>
