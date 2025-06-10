
<template>
    
    <div class="hidden sm:flex overflow-scroll  h-full w-[20%] items-start justify-start flex-col bg-[#F2F4F5] dark:bg-[#12171D] rounded-xl py-6 gap-y-4">


                    <NuxtLink href="/settings" class="w-full hover:bg-[#F9FAFB] cursor-pointer flex items-center justify-between rounded-lg px-4 py-3">

                          <div class="flex items-center justify-center gap-x-2">

                            <div class="flex flex-col items-start justify-center gap-y-[2px]">
                              <h1 class="text-[14px] leading-none whitespace-nowrap interRegular text-[#374151]">
                                Account
                              </h1>
                            </div>

                          </div>

                    </NuxtLink>

                    <NuxtLink href="/settings/banks" class="w-full hover:bg-[#F9FAFB] cursor-pointer flex items-center justify-between rounded-lg px-4 py-3">

                          <div class="flex items-center justify-center gap-x-2">

                            <div class="flex flex-col items-start justify-center gap-y-[2px]">
                              <h1 class="text-[14px] leading-none whitespace-nowrap interRegular text-[#374151]">
                                Banks
                              </h1>
                            </div>

                          </div>

                    </NuxtLink>

                    <NuxtLink href="/settings/security" class="w-full hover:bg-[#F9FAFB] cursor-pointer flex items-center justify-between rounded-lg px-4 py-3">

                          <div class="flex items-center justify-center gap-x-2">

                            <div class="flex flex-col items-start justify-center gap-y-[2px]">
                              <h1 class="text-[14px] leading-none whitespace-nowrap interRegular text-[#374151]">
                                Security
                              </h1>
                            </div>

                          </div>

                    </NuxtLink>


                    <NuxtLink href="/settings/notification" class="w-full hover:bg-[#F9FAFB] cursor-pointer flex items-center justify-between rounded-lg px-4 py-3">

                          <div class="flex items-center justify-center gap-x-2">

                            <div class="flex flex-col items-start justify-center gap-y-[2px]">
                              <h1 class="text-[14px] leading-none whitespace-nowrap interRegular text-[#374151]">
                                Notifications
                              </h1>
                            </div>

                          </div>

                    </NuxtLink>

                    <NuxtLink href="/settings/support" class="w-full hover:bg-[#F9FAFB] cursor-pointer flex items-center justify-between rounded-lg px-4 py-3">

                          <div class="flex items-center justify-center gap-x-2">

                            <div class="flex flex-col items-start justify-center gap-y-[2px]">
                              <h1 class="text-[14px] leading-none whitespace-nowrap interRegular text-[#374151]">
                                Help and support
                              </h1>
                            </div>

                          </div>

                    </NuxtLink>

                    <NuxtLink href="/settings/legal" class="w-full hover:bg-[#F9FAFB] cursor-pointer flex items-center justify-between rounded-lg px-4 py-3">

                          <div class="flex items-center justify-center gap-x-2">

                            <div class="flex flex-col items-start justify-center gap-y-[2px]">
                              <h1 class="text-[14px] leading-none whitespace-nowrap interRegular text-[#374151]">
                                Legal
                              </h1>
                            </div>

                          </div>

                    </NuxtLink>
                      

    </div> 
    
</template>

<script setup lang="ts">
 import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { logUserOut, permittedTo } = useAuthStore();
  const { loading, user, store, organisation } = storeToRefs(useAuthStore());

  const router = useRouter()

  const showLogout = ref(false)

  const signOut = ()=>{
    logUserOut()
    showLogout.value = false
    router.push('/login')
  }


</script>

<style scoped>
.router-link-exact-active{
  background-color: #F9FAFB;
}
/* .router-link-active{
   
} */
</style>