<template>

  <div class="w-full gap-x-1 lg:gap-x-6 px-4 sm:px-10">

    <div class="w-full py-3 flex items-center justify-between">

      <h1 class="Grotesque-Bold text-xl text-[#010109]">
        Hello Anayo
      </h1>

      <PopoverRoot :open="toggleState">

        <PopoverTrigger
            class="rounded-lg w-fit h-fit inline-flex items-center justify-center px-3 py-2 border border-grey-200 bg-[#F9F9F9] py-1  outline-none hover:bg-green3"
            aria-label="dropdown menu options"
          >
            <div @click="toggleState = true" class="flex items-center justify-center cursor-pointer text-white gap-2">

              <img src="~/assets/img/filter.svg" class="w-6"/>
              <span class="text-sm capitalize truncate text-black poppinsMedium">
                Filter By
              </span>
            </div>
            <svg class=' cursor-pointer w-6 md:w-7 dark:fill-white dark:stroke-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>
        </PopoverTrigger>

        <PopoverPortal>
          <PopoverContent
            side="bottom"
            :side-offset="5"
            class="min-w-[340px] z-20 mx-4 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          >
            <div class="flex flex-col group capitalize text-sm cursor-pointer leading-none text-black rounded-[3px] items-center gap-y-4 px-3 pb-7 pt-4 relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                <div class="w-full flex items-center justify-between">

                  <h1 class="Grotesque-Bold text-xl text-[#010109]">
                    Filter
                  </h1>

                  <button class="w-fit" @click="toggleState = false">
                    <img src="~/assets/img/close.svg" class="w-6"/>
                  </button>

                </div>

                <div class="flex items-center gap-x-3.5">

                  <button class="w-fit hover:bg-[#F9F9FC] border border-[#F9F9FC] p-4 rounded-lg focus:outline-none focus:shadow-outline">
                    <h1 class="Grotesque-Regular flex-none text-[13px] text-[#010109]">
                      Last 7days
                    </h1>
                  </button>

                  <button class="w-fit hover:bg-[#F9F9FC] border border-[#F9F9FC] p-4 rounded-lg focus:outline-none focus:shadow-outline">
                    <h1 class="Grotesque-Regular flex-none text-[13px] text-[#010109]">
                      Last 30 Days
                    </h1>
                  </button>

                  <button class="w-fit hover:bg-[#F9F9FC] border border-[#F9F9FC] p-4 rounded-lg focus:outline-none focus:shadow-outline">
                    <h1 class="Grotesque-Regular text-[13px] text-[#010109]">
                      Custom
                    </h1>
                  </button>

                </div>

                <button class="w-full hover:bg-[#F9F9FC] border border-[#F9F9FC] p-4 rounded-lg focus:outline-none focus:shadow-outline">
                  <h1 class="Grotesque-Regular text-left text-[13px] text-[#010109]">
                    All
                  </h1>
                </button>

                <button class="w-full flex items-start justify-start hover:bg-[#F9F9FC] border border-[#F9F9FC] p-4 rounded-lg focus:outline-none focus:shadow-outline">
                  <!-- <h1 class="Grotesque-Regular text-left text-[13px] text-[#010109]">
                    Select Start Date
                  </h1> -->
                  <inputDate operation="Select Start Date" @updateValue="(date)=>{startDate = date}" />
                </button>

                <button class="w-full hover:bg-[#F9F9FC] border border-[#F9F9FC] p-4 rounded-lg focus:outline-none focus:shadow-outline">
                  <h1 class="Grotesque-Regular text-left text-[13px] text-[#010109]">
                    <inputDate operation=" Select End Date" @updateValue="(date)=>{EndDate = date}" />
                  </h1>
                </button>
                          
            </div>

            <PopoverArrow class="fill-white" />
          </PopoverContent>

        </PopoverPortal>
      </PopoverRoot>

    </div>

    <!-- verification bar -->

    <div class="w-full bg-bar flex flex-col items-start px-6 py-7 gap-y-1 rounded-lg mb-5">

      <h1 class="Grotesque-Semi-Bold gap-x-4 text-[18px] sm:text-[17px] text-white">
        Currently Verifying your account
      </h1>

      <div class="w-full flex flex-col sm:flex-row items-start justify-between gap-y-4">
        <h4 class="Grotesque-Light text-xs sm:text-[12px] text-white">
          We are currently verifying your account, and this should take 2-3 business working days.
        </h4>

        <h4 class="w-full sm:w-fit Grotesque-Light text-xs sm:text-[12px] text-white mr-20">
          If it takes longer  <span class="text-[#367bad] Grotesque-Semi-Bold cursor-pointer">Contact Support</span>
        </h4>
      </div>
      

    </div>

    <!-- Top bar ends here -->

    <div class="w-full flex flex-col sm:flex-row items-center justify-start gap-x-3 gap-y-3">
      <!-- balance -->
      <div class="w-full sm:w-[33%] flex flex-col items-start justify-between rounded-lg p-3 gap-y-7 border border-[#F4F4FB]">
        <div class="flex flex-col items-start gap-y-1">
          <h4 class="Grotesque-Light text-xs sm:text-[13px] text-[#737373]">
            Wallet Balance
          </h4>
          <h1 class="Grotesque-Bold flex items-center justify-center gap-x-4 text-xl sm:text-[25px] text-[#010109]">
            ₦256,789.87
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.94187 2.55806C2.69779 2.31398 2.30206 2.31398 2.05799 2.55806C1.81391 2.80214 1.81391 3.19786 2.05799 3.44194L4.28104 5.665C3.25923 6.34883 2.49311 7.17008 1.96428 7.96973C1.3701 8.86821 1.04167 9.79275 1.04167 10.5C1.04167 11.0513 1.24103 11.7254 1.59412 12.4033C1.95305 13.0924 2.49201 13.8272 3.22191 14.5009C4.6892 15.8553 6.92307 16.9583 10 16.9583C11.8164 16.9583 13.3425 16.5739 14.5923 15.9762L17.058 18.4419C17.3021 18.686 17.6978 18.686 17.9419 18.4419C18.1859 18.1979 18.1859 17.8021 17.9419 17.5581L2.94187 2.55806ZM13.6457 15.0296L11.7232 13.1072C11.2292 13.4342 10.6364 13.625 9.99993 13.625C8.27404 13.625 6.87493 12.2259 6.87493 10.5C6.87493 9.86353 7.06572 9.27068 7.39274 8.77669L5.18503 6.56899C4.20068 7.18233 3.48282 7.93961 3.00691 8.65924C2.49018 9.4406 2.29167 10.1251 2.29167 10.5C2.29167 10.782 2.40481 11.2538 2.70276 11.8259C2.99488 12.3867 3.4455 13.0062 4.06976 13.5824C5.31081 14.728 7.2436 15.7083 10 15.7083C11.4343 15.7083 12.643 15.4429 13.6457 15.0296ZM8.30754 9.6915C8.19039 9.93619 8.12493 10.2102 8.12493 10.5C8.12493 11.5355 8.9644 12.375 9.99993 12.375C10.2897 12.375 10.5637 12.3095 10.8084 12.1924L8.30754 9.6915ZM10 5.29167C9.13285 5.29167 8.34913 5.38869 7.64443 5.55606C7.30859 5.63582 6.97168 5.42823 6.89192 5.0924C6.81216 4.75656 7.01975 4.41965 7.35558 4.33989C8.15811 4.14928 9.03892 4.04167 10 4.04167C13.0769 4.04167 15.3108 5.14466 16.7781 6.49908C17.508 7.17284 18.047 7.90757 18.4059 8.59671C18.759 9.27464 18.9583 9.94867 18.9583 10.5C18.9583 11.509 18.288 13.0042 17.0126 14.2759C16.7682 14.5196 16.3725 14.5191 16.1288 14.2746C15.885 14.0302 15.8856 13.6345 16.13 13.3907C17.2626 12.2615 17.7083 11.0659 17.7083 10.5C17.7083 10.218 17.5952 9.74619 17.2972 9.17413C17.0051 8.61326 16.5545 7.99383 15.9302 7.41759C14.6892 6.272 12.7564 5.29167 10 5.29167Z" fill="#737373"/>
            </svg>
          </h1>
        </div>
        
        

        <div class="w-full flex items-center justify-center gap-x-3">
          <baseButton class="bg-[#0050A8] Grotesque-Light w-[60%] py-1.5 px-4 text-white">
            Fund Wallet
          </baseButton>

          <baseButton class="bg-[#F4F4FB] Grotesque-Light w-[40%] py-1.5 px-4 text-[#737373]">
            View History
          </baseButton>
        </div>
        
      </div>

      <!-- completed trips -->

      <div class="w-full sm:w-[33%] flex flex-col items-start justify-center rounded-lg p-3 gap-y-7 border border-[#F4F4FB]">
        <div class="flex flex-col items-start gap-y-2">
          <h4 class="Grotesque-Light text-xs sm:text-[13px] text-[#737373]">
            Completed Trips
          </h4>
          <h1 class="Grotesque-Bold flex items-center justify-center gap-x-4 text-xl sm:text-[25px] text-[#010109]">
            28
          </h1>
        </div>
        
        

        <!-- <div class="w-full flex items-center justify-start gap-x-2"> -->
          

          <h4 class="w-full gap-x-1.5 flex items-center justify-start Grotesque-Regular text-lg sm:text-[13px] text-[#18B471]">
            <svg class="mb-1" width="10" height="12" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.13397 1C4.51887 0.333334 5.48113 0.333335 5.86603 1L9.33013 7C9.71503 7.66667 9.2339 8.5 8.4641 8.5L1.5359 8.5C0.766097 8.5 0.284972 7.66667 0.669872 7L4.13397 1Z" fill="#18B471"/>
            </svg>

            2%
          </h4>
          
        <!-- </div> -->
        
      </div>

      <!-- ongoing trips -->

      <div class="w-full sm:w-[33%] flex flex-col items-start justify-center rounded-lg p-3 gap-y-7 border border-[#F4F4FB]">
        <div class="flex flex-col items-start gap-y-2">
          <h4 class="Grotesque-Light text-xs sm:text-[13px] text-[#737373]">
            Ongoing Trips
          </h4>
          <h1 class="Grotesque-Bold flex items-center justify-center gap-x-4 text-xl sm:text-[25px] text-[#010109]">
            28
          </h1>
        </div>
        
        

        <h4 class="w-full gap-x-1.5 flex items-center justify-start Grotesque-Regular text-lg sm:text-[13px] text-[#F04438]">
          <svg class="mb-1" width="10" height="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M5.86603 7.5C5.48113 8.16667 4.51887 8.16667 4.13397 7.5L0.669873 1.5C0.284973 0.833334 0.766099 0 1.5359 0H8.4641C9.2339 0 9.71503 0.833333 9.33013 1.5L5.86603 7.5Z" fill="#F04438"/>
          </svg>

            2%
        </h4>
        
      </div>


    </div>

    <!-- The graphs and Quick Actions -->

    <div class="w-full flex flex-col sm:flex-row items-start justify-center mt-8 gap-x-3 gap-y-4">

      <!-- The Graph -->
      <div class="w-full sm:w-[65%] flex flex-col items-start justify-center gap-y-3">
        <h4 class="Grotesque-Regular text-sm sm:text-[16px] text-[#2C2929]">
          Transactions Volume
        </h4>

        <LineChart />

      </div>

      <!-- The Quick Actions -->
      <div class="w-full sm:w-[35%] flex flex-col items-start justify-center gap-y-3">
        <h4 class="Grotesque-Regular text-sm sm:text-[16px] text-[#2C2929]">
          Quick Actions
        </h4>

        <div class="w-full flex flex-col items-center justify-center gap-y-3">

          <!-- Actions 1 -->
          <div class="w-full bg-truck border border-gray-400 rounded-lg p-3 flex flex-col items-start">
            <h1 class="Grotesque-Light text-sm sm:text-[16px] text-white">
              Book Haulage
            </h1>

            <h4 class="Grotesque-Thin text-xs sm:text-[11px] text-white">
              For heavy duty items
            </h4>

            <baseButton class="bg-[#F7F7F7] Grotesque-Light text-xs w-fit py-1 px-4 text-[#737373]">
              Book Now
            </baseButton>


          </div>

          <!-- Action 2 -->
          <div class="w-full bg-bike border border-gray-400 rounded-lg p-3 flex flex-col items-start">
            <h1 class="Grotesque-Light text-sm sm:text-[16px] text-white">
              Book Dispatch
            </h1>

            <h4 class="Grotesque-Thin text-xs sm:text-[11px] text-white">
              Deliver small parcels with ease
            </h4>

            <baseButton class="bg-[#F7F7F7] Grotesque-Light text-xs w-fit py-1 px-4 text-[#737373]">
              Book Now
            </baseButton>


          </div>

          <!-- Action 3 -->
          <div class="w-full bg-car border border-gray-400 rounded-lg p-3 flex flex-col items-start">
            <h1 class="Grotesque-Light text-sm sm:text-[16px] text-white">
              Book Ride
            </h1>

            <h4 class="Grotesque-Thin text-xs sm:text-[11px] text-white">
              Book a ride and get picked up
            </h4>

            <baseButton class="bg-[#F7F7F7] Grotesque-Light text-xs w-fit py-1 px-4 text-[#737373]">
              Book Now
            </baseButton>


          </div>


        </div>

      </div>
    </div>

  </div>

