<template>
  <!-- <div class="w-full"> -->
    <!-- <div class=" w-full" style="border-radius: 12px;"> -->

     

    <div  class="col-span-12 rounded-2xl mt-12 px-8  flex flex-col items-center justify-center pt-12">


        


        

        
  
    
  </div>
</template>
<script setup lang="ts">

// import { useAuthStore } from '~/store/auth';
// const { logUserOut } = useAuthStore();
// const token = useCookie('token');
// const route = useRoute()
// const router = useRouter()

// const progress = reactive({
//     emailVerified:false,
//     identityVerified:false
//    })

// definePageMeta({
//   layout: 'action'
// });

    type person = {
    email: string;
    name: string;
    imgurl:URL;
    }

  //   const { data, pending, error }: any = await useFetch('/fetchStatus', {
  //     method: 'post',
  //     body: {
  //       idToken: token.value
  //     }
  //   });

  //   if(data.value){
  //     console.log(data.value)
  //     progress.emailVerified = data.value.emailVerified
  //     progress.identityVerified = data.value.iDverified

  //   }

  //   if(error.value){
  //     logUserOut()
  //     // console.log(error.value);
  //     router.push('/auth')
  //   }
  

  //  const showLoader = ref(false)
 
  //  const operation = ref('id');
  //  const tab = computed(() => route.query.tab? route.query.tab : '')
  // //  const isMode = ref(false)

  //  const init = (value:string)=>{
  //     operation.value = value
  //  }

  //  const switchMethod =(value:string)=>{
  //   IdMethod.value = value
  //  }

   

  //  const emailVerify = ()=>{
  //    progress.emailVerified = true
  //    router.push('/kyc')
  //  }

  //  const idVerify = ()=>{
  //    progress.identityVerified = true
  //    router.push('/kyc')
  //  }

  //  const finalise =()=>{
  //   if(!progress.emailVerified)tab.value = 'email'
  //   if(!progress.identityVerified)tab.value = 'id'
  //    router.push('/kyc?tab=pin')
  //  }

  
  //  const showList = ref(false)


</script>

<style scoped>

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield; /* Firefox */
}

</style>