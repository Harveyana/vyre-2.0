<template>
    <Dialog
    v-model:visible="props.visible"
    modal
    :pt="{
        mask: {
            style: 'backdrop-filter: blur(10px)'
        }
    }"
    >
            <div class=" w-full " style="border-radius: 12px;">
              
              <div class="w-full rounded-2xl">


                <div class="formbackground bg-[#1D3160] gap-3 w-[16rem] sm:w-[25rem] flex flex-col items-center justify-center rounded-3xl">

                    <h1 class=" py-3 w-full text-2xl sm:text-3xl text-center font-bold text-white">
                      Join Waitlist
                    </h1>

                    <div class=" w-3/4 inline-flex flex-col gap-2">
                        <label for="Name" class="text-white text-sm font-semibold">Full Name</label>
                        <InputText id="Name" :="fullName" class="bg-white-alpha-20 rounded-xl border-none p-2 sm:p-2.5 text-primary-50"></InputText>
                    </div>
                    <div class=" w-3/4 inline-flex flex-col gap-2">
                        <label for="email" class="text-white text-sm font-semibold">Email</label>
                        <InputText id="email" :="email" class="bg-white-alpha-20 rounded-xl border-none p-2 sm:p-2.5 text-[#1D3160]" type="email"></InputText>
                    </div>
                    <div class=" w-3/4 inline-flex flex-col gap-2">
                        <label for="Country" class="text-white text-sm font-semibold">Country</label>
                        <InputText id="Country" :="country" class="bg-white-alpha-20 rounded-xl border-none p-2 sm:p-2.5 text-[#1D3160]"></InputText>
                    </div>
                    <div class=" w-3/4 flex align-items-center py-3 gap-2">
                        <Button label="Join" @click="onSubmit(),showLoader = true" text class="p-2 rounded-xl w-full bg-[#20DA97] border-black"></Button>
                        <Button label="Cancel" @click="$emit('cancel')" text class="p-2 rounded-xl w-full text-white border-1 border-[#20DA97]"></Button>
                    </div>
    
                    <ProgressSpinner v-if="showLoader" class="-mt-8" style="width: 100px; height: 100px" strokeWidth="8" fill="#ffff"
                      animationDuration=".5s" aria-label="Custom ProgressSpinner" 
                    />

                </div>

                

              </div>
             
            </div>

            <Toast group="success" severity='success' :pt="{
                  container: {
                      style: 'background: #7fdbb4; margin: 10px; padding:5px; color: white'
                  }
            }"/>

            <Toast group="fail" severity='error' :pt="{
                  container: {
                      style: 'background: #CA3433; margin: 10px; padding:5px; color: white'
                  }
            }"/>

    </Dialog>
    
  </template>


  <script setup lang="ts">
   import { useForm } from 'vee-validate';
   import { toTypedSchema } from '@vee-validate/yup';
   import * as yup from 'yup';
   import { useToast } from "primevue/usetoast";


   const toast = useToast();
   const {addUser,nover} = useFireBase()
   const {objectToArray} = useConverters()

   const showLoader = ref(false)
  
    const props = defineProps<{
      visible: boolean
      bar?: number
    }>()


    const { errors,handleSubmit, defineInputBinds,values,resetForm } = useForm({
      validationSchema: toTypedSchema(
        yup.object({
          fullName: yup.string().required(),
          email: yup.string().email().required(),
          country: yup.string().required(),
        })
      ),
    });

    const fullName = defineInputBinds('fullName');
    const email = defineInputBinds('email');
    const country = defineInputBinds('country');


    async function onSuccess() {
      if(values.fullName && values.email && values.country){
        const response = await addUser(values.fullName,values.email,values.country)

        if (response){
          showLoader.value = false
          toast.add({ severity: 'success', summary: 'Operation Successful', detail: 'Email added to Waitlist', life: 3000, group:'success' });
          resetForm()
        }
      }

    }

    function onInvalidSubmit() {
      const errorArray = objectToArray(errors.value)
      showLoader.value = false
      errorArray.forEach((error)=>{
        toast.add({ severity: 'error', summary: error.key, detail: error.value, life: 3000, group:'fail' });
      })
      resetForm()
    }

    const onSubmit = handleSubmit(onSuccess, onInvalidSubmit);

  </script>
  <style scoped>
  .formbackground{
    background: url('~/assets/img/logo/vyreLogo.png'),#1D3160;
    background-size: auto;
    background-position-x: -390%;
    background-position-y: 590%;
    background-repeat: no-repeat;
    
  }
 </style>











<div class="w-full h-full flex flex-col item-start justify-start">

  <div class="w-full py-3 flex items-center justify-between">

    <h1 class="Grotesque-Bold text-xl text-[#010109]">
      Hello Anayo
    </h1>
    
  </div>

  <!-- verification bar -->

  <div class="w-full bg-bar flex flex-col items-start px-6 py-7 gap-y-1 rounded-lg mb-5">

    <h1 class="Grotesque-Semi-Bold gap-x-4 text-[18px] sm:text-[17px] text-white">
      Currently Verifying your account
    </h1>

    <div class="w-full flex flex-col sm:flex-row items-start justify-between gap-y-4">
      <h4 class="Grotesque-Light text-xs sm:text-[12px] text-white">
        We are currently verifying your account, and this should take 2-3 business working days.
      </h4>

      <h4 class="w-full sm:w-fit Grotesque-Light text-xs sm:text-[12px] text-white mr-20">
        If it takes longer  <span class="text-[#367bad] Grotesque-Semi-Bold cursor-pointer">Contact Support</span>
      </h4>
    </div>

  </div>

  <!-- Top bar ends here -->

  <div class="w-full flex flex-col lg:flex-row items-center justify-start gap-y-3 gap-x-2 border border-black">
    <!-- balance -->

    <div class="w-full h-full lg:w-[60%]">

        <h2 class="text-black text-xl Grotesque-Regular mb-2">
          Portfolio
        </h2>

        <div data-aos="fade-down" data-aos-once="true" class="w-full h-fit border bg-[#e5f2fe] rounded-2xl">
          
          <h2 class="text-black text-2xl Grotesque-Bold ml-6 sm:ml-8 mt-6 sm:mt-8">
              $ 17 643.41
              <p class="text-black poppinsRegular text-xs">Portfolio balance</p>
          </h2>

          <!-- <ClientOnly fallback="Loading Chart..."> -->
            <LineChart />
          <!-- </ClientOnly> -->

        </div>

    </div>

    <div class=" h-full">

        <h2 class="text-black text-xl poppinsSemiBold mb-2">
          Your Assets
        </h2>

        <div class="w-full h-full flex flex-row items-center justify-center no-scrollbar overflow-x-scroll ">
          <div class="w-full h-full flex">
            <CurrencyCard :balances="balances"/>
          </div>
          
        </div>
    </div>
  </div>
  

  <div class="w-full h-fit">
        <div class="w-full flex flex-row items-center justify-between">
          <h2 class="text-black text-xl poppinsSemiBold mb-2">
           Recents
          </h2>
          <img src="~/assets/img/right-arrow.png" class="w-10 md:w-12 rounded-2xl hover:bg-gray-500 px-2" alt='transactions'/>
        </div>
        
        <div class="overflow-y-scroll scroll-smooth max-h-[10rem] lg:max-h-[15rem] flex flex-col items-center justify-start rounded-2xl col-span-12 py-2 mb-2 md:mb-5 space-y-4">
          <Recent :recents="transactions"/>
        </div>
  </div>
        
      
</div>