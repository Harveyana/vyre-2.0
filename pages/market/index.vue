<template>

  <div class="dark:bg-[#12171D] bg-gray-50 h-[80vh] rounded-2xl w-full gap-x-1 lg:gap-x-6 ">

    <!-- <div class="w-full py-3 flex items-start justify-start mb-3">

      <h1 class="Grotesque-Bold dark:text-white text-xl text-[#010109]">
        Market
      </h1>

    </div> -->



    <div class="w-full h-full flex flex-col sm:flex-row gap-4 p-2 sm:p-4 rounded-2xl ">

      <div class="w-full sm:w-[65%] flex flex-col gap-4 ">

        <div class="w-full flex items-center justify-between">

         
          <baseButton class="flex items-center bg-gray-200 rounded-xl Grotesque-Bold w-fit p-1 text-black text-[14px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 26 26"><path fill="#000" d="M8 5H3.5c-.3 0-.5.2-.5.5v13c0 .3.2.5.5.5H7c3 0 4 2 4 2h1V7c0-.1-1-2-4-2m1 10H6c-.5 0-1-.5-1-1s.5-1 1-1h3c.5 0 1 .5 1 1s-.5 1-1 1m0-4H6c-.5 0-1-.5-1-1s.5-1 1-1h3c.5 0 1 .5 1 1s-.5 1-1 1m5-4v14h1s1-2 4-2h3.5c.3 0 .5-.2.5-.5v-13c0-.3-.2-.5-.5-.5H18c-3 0-4 1.9-4 2m2 7c0-.5.5-1 1-1h3c.5 0 1 .5 1 1s-.5 1-1 1h-3c-.5 0-1-.5-1-1m0-4c0-.5.5-1 1-1h3c.5 0 1 .5 1 1s-.5 1-1 1h-3c-.5 0-1-.5-1-1"/></svg>
          </baseButton>

          <div class="flex items-center justify-center gap-2">

            <baseButton @click="showCreateModal = true" class="flex items-center bg-gray-200 rounded-xl Grotesque-Bold w-fit py-2 px-4 text-black text-[14px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"><path fill="black" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z"/></svg>
              Create
            </baseButton>

            <baseButton @click="showFilters = true" class="flex sm:hidden items-center bg-gray-200 rounded-xl Grotesque-Bold w-fit p-1 text-black text-[14px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="#000" d="M6.532 4.75h6.936c.457 0 .854 0 1.165.03c.307.028.685.095.993.348c.397.326.621.814.624 1.322c.002.39-.172.726-.34.992c-.168.27-.411.59-.695.964l-.031.04l-.01.013l-2.555 3.369c-.252.332-.315.42-.359.51a1.2 1.2 0 0 0-.099.297c-.02.1-.023.212-.023.634v4.243c0 .208 0 .412-.014.578c-.015.164-.052.427-.224.663c-.21.287-.537.473-.9.495c-.302.019-.547-.103-.69-.183c-.144-.08-.309-.195-.476-.31l-.989-.683l-.048-.033c-.191-.131-.403-.276-.562-.477a1.7 1.7 0 0 1-.303-.585c-.071-.244-.07-.5-.07-.738v-2.97c0-.422-.004-.534-.023-.634a1.2 1.2 0 0 0-.1-.297c-.043-.09-.106-.178-.358-.51L4.825 8.459l-.01-.012l-.03-.04c-.284-.375-.527-.695-.696-.965c-.167-.266-.34-.602-.339-.992a1.72 1.72 0 0 1 .624-1.322c.308-.253.686-.32.993-.349c.311-.029.707-.029 1.165-.029m.397 4l1.647 2.17l.035.047c.201.264.361.475.478.715q.154.317.222.665c.051.261.05.527.05.864v2.968c0 .158.001.247.005.314l.006.062a.2.2 0 0 0 .036.073l.041.034c.05.04.12.088.248.176l.941.65V13.21c0-.337 0-.603.051-.864q.068-.347.222-.665c.117-.24.277-.45.478-.715l.035-.046l1.646-2.17zm7.28-1.5c.195-.26.334-.45.43-.604c.08-.126.104-.188.11-.207a.22.22 0 0 0-.057-.134a1 1 0 0 0-.2-.032c-.232-.022-.556-.023-1.06-.023H6.568c-.504 0-.828 0-1.06.023a1 1 0 0 0-.2.032a.22.22 0 0 0-.057.134c.006.019.03.081.11.207c.096.155.235.344.43.604zm1.541 3.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-1.5 2.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75m-.5 2.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m0 2.5a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75"/></svg>            
            </baseButton>

          </div>
          

        </div>


        <div class="w-full bg-white/70 dark:bg-black/50 rounded-2xl h-[69vh] sm:h-[70vh] overflow-y-auto sm:border-r-2 flex flex-col items-center justify-start pb-8 sm:p-6 gap-y-2">


          <div v-if="loading" class="h-full flex flex-col gap-y-4 w-full rounded-xl items-center justify-center">

            <svg class="animate-pulse animate-bounce" width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M88.3723 71.0584C88.3723 71.0584 120.214 95.2209 168.62 50.0411C211.61 9.91705 246.712 73.2235 246.958 103.54C247.276 142.812 203.968 174.235 224.985 200.029C246.003 225.823 183.305 268.418 149.514 231.555C107.479 185.699 96.091 222.957 72.1312 222.957C54.9352 222.957 19.6297 180.229 43.4711 148.441C63.5331 121.691 52.5917 112.814 47.2931 103.54C39.6501 90.1652 57.8015 53.8624 88.3723 71.0584Z" fill="#F1F3F7"/>
              <path d="M230.367 54.5875C230.367 55.182 230.341 55.7676 230.289 56.3476C229.827 61.5877 227.331 66.4385 223.336 69.8609C219.341 73.2833 214.165 75.0052 208.916 74.6578C203.667 74.3104 198.762 71.9212 195.253 68.0022C191.744 64.0831 189.91 58.9457 190.142 53.6903C190.374 48.435 192.656 43.4796 196.497 39.8856C200.338 36.2916 205.434 34.3447 210.693 34.462C215.953 34.5793 220.957 36.7515 224.634 40.5132C228.311 44.2749 230.369 49.3271 230.367 54.5875Z" fill="#96CCB5"/>
              <path d="M212.784 56.1282C211.486 57.138 209.671 59.1491 210.219 63.6241C209.611 65.361 207.447 68.679 207.447 70.2658C207.447 71.8526 204.85 72.1418 204.561 71.7078C204.273 71.2738 204.129 65.7931 202.542 64.7833C200.955 63.7734 201.243 59.1571 201.243 59.1571C201.243 59.1571 201.82 57.4258 199.945 56.2718C198.07 55.1178 196.763 52.3767 198.427 50.7898C200.089 49.2029 195.617 48.1931 195.04 47.0391C194.795 46.5491 193.854 45.4522 192.856 44.3587C195.014 40.7032 198.269 37.8201 202.158 36.1184C203.632 37.6584 204.908 39.6297 204.561 41.7013C204.619 42.7111 209.002 44.298 206.855 46.4613C204.706 48.6253 201.789 51.6553 206.855 52.6646C211.919 53.6759 214.083 55.1179 212.784 56.1282Z" fill="#34DA97"/>
              <path d="M224.308 40.1874C223.229 42.4638 220.523 44.2987 218.988 44.2987C217.257 42.4227 213.506 45.0202 213.154 41.9906C212.949 40.2249 214.963 37.4838 216.68 35.4989C219.542 36.47 222.149 38.0723 224.308 40.1874Z" fill="#34DA97"/>
              <path d="M230.289 56.3476C229.86 61.3289 227.586 65.9704 223.913 69.3628C223.246 68.7251 222.684 67.9779 222.883 67.3807C223.316 66.0823 225.076 63.3413 224.773 61.6102C224.49 59.9944 225.982 55.1069 230.289 56.3476Z" fill="#34DA97"/>
              <path d="M197.529 156.356C196.885 160.33 195.818 164.225 194.348 167.973C184.765 192.519 159.059 207.896 132.007 203.477C117.072 201.032 103.718 192.757 94.8825 180.47C86.0465 168.183 82.4508 152.891 84.8857 137.954C85.0095 137.196 85.1538 136.432 85.3045 135.689C91.4078 105.828 120.059 85.8754 150.408 90.8326C159.464 92.2967 168.03 95.9351 175.371 101.436C177.783 103.237 180.047 105.23 182.139 107.394C188.352 113.785 192.98 121.543 195.653 130.046C198.326 138.548 198.968 147.559 197.529 156.355V156.356Z" fill="#33BC85" fill-opacity="0.49"/>
              <path d="M194.348 167.973C183.48 174.969 170.646 181.441 156.497 186.792C142.09 192.238 127.942 195.918 114.975 197.845C84.5034 202.388 60.5728 197.312 55.1808 183.049C50.1313 169.728 62.5511 151.684 85.3046 135.689C85.154 136.432 85.0096 137.197 84.8859 137.954C84.4312 140.728 84.1844 143.532 84.1477 146.343C71.0381 156.465 64.2157 166.378 66.9051 173.489C69.5199 180.403 80.6218 183.345 96.4152 182.511C111.855 181.698 131.779 177.25 152.634 169.366C170.67 162.539 186.487 154.241 198.264 145.905C214.031 134.758 222.582 123.542 219.631 115.718C216.596 107.685 202.115 105.008 182.139 107.395C180.047 105.23 177.783 103.238 175.371 101.437C203.333 98.2051 224.887 103.486 229.967 116.92C235.409 131.288 220.567 151.124 194.348 167.973Z" fill="#34DA97"/>
            </svg>
                
          </div>

          <div v-else-if="!loading && !allOrders.length" class="w-full h-full flex flex-col items-center justify-center gap-y-2">

            <svg class="animate-pulse animate-bounce" width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M88.3723 71.0584C88.3723 71.0584 120.214 95.2209 168.62 50.0411C211.61 9.91705 246.712 73.2235 246.958 103.54C247.276 142.812 203.968 174.235 224.985 200.029C246.003 225.823 183.305 268.418 149.514 231.555C107.479 185.699 96.091 222.957 72.1312 222.957C54.9352 222.957 19.6297 180.229 43.4711 148.441C63.5331 121.691 52.5917 112.814 47.2931 103.54C39.6501 90.1652 57.8015 53.8624 88.3723 71.0584Z" fill="#F1F3F7"/>
              <path d="M230.367 54.5875C230.367 55.182 230.341 55.7676 230.289 56.3476C229.827 61.5877 227.331 66.4385 223.336 69.8609C219.341 73.2833 214.165 75.0052 208.916 74.6578C203.667 74.3104 198.762 71.9212 195.253 68.0022C191.744 64.0831 189.91 58.9457 190.142 53.6903C190.374 48.435 192.656 43.4796 196.497 39.8856C200.338 36.2916 205.434 34.3447 210.693 34.462C215.953 34.5793 220.957 36.7515 224.634 40.5132C228.311 44.2749 230.369 49.3271 230.367 54.5875Z" fill="#96CCB5"/>
              <path d="M212.784 56.1282C211.486 57.138 209.671 59.1491 210.219 63.6241C209.611 65.361 207.447 68.679 207.447 70.2658C207.447 71.8526 204.85 72.1418 204.561 71.7078C204.273 71.2738 204.129 65.7931 202.542 64.7833C200.955 63.7734 201.243 59.1571 201.243 59.1571C201.243 59.1571 201.82 57.4258 199.945 56.2718C198.07 55.1178 196.763 52.3767 198.427 50.7898C200.089 49.2029 195.617 48.1931 195.04 47.0391C194.795 46.5491 193.854 45.4522 192.856 44.3587C195.014 40.7032 198.269 37.8201 202.158 36.1184C203.632 37.6584 204.908 39.6297 204.561 41.7013C204.619 42.7111 209.002 44.298 206.855 46.4613C204.706 48.6253 201.789 51.6553 206.855 52.6646C211.919 53.6759 214.083 55.1179 212.784 56.1282Z" fill="#34DA97"/>
              <path d="M224.308 40.1874C223.229 42.4638 220.523 44.2987 218.988 44.2987C217.257 42.4227 213.506 45.0202 213.154 41.9906C212.949 40.2249 214.963 37.4838 216.68 35.4989C219.542 36.47 222.149 38.0723 224.308 40.1874Z" fill="#34DA97"/>
              <path d="M230.289 56.3476C229.86 61.3289 227.586 65.9704 223.913 69.3628C223.246 68.7251 222.684 67.9779 222.883 67.3807C223.316 66.0823 225.076 63.3413 224.773 61.6102C224.49 59.9944 225.982 55.1069 230.289 56.3476Z" fill="#34DA97"/>
              <path d="M197.529 156.356C196.885 160.33 195.818 164.225 194.348 167.973C184.765 192.519 159.059 207.896 132.007 203.477C117.072 201.032 103.718 192.757 94.8825 180.47C86.0465 168.183 82.4508 152.891 84.8857 137.954C85.0095 137.196 85.1538 136.432 85.3045 135.689C91.4078 105.828 120.059 85.8754 150.408 90.8326C159.464 92.2967 168.03 95.9351 175.371 101.436C177.783 103.237 180.047 105.23 182.139 107.394C188.352 113.785 192.98 121.543 195.653 130.046C198.326 138.548 198.968 147.559 197.529 156.355V156.356Z" fill="#33BC85" fill-opacity="0.49"/>
              <path d="M194.348 167.973C183.48 174.969 170.646 181.441 156.497 186.792C142.09 192.238 127.942 195.918 114.975 197.845C84.5034 202.388 60.5728 197.312 55.1808 183.049C50.1313 169.728 62.5511 151.684 85.3046 135.689C85.154 136.432 85.0096 137.197 84.8859 137.954C84.4312 140.728 84.1844 143.532 84.1477 146.343C71.0381 156.465 64.2157 166.378 66.9051 173.489C69.5199 180.403 80.6218 183.345 96.4152 182.511C111.855 181.698 131.779 177.25 152.634 169.366C170.67 162.539 186.487 154.241 198.264 145.905C214.031 134.758 222.582 123.542 219.631 115.718C216.596 107.685 202.115 105.008 182.139 107.395C180.047 105.23 177.783 103.238 175.371 101.437C203.333 98.2051 224.887 103.486 229.967 116.92C235.409 131.288 220.567 151.124 194.348 167.973Z" fill="#34DA97"/>
            </svg>

            <span class="text-[16px] Grotesque-Regular text-[#686767] text-center ">
              You have no order for now. 
            </span>

          </div>

          <div v-else class="h-full flex flex-col gap-y-4 w-full rounded-xl items-center justify-start">

            <BaseOrder
              v-for="order in allOrders"
              :key="order.id"
              :order="order"
              @click="openOrder(order.id)" 
            />

          </div>


        </div>

      </div>


      <!-- right bar Order History-->


      <div class="hidden w-full sm:w-[35%] sm:flex flex-col items-end gap-y-4">

        <OrderFilters @update="(entry:any)=>initFilter(entry)"/>
        
      </div>
      

    </div>

    <SideLog :visible="showView">

      <OrderSummary :orderId="orderId" @close="showView = false" />

      <!-- <div class="w-full dark:bg-sky-900/75 flex flex-col h-fit lg:w-[280px] gap-y-4">
                
                <div class="w-full flex items-center justify-between border-b border-gray-300 pb-2">

                    <div class="flex flex-col items-start justify-center gap-y-[2px]">
                      <h1 class="Grotesque-Bold dark:text-white text-xl text-[#010109]">
                        Order Summary
                      </h1>
                    </div>

                    <button @click="showView = false">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                          <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
                      </svg>
                    </button>
                </div>

                <div class="flex flex-col items-center bg- justify-center relative rounded-xl p-2 w-full h-full">

                  <div class="relative bg-[#F6F0D8] hover:bg-[#d9d5d5] border-2 hover:border-black cursor-pointer w-full h-1/2 p-3 sm:p-4 flex flex-col gap-y-2 items-start justify-between rounded-2xl " >

                    <img src="~/assets/img/currency/bitcoin.svg" class=" w-16 sm:w-12 rounded-full mb-4 border-8 border-white"/>


                    <div class="flex flex-col items-start justify-center">
                      <span class="text-black Grotesque-Bold text-2xl sm:text-2xl">
                          <span class="truncate">0.45</span> <span class="text-sm">BTC</span>
                      </span>
                      <span class="text-sm truncate Grotesque-Regular">
                        ₦ 1203
                      </span>
                    </div>

                  </div>

                  <svg class="my-[-20px] z-10 bg-white p-2 rounded-full" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="black" d="M12.984 15a1 1 0 0 0 1.848.53l2.688-2.687a1 1 0 0 0-1.415-1.414l-1.12 1.12V5a1 1 0 0 0-2 0zm-1.969-6a1 1 0 0 0-1.848-.53L6.48 11.157a1 1 0 1 0 1.414 1.414l1.121-1.12V19a1 1 0 1 0 2 0z"/></svg>

                  <div class="relative bg-[#F6F0D8] hover:bg-[#d9d5d5] border-2 hover:border-black cursor-pointer w-full h-1/2 p-3 sm:p-4 flex flex-col gap-y-2 items-start justify-between rounded-2xl " >

                    <img src="~/assets/img/currency/litecoin.svg" class=" w-16 sm:w-12 rounded-full mb-4 border-8 border-white"/>


                    <div class="flex flex-col items-start justify-center">
                      <span class="text-black Grotesque-Bold text-2xl sm:text-2xl">
                          <span class="truncate">0.45</span> <span class="text-sm">LTC</span>
                      </span>
                      <span class="text-sm truncate Grotesque-Regular">
                        ₦ 1203
                      </span>
                    </div>

                  </div>


                </div>
              
            </div> -->

    </SideLog>

    <BaseDialogue :visible="showCreateModal" class="bg-gray-200">

      <div class="relative flex flex-col lg:w-[350px] gap-y-2 bg-gray-200">
            
            <div class=" w-full flex items-end justify-end  ">
    
              <button @click="showCreateModal = false">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                  <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
                </svg>
              </button>
            </div>

            <OrderForm
              @close="showCreateModal = false" 
            />
    
      </div>


    </BaseDialogue>

    <BaseDialogue :visible="showFilters">

      <div class="relative flex flex-col lg:w-[350px]">
            
            <div class=" w-full flex items-end justify-end bg-white ">

              <button @click="showFilters = false">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                  <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
                </svg>
              </button>
            </div>

            <OrderFilters @update="(entry:any)=>initFilter(entry)" />

      </div>


    </BaseDialogue>

    


  </div>

