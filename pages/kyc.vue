<template>
  <div class="w-full h-full flex flex-col items-center justify-start">
     
      <div class="w-full sm:w-[50%] h-full flex items-start justify-start">

        <button @click="$router.back()" class="rounded-xl px-3 py-2 flex items-center justify-center gap-1 text-[12px] sm:text-[15px] text-black Grotesque-Regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000" d="m4.836 12l6.207 6.207l1.414-1.414L7.664 12l4.793-4.793l-1.414-1.414zm5.65 0l6.207 6.207l1.414-1.414L13.314 12l4.793-4.793l-1.414-1.414z"/></svg>
          Back
        </button>
        
      </div>


     
    <div class="w-full sm:w-[50%] h-full flex flex-col items-center justify-center"> 


      <div class="w-full h-[80vh] flex flex-col overflow-y-auto items-center justify-start gap-3 rounded-lg overflow-y-auto sm:pt-2">
        
        <StartModal v-if="tab ==='START'" @start="tab ='PROCESS'" />
          
        <KycProcess v-if="tab ==='PROCESS'" @close="tab = 'END'"/>

        <EndModal v-if="tab ==='END'" />

      </div>

    </div>

  </div>
 
    
</template>

<script setup lang="ts">

  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useOrderStore } from '~/store/order';
  import { useAuthStore } from '~/store/auth';
  const { user } = storeToRefs(useAuthStore());
  const { getProfile } = useAuthStore();

  const { loading } = storeToRefs(useOrderStore());

  definePageMeta({
    layout: 'kyclayout'
  })

  const tab = ref('START');
  const emit = defineEmits(['close'])



  // const { data, pending } = await useAsyncData( 'user', async () => {
  //   console.log('previous user',user.value)
  //   // const userData = await getProfile()
  //   // console.log(userData)

  //   // console.log('user', userData.userStatus)

  //   // if(userData.user?.userStatus ==='PENDING'){
  //   //   tab.value = 'END'
  //   // }else{
  //   //   tab.value = 'START'
  //   // }
    
  //   // return userData
  // });

  // if(!data.value.success){
  //   console.log('user not found')
  // }

    // const {currency, balance, type} = props

   
   
  //  const Tab = ref()

   const showList = ref(false)


    

  



  // onMounted(()=>{

  //   console.log('previous user',user.value)

  //   if(user.value?.userStatus !=='CREATED'){
  //     tab.value = 'END'
  //   }else{
  //     tab.value = 'START'
  //   }

  // })




</script>