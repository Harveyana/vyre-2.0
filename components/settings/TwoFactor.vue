<template>

        <div class="w-full sm:w-[60%] flex flex-col items-start justify-center gap-y-4 px-2 mt-8">


          <div class="w-full flex flex-col items-start justify-between gap-3">

            <div class="w-full relative">

              <span class="Grotesque-Regular text-md text-[#010109]">
                Active
              </span>

              <SwitchRoot
                  id="general"
                  @update:checked=""
                  v-model:checked="enabled"
                  class="w-[42px] h-[25px]  flex bg-[#D1D5DB] shadow-sm rounded-full relative data-[state=checked]:bg-green-400 cursor-default"
                >
                  <SwitchThumb
                    class="block w-[21px] h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
                  />
              </SwitchRoot>

            </div>

            <div class="w-full relative">

              <label class="Grotesque-Regular text-md text-[#010109]">
                Method
              </label>

              <SetupSelect :options="methods" :placeholder="method" @update="(value:string)=>{method = value}"/>

            </div>

          </div>


        </div>

      <BaseDialogue :visible="showAdd2FA">

<div class="w-full flex flex-col h-fit lg:w-[400px] gap-y-6">
    
  <div class="w-full flex items-start justify-between">
    
    <div class="flex flex-col items-start justify-center gap-y-[2px]">
        <h1 class="text-[18px] font-[600] whitespace-nowrap SoraRegular text-[#080708]">
          Two Factor Authentication
        </h1>

        <h4 class="text-[13px] max-w-[90%] SansRegular text-[#686767]">
          Empower your account security by enabling 2FA.<br> It's a smart move that provides an additional layer of protection<br> for your digital presence.
        </h4>
    </div>


    <button @click="showAdd2FA = false;enabled = !enabled">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
        <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
      </svg>
    </button>

  </div>

  <div class="flex flex-col items-start justify-start gap-y-3">


    <RadioGroupRoot
        v-model="method"
        class="flex flex-col gap-4"
        default-value="EMAIL_OTP"
        aria-label="View density"
      >
        <div class="flex items-center gap-x-3">
          <RadioGroupItem
            id="email"
            class="bg-[#D9D9D9] border w-[25px] h-[25px] rounded-full shadow-blackA7 focus:shadow-black outline-none cursor-pointer"
            value="EMAIL_OTP"
          >
            <RadioGroupIndicator
              class="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-[#FF2E42]"
            />
          </RadioGroupItem>
          <label
            class="text-[13px] whitespace-nowrap SansRegular text-[#686767]"
            for="email"
          >
            Receive OTP via email
          </label>
        </div>

        <div class="flex items-center gap-x-3">
          <RadioGroupItem
            id="sms"
            class="bg-[#D9D9D9] border w-[25px] h-[25px] rounded-full shadow-blackA7 focus:shadow-black outline-none cursor-pointer"
            value="SMS_OTP"
          >
            <RadioGroupIndicator
              class="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-[#FF2E42]"
            />
          </RadioGroupItem>
          <label
            class="text-[13px] whitespace-nowrap SansRegular text-[#686767]"
            for="sms"
          >
            Receive OTP via SMS
          </label>
        </div>

        <div class="flex items-center gap-x-3">
          <RadioGroupItem
            id="third"
            class="bg-[#D9D9D9] border w-[25px] h-[25px] rounded-full shadow-blackA7 focus:shadow-black outline-none cursor-pointer"
            value="THIRD_PARTY_AUTHENTICATOR"
          >
            <RadioGroupIndicator
              class="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-[#FF2E42]"
            />
          </RadioGroupItem>
          <label
            class="text-[13px] whitespace-nowrap SansRegular text-[#686767]"
            for="third"
          >
            Verify Via Third Party (e.g Google Authenticator)
          </label>
        </div>

    </RadioGroupRoot>



    <button :disabled="showLoader" @click="saveMethod()"  class="w-full bg-[#FF2E42] flex flex-row items-center justify-center rounded-2xl mt-6 py-3">
      <span v-if="!showLoader" class="text-[16px] SoraRegular text-[#FFFFFF] text-center">Secure</span>
      <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
        animationDuration=".5s" aria-label="Custom ProgressSpinner" 
      />
    </button>


  </div>
  

