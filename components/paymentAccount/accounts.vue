<template>
    <!-- <div class="h-fit"> -->

      <div  class="w-full flex flex-col items-center justify-center rounded-2xl gap-y-1 px-4 overflow-hidden">

        <div class="w-full flex flex-col items-center justify-center rounded-2xl gap-y-2">
<!-- 
          <div class="w-full flex items-start justify-between ">

            <button @click="$emit('close')">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
              </svg>
            </button>

          </div> -->

          <div class="w-full">
            <div class="w-full flex items-start">

              <div class="w-full flex flex-col">

                <p class="Grotesque-Regular text-[12px] text-[#737373]">
                  Select or link Account
                </p>
                <h3 class="Grotesque-Bold text-[15px] text-[#1A1A1A]">
                  Choose {{ direction }} Account
                </h3>

              </div>

              <button
              class="bg-[#F1F0FE] py-1 px-3 text-black text-xs rounded-md whitespace-nowrap"
              >
                choose one
              </button>



            </div>

          </div>
        </div>

        <div v-if="loading" class="w-full h-full flex flex-col gap-y-4 w-full rounded-xl items-center justify-center">

                <div class="flex gap-x-3 h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
                  <div class="h-12 w-12 bg-gray-300 rounded-full  "></div>

                  <div class="w-full flex flex-col items-start gap-y-2 ">
                    <div class="h-5 bg-gray-300 rounded-full  w-full"></div>
                    <div class="h-2 bg-gray-300 rounded-full  w-40"></div>
                    <div class="h-2 bg-gray-300 rounded-full  w-20"></div>
                  </div>
                </div>

                <div class="flex gap-x-3 h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
                  <div class="h-12 w-12 bg-gray-300 rounded-full  "></div>

                  <div class="w-full flex flex-col items-start gap-y-2 ">
                    <div class="h-5 bg-gray-300 rounded-full  w-full"></div>
                    <div class="h-2 bg-gray-300 rounded-full  w-40"></div>
                    <div class="h-2 bg-gray-300 rounded-full  w-20"></div>
                  </div>
                </div>

                <div class="flex gap-x-3 h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
                  <div class="h-12 w-12 bg-gray-300 rounded-full  "></div>

                  <div class="w-full flex flex-col items-start gap-y-2 ">
                    <div class="h-5 bg-gray-300 rounded-full  w-full"></div>
                    <div class="h-2 bg-gray-300 rounded-full  w-40"></div>
                    <div class="h-2 bg-gray-300 rounded-full  w-20"></div>
                  </div>
                </div>

                <div class="flex gap-x-3 h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
                  <div class="h-12 w-12 bg-gray-300 rounded-full  "></div>

                  <div class="w-full flex flex-col items-start gap-y-2 ">
                    <div class="h-5 bg-gray-300 rounded-full  w-full"></div>
                    <div class="h-2 bg-gray-300 rounded-full  w-40"></div>
                    <div class="h-2 bg-gray-300 rounded-full  w-20"></div>
                  </div>
                </div>
                
        </div>

        <div v-else class="w-full relative flex flex-col items-center justify-center overflow-y-auto rounded-2xl gap-y-3">

          <div class="w-full relative flex items-center justify-start overflow-y-auto">
            
            <div class="flex relative flex-col items-center justify-start w-full h-full overflow-y-auto gap-y-3 my-4">


              <div
                class="w-full border border-dashed hover:border-black flex items-center justify-center gap-x-5 py-2 bg-white rounded-lg border-[1px] px-4 cursor-pointer"
              >
                
                <NuxtLink href="/accounts" class="flex justify-center items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 12"><path fill="#000" d="M4.12 11c-.84 0-1.62-.32-2.2-.91a3.11 3.11 0 0 1 0-4.4l2.77-2.77a3.12 3.12 0 0 1 4.4 0a3.1 3.1 0 0 1 0 4.4c-.2.2-.51.2-.71 0s-.2-.51 0-.71c.82-.82.82-2.16 0-2.99c-.83-.83-2.17-.83-2.99 0L2.62 6.39c-.82.82-.83 2.16 0 2.99c.4.4.92.63 1.5.62c.56 0 1.09-.22 1.49-.62c.2-.2.51-.2.71 0s.2.51 0 .71c-.59.59-1.37.91-2.2.91"/><path fill="#000" d="M9.14 9.97c-.83 0-1.62-.32-2.2-.91a3.11 3.11 0 0 1 0-4.4c.2-.2.51-.19.71 0c.2.2.19.51 0 .71c-.82.82-.83 2.16 0 2.99c.4.4.95.63 1.5.62c.56 0 1.09-.22 1.49-.62l2.75-2.75c.4-.4.62-.93.62-1.49s-.22-1.1-.62-1.49c-.83-.83-2.17-.83-2.99 0c-.2.2-.51.19-.71 0c-.2-.2-.19-.51 0-.71a3.12 3.12 0 0 1 4.4 0c.59.59.91 1.37.91 2.2s-.32 1.61-.91 2.2l-2.75 2.75c-.59.59-1.37.91-2.2.91Z"/></svg>
                  <h3 class="Grotesque-Regular text-[13px] text-[#1A1A1A]">
                    Link {{type === 'FIAT'? 'Bank': 'Crypto'}} Account
                  </h3>
                </NuxtLink>

              </div>

              <div
               v-for="account in accounts"
               :key="account.id"
                class="w-full border hover:border-black flex items-center justify-start gap-x-5  bg-white rounded-lg border-[1px] py-2.5 px-2.5 cursor-pointer"
                @click="$emit('submit',account)"
                :class="
                  selectedAccount?.id === account.id
                    ? 'border-black'
                    : ' border-[#F8F8FC]'
                "
              >
                
                <h2 v-if="account?.currency" class="border rounded-full bg-black text-white text-[12px] px-2 py-3 ">
                  {{ account?.currency }}
                </h2>

                <div class="flex flex-col justify-start items-start">
                  <h3 v-if="account?.bank" class="Grotesque-Regular text-[12px] text-[#1A1A1A]">
                    {{account?.bank}}
                  </h3>

                  <h3 v-if="account?.chain" class="Grotesque-Bold uppercase text-[12px] text-[#1A1A1A]">
                    {{account?.name}}
                  </h3>

                  <p v-if="account?.accountNumber" class="Grotesque-Regular text-[10px] text-[#737373]">
                    {{account?.accountNumber}}***
                  </p>

                  <h3 v-if="account?.address" class=" truncate  Grotesque-Regular text-[12px] text-[#737373]">
                    {{account?.address}}
                  </h3>
                  <h3 v-if="account?.chain" class=" truncate  Grotesque-Regular text-[10px] text-[#737373]">
                    {{account?.chain}}
                  </h3>
                </div>
              </div>



              <!-- <baseButton
               v-if="selectedAccount"
                @click="$emit('submit',selectedAccount)"
                  type="submit"
                  class="w-ful py-3 bg-black  text-white text-[15px] rounded-lg mt-6"
                >
                Continue
              </baseButton> -->


            </div>
          </div>


        </div>

        



      </div>
        

    <BaseDialogue class="bg-white" :visible="showLinkAccount">

      <div class="relative flex flex-col lg:w-[450px] bg-white">
        <General
          @close="showLinkAccount = false"
        />

      </div>
    </BaseDialogue>

    <!-- <BaseDialogue class="bg-white" :visible="showLinkCrypto">

      <div class="relative flex flex-col lg:w-[350px] gap-y-4 bg-white">
            
            <div class=" w-full flex items-center justify-between ">
              <h1 class="text-[18px] whitespace-nowrap SoraRegular text-[#080708]">
                Link Crypto Wallet
              </h1>

              <button @click="showLinkCrypto = false">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                  <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
                </svg>
              </button>
            </div>

            <LinkCrypto
              @close="showLinkCrypto = false"
              @refresh="fetchAccounts()"
            />

          </div>


    </BaseDialogue> -->


  </template>

  <script setup lang="ts">
  import { Toaster, toast } from 'vue-sonner';
  import { formatDistanceToNow } from 'date-fns';
    import { storeToRefs } from 'pinia';
    import { useSwapStore } from '~/store/swap';
    import { useAuthStore } from '~/store/auth';
    const { getLinkedAccounts} = useSwapStore();

    // const { loading } = storeToRefs(useSwapStore());
    const { user } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

  const showLinkAccount = ref(false)
  // const showLinkCrypto = ref(false)

  const loading = ref(false)

  function timeAgo(timestampString:string) {
    const timestamp = new Date(timestampString);
    return formatDistanceToNow(timestamp, { addSuffix: true });
  }  

  const accounts = ref<any[]>([])

  const selectedAccount = ref()

  const selectAccount = (account:any)=>{
    selectedAccount.value = account
  }

  const props = defineProps({
    type: String,
    direction: String
  });

  const {type, direction} = props

  const route = useRouter()

  
  const emit = defineEmits(['update','submit','close'])  // Declare Events

  const LinkAccount = ()=>{
    showLinkAccount.value = true
    // emit('close')
  }

  const fetchAccounts = async()=>{
    loading.value = true
    const result = await getLinkedAccounts(type!)
    
    console.log(result)
    if(result?.success){
        console.log(result?.value)
        accounts.value = result?.accounts
    }
    loading.value = false
  }

  

  // watch(() => entry.value, async(newvalue, oldvalue) => {
  //   wallet.value?.availableBalance! <= entry.value! || maxAmount.value < entry.value ? invalidAmount.value = true : invalidAmount.value = false
  // });

  onMounted(async()=>{
    await fetchAccounts()
  })


</script>
