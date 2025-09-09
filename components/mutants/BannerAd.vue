<template>

  <div class="w-full h-fit">

    <ClientOnly fallback="Loading Banner...">

    <Carousel v-bind="config" class="rounded-2xl">
      <!-- Slide 1 -->
      <Slide class=" cursor-pointer h-fit sm:min-w-[160px] sm:p-2 flex items-center justify-start rounded-2xl gap-x-2" >

        <div class="w-full flex flex-col justify-center gap-y-3">

              <div class="flex flex-col items-start justify-start gap-2">

                <div class="w-full flex items-start justify-start gap-2">
                  <div class="flex items-end justify-center">
                    <img class="w-[40px] sm:w-[50px] bg-black rounded-full " src="https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png" alt="avatar">
                  </div>

                  <div class="flex items-end justify-center">
                    <img class="w-[40px] sm:w-[50px] bg-black rounded-full " src="https://assets.coingecko.com/coins/images/325/large/Tether.png" alt="avatar">
                  </div>

                </div>

                <div class="w-full flex items-start justify-start gap-2">
                  <div v-for="chain in chains" :key="chain.id" class="flex items-end justify-center border border-gray-300 rounded-full">
                    <img class="w-[25px] bg-black rounded-full " :src="chain?.chainIcon" alt="avatar">
                  </div>
                </div>

              </div>
                
                

                <div class="w-full flex flex-col items-start justify-start gap-y-3">
                  <h2 class="text-black text-xl Grotesque-Bold text-white">
                    Your Stablecoin more powerful <span class="Grotesque-Bold">with Vyre!</span>
                  </h2>
                  <p class="text-black Grotesque-Regular text-[13px] text-white">Freedom with your stablecoins<br> on multiple chains!</p>

                  <!-- <BaseButton class="Grotesque-SemiBold bg-[#e5f2fe] w-fit px-6 py-2 rounded-2xl">
                    Earn now
                  </BaseButton> -->
                </div>
                
        </div>

      </Slide>

      <!-- slide 2 -->
      <Slide class=" cursor-pointer h-fit sm:min-w-[160px] sm:p-2 flex items-center justify-start rounded-2xl gap-x-2" >

        <div class="w-full flex flex-col justify-center gap-y-3">

                <div class="w-full flex items-start justify-start gap-3">
                  <div v-for="currency in fiatCurrencies" :key="currency.id" class="w-fit flex flex-wrap items-start justify-start">
                    <h3 class="w-fit text-white text-[18px] sm:text-[50px]">{{ currency?.emoji }}</h3>
                  </div>
                </div>
                
              
                <div class="w-full flex flex-col items-start justify-start gap-y-3">

                  <h2 class="text-black text-xl Grotesque-Bold text-white">
                    CrossBorder Made Easy <span class="Grotesque-Bold">with Vyre!</span>
                  </h2>
                  <p class="text-black Grotesque-Regular text-[13px] text-white">We make your payments go far and wide <br> with stablecoins!</p>

                  <!-- <BaseButton class="Grotesque-SemiBold bg-[#e5f2fe] w-fit px-6 py-2 rounded-2xl">
                    Earn now
                  </BaseButton> -->
                </div>
                
        </div>

      </Slide>

    </Carousel>

    </ClientOnly>




  </div>
      
</template>

<script setup lang="ts">


type card = {
  name:string;
  imgurl:URL;
  symbol:string;
  amount:number
}

const getRandomColor = () => {
      const colors = ['#E5DEF0', '#D6EDDA', '#F6F0D8','#e5f2fe']; // Add more colors as needed
      return colors[Math.floor(Math.random() * colors.length)];
}

const breakpoints = useBreakpoints({
  mobile: 640,
  desktop: 760
})

const itemsToShow = computed(() => {
  return breakpoints.smaller('mobile').value ? 2 : 3
})

const config = {
  // height: 190,
  itemsToShow: 1,
  gap: 25,
  autoplay: 3000,
  wrapAround: true,
  pauseAutoplayOnHover: false,
};



