<template>
  <div class="col-span-12 grid grid-cols-12 gap-x-1 lg:gap-x-6">
    <!-- Right Section -->
    <section data-aos="fade-left" data-aos-once="true" class="h-full col-span-12 min-[500px]:col-span-7 flex flex-col  ">
      <baseSection>
        <div data-aos="fade-up" data-aos-once="true" class=" max-h-[13rem] lg:max-h-[15rem] flex flex-row items-center justify-start rounded-2xl px-2 md:px-6 col-span-12 min-[500px]:hidden">
          <Toolbar :new="true"/>
        </div>
    

        <!-- send and receive Buttons -->
        <div class="col-span-12 mt-3 md:mt-4 flex flex-row items-center justify-start space-x-4 px-3">

          <div class="w-full flex flex-row items-center justify-evenly">
            <div @click="tab='swap'" :class="{ 'bg-[#DAA520]': tab == 'swap' }" class=" flex flex-col sm:flex-row items-center justify-center cursor-pointer rounded-[50px] hover:bg-[#DAA520] px-2 py-2 sm:py-4">
              <img src="~/assets/img/send.svg" class="w-10 mx-1 vyreYellow md:w-12 rounded-2xl" alt='send'/>
              <h2 class="text-black text-sm lg:text-2xl font-black">
                Swap
              </h2>
            </div>
            <div @click="tab='my orders'" :class="{ 'bg-[#20DA97]': tab == 'my orders' }" class="flex flex-col sm:flex-row items-center justify-center cursor-pointer rounded-[50px] hover:bg-[#20DA97] px-2 py-2 sm:py-4">
              <img src="~/assets/img/receive.svg" class="w-9 mx-2 vyreGreen md:w-12 rounded-2xl" alt='receive'/>
              <h2 class="text-black text-sm lg:text-2xl font-black">
                My orders
              </h2>
            </div>

            <div @click="tab='add'" :class="{ 'bg-[#D6DA20]': tab == 'add' }" class="flex flex-col sm:flex-row items-center justify-center cursor-pointer rounded-[50px] hover:bg-[#D6DA20] px-2 py-2 sm:py-4">
              <img src="~/assets/img/plus.svg" class="w-10 mx-1 vyreLemon md:w-12 rounded-2xl " alt='fund'/>
              <h2 class="text-black text-sm lg:text-2xl font-black">
                Add
              </h2>
            </div>

          </div>
         
          

        </div>

        <!-- Swap Orders -->
        <div class="col-span-12 flex flex-row items-center justify-between">
          <h2 class="text-black text-2xl md:text-3xl font-black">
            Orders
          </h2>
          <img src="~/assets/img/right-arrow.png" class="w-10 md:w-12 rounded-2xl hover:bg-gray-500 px-2" alt='transactions'/>
        </div>
        
        <div data-aos="fade-up" data-aos-once="true" class="vyreYellow max-h-[15rem] sm:max-h-[17rem] lg:max-h-[25rem] flex flex-col items-center justify-start rounded-2xl px-4 col-span-12 py-6 mb-2 md:mb-5 space-y-2">
          
          <OrderFilters @currencyChanged="(currency:string)=> currencyFilter = currency"  @orderTypeChanged="(ordertype:string)=> orderType = ordertype"/>
          <Separator
            class="bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]"
          />
          <div class="w-full overflow-y-scroll scroll-smooth min-h-[10rem] sm:min-h-[12rem] lg:min-h-[25rem] flex flex-col items-center justify-start rounded-2xl md:px-2 md:mb-5 lg:space-y-2">
            <swapOrders :persons="persons"/>
          </div>
        </div>

      </baseSection>
    </section>

    <!-- Left Section -->
    <section id="hero" class=" col-span-12 min-[500px]:col-span-5 flex flex-col">
      <baseSection>
        <!-- Toolbar -->
        <div data-aos="fade-up" data-aos-once="true" class=" max-h-[13rem] vyreGrey lg:max-h-[15rem] flex flex-row items-center justify-start rounded-2xl px-2 md:px-6 col-span-12 hidden min-[500px]:flex">
          <Toolbar :new="true"/>
        </div>
        <!-- Beneficiaries -->
        <div class="col-span-12 mt-4 md:mt-1 flex flex-row items-center justify-between">
          <h2 class="text-black text-2xl md:text-2xl font-black">
            Swap Orders
          </h2>
          <img src="~/assets/img/plus.svg" class="w-10 md:w-12 rounded-2xl hover:bg-gray-500 px-2" alt='transactions'/>
        </div>
        <div data-aos="fade-up" data-aos-once="true" class="overflow-y-scroll scroll-smooth max-h-[10rem] lg:max-h-[15rem] flex flex-col items-center justify-start rounded-2xl px-2 md:px-6 col-span-12 py-2 mb-2 md:mb-5 space-y-2">
          <swapOrders :persons="persons"/>
        </div>
        <!-- Doughnut Chart -->
        <div data-aos="fade-up" data-aos-once="true" class="max-h-[13rem] lg:max-h-[15rem] flex-row items-center justify-start rounded-2xl  col-span-12 hidden md:flex">
          <DouChart />
        </div>


        
      </baseSection>
    </section>

    <!-- <sendForm :visible="visible" @cancel="visible = false"/> -->

  </div>
