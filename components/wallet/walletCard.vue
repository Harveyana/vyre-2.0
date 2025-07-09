<template>
    <NuxtLink :href="`/wallets/${wallet.id}`" :style="{ backgroundColor: getRandomColor() }" class="relative hover:bg-[#d9d5d5] border-2 hover:border-black cursor-pointer w-full sm:w-[22%] flex-none p-3 sm:p-4 flex flex-col items-start justify-between rounded-2xl " >

      <!-- <img :src=wallet.imgurl class="absolute w-16 sm:w-12 rounded-full mb-4 "/> -->
      <div class="absolute bg-white rounded-full flex items-center justify-center">
        <div v-if="wallet.currency.type ==='CRYPTO'" class="flex items-end justify-center">
          <img class="w-12 rounded-full" :src="wallet.currency?.imgUrl" alt="avatar">
          <img class="w-[20px] bg-black rounded-full -ml-4" :src="wallet.currency?.chainImgUrl" alt="avatar">
        </div>
        <h3 v-else class="text-white text-[45px] leading-none p-1 ">{{ wallet.currency?.flagEmoji }}</h3>
      </div>

      <baseChart />

      <div class="flex flex-col items-start justify-center">
        <div class="flex gap-1">
          <span class="text-black text-[18px] Grotesque-Bold">{{wallet.currency.ISO}}</span>
          <span v-if="wallet.currency.isStablecoin" class="text-black text-[11px] Grotesque-Regular">({{wallet.currency.chain}})</span>
        </div>
        
        <span class="text-lg truncate Grotesque-Regular">
          {{ parseFloat(wallet.accountBalance).toFixed(wallet.currency.type ==='CRYPTO'? 3: 2) }}
        </span>
      </div>

      
      
    </NuxtLink>

      
</template>

<script setup lang="ts">
  import { useAuthStore } from '~/store/auth';
  const { logUserOut } = useAuthStore();
  const token = useCookie('token');
  const route = useRoute()
  const router = useRouter()

  type currency = {
    type: string;
    name: string;
    ISO: string;
    chain?: string;
    imgUrl?: string;
    chainImgUrl?: string;
    flagEmoji?: string;
    isStablecoin: boolean;
    createdAt: string
  }

 type wallet = {
    currency:currency,
    id:string,
    createdAt:string,
    imgurl:string
    accountBalance:string
    availableBalance:string
 }

  

  const props = defineProps<{
    wallet: wallet
  }>()

  const {wallet} = props

// const { data, pending, error }: any = await useFetch('/fetchWallet', {
//       method: 'post',
//       body: {
//         idToken: token.value,
//         walletId: props.wallet.walletId
//       }
// });

//     if(data.value){
//       console.log(data.value)
//     }

//     if(error.value){
//       console.log(error.value)
//       logUserOut()
//       // console.log(error.value);
//       router.push('/auth')
//     }


const getRandomColor = () => {
      const colors = ['#E5DEF0', '#D6EDDA', '#F6F0D8']; // Add more colors as needed
      return colors[Math.floor(Math.random() * colors.length)];
}


</script>