const currencies = [
    // FIAT Currencies
    {
      id:'8cb57b9f-0633-4cc6-b2e8-9e4308be5f5a',
      label: 'Egyptian Pound',
      value: 'EGP',
      chain: '',
      type: 'FIAT',
      emoji: '🇪🇬', // Egypt flag
    },
    { 
      id:'735284e1-72cb-4a07-85de-4e0ec03d0fb7',
      label: 'Ghanaian Cedi',
      value: 'GHS',
      chain: '',
      type: 'FIAT',
      emoji: '🇬🇭', // Ghana flag
    },
    {
      id:'d2054ab8-930d-40b9-b511-0d451535e9b2',
      label: 'Kenyan Shilling',
      value: 'KES',
      chain: '',
      type: 'FIAT',
      emoji: '🇰🇪', // Kenya flag
    },
    {
      id:'7d0b958f-b72a-4f0c-ab48-fd135a338afc',
      label: 'Nigerian Naira',
      value: 'NGN',
      chain: '',
      type: 'FIAT',
      emoji: '🇳🇬', // Nigeria flag
    },
    {
      id:'db490ed9-62ba-462f-bbfa-065caefcb300',
      label: 'Tanzanian Shilling',
      value: 'TZS',
      chain: '',
      type: 'FIAT',
      emoji: '🇹🇿', // Tanzania flag
    },
    {
      id:'e280958f-af50-440a-b576-a4941265e400',
      label: 'South African Rand',
      value: 'ZAR',
      chain: '',
      type: 'FIAT',
      emoji: '🇿🇦', // South Africa flag
    },
    
    // Asia
    // {
    //   id:'2560c1e5-8139-4c8a-9a0f-52cd42436ae8',
    //   label: 'Bangladeshi Taka',
    //   value: 'BDT',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇧🇩'
    // },
    {
      id:'659052db-d85f-4d1c-a7bf-339ebc8a733c',
      label: 'Chinese Yuan',
      value: 'CNY',
      chain: '',
      type: 'FIAT',
      emoji: '🇨🇳'
    },
    // {
    //   id:'efa06c1a-852d-49d8-af6b-993ff8d4934d',
    //   label: 'Hong Kong Dollar',
    //   value: 'HKD',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇭🇰'
    // },
    // {
    //   id:'d6e8ddb3-8ca5-41d0-b632-44281fa88673',
    //   label: 'Indonesian Rupiah',
    //   value: 'IDR',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇮🇩'
    // },
    // {
    //   id:'98db39c4-c6af-40cb-a7c7-b88dc2e98b99',
    //   label: 'Indian Rupee',
    //   value: 'INR',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇮🇳'
    // },
    {
      id:'f70dfbb4-e275-44eb-be6d-0990b8bbecbe',
      label: 'Japanese Yen',
      value: 'JPY',
      chain: '',
      type: 'FIAT',
      emoji: '🇯🇵'
    },
    {
      id:'e331ce1f-6b64-44d6-8218-dbf60662cbe4',
      label: 'South Korean Won',
      value: 'KRW',
      chain: '',
      type: 'FIAT',
      emoji: '🇰🇷'
    },
    // {
    //   id:'ebe69ffe-83d7-456c-bace-bd237eec86f6',
    //   label: 'Singapore Dollar',
    //   value: 'SGD',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇸🇬'
    // },
    
    // Europe
    {
      id:'00095d19-ef00-4f10-949e-d095bd1a05b0',
      label: 'Euro',
      value: 'EUR',
      chain: '',
      type: 'FIAT',
      emoji: '🇪🇺'
    },

    // USD Coin (USDC) Multichain
    {
      id:'e68669e6-cfff-429c-aecb-e1d4f2ff32c5',
      label: 'USD Coin (Arbitrum)',
      value: 'USDC',
      chain: 'ARBITRUM',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg'
    },
    {
      id:'69df3344-b9aa-47fb-9d96-17fa14e1958a',
      label: 'USD Coin (Ethereum)',
      value: 'USDC',
      chain: 'ETHEREUM',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
    },
    {
      id:'d0448131-97d0-4aa9-b239-bcb194118a38',
      label: 'USD Coin (Polygon)',
      value: 'USDC',
      chain: 'POLYGON',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png'
    },
    {
      id: 'd42fff52-b268-4d24-9cd3-a1365e9bad20',
      label: 'USD Coin (Solana)',
      value: 'USDC',
      chain: 'SOLANA',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/4128/large/solana.png'
    },
    {
      id:'eb8ddf38-c186-4e1a-8d7b-d0fecb5ac375',
      label: 'USD Coin (Optimism)',
      value: 'USDC',
      chain: 'OPTIMISM',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/25244/large/Optimism.png'
    },
    {
      id:'4e44778a-c7eb-4b6b-97c2-740d40313823',
      label: 'USD Coin (Base)',
      value: 'USDC',
      chain: 'BASE',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
      chainIcon: 'https://base.org/images/logo.svg'
    },

    // Tether (USDT) Multichain
    {
      id:'3781326f-2ff0-4924-bb3a-67b37aa0cf26',
      label: 'Tether (Arbitrum)',
      value: 'USDT',
      chain: 'ARBITRUM',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg'
    },
    {
      id:'2255dcd2-4165-4c12-8585-56312517b90a',
      label: 'Tether (Ethereum)',
      value: 'USDT',
      chain: 'ETHEREUM',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
    },
    {
      id:'01d8234c-988e-4354-9aed-aeb3e372fa18',
      label: 'Tether (Polygon)',
      value: 'USDT',
      chain: 'POLYGON',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png'
    },
    {
      id:'927c3458-310f-4ceb-af79-703bf28710ff',
      label: 'Tether (Solana)',
      value: 'USDT',
      chain: 'SOLANA',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/4128/large/solana.png'
    },
    {
      id:'8229703d-627a-4a27-a647-85adcb314cc1',
      label: 'Tether (Optimism)',
      value: 'USDT',
      chain: 'OPTIMISM',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/25244/large/Optimism.png'
    },
    {
      id:'9bc412eb-213d-4071-96bb-c6a2dd40533f',
      label: 'Tether (Base)',
      value: 'USDT',
      chain: 'BASE',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
      chainIcon: 'https://base.org/images/logo.svg'
    },
    {
      id:'2491f2d5-2fd7-4083-b017-c3b96a148aa0',
      label: 'Tether (Tron)',
      value: 'USDT',
      chain: 'TRON',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png'
    }
];