</div>


      </BaseDialogue>

      <BaseDialogue :visible="showDisable">

        <div class="w-full flex flex-col h-fit lg:w-[400px] gap-y-6">
            
          <div class="w-full flex items-start justify-between">

            <div class="flex flex-col items-start justify-center gap-y-[2px]">
                <h1 class="text-[18px] font-[600] whitespace-nowrap SoraRegular text-[#080708]">
                  Turn Off 2FA
                </h1>

                <h4 class="text-[13px] max-w-[90%] SansRegular text-[#686767]">
                  Are sure you want to turn off 2FA? You can always turn it on later
                </h4>
            </div>

            <button @click="showDisable = false;enabled = !enabled">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
              </svg>
            </button>
          </div>

          <div class="flex flex-col items-center justify-center gap-y-3">

            <!-- Import product from file -->
            <div class="w-full flex items-center justify-between rounded-2xl py-2">


                <div class="w-full flex flex-col items-start justify-start gap-y-1">
                      <span class="text-[15px] SansRegular text-[#0D0D0D] text-left ">Enter Code From Auth App</span>
                      <input
                      v-model="disableToken"
                        type="text"
                        class="w-full border-[#E4E5E7] SansRegular border text-[#080708] text-[14px] py-2 px-3 rounded-xl outline-none"
                      />
                </div>


              </div>

              <div class="w-full flex items-center justify-center gap-x-4">

                <button :disabled="showLoader" @click="disable2FA()"  class="w-full sm:w-1/2 bg-[#FF2E42] flex flex-row items-center justify-center rounded-2xl mt-6 py-3">
                  <span v-if="!showLoader" class="text-[16px] SoraRegular text-[#FFFFFF] text-center">Yes, Turn Off</span>
                  <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
                    animationDuration=".5s" aria-label="Custom ProgressSpinner" 
                  />
                </button>

                <button @click="showDisable = false;enabled = !enabled"  class="w-full sm:w-1/2 bg-white flex flex-row items-center justify-center rounded-2xl mt-6 py-3">
                  <span class="text-[16px] SoraRegular text-[#686767] text-center">Cancel</span>
                </button>

              </div>

          </div>
          

        </div>


      </BaseDialogue>

      <BaseDialogue :visible="showCode">

        <div class="w-full flex flex-col h-fit lg:w-[400px] gap-y-6">
            
          <div class="w-full flex items-start justify-between">

            <div class="flex flex-col items-start justify-center gap-y-[2px]">
                <h1 class="text-[18px] font-[600] whitespace-nowrap SoraRegular text-[#080708]">
                  Two Factor Authentication
                </h1>

                <h4 class="text-[13px] max-w-[90%] SansRegular text-[#686767]">
                  Enter your verification code. Use your code generator app to generate a code and enter it below
                </h4>
            </div>

            <button @click="showCode = false;enabled = !enabled">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
              </svg>
            </button>
          </div>

          <ThirdPartyScan @update="(value:string)=>{updated(value)}" />


        </div>


      </BaseDialogue>

      <BaseDialogue :visible="showSuccess">

        <div class="w-full flex flex-col h-fit lg:w-[400px] gap-y-6">
            
          <div class="w-full flex items-start justify-between">

            <button @click="showSuccess = false">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
              </svg>
            </button>
          </div>

          <div class="flex flex-col items-center justify-center gap-y-3">

            <!-- Import product from file -->
            <div class="w-full flex flex-col items-center justify-center gap-y-2">

              <div class="w-full flex flex-row item-center justify-center">
                <img class="w-32" src="~/assets/img/success.svg" alt="success">
              </div>

              
              <h1  class=" text-[23px] SansSemiBold font text-[#0D0D0D] font-semibold">
                Account Secured Successfully
              </h1>
              <span class="text-[13px] SansRegular text-[#686767] text-center ">Your account has been secured. You’re safe</span>

            
            </div>


            <button @click="showSuccess = false"  class="w-full bg-[#FF2E42] flex flex-row items-center justify-center rounded-2xl mt-6 py-3">
              <span class="text-[16px] SoraRegular text-[#FFFFFF] text-center">Close</span>
            </button>

          </div>
          

        </div>


      </BaseDialogue>



  </template>

  <script setup lang="ts">

  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { set2Factor, get2Factor, disable2Factor } = useAuthStore();

  const { loading, user, store, organisation } = storeToRefs(useAuthStore());

  const showDisable = ref(false)
  const showAdd2FA = ref(false)
  const showCode = ref(false)
  const showSuccess = ref(false)

  const showLoader = ref(false)


  const route = useRouter()

  const methods = [
    {label:'EMAIL',value:'EMAIL_OTP'},
    {label:'SMS',value:'SMS_OTP'}
    // {label:'THIRD PARTY AUTHENTICATOR',value:'THIRD_PARTY_AUTHENTICATOR'}
  ]

  // EMAIL_OTP
    // SMS_OTP
    // THIRD_PARTY_AUTHENTICATOR

  // const method = ref(user.value?.twoFactorAuthenticationMethod == 'EMAIL_OTP'? 'EMAIL':user.value?.twoFactorAuthenticationMethod == 'SMS_OTP'? 'SMS':user.value?.twoFactorAuthenticationMethod == 'THIRD_PARTY_AUTHENTICATOR'?'THIRD PARTY AUTHENTICATOR':'NONE' )
  const inputs = ref<{secret:string, token:string}>()
  const disableToken = ref('')


  const emit = defineEmits(['back'])  // Declare Events

  // const enabled = ref(user.value ? user.value?.twoFactorEnabled! : false)

  // const method = ref(user.value?.twoFactorAuthenticationMethod == 'EMAIL_OTP'? 'EMAIL':user.value?.twoFactorAuthenticationMethod == 'SMS_OTP'? 'SMS':user.value?.twoFactorAuthenticationMethod == 'THIRD_PARTY_AUTHENTICATOR'?'THIRD PARTY AUTHENTICATOR':'NONE')

  const enabled = computed({
    get: () => user.value?.twoFactorEnabled,
    set: (value) => {
      if (user.value) {
        user.value.twoFactorEnabled = value;
      }
    }
  });

  const method = computed({
    get: () => {
      const methodValue = user.value?.twoFactorAuthenticationMethod;
      return methodValue
    },
    set: (value:string) => {
      console.log(value)
      return value
    },
  });




  const Activate2FA = async()=>{
    showLoader.value = true
    console.log(method.value)
    const result = await set2Factor(method.value);
    console.log(result)
    if(result?.success){
      // secret.value = result?.secret
      user.value = result?.user
      toast.success(result?.msg)
      // showAdd2FA.value = false
      // showSuccess.value = true
    }else{
      toast.error(result?.msg)
      showLoader.value = false
    }
    // showLoader.value = false
  }

  const disable2FA = async()=>{
    showLoader.value = true
    const result = await disable2Factor(disableToken.value);
    console.log(result)
    if(result?.success){
      // enabled.value = false
      user.value = result?.user
      // showDisable.value = false
      toast.success(result?.msg)
      showLoader.value = false
    }else{
      toast.error(result?.msg)
      showLoader.value = false
    }
  }


  const update2FA = ()=>{
    if(enabled.value){
      Activate2FA()
    }else{
      disable2FA()
    }
  }

  watch(() => [enabled.value, method.value], async(newvalue, oldvalue) => {
    update2FA()
  });
  

  // const saveMethod =()=>{
  //   if(method.value == 'THIRD_PARTY_AUTHENTICATOR'){
  //     return showCode.value = true
  //   }
  //   Activate2FA()
  // }

  // const SwitchAction = ()=>{
  //   enabled.value = !enabled.value
  //   if(!enabled.value){
  //     return showAdd2FA.value = true
  //   }else if(enabled.value){
  //     return showDisable.value = true
  //   }

  // }

  // const updated = (value:{secret:string, token:string})=>{
  //   inputs.value = value
  //   console.log(value)
  //   showCode.value = false
  //   Activate2FA()
  // }



</script>

<style>

  .custom-checkbox:checked {
    background-color: #22c55e; /* green-500 */
    border-color: #22c55e; /* green-500 */
  }
</style>