</template>

<script setup lang="ts">

  import { storeToRefs } from 'pinia';
  import { useOrderStore } from '~/store/order';
  const { getOrders} = useOrderStore();

  // const { loading } = storeToRefs(useOrderStore());

  const config = useRuntimeConfig();
  const baseURL = config.public.baseUrl;

// const token = useCookie('token');

// onMounted(async()=>{
//   const { data, pending, error }: any = await $fetch('/fetchBalance', {
//     method: 'post',
//     body: {
//       idToken: token.value
//     }
//   });
// })

const route = useRoute()
const router = useRouter()
const showView = ref(false)
const orderId = ref('')
const showCreateModal = ref(false)
const showFilters = ref(false)
const loading = ref(false)

const tab = ref('BUY')

const allOrders = ref<any[]>([])

const openOrder = (id:string)=>{
  orderId.value = id
  showView.value = true
}

const selectedFilters = reactive({
  cursor:'',
  priceMin: null,
  priceMax: null,
  type:'',
  pairId:''
})

const fetchData = async(entry:{cursor?:string, type?:string, pairId?:string, priceMin?:number|null, priceMax?:number|null})=>{
  loading.value = true
  const result = await getOrders(entry)
  console.log(result)

  if(result?.success){
    // allOrders.value = []
    allOrders.value.push(...result?.orders)
    selectedFilters.cursor = result?.cursor
  }
  loading.value = false
}

const initFilter = async(entry:any)=>{
  console.log(entry)
  showFilters.value = false

  loading.value = true
  const result = await getOrders(entry)
  console.log(result)

  if(result?.success){
    allOrders.value = []
    allOrders.value.push(...result?.orders)
    selectedFilters.cursor = result?.cursor
  }
  loading.value = false
}

onMounted(async()=>{
  await fetchData({})
})


    
</script>

