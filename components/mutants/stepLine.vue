<template>


    <div class="w-full px-4 mx-auto flex sm:items-center sm:justify-center">
        <ol class="w-fit hidden items-center sm:flex">
          <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                  <div :class="['z-10 flex items-center justify-center w-2.5 h-2.5 rounded-full ring-0 ring-[#D9D9D9] ring-4 shrink-0', {'bg-[#0050A8]': isObjectNotEmpty(sender)} ]" >
                  </div>
              </div>
              <div class=" mt-4 -mr-24">
                  <h1 class="Grotesque-Semi-Bold text-[12px] text-[#010109] ">Sender Details</h1>
              </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
              <div class="w-32 lg:w-48 flex items-center">
                  <div class="hidden sm:flex w-full bg-[#D1D1D1] h-0.5"></div>
                  <div :class="['z-10 flex items-center justify-center w-2.5 h-2.5 rounded-full ring-0 ring-[#D9D9D9] ring-4 shrink-0', {'bg-[#0050A8]': isObjectNotEmpty(receiver) } ]" >
                  </div>
              </div>
              <div class="mt-4 -mr-10 flex items-center justify-end"> 
                <h1 class="Grotesque-Semi-Bold text-[12px] text-[#010109] ">Receiver Details</h1>
              </div>
          </li>

          <li class="relative mb-6 sm:mb-0">
              <div class="w-32 lg:w-48 flex items-center">
                  <div class="hidden sm:flex w-full bg-[#D1D1D1] h-0.5"></div>
                  <div :class="['z-10 flex items-center justify-center w-2.5 h-2.5 rounded-full ring-0 ring-[#D9D9D9] ring-4 shrink-0', {'bg-[#0050A8]': isObjectNotEmpty(item) } ]" >
                  </div>
              </div>
              <div class="mt-4 -mr-8 flex items-center justify-end">
                <h1 class="Grotesque-Semi-Bold text-[12px] text-[#010109] ">Item Details</h1>
              </div>
          </li>

          <li class="relative mb-6 sm:mb-0">
              <div class="w-32 lg:w-48 flex items-center">
                  <div class="hidden sm:flex w-full bg-[#D1D1D1] h-0.5"></div>
                  <div :class="['z-10 flex items-center justify-center w-2.5 h-2.5 rounded-full ring-0 ring-[#D9D9D9] ring-4 shrink-0', {'bg-[#0050A8]': isObjectNotEmpty(price) } ]" >
                  </div>
              </div>
              
              <div class="mt-4 -mr-10 flex items-center justify-end">
                <h1 class="Grotesque-Semi-Bold text-[12px] text-[#010109] "> Price Details</h1>
              </div>
          </li>
        </ol>

        
        
        <ol class="sm:hidden w-fit relative border-s border-[#D1D1D1]">                  
          <li class="mb-10 ms-6">

              <span class="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -start-2 ring-4 ring-[#D9D9D9]">
                  <div :class="['z-10 flex items-center justify-center w-3 h-3 rounded-full ring-0 ring-[#D9D9D9] ring-4 shrink-0', {'bg-[#0050A8]': isObjectNotEmpty(sender) } ]" >
                  </div>
              </span>
              
              <div class=" mt-4 -mr-24">
                <h1 class="Grotesque-Semi-Bold text-[12px] text-[#010109] ">Sender Details</h1>
              </div>
              
          </li>
          <li class="mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -start-2 ring-4 ring-[#D9D9D9]">
                  <div :class="['z-10 flex items-center justify-center w-3 h-3 rounded-full ring-0 ring-[#D9D9D9] ring-4 shrink-0', {'bg-[#0050A8]': isObjectNotEmpty(receiver) } ]" >
                  </div>
              </span>

              <div class=" mt-4 -mr-24">
                <h1 class="Grotesque-Semi-Bold text-[12px] text-[#010109] ">Receiver Details</h1>
              </div>
          </li>
          <li class="ms-6">
              <span class="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -start-2 ring-4 ring-[#D9D9D9] ">
                  <div :class="['z-10 flex items-center justify-center w-3 h-3 rounded-full ring-0 ring-[#D9D9D9] ring-4 shrink-0', {'bg-[#0050A8]': isObjectNotEmpty(item) } ]" >
                  </div>
              </span>

              <div class=" mt-4 -mr-24">
                <h1 class="Grotesque-Semi-Bold text-[12px] text-[#010109] ">Item Details</h1>
              </div>
          </li>

          <li class="ms-6">
              <span class="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -start-2 ring-4 ring-[#D9D9D9]">
                  <div :class="['z-10 flex items-center justify-center w-3 h-3 rounded-full ring-0 ring-[#D9D9D9] ring-4 shrink-0', {'bg-[#0050A8]': isObjectNotEmpty(price) } ]" >
                  </div>
              </span>

              <div class=" mt-4 -mr-24">
                <h1 class="Grotesque-Semi-Bold text-[12px] text-[#010109] ">Price Details</h1>
              </div>
          </li>

        </ol>
      </div>

  </template>

  <script setup lang="ts">

  // const Statuses = defineModel<string[]>("Statuses")

  const props = defineProps<{
    sender: {};
    receiver: {};
    item: {};
    price: {};
  }>()

  const {sender,receiver, item, price }= props

  const selected = ref('')

  const emit = defineEmits(['update'])  // Declare Events

  function isObjectNotEmpty(obj:{}) {
    return Object.keys(obj).length > 0;
  }

  const update = (value:string)=>{
    selected.value = value
    emit('update',value)
  }
  
  </script>

