<template>
    <NuxtLink :href="`/wallets/${data.walletId}`" :style="{ backgroundColor: getRandomColor() }" class="hover:bg-[#d9d5d5] border-2 hover:border-black cursor-pointer w-full sm:w-[45%] flex-none mx-2 p-3 sm:p-4 flex flex-col items-start justify-between rounded-2xl " >

      <img :src=props.wallet.imgUrl class="absolute w-16 sm:w-12 rounded-full mb-4 border-8 border-white"/>

      <baseChart />

      <div class="flex flex-col items-start justify-center">
        <span class="text-black poppinsBold text-2xl sm:text-2xl">
            <span class="truncate">{{data.balance.accountBalance}}</span> <span class="text-sm">{{props.wallet.ISO}}</span>
        </span>
        <span class="text-sm truncate poppinsRegular">
          ₦ 1203
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

 type wallet = {
    name:string,
    walletId:string,
    ISO:string,
    type:string,
    imgUrl:string
 }

type card = {
  name:string;
  imgurl:URL;
  symbol:string;
  amount:number
}

const props = defineProps<{
    wallet: wallet
}>()

const { data, pending, error }: any = await useFetch('/fetchWallet', {
      method: 'post',
      body: {
        idToken: token.value,
        walletId: props.wallet.walletId
      }
});

    if(data.value){
      console.log(data.value)
    }

    if(error.value){
      console.log(error.value)
      logUserOut()
      // console.log(error.value);
      router.push('/auth')
    }


const getRandomColor = () => {
      const colors = ['#E5DEF0', '#D6EDDA', '#F6F0D8']; // Add more colors as needed
      return colors[Math.floor(Math.random() * colors.length)];
}


</script>