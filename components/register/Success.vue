<template>
      <div class="w-full flex flex-col h-fit gap-y-8 sm:gap-y-10 mx-auto">

        <div class="w-full flex flex-col items-center justify-center gap-y-3">

          <div class="w-full flex flex-row item-center justify-center">
            <!-- <img class="w-1/2" src="~/assets/img/success.svg" alt="success"> -->
          </div>

          
          <h1  class=" text-[23px] SansSemiBold font text-[#0D0D0D] font-semibold">
            Account Created Successfully
          </h1>
          <span class="text-[13px] SansRegular text-[#686767] text-center ">Welcome to Qaya. Let’s start jumping the queue</span>

          

        </div>

        <button @click="$router.push('/')"  class="w-full bg-[#FF2E42] flex flex-row items-center justify-center rounded-2xl mt-6 py-3">
          <span class="text-[16px] SoraRegular text-[#FFFFFF] text-center">Go to Dashboard</span>
        </button>

      </div>


  </template>

  <script setup lang="ts">

  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { authenticateUser } = useAuthStore();

  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs



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
    email:'',
    password:''
  })



  const emit = defineEmits(['openSignup','openLogin'])  // Declare Events

  // const props = defineProps<{
  //   showLogin: boolean
  // }>()

  const isValidEmail=(email:string)=> {
      // Regular expression for email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  }

 const isValidForm = computed(() =>{return isValidEmail(inputs.email) && inputs.password !== ''})


  async function login(email:string,password:string) {
        showLoader.value = true
        const signedIn = await authenticateUser(inputs); // call authenticateUser and pass the user object

        if (signedIn) {
          showLoader.value = false
          initToast(true,'Successful','Sign in was successful')
          inputs.email = '';
          inputs.password = '';

          route.push('/'); // route to the dashboard
        }else{
          showLoader.value = false
          initToast(false,'Login Failed','please try again')
        }
        
  }

  const submitForm =()=> {

      if (!isValidEmail(inputs.email)) {
        // alert('Please enter a valid email address.');
        initToast(false,'Email Required','Please enter a valid email address')
        return;
      }

      if (inputs.password == '') {
        // alert('Please enter password.');
        initToast(false,'Password Required','Please enter account password')
        return;
      }
      
      login(inputs.email,inputs.password)

      // Form submission logic
      // console.log('Form submitted successfully!');
      
  }


  </script>