const chains = ref([
    {
      id:'3781326f-2ff0-4924-bb3a-67b37aa0cf26',
      chain: 'ARBITRUM',
      chainIcon: 'https://assets.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg'
    },
    {
      id:'2255dcd2-4165-4c12-8585-56312517b90a',
      chain: 'ETHEREUM',
      chainIcon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
    },
    {
      id:'01d8234c-988e-4354-9aed-aeb3e372fa18',
      chain: 'POLYGON',
      chainIcon: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png'
    },
    {
      id:'927c3458-310f-4ceb-af79-703bf28710ff',
      chain: 'SOLANA',
      chainIcon: 'https://assets.coingecko.com/coins/images/4128/large/solana.png'
    },
    {
      id:'8229703d-627a-4a27-a647-85adcb314cc1',
      chain: 'OPTIMISM',
      chainIcon: 'https://assets.coingecko.com/coins/images/25244/large/Optimism.png'
    },
    {
      id:'9bc412eb-213d-4071-96bb-c6a2dd40533f',
      chain: 'BASE',
      chainIcon: 'https://base.org/images/logo.svg'
    },

    {
      id:'2491f2d5-2fd7-4083-b017-c3b96a148aa0',
      value: 'USDT',
      chain: 'TRON',
      chainIcon: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png'
    },

])

const fiatCurrencies = computed(() => {
  return currencies.filter(c => c.type === 'FIAT')
});

const CryptoCurrencies = computed(() => {
  return currencies.filter(c => c.type === 'CRYPTO')
});



</script>