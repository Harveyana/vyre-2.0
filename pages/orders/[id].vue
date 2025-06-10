<template>

  <div class="dark:bg-[#12171D] bg-gray-50 h-fit w-full gap-x-1 lg:gap-x-6 px-4 sm:px-10">

    <!-- <div class="w-full py-3 flex items-start justify-start mb-3">

      <h1 class="Grotesque-Bold dark:text-white text-xl text-[#010109]">
        Market
      </h1>

    </div> -->

    <button @click="$router.back()" class="mt-4">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="white"/>
          <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
          <path d="M16.2452 19.1002H27.2V20.9002H16.2452L21.0728 25.7278L19.8002 27.0004L12.8 20.0002L19.8002 13L21.0728 14.2726L16.2452 19.1002Z" fill="#686767"/>
        </svg>
    </button>

    <div class="relative flex items-center justify-between gap-x-3 rounded-lg border border-2 p-5 bg-white my-2">

        <div class="w-fit flex items-center justify-center gap-x-4">

          <img class="w-[60px] h-[60px] rounded-full" src="https://firebasestorage.googleapis.com/v0/b/qaya-a252a.appspot.com/o/images%2FAvatar%20%5B1.0%5D%20(1).png?alt=media&token=0260df3d-de90-4559-8be4-feeffabd17e9" alt="avatar">

          <div class="flex flex-col">

            <h1 class="bg-black w-fit Grotesque-Regular text-[20px] py-1 px-2 rounded-t-2xl text-white">
              Buy
            </h1>

            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-x-3">
              <h2 class="text-[12px] SansRegular text-[#686767]">
                @ 1,225,961.64 NGN
              </h2>
              <h2 class=" flex items-center justify-center gap-x-3 text-[12px] SansRegular text-[#686767]">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="4" cy="4" r="4" fill="#D9D9D9"/>
                </svg>
                0 NGN / 61 NGN
              </h2>
              <h2 class="flex items-center justify-center gap-x-3 text-[12px] SansRegular text-[#686767]">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#D9D9D9"/>
                </svg>
                about 1 month ago
              </h2>

            </div>
            
          </div>


        </div>

        <!-- <button v-if="permittedTo('remove','user')" class="px-3 border rounded-lg flex items-center justify-center text-[12px] SansRegular py-2 text-[#686767]">
          <ActionDrop @update="(value:string)=>{actionDispatch(value)}" :filters="['Delete User']" />
          <h2 class="text-[12px] SansRegular text-[#686767]">
            Action
          </h2>
        </button> -->

    </div>



    <div class="w-full flex flex-col sm:flex-row gap-4 mt-8">

      <div class="w-full sm:w-[65%] flex flex-col gap-4 ">

        <div class="w-full h-[65vh] overflow-y-scroll scroll-smooth flex flex-col items-center justify-start rounded-2xl col-span-12 py-2 mb-2 md:mb-5 gap-y-4">

          <TableSkeleton v-if="showLoader" />

          <div v-if="!showLoader && !transactions.length" class="w-full h-full flex flex-col items-center justify-center gap-y-2">

            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24"><path fill="#000" d="m17.578 4.432l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-.321.169l8.923 5.099l4.016-2.01c-.646-.732-1.688-1.279-3.462-2.21m4.17 3.534l-3.998 2V13a.75.75 0 0 1-1.5 0v-2.286l-3.5 1.75v9.44c.718-.179 1.535-.607 2.828-1.286l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-1.893 0-3.076-.252-3.978M11.25 21.904v-9.44l-8.998-4.5C2 8.866 2 10.05 2 11.941v.117c0 2.525 0 3.788.597 4.802c.598 1.015 1.674 1.58 3.825 2.709l2 1.049c1.293.679 2.11 1.107 2.828 1.286M2.96 6.641l9.04 4.52l3.411-1.705l-8.886-5.078l-.103.054c-1.773.93-2.816 1.477-3.462 2.21"/></svg>

            <h1  class=" text-[23px] Grotesque-Regular font text-[#080708] font-semibold">
              No Order History
            </h1>

            <span class="text-[16px] Grotesque-Regular text-[#686767] text-center ">
              You have no history for now. 
            </span>

          </div>



          <div :class="transaction.status == 'SUCCESSFUL' ? 'border-green-500' :transaction.status == 'PENDING' ? 'border-orange-500' : 'border-red-500' " class="w-full flex flex-row items-center justify-between  border-l-4 p-2 " v-for="transaction in transactions" :key="transaction.id">
                  <div class="w-1/2 flex flex-row items-center justify-start">
                  
                    
                    <div class=" w-[50%] flex flex-col rounded-2xl">
                      <h2 class="text-black dark:text-white text-sm Grotesque-SemiBold truncate">
                        {{transaction.currency}}
                      </h2>
                      <p class="text-black dark:text-white text-[10px] md:text-xs whitespace-nowrap">{{transaction.description}}</p>
                    </div>
                  </div>


                  <div class="w-1/2 flex flex-row items-center justify-end px-4">
                    <div class="w-[50%] flex flex-col rounded-2xl">
                      <h2 class="text-black dark:text-white Grotesque-Medium text-sm font-bold">
                        {{transaction.type == 'DEBIT_PAYMENT' || transaction.type == 'FIAT_WITHDRAWAL' || transaction.type == 'EXCHANGE_SELL' ?  '-':'+'}}{{transaction.currencyl}}{{transaction.amount.toLocaleString('en-US')}}
                      </h2>
                      <p class="text-black dark:text-white Grotesque-Regular text-xs ">{{timeAgo(transaction.createdAt).slice(5)}}</p>
                    </div>
                  </div>
          </div>

        </div>

       



      </div>


      <!-- right bar Order History-->


      <div class="hidden w-full mt-8 sm:w-[35%] sm:flex flex-col items-end gap-y-4">

        <h1 class="Grotesque-Bold dark:text-white text-xl text-[#010109]">
          Order Pairs
        </h1>

        <Pairs/>
        
      </div>
      

    </div>

    


  </div>

</template>

<script setup lang="ts">

  import { formatDistanceToNow } from 'date-fns';
  import { storeToRefs } from 'pinia';
  import { useWalletStore } from '~/store/wallet';
  import { useAuthStore } from '~/store/auth';
  const { getTransactions} = useWalletStore();


  const { loading } = storeToRefs(useWalletStore());
  const showLoader = ref(false)
  const route = useRoute()

  interface Transaction {
    id:          string;
    walletId?:   string;
    userId:      String;
    currency:    string;
    reference?:  string;
    amount:      number;
    status:       string;
    type:        string;
    description:  string;
    createdAt:    string
  }

  const transactions = ref<Transaction[]>([])

  function timeAgo(timestampString:string) {
    const timestamp = new Date(timestampString);
    return formatDistanceToNow(timestamp, { addSuffix: true});
  }

  const fetchTransactions = async()=>{
    showLoader.value = true
    const result = await getTransactions(route.params.id as string)
    console.log(result)
    if(result.success){
      transactions.value = result.transactions
    }
    showLoader.value = false
  }

  onMounted(async()=>{
      fetchTransactions()
  })


    
</script>

