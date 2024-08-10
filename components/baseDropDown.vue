<template>
    <SelectRoot align="end"
 v-model="type" @update:model-value="(value)=>{update(value)}" >
                      <SelectTrigger
                        class="w-full inline-flex min-w-[150px] items-center justify-between rounded-[6px] px-3 py-3 text-[12px] leading-none gap-[5px] bg-[#F9F9FC] border border-gray-300 text-[#4e4e4e] hover:bg-gray-200 data-[placeholder]:text-[#4e4e4e] outline-none"
                        aria-label="Customise options"
                      >
                        <SelectValue class="Grotesque-Regular" placeholder="Select" />
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.10156 5.3926L3.23293 4.26123L8.16725 9.19555L13.1016 4.26123L14.2329 5.3926L8.16725 11.4583L2.10156 5.3926Z" fill="#696E79"/>
                        </svg>
                      </SelectTrigger>

                      <SelectPortal class="">
                        <SelectContent
                          class="w-[95%] ml-5 mt-12 bg-[#F9F9FC] rounded  will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"
                        >
                          <SelectViewport class="p-[5px] bg-[#F9F9FC] rounded-md">
                            <SelectGroup>
                              <SelectItem
                                v-for="(option, index) in options"
                                :key="index"
                                class="text-[12px] my-2 leading-none text-[#010109] rounded-lg flex items-center py-2 pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-gray-200 data-[highlighted]:text-green1"
                                :value="option"
                              >
                                <SelectItemText class="text-[#010109] Grotesque-Regular text-[12px]">
                                  {{ option }}
                                </SelectItemText>
                              </SelectItem>
                            </SelectGroup>
                            <SelectSeparator class="h-[1px] bg-green6 m-[5px]" />
                            
                          </SelectViewport>

                          <SelectScrollDownButton class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                            <Icon icon="radix-icons:chevron-down" />
                          </SelectScrollDownButton>
                        </SelectContent>
                      </SelectPortal>
                    </SelectRoot>
  </template>
  <script setup lang="ts">

  const type = ref('')

  const emit = defineEmits(['update'])  // Declare Events

  const props = defineProps<{
    options: string[]
  }>()

  const { options } = props;


  const update = (value:string)=>{
    emit('update',value)
  }
  
  </script>

