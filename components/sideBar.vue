
<template>
    <div class="sm:h-[100vh] h-full sm:w-[23%] lg:w-[19%] bg-[#F7F7F7] items-center justify-start hidden sm:flex px-3">
        <div class="h-full rounded-2xl sm:w-[100%] md:w-full flex flex-col items-center justify-start lg:py-4 gap-y-5">
            
            <div class="w-full flex items-center justify-center border border-grey-200 bg-white mb-7 gap-x-2 py-3.5 px-3 rounded-md">
                <!-- <img src="~/assets/img/logo/vyreLogo2.png" class="w-16"/> -->

                <AvatarRoot class="inline-flex h-[35px] w-[35px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
                    <AvatarImage
                        class="h-full w-full rounded-[inherit] object-cover"
                        src=""
                        alt="avatar"
                    />
                    <AvatarFallback
                        class="text-[#4EACEA] Grotesque-Regular flex h-full w-full items-center justify-center bg-[#E9F9FF] text-[13px]"
                        :delay-ms="600"
                    >
                        MS
                    </AvatarFallback>
                </AvatarRoot>

                <div class="flex flex-1 flex-col">
                    <h1 class="Grotesque-Light text-sm text-[#010109]">
                        Micrograhia Solutions
                    </h1>
                    <h4 class="Grotesque-Light text-xs text-[#737373]">
                      Business Account 
                    </h4>
                </div>
                
            </div>

            <NuxtLink href="/" class="w-full flex items-center gap-x-3 px-4">
                <img v-if="$route.path == '/'" src="~/assets/img/dashboard.svg" class="w-5"/>
                <img v-else src="~/assets/img/dashboard2.svg" class="w-5"/>
                <span :class="[$route.path == '/' ? 'text-[#0050A8]' : 'text-[#737373]']" class="Grotesque-Light text-xs sm:text-[14px]">
                    Dashboard
                </span>
            </NuxtLink>

            <NuxtLink href="/trips" class="w-full flex items-center gap-x-3 px-4">
                <img v-if="$route.path == '/trips'"  src="~/assets/img/trip.svg" class="w-5"/>
                <img v-else src="~/assets/img/trip2.svg" class="w-5"/>
                <span  :class="[$route.path == '/trips' ? 'text-[#0050A8]' : 'text-[#737373]']"  class="Grotesque-Light text-xs sm:text-[14px]">
                    Trip History
                </span>
            </NuxtLink>

            <NuxtLink href="/notifications" class="w-full flex items-center gap-x-3 px-4">
                <img v-if="$route.path == '/notifications'"  src="~/assets/img/bell.svg" class="w-5"/>
                <img v-else src="~/assets/img/bell2.svg" class="w-5"/>
                <span  :class="[$route.path == '/notifications' ? 'text-[#0050A8]' : 'text-[#737373]']"  class="Grotesque-Light text-xs sm:text-[14px]">
                    Notifications
                </span>
            </NuxtLink>

            <NuxtLink href="/settings" class="w-full flex items-center gap-x-3 px-4">
                <img v-if="$route.path == '/settings'"  src="~/assets/img/setting.svg" class="w-5"/>
                <img v-else src="~/assets/img/setting2.svg" class="w-5"/>
                <span  :class="[$route.path == '/settings' ? 'text-[#0050A8]' : 'text-[#737373]']"  class="Grotesque-Light text-xs sm:text-[14px]">
                    Settings
                </span>
            </NuxtLink>

            <div class="w-full flex items-center gap-x-3 px-4 mt-40">
                <img src="~/assets/img/logout.svg" class="w-5"/>
                <span class="Grotesque-Light text-[#737373] text-xs sm:text-[14px]">
                    Logout
                </span>
            </div>

            
        </div>
    </div>
    
</template>

<script setup lang="ts">
// const visible = ref(false);


</script>

<style scoped>
.router-link-exact-active{
  border-left:4px solid #0050A8;
}
/* .router-link-active{
   
} */
</style>