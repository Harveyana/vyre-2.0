<template>
    <div class="w-full flex flex-row items-center justify-between">

             <!-- filter Currency -->

            <div class="flex flex-row items-center">
              <SelectRoot v-model="filter" @update:modelValue="$emit('currencyChanged',filter)">
                <SelectTrigger
                  class="inline-flex min-w-[5rem] items-center justify-between rounded-xl px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-grass11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9 outline-none"
                  aria-label="Customise options"
                >
                  <SelectValue class="text-xs" placeholder="Filter" />
                  <Icon icon="radix-icons:chevron-down" class="h-3.5 w-3.5" />
                </SelectTrigger>

                <SelectPortal>
                  <SelectContent
                    class="min-w-[160px] bg-white rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"
                    :side-offset="5"
                  >
                    <SelectScrollUpButton class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                      <Icon icon="radix-icons:chevron-up" />
                    </SelectScrollUpButton>

                    <SelectViewport class="p-[5px]">
                      
                      <SelectGroup>
                        <SelectItem
                          v-for="(option, index) in currencyOptions"
                          :key="index"
                          class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-gray-300 data-[highlighted]:text-green1"
                          :value="option"
                        >
                          <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
                            <Icon icon="radix-icons:check" />
                          </SelectItemIndicator>
                          <SelectItemText>
                            {{ option }}
                          </SelectItemText>
                        </SelectItem>
                      </SelectGroup>
                      
                    </SelectViewport>

                    <SelectScrollDownButton class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                      <Icon icon="radix-icons:chevron-down" />
                    </SelectScrollDownButton>
                  </SelectContent>
                </SelectPortal>
              </SelectRoot>
              <svg class='cursor-pointer w-6 md:w-7 fill-black stroke-black' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>
            </div>


            <!-- filter orderType -->


            <div class="flex flex-row items-center">
              <SelectRoot v-model="orderType" @update:modelValue="$emit('orderTypeChanged',orderType)">
                <SelectTrigger
                  class="inline-flex min-w-[5rem] items-center justify-between rounded-xl px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-grass11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9 outline-none"
                  aria-label="filter order type"
                >
                  <SelectValue class="text-xs" placeholder="Order Type" />
                  <Icon icon="radix-icons:chevron-down" class="h-3.5 w-3.5" />
                </SelectTrigger>

                <SelectPortal>
                  <SelectContent
                    class="min-w-[160px] bg-white rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"
                    :side-offset="5"
                  >
                    <SelectScrollUpButton class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                      <Icon icon="radix-icons:chevron-up" />
                    </SelectScrollUpButton>

                    <SelectViewport class="p-[5px]">
                      
                      <SelectGroup>
                        <SelectItem
                          v-for="(option, index) in orderTypes"
                          :key="index"
                          class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-gray-300 data-[highlighted]:text-green1"
                          :value="option"
                        >
                          <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
                            <Icon icon="radix-icons:check" />
                          </SelectItemIndicator>
                          <SelectItemText>
                            {{ option }}
                          </SelectItemText>
                        </SelectItem>
                      </SelectGroup>
                      
                    </SelectViewport>

                    <SelectScrollDownButton class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                      <Icon icon="radix-icons:chevron-down" />
                    </SelectScrollDownButton>
                  </SelectContent>
                </SelectPortal>
              </SelectRoot>
              <svg class='cursor-pointer w-6 md:w-7 fill-black stroke-black' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>
            </div>
              
          </div>
  </template>
  <script setup lang="ts">


  const filter = ref('')
  const orderType = ref('')

  const orderTypes = ['BUY', 'SELL']


  const currencyOptions = ['USD', 'AUD', 'CAD', 'GBP', 'EUR', 'NGN', 'BTC', 'LTC','USDT(trc20)','USDT(erc20)']
  </script>