</template>
<script setup lang="ts">

const tab = ref('swap')
const currencyFilter = ref('')
const orderType = ref('')


const appConfig = useAppConfig()

const baseColor = appConfig.theme.colors.primary
const vyreYellow = appConfig.theme.colors.vyreYellow
const vyreGreen = appConfig.theme.colors.vyreGreen
const vyreLemon = appConfig.theme.colors.vyreLemon
const vyreGrey = appConfig.theme.colors.vyreGrey


    const wallets:{amount:number;currency:string;symbol:string;imgurl}[] = [
        {
          currency: 'American dollar',
          imgurl:new URL("~/assets/img/currency/dollar.png",import.meta.url),
          amount:1500,
          symbol:'$'
        },
        {
          currency: 'British pounds',
          imgurl:new URL("~/assets/img/currency/pound.png",import.meta.url),
          amount:1200,
          symbol:"£"
        },
        {
          currency: 'European Euros',
          imgurl:new URL("~/assets/img/currency/euro.png",import.meta.url),
          amount:200,
          symbol:"€"
        },
        {
          currency: 'Nigerian Naira',
          imgurl:new URL("~/assets/img/currency/naira.png",import.meta.url),
          amount:4500,
          symbol:"₦"
        },
        
    ]

    const transactions:{type:string;source?:string;symbol:string;destination?:string;currency:string;date:string;description:string;amount:number}[]=[
      {
        type:'sent',
        destination:'hilda234@yahoo.com',
        currency:'USD',
        symbol:'$',
        date:'jan 3 2004 12:30pm',
        description:'payment for fashion services',
        amount:2400
      },
      {
        type:'received',
        source:'harveyana@yahoo.com',
        currency:'EUR',
        symbol:'€',
        date:'April 17 2014 6:30pm',
        description:'payment for house services',
        amount:5300
      },
      {
        type:'received',
        source:'harveyana@yahoo.com',
        currency:'EUR',
        symbol:'€',
        date:'April 17 2014 6:40pm',
        description:'payment for house services',
        amount:5300
      },
      {
        type:'sent',
        destination:'hilda234@yahoo.com',
        currency:'USD',
        symbol:'$',
        date:'jan 3 2004 12:30pm',
        description:'payment for fashion services',
        amount:2400
      },
      {
        type:'sent',
        destination:'hilda234@yahoo.com',
        currency:'USD',
        symbol:'$',
        date:'jan 3 2004 12:30pm',
        description:'payment for fashion services',
        amount:2400
      },
    ] 

    const persons:{name:string;imgurl:URL;email:string}[]=[
      {
        name:'Harvey Ana',
        imgurl:new URL("~/assets/img/person2.png",import.meta.url),
        email:'harveyana3@yahoo.com'
      },
      {
        name:'Hilda one',
        imgurl:new URL("~/assets/img/person.png",import.meta.url),
        email:'hildaana2@yahoo.com'
      },
      {
        name:'Emana Clems',
        imgurl:new URL("~/assets/img/person3.png",import.meta.url),
        email:'eamsclems3@gmail.com'
      }
    ]

    
</script>

<style scoped>
.baseBg{
    background-color: v-bind(baseColor);
}
.vyreGrey{
  background-color: v-bind(vyreGrey);
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
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #20DA97 -6.01%, #0cd3ff 36.87%, #20DA97 78.04%, #20DA97 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url('../assets/img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>