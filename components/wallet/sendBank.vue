<template>
    <div class="h-fit">

      

      <div  class="w-full border flex flex-col px-4 rounded-2xl sm:shadow-md py-2">
         
        <!-- <div class="w-full flex flex-col lg:flex-row items-start justify-center gap-2 my-2">
           
           <input v-model="BANK.name" class="w-full bg-gray-200 outline-none rounded-xl focus-none border-none text-black Grotesque-Bold text-[14px] py-2 px-3" name="numberInput" placeholder="Bank Name" />
           <input  v-model="BANK.accountNumber" class="w-full lg:w-[48%] bg-gray-200 outline-none rounded-xl focus-none border-none text-black Grotesque-Regular text-[12px] py-2 px-3" name="numberInput" placeholder="Account Number" />
           <input  v-model="BANK.accountName" class="w-full lg:w-[48%] bg-gray-200 outline-none rounded-xl focus-none border-none text-black Grotesque-Regular text-[12px] py-2 px-3" name="numberInput" placeholder="Account Name" />
        </div> -->

        <!-- <div class="flex flex-col justify-center items-start p-2">
          <h3 class="Grotesque-Regular text-[12px] text-[#1A1A1A]">
            {{BANK.name}}
          </h3>
          <p class="Grotesque-Regular text-[10px] text-[#737373]">
            {{bank?.code}}
          </p>
        </div> -->

        <div class="w-full flex flex-col items-start justify-between sm:justify-center sm:gap-x-16 border px-4 rounded-2xl py-4">

          <h3 class="Grotesque-Regular text-[15px] text-[#1A1A1A]">
            Select Bank Account
          </h3>

          <div v-if="showLoader"  class="w-full flex flex-col items-center justify-center" >
            <ProgressSpinner class="" style="width: 30px; height: 30px" strokeWidth="8" fill="#ffff"
              animationDuration=".5s" aria-label="Custom ProgressSpinner" 
            />
            <p class="Grotesque-Regular text-[10px] text-[#737373]">
              Authorising transfer...
            </p>
          </div>

          <div v-else-if="banks.length" class="flex flex-col w-full h-[30vh] gap-y-2 my-4 overflow-y-auto">

            <div
              v-for="userBank in banks"
              :key="userBank?.id"
                class="w-full border hover:border-black flex items-center justify-start gap-x-5 py-2 bg-white rounded-lg border-[1px] px-4 cursor-pointer"
                @click="selectBank(
                  {
                   accountName:userBank?.accountName,
                   accountNumber:userBank?.accountNumber, 
                   code:userBank?.bank?.code, 
                   name:userBank?.bank?.name
                  }
                )"
                :class="
                  BANK.accountNumber === userBank?.accountNumber
                    ? 'border-black'
                    : ' border-[#F8F8FC]'
                "
            >
              
            <svg xmlns="http://www.w3.org/2000/svg" class="bg-[#F1F0FE] p-1 rounded-full" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#000" d="m12.67 2.217l8.5 4.75A1.5 1.5 0 0 1 22 8.31v1.44c0 .69-.56 1.25-1.25 1.25H20v8h1a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1v-8h-.75C2.56 11 2 10.44 2 9.75V8.31c0-.522.27-1.002.706-1.274l8.623-4.819a1.5 1.5 0 0 1 1.342 0ZM17 11H7v8h2v-6h2v6h2v-6h2v6h2zm-5-5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/></g></svg>
              <div class="flex flex-col justify-start items-start">
                <h3 class="Grotesque-Regular text-[12px] text-[#1A1A1A]">
                  {{userBank?.bank?.name}}
                </h3>
                <h3 class="Grotesque-Regular text-[12px] text-[#1A1A1A]">
                  {{userBank?.accountNumber}}
                </h3>
                <p class="Grotesque-Regular text-[10px] text-[#737373]">
                  {{userBank?.accountName}}
                </p>
              </div>
            </div>

          </div>

          <div v-else class="w-full flex flex-col items-center justify-center" >
            <h3 class="Grotesque-Regular text-[12px] text-[#1A1A1A]">
              Network error
            </h3>
            <button class="flex items-center justify-center border rounded-xl px-2" @click="getBanks()">
              <h3 class="Grotesque-Regular text-[12px] text-[#1A1A1A]">
               click to retry
              </h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M12.872 13.191H18V8.064c-.008-1.135-.671-1.408-1.473-.605l-1.154 1.158a5.76 5.76 0 0 0-3.566-1.23c-1.55 0-3.009.604-4.104 1.701A5.75 5.75 0 0 0 6 13.191c0 1.553.604 3.012 1.701 4.107A5.77 5.77 0 0 0 11.807 19c1.55 0 3.009-.605 4.106-1.703q.446-.447.78-.965a1.16 1.16 0 1 0-1.954-1.255c-.133.207-.292.4-.468.58a3.47 3.47 0 0 1-2.464 1.02a3.46 3.46 0 0 1-2.464-1.02a3.47 3.47 0 0 1-1.02-2.465c0-.93.362-1.805 1.02-2.461a3.47 3.47 0 0 1 2.464-1.021c.688 0 1.346.201 1.909.572l-1.448 1.451c-.803.802-.53 1.458.604 1.458"/></svg>
            </button>
          </div>

        </div>

        
        <div class="w-full flex items-center justify-center gap-x-2 mt-6" >

          <BaseButton @click="$emit('back')" class="w-[25%] px-8 bg-gray-300 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l-64 64l64 64"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 224h294c58.76 0 106 49.33 106 108v20"/></svg>
          </BaseButton>

          <baseButton
              @click="sendAsset()"
                type="submit"
                class="w-[70%] py-3 bg-black  text-white text-[15px] rounded-lg "
              >
              Send
          </baseButton>

        </div>

      
      </div>
        

    </div>


  </template>

  <script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useWalletStore } from '~/store/wallet';
  import { useAuthStore } from '~/store/auth';
  const { bankTransfer, authorise_fiat_transfer} = useWalletStore();
  const { getbankAccounts} = useAuthStore();


  const { loading } = storeToRefs(useWalletStore()); 
  const showLoader = ref(false)
  const amount = defineModel<number>('Amount')

  const banks = ref([])
  const paymentUrl = ref('')

  const BANK = reactive({
    accountNumber: '',
    accountName: '',
    code:'',
    name:'',
  })

  const props = defineProps({
    type: String,
    currency: String,
  });

  const {currency, type} = props



  const route = useRouter()

  const emit = defineEmits(['next','update-value','back','close'])  // Declare Events


  const sendAsset = async()=>{

    console.log(BANK)

    if (
      !BANK.accountName.trim() ||
      !BANK.accountNumber.trim() ||
      !BANK.name.trim() ||
      !paymentUrl.value.trim()
    ){
      toast.error('Incomplete Details');
      return;
    }


    emit('close')
      toast.promise(() => new Promise(async(resolve,reject) =>{
        const transfered = await bankTransfer(
          {
            account_number: BANK.accountNumber, 
            bank_code: BANK.code,
            recipient_name: BANK.accountName,
            endpoint_url: paymentUrl.value
          })

        if (transfered.success) {
          resolve({msg:transfered.msg})
          // emit('verified', verified?.userId)
        }else{
          reject({msg:transfered.msg})
          // $toast.error(verified.msg)
        }
      }), 
      {
        loading: `Sending ${currency}`,
        success: (data: any) => {
          return data.msg
        },
        error: (data: any) => {return data.msg ? data.msg : 'incomplete Details' }
      })

  }
  
  const selectBank = (bank:{accountName:string,accountNumber:string,code:string, name:string})=>{
    BANK.name = bank.name;
    BANK.code = bank.code;
    BANK.accountNumber = bank.accountNumber;
    BANK.accountName = bank.accountName
  }

  const authorise_Transfer = async()=>{
    showLoader.value = true
    const result = await authorise_fiat_transfer(currency!,amount.value!)
    
    console.log(result)
    if(result.success){
      // banks.value = result.banks
      paymentUrl.value = result.url
      const getAccounts = await getbankAccounts();
      if(getAccounts.success){
        banks.value = getAccounts.userBanks
      }
    }else{
      toast.error('Operation failed, Try again Later')
    }
    showLoader.value = false
  }

  onMounted(async()=>{
    await authorise_Transfer()
  })


  </script>
