<template>
      <div class="w-full sm:w-[60%] lg:w-[75%] space-y-8 sm:space-y-4">

        <div class="w-full flex flex-col items-start justify-center space-y-4">
          <h1  data-aos="fade-right" data-aos-once="true">
             <span v-if="!tab" class="blackCabinet text-4xl text-white font-bold" > Recover Account</span>
             <span v-else class="blackCabinet text-4xl text-white font-bold" > Reset Password</span>
          </h1>
          <!-- <ProgressSpinner v-if="showLoader" class="" style="width: 80px; height: 80px" strokeWidth="8" fill="#ffff"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" 
          /> -->
        </div>

        <div class="w-full lg:w-[80%] flex flex-col items-start justify-center space-y-4">
          <!-- <button @click="googleSignIn()" class="w-full flex flex-row hover:bg-gray-600 items-center justify-center border-2  border-white rounded-3xl p-1.5">
            <img src="~/assets/img/googleLogo.svg" class="w-5 cursor-pointer mx-2" />
            <span class="text-[13px] text-white text-center">Continue with Google</span>
          </button> -->

          <!-- <div class="w-full flex flex-row items-center justify-center">
            <div class="border-[#555a5c] border w-[34%]"></div>
            <span class="text-xl text-[#555a5c] text-center mx-12">Or</span>
            <div class="border-[#555a5c] border w-[34%]"></div>
          </div> --> 

          <div v-if="!tab" class="w-full flex flex-col items-start justify-start space-y-4">
            <span class="text-sm text-[#555a5c] text-left ">Verification Code will be sent to your email</span>

            <div class="w-full flex flex-col items-start justify-start space-y-1">
              <span class="text-sm text-[#555a5c] text-left ">Email address</span>
              <input
                type="text"
                v-model="email"
                class="w-full border-[#555a5c] border text-gray-400 text-[13px] py-2 px-4 bg-[#12171d] rounded-3xl"
                placeholder="Enter email address..."
              />
            </div>

            <!-- <PinInputRoot
                          id="pin-input"
                          v-model="pinValue"
                          placeholder="○"
                          class="flex gap-2 items-center mt-1"
                          @complete="handleComplete"
                        >
              <PinInputInput
                v-for="(id, index) in 5"
                  :key="id"
                  :index="index"
                  class="w-12 h-12 bg-white rounded text-center shadow-lg text-black placeholder:text-gray-200 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#DAA520]"
              />
            </PinInputRoot> -->
            
            <!-- <div class="w-full flex flex-col items-start justify-start space-y-1">
              <span class="text-sm text-[#555a5c] text-left ">Password</span>
              <div class="w-full border-[#555a5c] border bg-[#12171d] rounded-3xl flex items-center justify-center">
                <input
                  v-model="inputs.password"
                  :type="visible ? 'text' : 'password'"
                  class="w-full text-gray-400 text-[13px] py-2 px-4 bg-[#12171d] rounded-3xl"
                  placeholder="Enter password"
                />
                <svg @click="visible = !visible" class="cursor-pointer mx-4" width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8749 7.02279C17.1969 6.76109 17.2414 6.29322 16.9742 5.97777C16.707 5.66233 16.2293 5.61876 15.9072 5.88047L14.3822 7.11952C11.842 9.18341 8.17182 9.18846 5.6441 7.13773L4.13399 5.91259C3.8117 5.65111 3.334 5.69502 3.06702 6.01066C2.80003 6.32629 2.84487 6.79413 3.16716 7.05561L3.46065 7.29372L2.60023 8.13638C2.3043 8.4262 2.29935 8.90105 2.58917 9.19698C2.87899 9.49292 3.35384 9.49787 3.64977 9.20805L4.63315 8.24496L4.67727 8.28075C5.17381 8.6836 5.70622 9.02148 6.263 9.29445L5.23531 10.9719C5.01893 11.3251 5.12984 11.7868 5.48304 12.0032C5.83623 12.2196 6.29797 12.1087 6.51436 11.7555L7.68865 9.83876C8.20028 9.98254 8.7231 10.0774 9.2496 10.1234V12.7104C9.2496 13.1246 9.58539 13.4604 9.9996 13.4604C10.4138 13.4604 10.7496 13.1246 10.7496 12.7104V10.1226C11.4085 10.0643 12.0619 9.92966 12.6953 9.71864L13.9431 11.7555C14.1595 12.1087 14.6213 12.2196 14.9745 12.0032C15.3277 11.7868 15.4386 11.3251 15.2222 10.9719L14.0834 9.11317C14.5248 8.8714 14.9489 8.58762 15.3499 8.26185L15.3681 8.24701L16.3494 9.20805C16.6454 9.49787 17.1202 9.49292 17.41 9.19698C17.6999 8.90105 17.6949 8.4262 17.399 8.13638L16.5398 7.29499L16.8749 7.02279Z" fill="#9A9A9A"/>
                  <path d="M16.9742 5.97777L16.8979 6.04241V6.04241L16.9742 5.97777ZM16.8749 7.02279L16.9379 7.1004V7.1004L16.8749 7.02279ZM15.9072 5.88047L15.9702 5.95808V5.95808L15.9072 5.88047ZM14.3822 7.11952L14.4452 7.19713L14.3822 7.11952ZM5.6441 7.13773L5.5811 7.21539L5.6441 7.13773ZM4.13399 5.91259L4.197 5.83493L4.197 5.83493L4.13399 5.91259ZM3.06702 6.01066L2.99067 5.94608L3.06702 6.01066ZM3.16716 7.05561L3.23016 6.97795L3.23016 6.97795L3.16716 7.05561ZM3.46065 7.29372L3.53062 7.36516L3.61073 7.28671L3.52366 7.21606L3.46065 7.29372ZM2.60023 8.13638L2.53026 8.06494L2.53026 8.06494L2.60023 8.13638ZM2.58917 9.19698L2.51772 9.26695L2.51772 9.26695L2.58917 9.19698ZM3.64977 9.20805L3.5798 9.1366V9.1366L3.64977 9.20805ZM4.63315 8.24496L4.69616 8.16731L4.6269 8.11112L4.56319 8.17352L4.63315 8.24496ZM4.67727 8.28075L4.61427 8.35841H4.61427L4.67727 8.28075ZM6.263 9.29445L6.34827 9.34669L6.40566 9.25302L6.30702 9.20466L6.263 9.29445ZM5.23531 10.9719L5.32058 11.0241L5.32058 11.0241L5.23531 10.9719ZM6.51436 11.7555L6.59963 11.8077V11.8077L6.51436 11.7555ZM7.68865 9.83876L7.71571 9.74249L7.64289 9.72203L7.60338 9.78652L7.68865 9.83876ZM9.2496 10.1234H9.3496V10.0318L9.2583 10.0238L9.2496 10.1234ZM10.7496 10.1226L10.7408 10.023L10.6496 10.031V10.1226H10.7496ZM12.6953 9.71864L12.7805 9.6664L12.739 9.59865L12.6637 9.62376L12.6953 9.71864ZM13.9431 11.7555L14.0284 11.7033L13.9431 11.7555ZM15.2222 10.9719L15.3075 10.9197L15.2222 10.9719ZM14.0834 9.11317L14.0354 9.02547L13.9433 9.0759L13.9982 9.16541L14.0834 9.11317ZM15.3499 8.26185L15.2868 8.18424L15.2868 8.18424L15.3499 8.26185ZM15.3681 8.24701L15.4381 8.17556L15.3743 8.11312L15.3051 8.1694L15.3681 8.24701ZM16.3494 9.20805L16.4194 9.1366L16.3494 9.20805ZM17.399 8.13638L17.329 8.20783L17.399 8.13638ZM16.5398 7.29499L16.4768 7.21738L16.3898 7.28803L16.4699 7.36643L16.5398 7.29499ZM16.8979 6.04241C17.1287 6.31482 17.0907 6.71857 16.8118 6.94518L16.9379 7.1004C17.3032 6.8036 17.3542 6.27162 17.0505 5.91313L16.8979 6.04241ZM15.9702 5.95808C16.2503 5.73047 16.6661 5.76876 16.8979 6.04241L17.0505 5.91314C16.7479 5.55589 16.2082 5.50705 15.8441 5.80286L15.9702 5.95808ZM14.4452 7.19713L15.9702 5.95808L15.8441 5.80286L14.3191 7.04191L14.4452 7.19713ZM5.5811 7.21539C8.14576 9.29609 11.8686 9.29069 14.4452 7.19713L14.3191 7.04191C11.8155 9.07613 8.19788 9.08083 5.70711 7.06008L5.5811 7.21539ZM4.07099 5.99024L5.5811 7.21539L5.70711 7.06008L4.197 5.83493L4.07099 5.99024ZM3.14337 6.07524C3.37497 5.80143 3.79069 5.76284 4.07099 5.99024L4.197 5.83493C3.83271 5.53939 3.29303 5.58861 2.99067 5.94608L3.14337 6.07524ZM3.23016 6.97795C2.95109 6.75154 2.91281 6.34781 3.14337 6.07524L2.99067 5.94608C2.68725 6.30478 2.73865 6.83673 3.10415 7.13326L3.23016 6.97795ZM3.52366 7.21606L3.23016 6.97795L3.10415 7.13326L3.39765 7.37138L3.52366 7.21606ZM2.6702 8.20783L3.53062 7.36516L3.39069 7.22228L2.53026 8.06494L2.6702 8.20783ZM2.66061 9.12701C2.40943 8.87054 2.41373 8.459 2.6702 8.20783L2.53026 8.06494C2.19487 8.3934 2.18926 8.93156 2.51772 9.26695L2.66061 9.12701ZM3.5798 9.1366C3.32333 9.38778 2.91179 9.38349 2.66061 9.12701L2.51772 9.26695C2.84619 9.60234 3.38435 9.60796 3.71974 9.27949L3.5798 9.1366ZM4.56319 8.17352L3.5798 9.1366L3.71974 9.27949L4.70312 8.31641L4.56319 8.17352ZM4.74027 8.2031L4.69616 8.16731L4.57015 8.32262L4.61427 8.35841L4.74027 8.2031ZM6.30702 9.20466C5.75692 8.93496 5.23089 8.60113 4.74027 8.2031L4.61427 8.35841C5.11674 8.76607 5.65553 9.108 6.21898 9.38424L6.30702 9.20466ZM5.32058 11.0241L6.34827 9.34669L6.17773 9.24221L5.15004 10.9197L5.32058 11.0241ZM5.53528 11.918C5.22917 11.7304 5.13305 11.3302 5.32058 11.0241L5.15004 10.9197C4.90481 11.32 5.0305 11.8433 5.43079 12.0885L5.53528 11.918ZM6.42909 11.7033C6.24156 12.0094 5.84138 12.1055 5.53528 11.918L5.43079 12.0885C5.83109 12.3337 6.35439 12.208 6.59963 11.8077L6.42909 11.7033ZM7.60338 9.78652L6.42909 11.7033L6.59963 11.8077L7.77392 9.891L7.60338 9.78652ZM9.2583 10.0238C8.73796 9.97833 8.22128 9.88457 7.71571 9.74249L7.6616 9.93503C8.17927 10.0805 8.70824 10.1765 9.2409 10.223L9.2583 10.0238ZM9.3496 12.7104V10.1234H9.1496V12.7104H9.3496ZM9.9996 13.3604C9.64061 13.3604 9.3496 13.0694 9.3496 12.7104H9.1496C9.1496 13.1799 9.53016 13.5604 9.9996 13.5604V13.3604ZM10.6496 12.7104C10.6496 13.0694 10.3586 13.3604 9.9996 13.3604V13.5604C10.469 13.5604 10.8496 13.1799 10.8496 12.7104H10.6496ZM10.6496 10.1226V12.7104H10.8496V10.1226H10.6496ZM12.6637 9.62376C12.0378 9.8323 11.392 9.9654 10.7408 10.023L10.7584 10.2222C11.425 10.1633 12.0861 10.027 12.7269 9.81351L12.6637 9.62376ZM14.0284 11.7033L12.7805 9.6664L12.61 9.77088L13.8579 11.8077L14.0284 11.7033ZM14.9222 11.918C14.6161 12.1055 14.216 12.0094 14.0284 11.7033L13.8579 11.8077C14.1031 12.208 14.6264 12.3337 15.0267 12.0885L14.9222 11.918ZM15.1369 11.0241C15.3245 11.3302 15.2283 11.7304 14.9222 11.918L15.0267 12.0885C15.427 11.8433 15.5527 11.32 15.3075 10.9197L15.1369 11.0241ZM13.9982 9.16541L15.1369 11.0241L15.3075 10.9197L14.1687 9.06093L13.9982 9.16541ZM15.2868 8.18424C14.8906 8.50616 14.4715 8.78657 14.0354 9.02547L14.1315 9.20087C14.5781 8.95623 15.0072 8.66908 15.4129 8.33946L15.2868 8.18424ZM15.3051 8.1694L15.2868 8.18424L15.4129 8.33946L15.4312 8.32462L15.3051 8.1694ZM15.2982 8.31845L16.2795 9.27949L16.4194 9.1366L15.4381 8.17556L15.2982 8.31845ZM16.2795 9.27949C16.6149 9.60796 17.153 9.60234 17.4815 9.26695L17.3386 9.12701C17.0874 9.38349 16.6759 9.38778 16.4194 9.1366L16.2795 9.27949ZM17.4815 9.26695C17.8099 8.93156 17.8043 8.3934 17.4689 8.06494L17.329 8.20783C17.5855 8.45901 17.5898 8.87054 17.3386 9.12701L17.4815 9.26695ZM17.4689 8.06494L16.6098 7.22354L16.4699 7.36643L17.329 8.20783L17.4689 8.06494ZM16.8118 6.94518L16.4768 7.21738L16.6029 7.3726L16.9379 7.1004L16.8118 6.94518Z" fill="#9A9A9A"/>
                </svg>
              </div>

              <span @click="$router.push('/auth?tab=forgotPassWord')" class="text-sm text-white text-left flex flex-row items-center justify-center cursor-pointer mt-1">Forgot password?</span>

            </div> -->


            <!-- <div class="w-full flex flex-col items-start "> -->
              <button :disabled="!isValidForm || showLoader" @click.prevent="" :class="{ 'bg-gray-400': isValidForm }" class="w-full bg-[#555a5c] hover:bg-gray-500 flex flex-row items-center justify-center rounded-3xl py-2">
                <ProgressSpinner v-if="showLoader" class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
                  animationDuration=".5s" aria-label="Custom ProgressSpinner" 
                />
                <span v-else class="text-[14px] text-black hover:text-gray-200 text-center">Send Code</span>
              </button>
              
            <!-- </div> -->
            <span  class="text-sm text-[#555a5c] text-left flex flex-row items-center justify-center cursor-pointer mt-1">go back? <span @click="$router.push('/auth?tab=signUp')" class="text-white hover:text-[#555a5c] ml-1">Cancel</span></span>
            
          </div>



          <div v-else class="w-full flex flex-col items-start justify-start space-y-4">
            <span class="text-sm text-[#555a5c] text-left ">Enter new password</span>

            <div class="w-full flex flex-col items-start justify-start">
              <input
                type="text"
                v-model="password"
                class="w-full border-[#555a5c] border text-gray-400 text-[13px] py-2 px-4 bg-[#12171d] rounded-3xl"
                placeholder="Enter password"
              />
            </div>

            <button :disabled="password ==''|| showLoader" @click.prevent="" :class="{ 'bg-gray-400': password !=='' }" class="w-full bg-[#555a5c] flex flex-row items-center justify-center rounded-3xl py-2">
              <ProgressSpinner v-if="showLoader" class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" 
              />
              <span v-else class="text-[14px] text-black hover:text-gray-200 text-center">Submit</span>
            </button>

            <span  class="text-sm text-[#555a5c] text-left flex flex-row items-center justify-center cursor-pointer mt-1">go back? <span @click="$router.push('/auth?tab=login')" class="text-white hover:text-[#555a5c] ml-1">Cancel</span></span>

          </div>

        </div>

      </div>

      <BaseToast :model="toast.show" :success="toast.success" :title="toast.title" :description="toast.description" @close="toast.show = false"/>

  </template>
  <script setup lang="ts">
  // const pinValue = ref<string[]>([])

  // const handleComplete = (e: string[]) => alert(e.join(''))

  const showLoader = ref(false)
  // const {AccountRecovery,ResetPassword} = useRequests()
  // const {queryUser} = useFireBase()
  // const visible = ref(false)
  

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

  const route = useRoute()
  const router = useRouter()


  // const inputs = reactive({
  //   email:'',
  //   password:''
  // })
  const password = ref('')
  const email = ref('')

  const emit = defineEmits(['openSignup','openLogin'])  // Declare Events

  // const props = defineProps<{
  //   showLogin: boolean
  // }>()

  const isValidEmail=(email:string)=> {
      // Regular expression for email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  }

 const isValidForm = computed(() =>{return isValidEmail(email.value)})

 const tab = ref(route.query.recovery || '');

  // const visible = ref(false)


  watch(tab, async (newtab, oldtab) => {
    router.push({
          path: '/auth',
          query: { tab: newtab },
    })
  })


  // async function recoverAccount() {
  //       showLoader.value = true
  //         // Signed in 
  //         const response = await AccountRecovery(email.value);
  //         if (response){
  //           showLoader.value = false
  //           initToast(true,'Successful','Recovery Email has been sent')
  //           email.value = '';
  //           password.value = '';
  //         }else{
  //           initToast(true,'Failed','Account does not exist')

  //         }
          

  //         // route.push('/')
  //         // ...
  // }

  // async function Reset() {
  //       showLoader.value = true
  //         // Signed in 
  //         const response = await ResetPassword(password.value,tab.value);
  //         if (response){
  //           showLoader.value = false
  //           initToast(true,'Password Updated','Password to your account changed ')
  //           email.value = '';
  //           password.value = '';
  //         }else{
  //           initToast(true,'Failed','Operation was not successful')

  //         }
          

  //         // route.push('/')
  //         // ...
  // }




  


  </script>
  <style>
  * {
  font-family: 'cabinetGrotesk', sans-serif;
 }

 .extraboldCabinet{
  font-family: 'cabinetGroteskBold', sans-serif;
 }

 .blackCabinet{
  font-family: 'cabinetGroteskBlack', sans-serif;
 }
  </style>