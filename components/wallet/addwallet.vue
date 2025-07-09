<template>
      <div class="h-full flex flex-col items-center justify-center">

        <TabsRoot v-model:modelValue="tab" class="w-full sm:w-[50%] bg-[#F8F8FC] dark:bg-gray-900 h-fit rounded-2xl" default-value="fiats">
              <TabsList class="h-full p-1 rounded-2xl bg-[#F8F8FC]  dark:bg-gray-900 shrink-0 flex items-center justify-center" aria-label="Manage your account">

                <TabsTrigger
                      class="Grotesque-Regular py-2.5 flex-1 flex items-center justify-center text-[14px] leading-none text-[#A7A7A7] select-none  rounded-2xl  data-[state=active]:bg-white data-[state=active]:text-black outline-none cursor-default transition ease-in-out duration-300"                      
                      value="CRYPTO"
                    >
                    Crypto
                </TabsTrigger>

                <TabsTrigger
                      class="Grotesque-Regular py-2.5 flex-1 flex items-center justify-center text-[14px] leading-none text-[#A7A7A7] select-none  rounded-2xl  data-[state=active]:bg-white data-[state=active]:text-black outline-none cursor-default transition ease-in-out duration-300"                      
                      value="FIAT"
                    >
                    Fiat
                </TabsTrigger>
                    
              </TabsList>
                        
        </TabsRoot>

        <div class="w-full h-[60vh] flex flex-wrap items-start justify-start gap-3 py-10 overflow-y-scroll">
        <!-- currencies -->

          <div class="w-full gap-2 flex items-start justify-start flex-wrap overflow-y-auto">

                <button
                  v-for="currency in filterCurrencies"
                  :key="currency.id"
                  @click="selectCurrency(currency)"
                  :class="[
                    'px-2 py-2 rounded-xl border transition-all text-left',
                    'hover:shadow-md hover:border-blue-300',
                    'flex items-start gap-3 bg-white',
                    selectedCurrency?.id === currency?.id
                      ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                      : 'border-gray-200'
                  ]"
                >

                  <div v-if="currency.type === 'FIAT'" class="flex items-center justify-center p-3 gap-2">
                    <div class="flex items-center justify-center">
                      <div  class="flex items-end justify-center">
                        <h2 class="text-[20px]">{{ currency.emoji }}</h2>
                      </div>
                    </div>
                      
                    <div class="flex flex-col items-start justify-center">
                      <h2 class='text-[14px] Grotesque-Bold text-[#686767] leading-none'>{{currency.label}}</h2>
                      <p class='text-[10px] Grotesque-Regular text-[#686767]'>{{currency.value}}</p>
                    </div>
                    
                  </div>

                  <div v-if="currency.type ==='CRYPTO'" class="flex items-center justify-center p-3 gap-2">
                    <div class="flex items-center justify-center">
                      <div  class="flex items-end justify-center">
                        <img class="w-[30px] rounded-full" :src="currency?.icon" alt="avatar">
                        <img class="w-[20px] bg-black rounded-full -ml-2" :src="currency?.chainIcon" alt="avatar">
                      </div>
                    </div>
                      
                    <div class="flex flex-col items-start justify-center">
                      <h2 class='text-[14px] Grotesque-Bold text-[#686767] leading-none'>{{currency.label}}</h2>
                      <p class='text-[10px] Grotesque-Regular text-[#686767]'>{{currency.chain}}</p>
                    </div>
                    
                  </div>

                </button>
          </div>

          

        </div>

        <div v-if="selectedCurrency" class="w-full pt-4 pb-4 gap-3 flex items-center justify-between">
            <div v-if="selectedCurrency.type === 'FIAT'" class="flex items-center justify-center gap-2">
                  <div class="flex items-center justify-center">
                    <div  class="flex items-end justify-center">
                      <h2 class="text-[20px]">{{ selectedCurrency.emoji }}</h2>
                    </div>
                  </div>
                    
                  <div class="flex flex-col items-start justify-center">
                    <h2 class='text-[14px] Grotesque-Bold text-[#686767] leading-none'>{{selectedCurrency.label}}</h2>
                    <p class='text-[10px] Grotesque-Regular text-[#686767]'>{{selectedCurrency.value}}</p>
                  </div>
                  
            </div>

            <div v-if="selectedCurrency.type ==='CRYPTO'" class="flex items-center justify-center gap-2">
                  <div class="flex items-center justify-center">
                    <div  class="flex items-end justify-center">
                      <img class="w-[30px] rounded-full" :src="selectedCurrency?.icon" alt="avatar">
                      <img class="w-[20px] bg-black rounded-full -ml-2" :src="selectedCurrency?.chainIcon" alt="avatar">
                    </div>
                  </div>
                    
                  <div class="flex flex-col items-start justify-center">
                    <h2 class='text-[14px] Grotesque-Bold text-[#686767] leading-none'>{{selectedCurrency.label}}</h2>
                    <p class='text-[10px] Grotesque-Regular text-[#686767]'>{{selectedCurrency.chain}}</p>
                  </div>
                  
            </div>

            <button @click="create(selectedCurrency.id)" :disabled="loading || !selectedCurrency" :class="loading || !selectedCurrency ? 'bg-gray-200 text-white' : 'bg-black text-gray-200'" class="w-fit   Grotesque-Regular rounded-3xl px-5 sm:px-6 py-2">
              Create Wallet
            </button>

        </div>

      </div>


  </template>

  <script setup lang="ts">

  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useWalletStore } from '~/store/wallet';
  const { createWallet} = useWalletStore();

  const { loading } = storeToRefs(useWalletStore()); // make authenticated state reactive with storeToRefs

  const showLoader = ref(false)
  
  const selectedCurrency = ref()
  const tab = ref('CRYPTO')



  const route = useRouter()

  const emit = defineEmits(['next','created','close'])  // Declare Events


  const create = async(currencyId:string)=>{
      emit('close')
      toast.promise(() => new Promise(async(resolve,reject) =>{
        const created = await createWallet(currencyId)
        if (created.success) {
          resolve({msg:created.msg})
          // emit('verified', verified?.userId)
        }else{
          reject({msg:created.msg})
          // $toast.error(verified.msg)
        }
      }), 
      {
        loading: 'Creating wallet',
        success: (data: any) => {
          emit('created')
          return data.msg
        },
        error: (data: any) => {return data.msg}
      })

  }

  const selectCurrency = (currency:any)=>{
    selectedCurrency.value = currency
  }


  const currencies = [
    // FIAT Currencies
    // {
    //   id:'8cb57b9f-0633-4cc6-b2e8-9e4308be5f5a',
    //   label: 'Egyptian Pound',
    //   value: 'EGP',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇪🇬', // Egypt flag
    // },
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
    // {
    //   id:'db490ed9-62ba-462f-bbfa-065caefcb300',
    //   label: 'Tanzanian Shilling',
    //   value: 'TZS',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇹🇿', // Tanzania flag
    // },
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
    // {
    //   id:'659052db-d85f-4d1c-a7bf-339ebc8a733c',
    //   label: 'Chinese Yuan',
    //   value: 'CNY',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇨🇳'
    // },
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
    // {
    //   id:'f70dfbb4-e275-44eb-be6d-0990b8bbecbe',
    //   label: 'Japanese Yen',
    //   value: 'JPY',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇯🇵'
    // },
    // {
    //   id:'e331ce1f-6b64-44d6-8218-dbf60662cbe4',
    //   label: 'South Korean Won',
    //   value: 'KRW',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇰🇷'
    // },
    // {
    //   id:'73b17bae-0068-4870-84c3-d6919d9088ac',
    //   label: 'Sri Lankan Rupee',
    //   value: 'LKR',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇱🇰'
    // },
    // {
    //   id:'ecb834e3-84b1-48ab-b100-92e5b38d15cd',
    //   label: 'Malaysian Ringgit',
    //   value: 'MYR',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇲🇾'
    // },
    // {
    //   id:'e4992cdf-cd3d-41a6-9fc8-9b5615f484e0',
    //   label: 'Pakistani Rupee',
    //   value: 'PKR',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇵🇰'
    // },
    // {
    //   id:'730b3703-e38d-48a6-82f1-b811f2580a97',
    //   label: 'Philippine Peso',
    //   value: 'PHP',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇵🇭'
    // },
    // {
    //   id:'ebe69ffe-83d7-456c-bace-bd237eec86f6',
    //   label: 'Singapore Dollar',
    //   value: 'SGD',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇸🇬'
    // },
    // {
    //   id:'88a1a100-4320-4ae1-92df-1943c80fbbc3',
    //   label: 'Thai Baht',
    //   value: 'THB',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇹🇭'
    // },
    // {
    //   id:'f7edccad-6593-46d0-8cc3-a2fbba982bdf',
    //   label: 'Vietnamese Dong',
    //   value: 'VND',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇻🇳'
    // },
    
    // // Europe
    // {
    //   id:'00095d19-ef00-4f10-949e-d095bd1a05b0',
    //   label: 'Euro',
    //   value: 'EUR',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇪🇺'
    // },
    // {
    //   id:'2754724c-923d-49b3-b901-8bf639f0025f',
    //   label: 'Czech Koruna',
    //   value: 'CZK',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇨🇿'
    // },
    // {
    //   id:'52c87462-d5c6-4a12-9fea-63d2637d8f19',
    //   label: 'Danish Krone',
    //   value: 'DKK',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇩🇰'
    // },
    // {
    //   id:'adb671cf-26ad-49f5-9a8a-32bdc0285c0a',
    //   label: 'British Pound',
    //   value: 'GBP',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇬🇧'
    // },
    // {
    //   id:'34111564-d443-41d5-8d10-792cfc437cab',
    //   label: 'Hungarian Forint',
    //   value: 'HUF',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇭🇺'
    // },
    // {
    //   id:'5382fcba-0c85-4837-9d4b-f37441bbdf93',
    //   label: 'Norwegian Krone',
    //   value: 'NOK',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇳🇴'
    // },
    // {
    //   id:'4b76cb5b-bd48-42e9-9c94-afbd28a32879',
    //   label: 'Polish Złoty',
    //   value: 'PLN',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇵🇱'
    // },
    // {
    //   id:'fa656e31-7c93-471b-9b9a-20497b3ca5d0',
    //   label: 'Romanian Leu',
    //   value: 'RON',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇷🇴'
    // },
    // {
    //   id:'b7e38d3f-26d1-499b-a2d7-f248d5398d77',
    //   label: 'Swedish Krona',
    //   value: 'SEK',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇸🇪'
    // },
    // {
    //   id:'ecb39ecc-3a86-4b78-b290-139935afe8a7',
    //   label: 'Turkish Lira',
    //   value: 'TRY',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇹🇷'
    // },
    
    // // Americas
    // {
    //   id:'759cb634-4985-4ef2-9066-2cf5b7244c4c',
    //   label: 'US Dollar',
    //   value: 'USD',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇺🇸'
    // },
    // {
    //   id:'dfcc1f8d-deab-458d-b476-294b0465d0ff',
    //   label: 'Argentine Peso',
    //   value: 'ARS',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇦🇷'
    // },
    // {
    //   id:'9a4f5e75-d001-4b4c-a9a2-adf5ce43edbe',
    //   label: 'Bolivian Boliviano',
    //   value: 'BOB',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇧🇴'
    // },
    // {
    //   id:'e3bf7ddc-4cd1-41a4-a7dc-534641b899f7',
    //   label: 'Brazilian Real',
    //   value: 'BRL',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇧🇷'
    // },
    // {
    //   id:'690b6e24-4bf6-43a2-830a-809bb3bc391e',
    //   label: 'Canadian Dollar',
    //   value: 'CAD',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇨🇦'
    // },
    // {
    //   id:'71d7d0a9-43eb-40c4-b95f-3061ff0ed381',
    //   label: 'Chilean Peso',
    //   value: 'CLP',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇨🇱'
    // },
    // {
    //   id:'654392c8-4dfd-405a-ad25-13138af827ad',
    //   label: 'Colombian Peso',
    //   value: 'COP',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇨🇴'
    // },
    // {
    //   id:'b13185ea-e937-4fcc-925d-94671001948f',
    //   label: 'Costa Rican Colón',
    //   value: 'CRC',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇨🇷'
    // },
    // {
    //   id:'506a8d2b-69e5-47d7-a349-eb768c128195',
    //   label: 'Dominican Peso',
    //   value: 'DOP',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇩🇴'
    // },
    // {
    //   id:'6ecf1093-e305-4f94-9f56-727edc7003bb',
    //   label: 'Guatemalan Quetzal',
    //   value: 'GTQ',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇬🇹'
    // },
    // {
    //   id:'7e0899bc-9677-4c71-a9de-96ec0c4cf52b',
    //   label: 'Jamaican Dollar',
    //   value: 'JMD',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇯🇲'
    // },
    // {
    //   id:'cbfeb5bd-3b80-4711-91ed-31de3da65ca0',
    //   label: 'Mexican Peso',
    //   value: 'MXN',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇲🇽'
    // },
    // {
    //   id:'119bec5d-88ae-428d-ab29-2f6be92a313b',
    //   label: 'Peruvian Sol',
    //   value: 'PEN',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇵🇪'
    // },
    
    // // Oceania
    // {
    //   id:'4a1ba200-e1cb-4e39-8f63-a6266e620e7d',
    //   label: 'Australian Dollar',
    //   value: 'AUD',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇦🇺'
    // },
    // {
    //   id:'6cc7f8c5-7628-4564-9819-82c2e2482be3',
    //   label: 'New Zealand Dollar',
    //   value: 'NZD',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇳🇿'
    // },
    
    // // Middle East
    // {
    //   id:'95f95589-94fd-4aa7-8f29-de0b3889aff4',
    //   label: 'UAE Dirham',
    //   value: 'AED',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇦🇪'
    // },
    // {
    //   id:'c14be8df-494f-40c7-b9cb-5cc7b68e4bfa',
    //   label: 'Jordanian Dinar',
    //   value: 'JOD',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇯🇴'
    // },
    // {
    //   id:'4fe6e465-9f07-4784-bbc3-21c06b9f9132',
    //   label: 'Qatari Riyal',
    //   value: 'QAR',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇶🇦'
    // },
    // {
    //   id:'8bcaa892-d3fa-406e-b2b1-306e05e1cb92',
    //   label: 'Saudi Riyal',
    //   value: 'SAR',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇸🇦'
    // },
    // {
    //   id:'dffd7630-b041-48c5-853e-d3100bbfc243',
    //   label: 'Israeli Shekel',
    //   value: 'ILS',
    //   chain: '',
    //   type: 'FIAT',
    //   emoji: '🇮🇱'
    // },
    
    // USD Coin (USDC) Multichain
    {
      id:'e68669e6-cfff-429c-aecb-e1d4f2ff32c5',
      label: 'USD Coin',
      value: 'USDC',
      chain: 'ARBITRUM',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg'
    },
    {
      id:'69df3344-b9aa-47fb-9d96-17fa14e1958a',
      label: 'USD Coin',
      value: 'USDC',
      chain: 'ETHEREUM',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
    },
    {
      id:'d0448131-97d0-4aa9-b239-bcb194118a38',
      label: 'USD Coin',
      value: 'USDC',
      chain: 'POLYGON',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png'
    },
    {
      id: 'd42fff52-b268-4d24-9cd3-a1365e9bad20',
      label: 'USD Coin',
      value: 'USDC',
      chain: 'SOLANA',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/4128/large/solana.png'
    },
    {
      id:'eb8ddf38-c186-4e1a-8d7b-d0fecb5ac375',
      label: 'USD Coin',
      value: 'USDC',
      chain: 'OPTIMISM',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/25244/large/Optimism.png'
    },
    {
      id:'4e44778a-c7eb-4b6b-97c2-740d40313823',
      label: 'USD Coin',
      value: 'USDC',
      chain: 'BASE',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
      chainIcon: 'https://base.org/images/logo.svg'
    },

    // Tether (USDT) Multichain
    {
      id:'3781326f-2ff0-4924-bb3a-67b37aa0cf26',
      label: 'Tether',
      value: 'USDT',
      chain: 'ARBITRUM',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg'
    },
    {
      id:'2255dcd2-4165-4c12-8585-56312517b90a',
      label: 'Tether',
      value: 'USDT',
      chain: 'ETHEREUM',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
    },
    {
      id:'01d8234c-988e-4354-9aed-aeb3e372fa18',
      label: 'Tether',
      value: 'USDT',
      chain: 'POLYGON',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png'
    },
    {
      id:'927c3458-310f-4ceb-af79-703bf28710ff',
      label: 'Tether',
      value: 'USDT',
      chain: 'SOLANA',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/4128/large/solana.png'
    },
    {
      id:'8229703d-627a-4a27-a647-85adcb314cc1',
      label: 'Tether',
      value: 'USDT',
      chain: 'OPTIMISM',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/25244/large/Optimism.png'
    },
    {
      id:'9bc412eb-213d-4071-96bb-c6a2dd40533f',
      label: 'Tether',
      value: 'USDT',
      chain: 'BASE',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
      chainIcon: 'https://base.org/images/logo.svg'
    },
    {
      id:'2491f2d5-2fd7-4083-b017-c3b96a148aa0',
      label: 'Tether',
      value: 'USDT',
      chain: 'TRON',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png'
    },

    // Bitcoin (Native Chain)
    {
      label: 'Bitcoin',
      value: 'BTC',
      chain: 'BITCOIN',
      type: 'CRYPTO',
      icon: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
      chainIcon: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png'
    }
    
  ];

  const filterCurrencies = computed(() => {
    return currencies.filter(c => c.type === tab.value)
  });


  </script>
