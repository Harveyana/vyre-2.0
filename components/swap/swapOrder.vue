<template>
    <Transition name="fade" class="h-fit">

      <div class="w-full h-fit flex flex-col sm:flex-row items-center justify-center gap-3 sm:py-2">

          <div class="w-full h-fit flex flex-col items-start justify-center gap-1 sm:gap-y-4 sm:w-1/2 bg-[#FFFFFF] shadow-md rounded-2xl p-3 ">

            
            <div class="w-full flex items-center justify-between">
              <h1 class="Grotesque-Regular tex-[18px] sm:text-[20px] ">
                From:
              </h1>
              <button v-show="SOURCE.type ==='FIAT'" @click="openAccountsTab('SOURCE')" :class="{ 'attention-grabber': shouldShake }" class="max-w-48 w-48 truncate whitespace-nowrap flex items-center justify-start gap-2  Grotesque-Regular px-2 py-1 text-[12px] rounded-3xl border border-dashed border-black hover:bg-gray-200">
                <svg class="min-w-6" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m9 11l3 3l3-3"/></g></svg>
                {{SOURCE.name? SOURCE.name :'Select Source'}}
              </button>
            </div>

            <div class="w-full flex items-center">

              <div class="w-full flex flex-col items-start justify-start gap-y-1">
                <CurrencySelect 
                  :key="`source-${SOURCE.type}`" 
                  :placeholder="0" 
                  :options="SourceCurrencies" 
                  @update="selectSourceCurrency" 
                />
              </div>


            </div>

            <div :class="{ 'border border-2 border-red-600': isInsufficient }"  class="w-full bg-[#F6F6F6] flex flex-col gap-2 sm:gap-3 items-center justify-start p-3 rounded-2xl shadow-md">
              <div class="w-full flex items-center justify-between ">
                <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] sm:text-[18px] ">
                  You Send:
                </h1>
               
                <button class="text-gray-300 bg-[#212528] Grotesque-Regular text-[10px] sm:text-[11px] rounded-2xl py-1 px-2">
                  MAX
                </button>

              </div>

              <input v-model="SOURCE.amount"  class="w-full text-right bg-transparent outline-none rounded-xl focus-none text-black Grotesque-Regular text-[23px] py-1 sm:text-4xl border-none focus:ring-0"  type="number" id="numberInput" name="numberInput" pattern="[0-9]*" inputmode="numeric" />
              <div class="w-full flex items-center justify-between">
                <h1 v-if="isInsufficient" class="w-full Grotesque-Light text-[11px] sm:text-[13px] text-red-600 whitespace-nowrap flex gap-3 items-center justify-center">
                  Amount below minimum
                </h1>
                <h1 class="w-full Grotesque-Light text-[13px] whitespace-nowrap flex gap-3 items-end justify-end">
                  fee: {{fee}} 
                </h1>
              </div>
              
              
            </div>

          </div>

          <button @click="switchCurrencyTypes()" :class="{ 'loading': loadingQuote }" class=" loading-button -my-4 sm:-mx-4 bg-gray-200 hover:bg-white z-999 rounded-2xl p-2 chrome-border">
            <!-- <svg class=" border rounded-full rotate-90" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M12.984 15a1 1 0 0 0 1.848.53l2.688-2.687a1 1 0 0 0-1.415-1.414l-1.12 1.12V5a1 1 0 0 0-2 0zm-1.969-6a1 1 0 0 0-1.848-.53L6.48 11.157a1 1 0 1 0 1.414 1.414l1.121-1.12V19a1 1 0 1 0 2 0z"/></svg> -->
            <svg class=" border rounded-full rotate-90 sm:rotate-0 " xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16"><path fill="#000" d="M5.85.854a.5.5 0 0 0-.707-.707l-3 3a.5.5 0 0 0 0 .707l3 3a.5.5 0 0 0 .707-.707L3.7 3.997h7.79a2.5 2.5 0 0 1 2.5 2.5v2a.5.5 0 0 0 1 0v-2c0-1.93-1.57-3.5-3.5-3.5H3.7L5.85.847zM2 7.5a.5.5 0 0 0-1 0v2C1 11.43 2.57 13 4.5 13h7.79l-2.15 2.15a.5.5 0 0 0 .707.707l3-3a.5.5 0 0 0 0-.707l-3-3a.5.5 0 0 0-.707.707l2.15 2.15H4.5a2.5 2.5 0 0 1-2.5-2.5v-2z"/></svg>
            <!-- <h1 class="w-full Grotesque-Light text-[13px] whitespace-nowrap flex gap-3 items-end justify-end">
                Switch
            </h1> -->
          </button>

          <div class="w-full flex flex-col items-start justify-center gap-1 sm:gap-y-4 sm:w-1/2 bg-[#FFFFFF] shadow-md rounded-2xl p-3 ">

            <div class="w-full flex items-center justify-between">
              <h1 class="Grotesque-Regular tex-[18px] sm:text-[20px] ">
                To:
              </h1>
              <button @click="openAccountsTab('DESTINATION')" :class="{ 'attention-grabber': shouldShake }" class="max-w-48 w-48 truncate whitespace-nowrap flex items-center justify-start gap-2  Grotesque-Regular px-2 py-1 text-[12px] rounded-3xl border border-dashed border-black hover:bg-gray-200">
                <svg class="min-w-6" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m9 11l3 3l3-3"/></g></svg>
                {{DESTINATION.name? DESTINATION.name :'Select Destination'}}
              </button>
            </div>

            <div class="w-full flex items-center">

              <div class="w-full flex flex-col items-start justify-start gap-y-1">
                <CurrencySelect 
                  :key="`dest-${DESTINATION.type}`" 
                  :placeholder="0" 
                  :options="DestinationCurrencies" 
                  @update="selectDestinationCurrency" 
                />
              </div>


            </div>

            <div class="w-full bg-[#F6F6F6] flex flex-col gap-2 sm:gap-3 items-center justify-start p-3 rounded-2xl shadow-md">
              <div class="w-full flex items-center justify-between ">
                <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] sm:text-[18px] ">
                  You Receive:
                </h1>
               

              </div>

              <!-- <input readonly v-model="DESTINATION.amount" class="w-full bg-transparent text-right outline-none rounded-xl focus-none text-black Grotesque-Regular text-[23px] py-1 sm:text-4xl border-none focus:ring-0"  type="number" id="numberInput" name="numberInput" pattern="[0-9]*" inputmode="numeric" /> -->
              <div class="w-full bg-transparent text-right outline-none rounded-xl focus-none text-black Grotesque-Regular text-[23px] py-1 px-2 sm:text-4xl border-none focus:ring-0" >
                {{ parseFloat(DESTINATION?.amount as string).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
              </div>
              <h1 class="w-full Grotesque-Light text-[13px] whitespace-nowrap flex gap-3 items-end justify-end">
                Rate: {{ quote && quote?.estimatedExchangeRate ? parseFloat(quote?.estimatedExchangeRate as string).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0.00}}
              </h1>
              
            </div>

          </div>

      </div>
        

    </Transition>

    <!-- <SideLog :visible="showFiatAccounts">

      <Accounts type="FIAT" :direction="direction" @close="showFiatAccounts = false" @submit="selectFiatAccount" />

    </SideLog>

    <SideLog :visible="showCryptoAccounts">

      <Accounts type="CRYPTO" :direction="direction" @close="showCryptoAccounts = false" @submit="selectCryptoAccount" />

    </SideLog> -->

    <client-only>
      <vue-bottom-sheet :max-width="400" :max-height="1090" ref="FiatBottomSheet">
        <Accounts 
          type="FIAT" 
          :direction="direction" 
          @close="FiatBottomSheet.close();" 
          @submit="selectFiatAccount" 
        />
      </vue-bottom-sheet>
    </client-only>

    <client-only>
      <vue-bottom-sheet :max-width="400" :max-height="1090" ref="CryptoBottomSheet">
        <Accounts 
          type="CRYPTO" 
          :direction="direction" 
          @close="CryptoBottomSheet.close()" 
          @submit="selectCryptoAccount" 
        />
      </vue-bottom-sheet>
    </client-only>

    


  </template>

  <script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
  import  "@webzlodimir/vue-bottom-sheet/dist/style.css";
  import { storeToRefs } from 'pinia';
    import { useSwapStore } from '~/store/swap';
    import { useAuthStore } from '~/store/auth';
    const { getQuote} = useSwapStore();

    // const { loading } = storeToRefs(useSwapStore());
    const { user } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

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
    {
      id:'2560c1e5-8139-4c8a-9a0f-52cd42436ae8',
      label: 'Bangladeshi Taka',
      value: 'BDT',
      chain: '',
      type: 'FIAT',
      emoji: '🇧🇩'
    },
    {
      id:'659052db-d85f-4d1c-a7bf-339ebc8a733c',
      label: 'Chinese Yuan',
      value: 'CNY',
      chain: '',
      type: 'FIAT',
      emoji: '🇨🇳'
    },
    {
      id:'efa06c1a-852d-49d8-af6b-993ff8d4934d',
      label: 'Hong Kong Dollar',
      value: 'HKD',
      chain: '',
      type: 'FIAT',
      emoji: '🇭🇰'
    },
    {
      id:'d6e8ddb3-8ca5-41d0-b632-44281fa88673',
      label: 'Indonesian Rupiah',
      value: 'IDR',
      chain: '',
      type: 'FIAT',
      emoji: '🇮🇩'
    },
    {
      id:'98db39c4-c6af-40cb-a7c7-b88dc2e98b99',
      label: 'Indian Rupee',
      value: 'INR',
      chain: '',
      type: 'FIAT',
      emoji: '🇮🇳'
    },
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
    {
      id:'73b17bae-0068-4870-84c3-d6919d9088ac',
      label: 'Sri Lankan Rupee',
      value: 'LKR',
      chain: '',
      type: 'FIAT',
      emoji: '🇱🇰'
    },
    {
      id:'ecb834e3-84b1-48ab-b100-92e5b38d15cd',
      label: 'Malaysian Ringgit',
      value: 'MYR',
      chain: '',
      type: 'FIAT',
      emoji: '🇲🇾'
    },
    {
      id:'e4992cdf-cd3d-41a6-9fc8-9b5615f484e0',
      label: 'Pakistani Rupee',
      value: 'PKR',
      chain: '',
      type: 'FIAT',
      emoji: '🇵🇰'
    },
    {
      id:'730b3703-e38d-48a6-82f1-b811f2580a97',
      label: 'Philippine Peso',
      value: 'PHP',
      chain: '',
      type: 'FIAT',
      emoji: '🇵🇭'
    },
    {
      id:'ebe69ffe-83d7-456c-bace-bd237eec86f6',
      label: 'Singapore Dollar',
      value: 'SGD',
      chain: '',
      type: 'FIAT',
      emoji: '🇸🇬'
    },
    {
      id:'88a1a100-4320-4ae1-92df-1943c80fbbc3',
      label: 'Thai Baht',
      value: 'THB',
      chain: '',
      type: 'FIAT',
      emoji: '🇹🇭'
    },
    {
      id:'f7edccad-6593-46d0-8cc3-a2fbba982bdf',
      label: 'Vietnamese Dong',
      value: 'VND',
      chain: '',
      type: 'FIAT',
      emoji: '🇻🇳'
    },
    
    // Europe
    {
      id:'00095d19-ef00-4f10-949e-d095bd1a05b0',
      label: 'Euro',
      value: 'EUR',
      chain: '',
      type: 'FIAT',
      emoji: '🇪🇺'
    },
    {
      id:'2754724c-923d-49b3-b901-8bf639f0025f',
      label: 'Czech Koruna',
      value: 'CZK',
      chain: '',
      type: 'FIAT',
      emoji: '🇨🇿'
    },
    {
      id:'52c87462-d5c6-4a12-9fea-63d2637d8f19',
      label: 'Danish Krone',
      value: 'DKK',
      chain: '',
      type: 'FIAT',
      emoji: '🇩🇰'
    },
    {
      id:'adb671cf-26ad-49f5-9a8a-32bdc0285c0a',
      label: 'British Pound',
      value: 'GBP',
      chain: '',
      type: 'FIAT',
      emoji: '🇬🇧'
    },
    {
      id:'34111564-d443-41d5-8d10-792cfc437cab',
      label: 'Hungarian Forint',
      value: 'HUF',
      chain: '',
      type: 'FIAT',
      emoji: '🇭🇺'
    },
    {
      id:'5382fcba-0c85-4837-9d4b-f37441bbdf93',
      label: 'Norwegian Krone',
      value: 'NOK',
      chain: '',
      type: 'FIAT',
      emoji: '🇳🇴'
    },
    {
      id:'4b76cb5b-bd48-42e9-9c94-afbd28a32879',
      label: 'Polish Złoty',
      value: 'PLN',
      chain: '',
      type: 'FIAT',
      emoji: '🇵🇱'
    },
    {
      id:'fa656e31-7c93-471b-9b9a-20497b3ca5d0',
      label: 'Romanian Leu',
      value: 'RON',
      chain: '',
      type: 'FIAT',
      emoji: '🇷🇴'
    },
    {
      id:'b7e38d3f-26d1-499b-a2d7-f248d5398d77',
      label: 'Swedish Krona',
      value: 'SEK',
      chain: '',
      type: 'FIAT',
      emoji: '🇸🇪'
    },
    {
      id:'ecb39ecc-3a86-4b78-b290-139935afe8a7',
      label: 'Turkish Lira',
      value: 'TRY',
      chain: '',
      type: 'FIAT',
      emoji: '🇹🇷'
    },
    
    // Americas
    {
      id:'759cb634-4985-4ef2-9066-2cf5b7244c4c',
      label: 'US Dollar',
      value: 'USD',
      chain: '',
      type: 'FIAT',
      emoji: '🇺🇸'
    },
    {
      id:'dfcc1f8d-deab-458d-b476-294b0465d0ff',
      label: 'Argentine Peso',
      value: 'ARS',
      chain: '',
      type: 'FIAT',
      emoji: '🇦🇷'
    },
    {
      id:'9a4f5e75-d001-4b4c-a9a2-adf5ce43edbe',
      label: 'Bolivian Boliviano',
      value: 'BOB',
      chain: '',
      type: 'FIAT',
      emoji: '🇧🇴'
    },
    {
      id:'e3bf7ddc-4cd1-41a4-a7dc-534641b899f7',
      label: 'Brazilian Real',
      value: 'BRL',
      chain: '',
      type: 'FIAT',
      emoji: '🇧🇷'
    },
    {
      id:'690b6e24-4bf6-43a2-830a-809bb3bc391e',
      label: 'Canadian Dollar',
      value: 'CAD',
      chain: '',
      type: 'FIAT',
      emoji: '🇨🇦'
    },
    {
      id:'71d7d0a9-43eb-40c4-b95f-3061ff0ed381',
      label: 'Chilean Peso',
      value: 'CLP',
      chain: '',
      type: 'FIAT',
      emoji: '🇨🇱'
    },
    {
      id:'654392c8-4dfd-405a-ad25-13138af827ad',
      label: 'Colombian Peso',
      value: 'COP',
      chain: '',
      type: 'FIAT',
      emoji: '🇨🇴'
    },
    {
      id:'b13185ea-e937-4fcc-925d-94671001948f',
      label: 'Costa Rican Colón',
      value: 'CRC',
      chain: '',
      type: 'FIAT',
      emoji: '🇨🇷'
    },
    {
      id:'506a8d2b-69e5-47d7-a349-eb768c128195',
      label: 'Dominican Peso',
      value: 'DOP',
      chain: '',
      type: 'FIAT',
      emoji: '🇩🇴'
    },
    {
      id:'6ecf1093-e305-4f94-9f56-727edc7003bb',
      label: 'Guatemalan Quetzal',
      value: 'GTQ',
      chain: '',
      type: 'FIAT',
      emoji: '🇬🇹'
    },
    {
      id:'7e0899bc-9677-4c71-a9de-96ec0c4cf52b',
      label: 'Jamaican Dollar',
      value: 'JMD',
      chain: '',
      type: 'FIAT',
      emoji: '🇯🇲'
    },
    {
      id:'cbfeb5bd-3b80-4711-91ed-31de3da65ca0',
      label: 'Mexican Peso',
      value: 'MXN',
      chain: '',
      type: 'FIAT',
      emoji: '🇲🇽'
    },
    {
      id:'119bec5d-88ae-428d-ab29-2f6be92a313b',
      label: 'Peruvian Sol',
      value: 'PEN',
      chain: '',
      type: 'FIAT',
      emoji: '🇵🇪'
    },
    
    // Oceania
    {
      id:'4a1ba200-e1cb-4e39-8f63-a6266e620e7d',
      label: 'Australian Dollar',
      value: 'AUD',
      chain: '',
      type: 'FIAT',
      emoji: '🇦🇺'
    },
    {
      id:'6cc7f8c5-7628-4564-9819-82c2e2482be3',
      label: 'New Zealand Dollar',
      value: 'NZD',
      chain: '',
      type: 'FIAT',
      emoji: '🇳🇿'
    },
    
    // Middle East
    {
      id:'95f95589-94fd-4aa7-8f29-de0b3889aff4',
      label: 'UAE Dirham',
      value: 'AED',
      chain: '',
      type: 'FIAT',
      emoji: '🇦🇪'
    },
    {
      id:'c14be8df-494f-40c7-b9cb-5cc7b68e4bfa',
      label: 'Jordanian Dinar',
      value: 'JOD',
      chain: '',
      type: 'FIAT',
      emoji: '🇯🇴'
    },
    {
      id:'4fe6e465-9f07-4784-bbc3-21c06b9f9132',
      label: 'Qatari Riyal',
      value: 'QAR',
      chain: '',
      type: 'FIAT',
      emoji: '🇶🇦'
    },
    {
      id:'8bcaa892-d3fa-406e-b2b1-306e05e1cb92',
      label: 'Saudi Riyal',
      value: 'SAR',
      chain: '',
      type: 'FIAT',
      emoji: '🇸🇦'
    },
    {
      id:'dffd7630-b041-48c5-853e-d3100bbfc243',
      label: 'Israeli Shekel',
      value: 'ILS',
      chain: '',
      type: 'FIAT',
      emoji: '🇮🇱'
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

  const FiatBottomSheet = ref<InstanceType<typeof VueBottomSheet>>()
  const CryptoBottomSheet = ref<InstanceType<typeof VueBottomSheet>>()

  const openFiats = () => {
    if (FiatBottomSheet.value) {
      FiatBottomSheet.value.open();
    }
  };

  const openCrypto = () => {
    if (CryptoBottomSheet.value) {
      CryptoBottomSheet.value.open();
    }
  };

  const closeFiats = () => {
    if (FiatBottomSheet.value) {
      FiatBottomSheet.value.close();
    }
  };

  const closeCrypto = () => {
    if (CryptoBottomSheet.value) {
      CryptoBottomSheet.value.close();
    }
  };

  const direction = ref('Source')
  const currencyType = ref('FIAT')

  const loadingQuote = ref(false)

  

  const showFiatAccounts = ref(false)
  const showCryptoAccounts = ref(false)

  const shouldShake = ref(false);
  const isInsufficient = ref(false)

  const triggerShake = () => {
    shouldShake.value = true;
    setTimeout(() => {
      shouldShake.value = false;
    }, 1200); // Matches animation duration
  };


  const entry = ref<number>()
  const fee = ref()

  const SOURCE = reactive({
    name:'',
    label: '',
    currency: '',
    chain: '',
    type: 'CRYPTO',

    paymentAccountId:'',
    method:'',
    amount: 0

  })

  const DESTINATION = reactive({
    name:'',
    label: '',
    currency: '',
    chain: '',
    type: 'FIAT',

    paymentAccountId:'',
    method:'',
    amount: '0.00'

  })

  const SourceCurrencies = computed(() => {
    return SOURCE.type 
      ? currencies.filter(c => c.type === SOURCE.type)
      : currencies;
  });

  const DestinationCurrencies = computed(() => {
    return DESTINATION.type
      ? currencies.filter(c => c.type === DESTINATION.type)
      : currencies;
  });

  // Two-way type synchronization
  watch(() => SOURCE.type, (newType, oldType) => {
    if (newType && oldType !== undefined) {
      DESTINATION.type = newType === 'FIAT' ? 'CRYPTO' : 'FIAT';
    }
  });

  watch(() => DESTINATION.type, (newType, oldType) => {
    if (newType && oldType !== undefined) {
      SOURCE.type = newType === 'FIAT' ? 'CRYPTO' : 'FIAT';
    }
  });

  const selectSourceCurrency = (payload: typeof currencies[0]) => {
    Object.assign(SOURCE, {
      label: payload.label,
      currency: payload.value,
      chain: payload.chain,
      type: payload.type
    });
  };

  const selectDestinationCurrency = (payload: typeof currencies[0]) => {
    Object.assign(DESTINATION, {
      label: payload.label,
      currency: payload.value,
      chain: payload.chain,
      type: payload.type
    });
  };

  const selectFiatAccount = (payload:any) => {

    FiatBottomSheet.value.close()

    if(payload.currency !== SOURCE.currency && payload.currency !== DESTINATION.currency ) return toast.error('Please select Currency Account')
    showFiatAccounts.value = false

    if(SOURCE.type === "FIAT"){
      Object.assign(SOURCE, {
        paymentAccountId: payload.id,
        method: payload.method,
        name: payload.name
      });
    }

    if(DESTINATION.type === "FIAT"){
      Object.assign(DESTINATION, {
        paymentAccountId: payload.id,
        method: payload.method,
        name: payload.name
      });
    }
    
  };

  const selectCryptoAccount = (payload:any) => {

   

    if(payload.chain !== SOURCE.chain && payload.chain !== DESTINATION.chain ) return toast.error('Please select the correct Chain')
    // showCryptoAccounts.value = false
    CryptoBottomSheet.value.close()

    if(SOURCE.type === "CRYPTO"){
      Object.assign(SOURCE, {
        paymentAccountId: payload.id,
        chain:payload.chain,
        method: payload.chain,
        name: payload.name
      });
    }

    if(DESTINATION.type === "CRYPTO"){
      Object.assign(DESTINATION, {
        paymentAccountId: payload.id,
        chain:payload.chain,
        method: payload.chain,
        name: payload.name
      });
    }


    
  };


  const switchCurrencyTypes = () => {
    // Store current types
    const currentSourceType = SOURCE.type;
    const currentDestType = DESTINATION.type;
    
    // Only switch if both types are defined
    if (currentSourceType && currentDestType) {
      SOURCE.type = currentSourceType === 'FIAT' ? 'CRYPTO' : 'FIAT';
      DESTINATION.type = currentDestType === 'FIAT' ? 'CRYPTO' : 'FIAT';
      
      // Clear currency selections when switching types
      SOURCE.currency = '';
      DESTINATION.currency = '';

      SOURCE.chain = '';
      DESTINATION.chain = '';

      SOURCE.paymentAccountId ='';
      DESTINATION.paymentAccountId ='';

      SOURCE.name ='';
      DESTINATION.name ='';
    }
  };

  const openAccountsTab = (position:string)=>{
    if(position === 'SOURCE'){
      if(SOURCE.type ==='FIAT') return FiatBottomSheet.value.open();
      // if(SOURCE.type ==='CRYPTO') return showCryptoAccounts.value = true
    }

    if(position === 'DESTINATION'){
      if(DESTINATION.type ==='FIAT') return FiatBottomSheet.value.open();
      if(DESTINATION.type ==='CRYPTO') return CryptoBottomSheet.value.open();
    }
  }

  // function formatNumber(num:number) {
  //  return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }


  const quote = defineModel<any>('quote')
  const order = defineModel<any>('order')

  const route = useRouter()

  const emit = defineEmits(['next','submit','back'])  // Declare Events

  // const currentRate = computed(() => (entry.value! * rate.value).toFixed(2))
  // const rate = ref(0)

  const generateQuote = async()=>{

    if (SOURCE.type === 'FIAT' && !SOURCE.paymentAccountId.trim()){ 
      triggerShake()
      openAccountsTab('SOURCE')
      // toast.error('Select your Source Account');
      return 
    }


    if (!DESTINATION.paymentAccountId.trim()){ 
      triggerShake()
      openAccountsTab('DESTINATION')
      // toast.error('Select your payment Account')
      return
    };

    if (!SOURCE.currency.trim()) return toast.error('Source currency required');
    if (!DESTINATION.currency.trim()) return toast.error('Destination currency required');


    loadingQuote.value = true
    isInsufficient.value = false
    const result = await getQuote({
      source:{
        sourcePaymentAccountId: SOURCE.paymentAccountId || undefined,
        sourceCurrency:SOURCE.currency,
        sourcePaymentMethod:SOURCE.type =='CRYPTO' ? SOURCE.chain : SOURCE.method,
        sourceAmount: String(SOURCE.amount)
      },
      destination:{
        destinationPaymentAccountId: DESTINATION.paymentAccountId,
        destinationPaymentMethod: DESTINATION.method,
        destinationCurrency: DESTINATION.currency
      }
    })
    
    console.log(result)
    if(result?.success){
      console.log(result)
      quote.value = result?.quote
      DESTINATION.amount = result?.quote?.destinationAmount;
      order.value = {SOURCE,DESTINATION}
      fee.value = result.fee
      
    }else{
      isInsufficient.value = true
    }

    loadingQuote.value = false
  }



  const debouncedGenerateQuote = useDebounceFn(async () => {
    await generateQuote()
  }, 1000) // Adjust delay as needed (500ms here)

  // 2. Watch SOURCE.amount with debouncing
  watch(() => [
    SOURCE.amount,
    SOURCE.paymentAccountId,
    // SOURCE.type,
    SOURCE.currency,
    // SOURCE.chain,
    // DESTINATION.chain,
    DESTINATION.currency,
    DESTINATION.paymentAccountId,
    // DESTINATION.type
  ], async (newValue, oldValue) => {
    if (newValue !== oldValue) {
      try {
        await debouncedGenerateQuote()
      } catch (error) {
        if (error instanceof Error && error.message.includes('cancelled')) {
          // Handle cancelled debounce (optional)
          console.log('Quote request cancelled due to rapid changes')
        } else {
          // Handle actual errors from generateQuote
          console.error('Quote generation failed:', error)
        }
      }
    }
  }, { immediate: false })



  const submitQuote = ()=>{
    // if(entry.value === 0 || insufficient.value) return
    emit('submit', {amount:entry.value})
  }

  // onMounted(async()=>{
  //   await getWallets()
  //   await getRate()
  // })


</script>

<style scoped>

  /* Hide arrows/spinners in Chrome, Safari, Edge, Opera */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide arrows/spinners in Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

</style>
