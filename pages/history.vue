<template>
  <!-- <div class="w-full"> -->
    <!-- <div class=" w-full" style="border-radius: 12px;"> -->

     

    <div  class="col-span-12 rounded-2xl mt-32 sm:mt-0 flex flex-col items-center justify-center sm:pt-16 lg:pt-12">


        <!-- <h2 v-if="mode ==''" class="text-lg sm:text-2xl text-center mb-8 w-full truncate poppinsBold">
            What Action for now ?
        </h2> -->


        <div class="w-fit p-2 flex flex-col flex-wrap items-center justify-center gap-3">


          <div class="w-fit flex flex-col items-start justify-between sm:justify-center sm:gap-x-16 border px-4 rounded-2xl py-4">

            <div class="flex flex items-start justify-center">
              
              <div class="flex flex-col">
                <h1 class="text-xl flex truncate text-black poppinsBold">
                  Vyre Transfer <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3zM8 22l1-7H4l9-13h2l-1 8h6L10 22zm3.775-9.75"/></svg>
                </h1>
                <span class="text-xs truncate poppinsRegular ml-2">
                  zero fee
                </span>
                <span class="text-xs truncate poppinsRegular ml-2">
                  Instant confirmation
                </span>
              </div>
              
              <img src="~/assets/img/currency/bitcoin.svg" class="w-16 sm:w-20 bg-[#bfcbdf] rounded-full border-2 border-white"/>
            
            </div>

            <div class="flex mt-4 rounded-full px-2 py-1 items-center justify-center text-white gap-2 bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192c.373-.03.748-.057 1.124-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9"/></svg>
                <span class="text-xs truncate text-black poppinsBold">
                  harveyana3@gmail.com
                </span>
            </div>

            <span class="text-xs self-end bg-gray-200 rounded-full py-1 px-2 truncate poppinsLight mt-4">
                    Recommended
            </span>


          </div>


          <div class="w-fit max-w-[80%] flex flex-col items-start justify-between sm:justify-center sm:gap-x-16 border px-4 rounded-2xl py-4">


            <div id="qrcode" class="w-full flex mt-4 rounded-full items-center justify-center bg-gray-200">
              <!-- <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="6em" viewBox="0 0 24 24"><path fill="black" fill-rule="evenodd" d="M5 5h4.5v4.5H5zm1.5 1.5V8H8V6.5zm8-1.5H19v4.5h-4.5zM16 6.5V8h1.5V6.5zm-11 8h4.5V19H5zM6.5 16v1.5H8V16z" clip-rule="evenodd"/><path fill="black" d="M5 11.25h1.5v1.5H5zm3 0h1.5v1.5H8zm3.167 0h1.5v1.5h-1.5zm0 3.125h1.5v1.5h-1.5zm0 3.125h1.5V19h-1.5zm0-9.375h1.5v1.5h-1.5zm0-3.125h1.5v1.5h-1.5zm3.166 6.25h1.5v1.5h-1.5zm3.167 0H19v1.5h-1.5zm-3.167 3.125h1.5v1.5h-1.5zm3.167 0H19v1.5h-1.5zM14.333 17.5h1.5V19h-1.5zm3.167 0H19V19h-1.5z"/></svg> -->
            </div>

            <div class="w-full flex mt-4 rounded-full px-2 py-1 items-center justify-center text-white gap-2 bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192c.373-.03.748-.057 1.124-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9"/></svg>
                <span class="text-xs truncate text-black poppinsBold">
                  1Pnn6uNNUA7pE67ab2t5RoWWF2hYDpbnW1
                </span>
            </div>

            <!-- <DropdownMenuTrigger
                    class="rounded-full w-fit h-fit inline-flex items-center justify-center text-grass11 bg-gray-200 py-1  outline-none hover:bg-green3"
                    aria-label="dropdown menu options"
                  >
                    <div @click="toggle" class="flex items-center justify-center cursor-pointer text-white gap-2">
                      <img src="~/assets/img/currency/bitcoin.svg" class="w-7 sm:w-8 bg-[#bfcbdf] rounded-full border-2 border-white"/>
                      <span class="text-sm sm:text-lg truncate text-black poppinsBold">
                        BTC
                      </span>
                    </div>
                    <svg class=' cursor-pointer w-6 md:w-7 dark:fill-white dark:stroke-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>
            </DropdownMenuTrigger> -->



                

            </div>



          </div>

        <!-- </div> -->

        <!-- <Send v-else /> -->
  
    
  </div>
</template>
<script setup lang="ts">
// Define QR code data
// import { useToast } from "primevue/usetoast";

    // type person = {
    // email: string;
    // name: string;
    // imgurl:URL;
    // }

    // const route = useRoute()
    // const router = useRouter()


  //  watch(() => receipient, (newSearchTerm, oldSearchTerm) => {
  //     Call your search function here with the new search term
  //     if (receipient.value.trim() !== '') {
  //        showList.value = true
  //       // Call your search function here with the new search term
  //       // search(newSearchTerm);
  //     }else{
  //           showList.value = false
  //         }
  //       });

  


</script>

<style scoped>

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield; /* Firefox */
}

</style>