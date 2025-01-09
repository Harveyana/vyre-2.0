<template>
      <div class="w-full flex flex-col h-fit gap-y-8 sm:gap-y-4 mx-auto py-6">

        <div class="w-full flex flex-col items-start justify-center gap-y-1">
          <h1  class=" text-[23px] SansSemiBold font text-[#0D0D0D] font-semibold">
            Create Password
          </h1>
          <span class="text-[13px] SansRegular text-[#686767] text-left ">Please create a secure password</span>
        </div>


        <div class="w-full flex flex-col items-start justify-center gap-y-4">

          <div class="w-full flex flex-col items-start justify-start gap-y-1">
              <span class="text-[15px] SansRegular text-[#0D0D0D] text-left ">Password</span>
              <div class="w-full flex flex-row items-center justify-between border-[#E4E5E7] border text-[#080708] text-[14px] px-3 rounded-xl outline-none">

                <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="inputs.password"
                  class="w-[70%] text-[#080708] SansRegular text-[14px] py-2 px-3 outline-none"
                  placeholder="Enter Password"
                />

                <button @click="showPassword = !showPassword">
                  <span class="text-[14px] SansRegular text-[#686767]">Show</span>
                </button>
                
              </div>
              
          </div>


          <div class="w-full flex flex-col items-start justify-start gap-y-1">
              <span class="text-[15px] SansRegular text-[#0D0D0D] text-left ">Confirm Password</span>
              <div class="w-full flex flex-row items-center justify-between border-[#E4E5E7] border text-[#080708] text-[14px] px-3 rounded-xl outline-none">

                <input
                  :type="showConfirmPassword ? 'text' : 'password'"
                  v-model="inputs.confirmPassword"
                  class="w-[70%] text-[#080708] SansRegular text-[14px] py-2 px-3 outline-none"
                  placeholder="Confirm Password"
                />

                <button @click="showConfirmPassword = !showConfirmPassword">
                  <span class="text-[14px] SansRegular text-[#686767]">Show</span>
                </button>
                
              </div>
              
          </div>

          
          <!-- case 1 -->
          <div v-if="passwordStrength == 'Strong'" class="w-full flex flex-col items-start justify-center mt-2 gap-y-2">

            <div class="w-full flex flex-row items-center justify-between gap-x-2">

              <div class="w-[32%] bg-[#38C793] h-1 rounded-full"></div>
              <div class="w-[32%] bg-[#38C793] h-1 rounded-full"></div>
              <div class="w-[32%] bg-[#38C793] h-1 rounded-full"></div>

            </div>
            <span class="text-[13px] SansRegular text-[#686767] text-left ">Strong password. Your password is secure.</span>

            <div class="flex flex-col items-start justify-start gap-y-1">

              <div class="flex flex-row items-center gap-x-2">
                <img src="~/assets/img/checked.svg" class="w-7" alt="check">
                <span class="text-[13px] SansRegular text-[#686767] text-left ">At least 1 uppercase</span>
              </div>

              <div class="flex flex-row items-center gap-x-2">
                <img src="~/assets/img/checked.svg" class="w-7" alt="check">
                <span class="text-[13px] SansRegular text-[#686767] text-left ">At least 1 number</span>
              </div>

              <div class="flex flex-row items-center gap-x-2">
                <img src="~/assets/img/checked.svg" class="w-7" alt="check">
                <span class="text-[13px] SansRegular text-[#686767] text-left ">At least 8 characters</span>
              </div>

            </div>

            <div class="flex items-start justify-start gap-x-2 mt-2">
                <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 mt-2 text-[#38C793] custom-checkbox border-gray-300 rounded-3xl outline-none">
                <label for="checked-checkbox" class="text-[13px] SansRegular text-[#686767]">
                  I acknowledge that I have read, understood, and agree to be bound by Qaya's Merchant Services Agreement (MSA), Terms and Conditions,and Privacy Notice.</label>
            </div>

          </div>

          <!-- case 2 -->

          <div v-else-if="passwordStrength == 'Moderate'" class="w-full flex flex-col items-start justify-center mt-2 gap-y-2">

            <div class="w-full flex flex-row items-center justify-between gap-x-2">

              <div class="w-[32%] bg-[#F17B2C] h-1 rounded-full"></div>
              <div class="w-[32%] bg-[#F17B2C] h-1 rounded-full"></div>
              <div class="w-[32%] bg-[#E2E4E9] h-1 rounded-full"></div>

            </div>
            <span class="text-[13px] SansRegular text-[#686767] text-left ">Moderate password. Must contain at least;</span>

            <div class="flex flex-col items-start justify-start gap-y-1">

              <div class="flex flex-row items-center gap-x-2">
                <img src="~/assets/img/checked.svg" class="w-7" alt="check">
                <span class="text-[13px] SansRegular text-[#686767] text-left ">At least 1 uppercase</span>
              </div>

              <div class="flex flex-row items-center gap-x-2">
                <img src="~/assets/img/checked.svg" class="w-7" alt="check">
                <span class="text-[13px] SansRegular text-[#686767] text-left ">At least 1 number</span>
              </div>

              <div class="flex flex-row items-center gap-x-2">
                <img src="~/assets/img/cross.svg" class="w-7" alt="check">
                <span class="text-[13px] SansRegular text-[#686767] text-left ">At least 8 characters</span>
              </div>

            </div>

            <div class="flex items-start justify-start gap-x-2 mt-2">
                <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 mt-2 text-[#38C793] custom-checkbox border-gray-300 rounded-3xl outline-none">
                <label for="checked-checkbox" class="text-[13px] SansRegular text-[#686767]">
                  I acknowledge that I have read, understood, and agree to be bound by Qaya's Merchant Services Agreement (MSA), Terms and Conditions,and Privacy Notice.</label>
            </div>

          </div>

          <!-- case 3 -->

          <div v-else-if="passwordStrength == 'Weak'" class="w-full flex flex-col items-start justify-center mt-2 gap-y-2">

            <div class="w-full flex flex-row items-center justify-between gap-x-2">

              <div class="w-[32%] bg-[#DF1C41] h-1 rounded-full"></div>
              <div class="w-[32%] bg-[#E2E4E9] h-1 rounded-full"></div>
              <div class="w-[32%] bg-[#E2E4E9] h-1 rounded-full"></div>

            </div>
            <span class="text-[13px] SansRegular text-[#686767] text-left ">Weak password. Must contain at least;.</span>

            <div class="flex flex-col items-start justify-start gap-y-1">

              <div class="flex flex-row items-center gap-x-2">
                <img src="~/assets/img/checked.svg" class="w-7" alt="check">
                <span class="text-[13px] SansRegular text-[#686767] text-left ">At least 1 uppercase</span>
              </div>

              <div class="flex flex-row items-center gap-x-2">
                <img src="~/assets/img/cross.svg" class="w-7" alt="check">
                <span class="text-[13px] SansRegular text-[#686767] text-left ">At least 1 number</span>
              </div>

              <div class="flex flex-row items-center gap-x-2">
                <img src="~/assets/img/cross.svg" class="w-7" alt="check">
                <span class="text-[13px] SansRegular text-[#686767] text-left ">At least 8 characters</span>
              </div>

            </div>

            <div class="flex items-start justify-start gap-x-2 mt-2">
                <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 mt-2 text-[#38C793] custom-checkbox border-gray-300 rounded-3xl outline-none">
                <label for="checked-checkbox" class="text-[13px] SansRegular text-[#686767]">
                  I acknowledge that I have read, understood, and agree to be bound by Qaya's Merchant Services Agreement (MSA), Terms and Conditions,and Privacy Notice.</label>
            </div>

          </div>


          <div v-else class="w-full flex flex-col items-start justify-center mt-2 gap-y-2">

            <div class="w-full flex flex-row items-center justify-between gap-x-2">

              <div class="w-[32%] bg-[#E2E4E9] h-1 rounded-full"></div>
              <div class="w-[32%] bg-[#E2E4E9] h-1 rounded-full"></div>
              <div class="w-[32%] bg-[#E2E4E9] h-1 rounded-full"></div>

            </div>
            <span class="text-[13px] SansRegular text-[#686767] text-left ">Must contain at least;</span>

            <div class="flex flex-col items-start justify-start gap-y-1">

              <div class="flex flex-row items-center gap-x-2">
                <img src="~/assets/img/emptyCheck.svg" class="w-7" alt="check">
                <span class="text-[13px] SansRegular text-[#686767] text-left ">At least 1 uppercase</span>
              </div>

              <div class="flex flex-row items-center gap-x-2">
                <img src="~/assets/img/emptyCheck.svg" class="w-7" alt="check">
                <span class="text-[13px] SansRegular text-[#686767] text-left ">At least 1 number</span>
              </div>

              <div class="flex flex-row items-center gap-x-2">
                <img src="~/assets/img/emptyCheck.svg" class="w-7" alt="check">
                <span class="text-[13px] SansRegular text-[#686767] text-left ">At least 8 characters</span>
              </div>

            </div>

            <div class="flex items-start justify-start gap-x-2 mt-2">
                <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 mt-2 text-[#38C793] custom-checkbox border-gray-300 rounded-3xl outline-none">
                <label for="checked-checkbox" class="text-[13px] SansRegular text-[#686767]">
                  I acknowledge that I have read, understood, and agree to be bound by Qaya's Merchant Services Agreement (MSA), Terms and Conditions,and Privacy Notice.</label>
            </div>

          </div>

        </div>

        <button :disabled="false" @click="submitForm()"  class="w-full bg-[#FF2E42] flex flex-row items-center justify-center rounded-2xl mt-6 py-3">
          <span v-if="!showLoader" class="text-[16px] SoraRegular text-[#FFFFFF] text-center">Create Account</span>
          <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" 
          />
        </button>

      </div>

      <BaseToast :model="toast.show" :success="toast.success" :title="toast.title" :description="toast.description" @close="toast.show = false"/>

  </template>

  <script setup lang="ts">

  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { setupPassword } = useAuthStore();

  const { authenticated,loading,progress } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs



  const showLoader = ref(false)
  
  const showConfirmPassword = ref(false)
  const showPassword = ref(false)


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

  const router = useRouter()

  const route = useRoute()

  // const passwordStrength = ref('')

  const userId = ref(route.query.user ? route.query.user : '');

  const verifyCode = ref(route.query.code ? route.query.code : '');

  const inputs = reactive({
    password:'',
    confirmPassword:''
  })

   const passwordStrength = computed(() => {
      const value = inputs.password;

      const hasUpperCase = /[A-Z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasMinLength = value.length >= 8;

      if (hasUpperCase && hasNumber && hasMinLength) {
        return 'Strong';
      } else if (hasUpperCase && hasNumber) {
        return 'Moderate';
      } else if (hasUpperCase || hasNumber || hasMinLength) {
        return 'Weak';
      } else {
        return '';
      }
    });



  const emit = defineEmits(['next'])  // Declare Events


  async function  Setup () {
        showLoader.value = true
        const result = await setupPassword({userId: userId.value as string,password: inputs.password,code: verifyCode.value as string}); // setup password

        if (result.success) {
          showLoader.value = false
          initToast(true,'Successful',result.msg)
          emit('next')
        }else{
          showLoader.value = false
          initToast(false,'Operation Failed',result.msg)
        }
        
  }

  const submitForm =()=> {

      if (inputs.password == '') {
        // alert('Please enter password.');
        initToast(false,'Password Required','Please enter account password')
        return;
      }

      if (inputs.password !== inputs.confirmPassword) {
        // alert('Please enter password.');
        initToast(false,'Check Password','your password is not the same on both fields')
        return;
      }

      if (passwordStrength.value !== 'Strong'){
        // alert('Please enter password.');
        initToast(false,'password too weak','change your password, its too weak')
        return;
      }
      
      Setup()

      // Form submission logic
      // console.log('Form submitted successfully!');
      
  }

  onMounted(()=>{
    progress.value = 80
  })


  </script>
  <style>

  .custom-checkbox:checked {
    background-color: #22c55e; /* green-500 */
    border-color: #22c55e; /* green-500 */
  }
  </style>