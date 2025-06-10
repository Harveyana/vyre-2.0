<template>
    <div class="w-full h-fit bg-white">

      <!-- <div class="w-full flex flex-col ml-2">

        <p class="Grotesque-Regular text-[13px] text-[#737373]">
          Select EVM chain
        </p>
        <h3 class="Grotesque-Bold text-[16px] text-[#1A1A1A]">
          Enter Wallet Details 
        </h3>

      </div> -->

      <div  class="w-full h-fit flex flex-col px-2 rounded-2xl py-3 gap-y-3">

        

      
        <div class="flex flex-col items-center justify-center gap-3">

          <TabsRoot v-model:modelValue="chain" class="w-full bg-[#F8F8FC] h-fit rounded-2xl" default-value="BASE">
              <TabsList class="w-full h-full p-1 rounded-2xl bg-[#F8F8FC] shrink-0 flex items-center overflow-x-auto justify-center" aria-label="Manage your account">

                <TabsTrigger
                     v-for="chain in chains"
                     :key="chain.label"
                      class="Grotesque-Regular py-2.5 flex-1 flex items-center justify-center text-[12px] sm:text-[14px] leading-none text-[#A7A7A7] select-none  rounded-2xl  data-[state=active]:bg-white data-[state=active]:text-black outline-none cursor-default transition ease-in-out duration-300"                      
                      :value="chain.value"
                    >
                    {{chain.label}}
                </TabsTrigger>
                    
              </TabsList>
                        
          </TabsRoot>

          <div class="w-full relative flex flex-col items-center justify-center gap-y-4">
              <!-- <label class="Grotesque-Regular text-[12px] text-[#010109]">Account Number</label> -->
              <div class="w-full flex items-center justify-center rounded-xl bg-gray-100">
                <div class="w-[40%] rounded-l-xl ">
                  <ChainSelect :key="chain" :options="filteredCurrencies" :placeholder="0" @update="onChainSelect" />
                </div>
                <input
                  type="text"
                  class="Grotesque-Regular text-[12px] w-[80%] bg-gray-100 border-[1px] border-[#2F2B43]/10 px-3 py-2 rounded-xl flex items-center justify-between focus:ring-0 border-none outline-none"
                  v-model="Address"
                  required
                  placeholder="Crypto Address"
                />
              </div>
              <button
                @click="$emit('submit')"
                type="submit"
                class="w-24 self-end px-4 py-2 bg-white text-black text-[15px] hover:border-gray-200 border border-white rounded-3xl mt-auto flex items-center justify-center "
                >
                <svg xmlns="http://www.w3.org/2000/svg" class='text-gray-200 w-6' viewBox="0 0 24 24"><path fill="#000" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"/></svg>
                Add
              </button>
              
              
          </div>

          

        </div>



        <!-- <button
              @click="$emit('submit')"
                type="submit"
                class="w-full py-3 bg-black  text-white text-[15px] rounded-3xl mt-auto "
              >
              Submit
        </button> -->


        



      </div>
        

    </div>


  </template>

  <script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useWalletStore } from '~/store/wallet';
  import { useAuthStore } from '~/store/auth';
  const { createWallet, fetchRate} = useWalletStore();

  const { loading } = storeToRefs(useWalletStore()); // make authenticated state reactive with storeToRefs
  const { user } = storeToRefs(useAuthStore());

  const chain = ref('BASE')
  
  const insufficient = ref(false)
  // const toggleState = ref(false)

  // const state = useGlobalState()
  // const AssetMap = state.assetMap
  // const entry = ref(0.00)

  const Token = defineModel<string>('Token')
  const Address = defineModel<string>('Address')
  const Chain = defineModel<string>('Chain')
  // const Type = defineModel<string>('Type')
  // const Country = defineModel<string>('Country')
  // const State = defineModel<string>('State')
  // const Address1 = defineModel<string>('Address1')
  // const Address2 = defineModel<string>('Address2')
  // const City = defineModel<string>('City')
  // const PostalCode = defineModel<string>('PostalCode')



  const route = useRouter()

  const emit = defineEmits(['submit','update-value','back'])  // Declare Events

  const onChainSelect = (payload:any)=>{
    Token.value = payload.value;
    Chain.value = payload.chain;
  }




  const rate = ref(0)

  // onMounted(async()=>{
  //   getRate()
  // })
 
  const chains = [

    {
      label:'ETH',
      value:'ETHEREUM'
    },
    {
      label:'BASE',
      value:'BASE'
    },
    {
      label:'TRON',
      value:'TRON'
    },
    {
      label:'SOL',
      value:'SOLANA'
    },
    // {
    //   label:'OP',
    //   value:'OPTIMISM'
    // },
    {
      label:'POLY',
      value:'POLYGON'
    },
    
    // {
    //   label:'ARB',
    //   value:'ARBITRUM'
    // },

  ]

  const currencies = [
    
    // USDC (USD Coin)
    {
      label: 'USD Coin (Arbitrum)',
      value: 'USDC',
      chain: 'ARBITRUM',
      type: 'CRYPTO'
    },
    {
      label: 'USD Coin (Ethereum)',
      value: 'USDC',
      chain: 'ETHEREUM',
      type: 'CRYPTO'
    },
    {
      label: 'USD Coin (Polygon)',
      value: 'USDC',
      chain: 'POLYGON',
      type: 'CRYPTO'
    },
    {
      label: 'USD Coin (Solana)',
      value: 'USDC',
      chain: 'SOLANA',
      type: 'CRYPTO'
    },
    {
      label: 'USD Coin (Optimism)',
      value: 'USDC',
      chain: 'OPTIMISM',
      type: 'CRYPTO'
    },
    {
      label: 'USD Coin (Base)',
      value: 'USDC',
      chain: 'BASE',
      type: 'CRYPTO'
    },

    // USDT (Tether)
    {
      label: 'Tether (Arbitrum)',
      value: 'USDT',
      chain: 'ARBITRUM',
      type: 'CRYPTO'
    },
    {
      label: 'Tether (Ethereum)',
      value: 'USDT',
      chain: 'ETHEREUM',
      type: 'CRYPTO'
    },
    {
      label: 'Tether (Polygon)',
      value: 'USDT',
      chain: 'POLYGON',
      type: 'CRYPTO'
    },
    {
      label: 'Tether (Solana)',
      value: 'USDT',
      chain: 'SOLANA',
      type: 'CRYPTO'
    },
    {
      label: 'Tether (Optimism)',
      value: 'USDT',
      chain: 'OPTIMISM',
      type: 'CRYPTO'
    },
    {
      label: 'Tether (Base)',
      value: 'USDT',
      chain: 'BASE',
      type: 'CRYPTO'
    },
    {
      label: 'Tether (Tron)',
      value: 'USDT',
      chain: 'TRON',
      type: 'CRYPTO'
    },
    {
      label: 'Bitcoin',
      value: 'BTC',
      chain: 'BITCOIN',
      type: 'CRYPTO'
    }
  ];

  const filteredCurrencies = computed(() => {
    return currencies.filter(currency => currency.chain === chain.value);
  });


  </script>
