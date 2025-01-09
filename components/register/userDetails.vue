<template>
      <form class="w-full flex flex-col h-fit gap-y-8 sm:gap-y-4 mx-auto py-6">

        <div class="w-full flex flex-col items-start justify-center gap-y-1">
          <h1  class=" text-[23px] SansSemiBold font text-[#0D0D0D] font-semibold">
            Create Account
          </h1>
          <span class="text-[13px] SansRegular text-[#686767] text-left ">Please create your account</span>
        </div>

        <div class="w-full flex flex-col items-start justify-center gap-y-4">

          <h1  class=" text-[16px] SansRegular font text-[#0D0D0D] font-semibold">
            Personal Information
          </h1>

          <div class="w-full flex flex-row items-center justify-start gap-x-2">

            <div class="w-1/2 flex flex-col items-start justify-start gap-y-1">
              <label for="firstName" class="text-[15px] SansRegular text-[#0D0D0D] text-left ">First Name</label>
              <input
               id="firstName"
                type="text"
                v-model="inputs.firstName"
                class="w-full border-[#E4E5E7] SansRegular border text-[#080708] text-[14px] py-2 px-3 rounded-xl outline-none"
                placeholder="Obiajulu"
              />
            </div>

            <div class="w-1/2 flex flex-col items-start justify-start gap-y-1">
              <label for="lastName" class="text-[15px] SansRegular text-[#0D0D0D] text-left ">Last Name</label>
              <input
                id="lastName"
                type="text"
                v-model="inputs.lastName"
                class="w-full border-[#E4E5E7] SansRegular border text-[#080708] text-[14px] py-2 px-3 rounded-xl outline-none"
                placeholder="Obiajulu"
              />
            </div>

          </div>

          <div class="w-full flex flex-col items-start justify-start gap-y-1">
              <label for="email" class="text-[15px] SansRegular text-[#0D0D0D] text-left ">Email Address</label>
              <input
                id="email"
                type="text"
                v-model="inputs.email"
                class="w-full border-[#E4E5E7] SansRegular border text-[#080708] text-[14px] py-2 px-3 rounded-xl outline-none"
                placeholder="hello@anayormaai.com"
              />
          </div>

        </div>


        <button type="submit" :disabled="false" @click.prevent="submitForm()"  class="w-full bg-[#FF2E42] flex flex-row items-center justify-center rounded-2xl mt-6 py-3">
          <span v-if="!showLoader" class="text-[16px] SoraRegular text-[#FFFFFF] text-center">Proceed</span>
          <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" 
          />
        </button>

        <NuxtLink class="flex flex-row items-center justify-center gap-x-1" to="/login">
            <h3 class="text-[12px] sm:text-[16px] SansRegular text-[#0D0D0D] text-left ">Already have an account?</h3>
            <span class="text-[12px] sm:text-[16px] SansRegular text-[#FF2E42] text-left ">Login</span>
        </NuxtLink>

      </form>

      <BaseToast :model="toast.show" :success="toast.success" :title="toast.title" :description="toast.description" @close="toast.show = false"/>

  </template>

  <script setup lang="ts">

  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { createUser } = useAuthStore();

  const { authenticated, loading } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

  const showLoader = ref(false)
  
  const visible = ref(false)

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

  const route = useRouter()

  const inputs = reactive({
    firstName:'',
    lastName:'',
    email:'',
    organisation:{
      name:'',
      cacRegNo:'',
      type:'PRIVATE',
      logo:''
    }
  })



  const emit = defineEmits(['next'])  // Declare Events

  // const props = defineProps<{
  //   showLogin: boolean
  // }>()

  const isValidEmail=(email:string)=> {
      // Regular expression for email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  }

//  const isValidForm = computed(() =>{return isValidEmail(inputs.email) && inputs.password !== ''})


  async function createAccount() {
        showLoader.value = true
        const signedIn = await createUser(inputs); // call authenticateUser and pass the user object

        if (signedIn.success) {
          showLoader.value = false
          initToast(true,'Successful','registration successful')
          progress.value = 50
          emit('next')
          // route.push('/signup?tab=email'); // route to the email tab
        }else{
          showLoader.value = false
          initToast(false,'Registration Failed',signedIn?.msg)
        }
        
  }

  const submitForm =()=> {

      if (!isValidEmail(inputs.email)) {
        // alert('Please enter a valid email address.');
        initToast(false,'Email Required','Please enter a valid email address')
        return;
      }

      if (inputs.firstName == '') {
        // alert('Please enter password.');
        initToast(false,'firstName Required','Please enter complete details')
        return;
      }

      if (inputs.lastName == '') {
        // alert('Please enter password.');
        initToast(false,'lastName Required','Please enter complete details')
        return;
      }

      if (inputs.organisation.name == '') {
        // alert('Please enter password.');
        initToast(false,'Organisation Name Required','Please enter complete details')
        return;
      }

      if (inputs.organisation.cacRegNo == '') {
        // alert('Please enter password.');
        initToast(false,'Organisation REG number Required','Please enter complete details')
        return;
      }
      
      createAccount()

      // Form submission logic
      // console.log('Form submitted successfully!');
      
  }


  </script>