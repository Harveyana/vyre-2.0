<template>
  <div class="w-full h-full overflow-y-scroll bg-[#0b1015] no-scrollbar">

    <!-- Container -->
    <section class="w-full h-full grid grid-cols-12 gap-y-8">
       
      <div class="col-span-12 h-[48vh] sm:h-full flex flex-col bg-pattern lg:col-span-6 gap-y-8 px-8 sm:px-16 py-8">

        <img src="~/assets/img/logo/vyreLogo2.png" class=" w-10 sm:w-20"/>

        <!-- <div class="w-full sm:w-[80%] flex flex-col items-start justify-start space-y-5 ">

          <h1 class="blackCabinet  text-2xl text-white font-bold" data-aos="fade-right" data-aos-once="true">
            Get Tailored Applications for Your Career Journey
          </h1>
          <p class="text-sm text-white flex flex-row">
            Craft tailored applications for global dream roles with seamless access to limitless career opportunities.
          </p>
        </div> -->

      </div>

      <div class="col-span-12 lg:col-span-6 h-full flex flex-row items-center justify-center lg:justify-start px-6 sm:px-16 pb-10 sm:pb-0 ">

        <Login v-if="tab =='login'" />
        <!-- sign Up -->
        <SignUp v-if="tab =='signUp'"/>
        <!-- Login -->
        <ForgotPass v-if="tab =='forgotPassWord'" />

        <!-- <Verify v-if="tab =='verify'" /> -->

      </div>
      
        
        
    </section>
    <!-- <Toast group="success" severity='success' :pt="{
                  container: {
                      style: 'background: #7fdbb4; margin: 10px; padding:5px; color: white'
                  }
            }"/>

            <Toast group="fail" severity='error' :pt="{
                  container: {
                      style: 'background: #CA3433; margin: 10px; padding:5px; color: white'
                  }
            }"
    /> -->

    <!-- <BaseDialog :visible="openDialog">
      <div class="w-full h-full rounded-3xl flex flex-col items-center justify-center bg-[#0b1015] py-10 px-6 space-y-5">
        <img src="~/assets/img/email.svg" class="w-14 cursor-pointer p-1 rounded-[50px] mx-2 md:w-24" />

        <h1 class="blackCabinet text-lg text-white font-bold">
          Email verification sent
        </h1>

        <p class="text-sm text-[#555a5c] text-center flex flex-row items-center justify-center">
          Email verification link has been sent to {{dialogEmail}}
        </p>

        <BaseButton @click="openDialog = false" class="bg-white">
          <span class="text-[16px] text-black hover:text-gray-200 text-center">Done</span>
        </BaseButton>

      </div>
    </BaseDialog> -->

  </div>

</template>


<script setup lang="ts">
  // import { sendEmailVerification } from 'firebase/auth';

  // const state = useGlobalState()
  // const user = state.user
  const route = useRoute();
  const tab = computed(() => route.query.tab? route.query.tab : 'login')


  const signup = ref(true)

  const openDialog = ref(false)

  const dialogEmail = ref('')

  const showVerify = (email:string)=>{
    dialogEmail.value = email
    openDialog.value = true
  }

</script>

<style scoped>
 h1,.cabinet {
  font-family: 'cabinetGrotesk', sans-serif;
 }

 .extraboldCabinet{
  font-family: 'cabinetGroteskBold', sans-serif;
 }

 .blackCabinet{
  font-family: 'cabinetGroteskBlack', sans-serif;
 }

 .no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}

.bg-pattern {
  background: url('../assets/img/authBg.jpg');
  background-repeat: no-repeat;
  /* background-size: auto; */
  background-size: cover;
  background-position: center center;
}

</style>