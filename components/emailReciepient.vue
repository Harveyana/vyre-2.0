<template>
    <div class="w-full flex flex-row items-center justify-start rounded-xl bg-blue-100">
            <div class="w-full flex flex-row items-center justify-start md:px-4">
              <img src="~/assets/img/person2.png" class="w-8 p-1 rounded-[50px] mx-2 md:w-10" alt="beneficiary"/>
              <div class="w-full flex flex-col rounded-2xl">
                <h2 class="text-black text-[9px] font-semibold truncate">
                  {{props.person.name}}
                </h2>
                <p class="text-black text-[9px] sm:text-[10px] truncate">{{props.person.email}}</p>
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
    person: person
}>()

// let symbolMap = {
//       "USD":'$',
//       "GBP":'£',
//       "EUR":'€',
//       "NGN":'₦'
//     }


</script>