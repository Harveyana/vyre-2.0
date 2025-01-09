
<template>
    <div class="col-span-12 h-fit flex items-center justify-center sm:hidden">
        <div class="h-full rounded-2xl baseBg w-[85%] flex flex-row items-center justify-evenly">
            
            <!-- <div data-aos="fade-up" data-aos-once="true" class="flex flex-col items-center justify-center rounded-2xl mb-2 space-y-1 py-2 px-3">
                <img src="~/assets/img/logo/vyreLogo2.png" class="w-16"/>
                
            </div> -->

            <NuxtLink href="/" class="flex  items-center justify-center rounded-2xl py-3 px-4 gap-x-2 hover:bg-[#0f1d3a]">
                <img src="~/assets/img/icons/home-gray.png" class="w-4 hover:"/>
                <span v-if="$route.path == '/'" class=" text-white text-xs sm:text-[12px] poppinsRegular">
                    Home
                </span>
            </NuxtLink>

            <NuxtLink href="/wallets" class="flex items-center justify-center rounded-2xl py-3 px-3 gap-x-2 hover:bg-[#0f1d3a]">
                <img src="~/assets/img/icons/wallet1.png" class="w-4"/>
                <span v-if="$route.path == '/wallets'" class=" text-white text-xs sm:text-[12px] poppinsRegular">
                    Wallets
                </span>
            </NuxtLink>

            <NuxtLink href="/p2p" class="flex items-center justify-center rounded-2xl py-3 px-4 gap-x-2 hover:bg-[#0f1d3a]">
                <img src="~/assets/img/icons/swap2.png" class="w-5"/>
                <span v-if="$route.path == '/p2p'" class=" text-white text-xs sm:text-[12px] poppinsRegular">
                    P2P
                </span>
            </NuxtLink>

            <!-- <NuxtLink class="flex flex-col items-center justify-center rounded-2xl py-3 px-3 space-y-1 hover:bg-[#0f1d3a]">
                <img src="~/assets/img/icons/payment.png" class="w-5"/>
                <span data-aos="fade-right" data-aos-once="true" class="hidden lg:flex text-gray-200 text-xs sm:text-[12px] font-semibold">
                    Paymts
                </span>
            </NuxtLink> -->

            <NuxtLink class="flex items-center justify-center rounded-2xl py-3 px-3 gap-x-2 hover:bg-[#0f1d3a]">
                <img src="~/assets/img/icons/settings.png" class="w-4"/>
                <span v-if="$route.path == '/settings'" class="text-white text-xs sm:text-[12px] poppinsRegular">
                    Settings
                </span>
            </NuxtLink>

            <!-- <div data-aos="fade-up" data-aos-once="true" class="flex flex-col items-center justify-center rounded-2xl py-3 px-3 space-y-1 hover:bg-[#0f1d3a]">
                <img src="~/assets/img/icons/logout.png" class="w-4"/>
                <span data-aos="fade-right" data-aos-once="true" class="hidden lg:flex text-gray-200 text-xs sm:text-[12px] font-semibold">
                    Logout
                </span>
            </div> -->

            
        </div>
    </div>
    
</template>

<script setup lang="ts">
// const visible = ref(false);
const appConfig = useAppConfig()

const baseColor = appConfig.theme.colors.primary
const vyreYellow = appConfig.theme.colors.vyreYellow
const vyreGreen = appConfig.theme.colors.vyreGreen
const vyreLemon = appConfig.theme.colors.vyreLemon



const items = ref([
    {
        separator: true
    },
    {
        label: 'Documents',
        items: [
            {
                label: 'New',
                icon: 'pi pi-plus',
                shortcut: '⌘+N'
            },
            {
                label: 'Search',
                icon: 'pi pi-search',
                shortcut: '⌘+S'
            }
        ]
    },
    {
        label: 'Profile',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog',
                shortcut: '⌘+O'
            },
            {
                label: 'Messages',
                icon: 'pi pi-inbox',
                badge: 2
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
                shortcut: '⌘+Q'
            }
        ]
    },
    {
        separator: true
    }
]);

</script>
<style scoped>
.baseBg{
    background-color: v-bind(baseColor);
}
.vyreYellow{
    background-color: v-bind(vyreYellow);
}
.vyreGreen{
    background-color: v-bind(vyreGreen);
}
.vyreLemon{
    background-color: v-bind(vyreLemon);
}
.router-link-exact-active{
   background:#0f1d3a
}
</style>