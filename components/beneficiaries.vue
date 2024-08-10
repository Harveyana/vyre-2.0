<template>
    <div class="w-full flex flex-row items-center justify-start rounded-2xl hover:bg-[#d9d5d5]" v-for="person in persons" :key="person.email">
            <div class="w-1/2 flex flex-row items-center justify-start md:px-4">
              <img :src="person.imgurl" class="w-10 p-1 rounded-[50px] mx-3 md:w-16" alt="beneficiary"/>
              <div class="w-full flex flex-col rounded-2xl">
                <h2 class="text-black text-sm font-bold truncate">
                  {{person.name}}
                </h2>
                <p class="text-black text-xs truncate">{{person.email}}</p>
              </div>
            </div>
          </div>
</template>

<script setup lang="ts">

type person = {
  email: string;
  name: string;
  imgurl:URL;
}

const props = defineProps<{
    persons: person[]
}>()

// let symbolMap = {
//       "USD":'$',
//       "GBP":'£',
//       "EUR":'€',
//       "NGN":'₦'
//     }


</script>