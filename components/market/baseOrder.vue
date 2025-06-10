<template>
    <div class="w-full relative flex items-center bg-white hover:bg-gray-100 cursor-pointer justify-start border border-[#F4F4FB] rounded-xl p-3 gap-x-3">

            <div class="flex items-center justift-center">
              <img :src="order?.pair?.baseWallet?.imgurl" class="z-10 w-10 sm:w-12 -mr-2 sm:-mr-2.5  rounded-full"/>
              <img :src="order?.pair?.quoteWallet?.imgurl" class="z-20 w-6 sm:w-8 rounded-full self-end"/>
            </div>

            <div class="flex flex-col items-start justify-start">
              <h1 class="Grotesque-Bold text-[18px] text-[#010109]">
                {{order.price.toLocaleString('en-US')}} <span class="Grotesque-Regular text-[10px] text-[#737373]">{{order?.pair?.quote}}</span>
              </h1>

              <h3 class="Grotesque-Regular text-[10px] text-[#737373]">
                {{order.amountProcessed}} {{order.type =='BUY'? order.pair.quote : order.pair.base }} / {{ order.amount }} {{order.type =='BUY'? order.pair.quote : order.pair.base }}
              </h3>

              <h3 class="Grotesque-Regular text-[10px] text-[#737373]">
                {{order?.user.firstName}} {{order?.user.lastName}}
              </h3>

              <h4 class="Grotesque-Regular text-[10px] text-[#737373]">
                {{timeAgo(order?.createdAt)}}
              </h4>

            </div>

              <h1 class="bg-black absolute right-0 top-[45px] Grotesque-Regular text-[12px] px-2.5 py-1 rounded-l-2xl text-white ">
                {{order.type}}
              </h1>

              <!-- <h1 class="bg-black absolute right-0 top-[15px] Grotesque-Regular text-[12px] px-2.5 py-1 rounded-l-2xl text-white ">
                Recommended
              </h1> -->

          </div>
  </template>

  <script setup lang="ts">

  import { formatDistanceToNow } from 'date-fns';

  interface Order {
    id: string;
    type: string;
    user:{
      firstName: string;
      lastName: string;
      photoUrl: string;
    };
    pair:{
      name: string;
      base: string;
      quote: string;
      baseWallet:{
        imgurl: string;
        currency: string;
      };
      quoteWallet:{
        imgurl: string;
        currency: string;
      };
    };
    amount: string|number;
    amountProcessed: string|number; // Amount of the order that has been filled
    percentageProcessed: string|number; // Percentage of the order that has been filled
    price: string|number;
    status: string;
    createdAt: string
  }

  function timeAgo(timestampString:string) {
    const timestamp = new Date(timestampString);
    return formatDistanceToNow(timestamp, { addSuffix: true });
  }


  const props = defineProps<{
    order: Order
  }>()


  const {order} = props
  
  </script>