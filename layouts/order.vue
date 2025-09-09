<template>
   <div class="min-h-screen h-[100dvh] bg-black max-w-screen-3xl w-full overflow-hidden flex flex-col items-center justify-center relative">

      <Toaster position="top-right" />

      <div v-if="loading" class="h-full flex flex-col items-center justify-center gap-3 text-center">
        <LottieLoader />
        <!-- <h3 class="Grotesque-Regular text-[28px] text-[#1A1A1A]">
          setting up account...
        </h3> -->
      </div>

      <div v-else class="relative w-full xl:w-[90%] 2xl:w-[60%] h-full flex items-start justify-start">
         
         <section class="relative w-[50%] bg-black border border-black h-full flex flex-col justify-start header px-6 pt-24">


            <div class="w-full flex items-start justify-start ">
            
               <div class="flex items-center justify-center gap-x-2">
                  <AvatarRoot class="inline-flex self-end h-30 min-w-30 w-30 select-none items-center justify-center overflow-hidden rounded-full align-middle">
                        <AvatarImage
                        class="h-full w-full rounded-[inherit] object-cover"
                        :src="order?.user?.photoUrl"
                        :alt="order?.user?.firstName"
                        />
                        <AvatarFallback
                        class="text-white leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                        :delay-ms="600"
                        >
                        {{order?.user?.firstName.charAt(0)}}{{order?.user?.lastName.charAt(0)}}
                        </AvatarFallback>
                  </AvatarRoot>
                  <div class="flex flex-col items-start justify-center">
                     <h3 class="Grotesque-Regular text-gray-300 text-[18px]">{{order?.user?.firstName}} {{order?.user?.lastName}} </h3>
                     <span v-if="order" class="Grotesque-Light text-white text-[10px]">{{timeAgo(order?.createdAt as string)}}</span>
                  </div>
               </div>

               <h1 class="bg-white absolute -right-1 top-[20%] Grotesque-Bold text-[25px] px-3 pb-2 py-3 rounded-l-full text-black ">
                {{order?.type}}
               </h1>

            </div>

            <div class="mt-24">

               <div class="flex flex-col items-start justify-center">
                  <span class="Grotesque-Light text-gray-500 text-[13px]">{{order?.pair?.name}}</span>
                  <h3 class="Grotesque-SemiBold text-gray-400 text-[35px]"> {{order?.price.toLocaleString('en-US')}} <span class="text-[14px] Grotesque-Regular">{{order?.pair?.quoteCurrency.ISO }}</span> </h3>
                  <h3 class="Grotesque-SemiBold text-gray-400 text-[35px]"> {{order?.amountProcessed}} <span class="text-[14px] Grotesque-Regular">/ {{order?.amount}}   {{ order?.type =='BUY'? order?.pair?.quoteCurrency.ISO : order?.pair?.baseCurrency?.ISO }}</span> </h3>
               </div>

               <div class=" border-[1px] border-gray-800 border-t mb-2"></div>

               <!-- <div class="mt-6 w-full hover:bg-white flex flex-col items-center bg-white justify-start gap-x-5 py-4 rounded-2xl px-4 cursor-pointer relative">
               
                  <div class="w-full flex items-center justify-center">
                     <div class="min-w-fit flex items-center justift-center gap-2 ">

                        <div class=" bg-white rounded-full z-10 flex items-center justify-center p-2">
                           <div v-if="order?.pair?.baseCurrency && order?.pair?.baseCurrency.type ==='CRYPTO'" class="flex items-end justify-center">
                             <img class="w-[50px] rounded-full" :src="order?.pair?.baseCurrency?.imgUrl" alt="avatar">
                           </div>
                           <h3 v-else class="text-white text-[30px] bg-white rounded-full  ">{{ order?.pair?.baseCurrency?.flagEmoji }}</h3>
                        </div>


                        <div class="absolute top-0 right-0 z-20 flex items-center justify-center self-end">
                           <div v-if="order?.pair?.quoteCurrency && order?.pair?.quoteCurrency.type ==='CRYPTO'" class="flex items-end justify-center">
                           <img class="w-[30px] rounded-full" :src="order?.pair?.quoteCurrency?.imgUrl" alt="avatar">
                           <img v-if="order?.pair?.quoteCurrency?.chainImgUrl" class="w-[20px] bg-black rounded-full -ml-5" :src="order?.pair?.quoteCurrency?.chainImgUrl" alt="avatar">
                           </div>

                           <h3 v-else class="text-white text-[20px] bg-white rounded-full ">{{ order?.pair?.quoteCurrency?.flagEmoji }}</h3>
                        </div>

                     </div>
                  </div>

                  <div class="w-full flex items-center justify-center">

                     <img v-if="order?.pair?.baseCurrency?.isStablecoin" class="w-[20px] bg-black rounded-full " :src="order?.pair?.baseCurrency?.chainImgUrl" alt="avatar">
                     
                  </div>


               </div> -->

               <div class="w-full flex items-center justify-between p-3.5 border border-gray-800 rounded-2xl">

                  <div class="w-fit flex items-center justify-center gap-x-1">
                     <div>
                        <div v-if="order?.type =='BUY'">
                           <img v-if="order?.pair?.quoteCurrency.type ==='CRYPTO'" :src="order?.pair?.quoteCurrency.imgUrl" class="w-10 rounded-full"/>
                           <h3 v-else class="text-[20px] ">{{ order?.pair?.quoteCurrency?.flagEmoji }}</h3>
                        </div>

                        <div v-else>
                           <img v-if="order?.pair?.baseCurrency.type ==='CRYPTO'" :src="order?.pair?.baseCurrency.imgUrl" class="w-10 rounded-full"/>
                           <h3 v-else class="text-[60px] ">{{ order?.pair?.baseCurrency?.flagEmoji }}</h3>
                        </div>
                     </div>
                     <div class="flex flex-col items-center jsutify-center">
                        <h2 class="text-[12px] text-white">
                           From
                        </h2>
                        <h2 class="Grotesque-Regular text-[13px] text-gray-400">
                           {{order?.type =='BUY'? order?.pair?.quoteCurrency?.ISO : order?.pair?.baseCurrency?.ISO}}
                        </h2>
                     </div>

                  </div>

                  <svg class=" border rounded-full" xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="black" d="M12.984 15a1 1 0 0 0 1.848.53l2.688-2.687a1 1 0 0 0-1.415-1.414l-1.12 1.12V5a1 1 0 0 0-2 0zm-1.969-6a1 1 0 0 0-1.848-.53L6.48 11.157a1 1 0 1 0 1.414 1.414l1.121-1.12V19a1 1 0 1 0 2 0z"/></svg>

                  <div class="w-fit flex items-center justify-center gap-x-1">

                     <div>
                        <div v-if="order?.type =='BUY'">
                           <img v-if="order?.pair?.baseCurrency.type ==='CRYPTO'" :src="order?.pair?.baseCurrency?.imgUrl" class="w-10 rounded-full"/>
                           <h3 v-else class="text-[20px] ">{{ order?.pair?.baseCurrency?.flagEmoji }}</h3>
                        </div>

                        <div v-else>
                           <img v-if="order?.pair?.quoteCurrency.type ==='CRYPTO'" :src="order?.pair?.quoteCurrency.imgUrl" class="w-10 rounded-full"/>
                           <h3 v-else class="text-[60px]">{{ order?.pair?.quoteCurrency?.flagEmoji }}</h3>
                        </div>
                     </div>
                          
                     <div class="flex flex-col items-center jsutify-center">
                           <h2 class="text-[12px] text-white">
                              To
                           </h2>
                           <h2 class="Grotesque-Regular text-[13px] text-gray-400">
                              {{order?.type =='BUY'? order?.pair?.baseCurrency ?.ISO : order?.pair?.quoteCurrency?.ISO}}
                           </h2>
                     </div>
                  </div>

               </div>

            </div>
            



          <footer class="mt-auto py-2">
            <span class="Grotesque-Light text-gray-500 text-[13px] ">Powered by Vyre Africa</span>
          </footer>
         </section>

         <section class="w-full h-full bg-white lg:w-[50%] relative flex flex-col items-center justify-center px-6">
            <Transition name="page" mode="out-in">
              <slot />
            </Transition>
         </section>
      
      </div>


   </div>

</template>

<script setup lang="ts">
   import { useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import { formatDistanceToNow } from 'date-fns';
  import { storeToRefs } from 'pinia';
  import { useOrderStore } from '~/store/order';
  import { useWalletStore } from '~/store/wallet';
  const { getWalletbyName } = useWalletStore()
  const { getOrder, processOrder} = useOrderStore();

  const { loading, order } = storeToRefs(useOrderStore()); // make authenticated state reactive with storeToRefs

//   const order = ref<Order>()
  const wallet = ref<any>()
  const route = useRoute()

  function timeAgo(timestampString:string) {
    const timestamp = new Date(timestampString);
    return formatDistanceToNow(timestamp, { addSuffix: true });
  }



  const fetchOrder = async()=>{
    const result = await getOrder(route.params.id as string)
    
      console.log(result)
      if(result?.success){
        console.log(result?.value)
        order.value = result?.order
      }
  }

  onMounted(async()=>{
    await fetchOrder()
    // await fetchWallet()
  })


   
</script>

<style scoped>

   .bg-doodle {
    background: url("~/assets/img/doodle4.png");
    /* background-color: #fff; */
    background-repeat: no-repeat;
    /* background-size: auto; */
    background-size: cover;
    /* background-position: right center; */
   }


</style>