</template>

<script setup lang="ts">

// const token = useCookie('token');

// onMounted(async()=>{
//   const { data, pending, error }: any = await $fetch('/fetchBalance', {
//     method: 'post',
//     body: {
//       idToken: token.value
//     }
//   });
// })

const toggleState = ref(false)
const startDate = ref();
const EndDate = ref();

// const toggle = (event: any) => {
//     menu.value.toggle(event);
// };

    
</script>

<style scoped>
.bg-truck {
  background: url('~/assets/img/truckBg.svg');
  background-color: #0050A8;
  background-repeat: no-repeat;
  /* background-size: auto; */
  background-size: contain;
  background-position: right center;
}

.bg-bike {
  background: url('~/assets/img/bikeBg.svg');
  background-color: #0C747F;
  background-repeat: no-repeat;
  /* background-size: auto; */
  background-size: contain;
  background-position: right center;
}

.bg-car {
  background: url('~/assets/img/carBg.svg');
  background-color: #4EACEA;
  background-repeat: no-repeat;
  /* background-size: auto; */
  background-size: contain;
  background-position: right center;
}

.bg-bar {
  background: url('~/assets/img/looperBg.svg');
  background-color: #000C23;
  background-repeat: no-repeat;
  /* background-size: auto; */
  background-size: contain;
  background-position: 80%;
}
</style>