<template>

  <div class="w-full px-4 grid grid-cols-12 lg:gap-x-8 sm:px-10">

    <div class="col-span-12 py-3 flex items-start justify-start mb-3">

      <h1 class="Grotesque-Bold text-xl text-[#010109]">
        My Trips
      </h1>

    </div>


    <!-- lower band -->


    <div class="col-span-12 lg:col-span-6 flex flex-col items-center justify-center">

      
      <div class="w-full flex flex-col items-center justify-center gap-y-6">

        <!-- map -->
        <div class="w-full h-[25vh]">
          <GoogleMap
            api-key="AIzaSyBBYUi-MAFpiGyHI67x-xCrAWArKPm4n7w"
            style="width: 100%; height: 100%"
            :center="center"
            :zoom="15"
            :disable-default-ui="true"
            :clickable-icons="false"
            >
            <!-- <Marker :options="{ position: center }" /> -->
            <Polyline :options="flightPath" />
          </GoogleMap>

        </div>

        <!-- trip details -->

        <div class="w-full flex flex-col gap-y-6">

          <div class="flex items-start justify-between">

            <div class="flex flex-col items-start justify-center">

              <h1 class="Grotesque-Regular flex-none text-[16px] text-[#010109]">
                Trip 2897
              </h1>

              <h3 class="Grotesque-Regular text-[14px] text-[#737373]">
                Oct 21, 10:24a.m
              </h3>

            </div>

            <h1 class="Grotesque-Regular px-2 py-1 rounded-md bg-[#F1F0FE] flex-none text-[12px] text-[#0050A8]">
              202km, 11hr 14mins
            </h1>

          </div>


          <!-- trip info -->
          <div>

            <div class="border border-[#F4F4FB] px-6 pt-7 pb-4">

              <!-- trip timeline -->

              <div class="flex items-start justify-between">

                <div class="flex flex-col items-center justify-center gap-y-4 timeline">
                  <!-- timelines -->
                  
                    <div class="flex items-start justify-center relative gap-x-4 -ml-3">
                      <svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="10" height="10" rx="5" fill="#00B3EF"/>
                      </svg>

                      <div class="flex flex-col items-start justify-center">

                        <h1 class="Grotesque-Regular flex-none text-[14px] text-[#010109]">
                          Km 12, Lekki Expressway
                        </h1>

                        <h3 class="Grotesque-Regular text-[12px] text-[#737373]">
                          Dispatch time: 12:30pm  
                        </h3>

                      </div>


                    </div>

                    <div class="flex items-start justify-center relative gap-x-4 -ml-3 -mb-7 overflow-hidden">
                      <svg width="20" height="20" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="9" height="10" fill="#352D9C"/>
                      </svg>

                      <div class="flex flex-col items-start justify-center">

                        <h1 class="Grotesque-Regular flex-none text-[14px] text-[#010109]">
                          2A, Adewale Kuku, Lekki
                        </h1>

                        <h3 class="Grotesque-Regular text-[12px] text-[#737373]">
                          Delivery time: 2:30pm 
                        </h3>

                      </div>

                  </div>
                  

                </div>

                <h1 class="Grotesque-Regular flex-none text-[14px] text-[#66C27C]">
                  Completed
                </h1>


              </div>

              <h1 @click="openTimeLine = !openTimeLine" class="Grotesque-Regular cursor-pointer flex-none mt-10 text-[14px] text-[#0050A8]">
                <span v-if="openTimeLine">Close Trip Timeline</span>
                <span v-else>View Trip Timeline</span>
              </h1>

              <div v-if="openTimeLine" class="lg:hidden w-full flex items-start justify-start py-6">

                <Timeline/>

              </div>

            </div>

            <Separator
              class="bg-[#F7F7F7] data-[orientation=horizontal]:h-[10px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"
            />

            <div class="border border-[#F4F4FB] px-4 py-5">

              <div class="border border-[#F4F4FB] flex flex-col  justify-center p-4 gap-y-3">
                
                <div class="flex items-start justify-between">

                  <h1 class="Grotesque-Regular flex-none text-[16px] text-[#737373]">
                    Sub total
                  </h1>

                  <h3 class="Grotesque-Regular text-[16px] text-[#1A1A1A]">
                    ₦15,000 
                  </h3>

                </div>

                <div class="flex items-start justify-between">

                  <h1 class="Grotesque-Regular flex-none text-[16px] text-[#737373]">
                    Service Fee
                  </h1>

                  <h3 class="Grotesque-Regular text-[16px] text-[#1A1A1A]">
                    ₦150,000 
                  </h3>

                </div>

                <div class="flex items-start justify-between">

                  <h1 class="Grotesque-Regular flex-none text-[16px] text-[#737373]">
                    Total
                  </h1>

                  <h3 class="Grotesque-Regular text-[16px] text-[#1A1A1A]">
                    ₦1,500,000
                  </h3>

                </div>

                <div class="flex items-start justify-between">

                  <h1 class="Grotesque-Regular flex-none text-[16px] text-[#737373]">
                    Payment Method
                  </h1>

                  <h3 class="Grotesque-Regular text-[16px] text-[#1A1A1A]">
                    Wallet
                  </h3>

                </div>


              </div>

              <!-- rider  -->

              <div class="flex items-start my-6 justify-between">

                <div class="flex items-center gap-x-3">

                  <img src="~/assets/img/rider.svg" class=""/>

                  <div class="flex flex-col items-start justify-center">
                    <h3 class="Grotesque-Regular text-[14px] text-[#737373]">
                      Sophia Anderson
                    </h3>

                    <h3 class="Grotesque-Regular text-[12px] text-[#0050A8] flex items-center justify-center gap-x-1">
                      <span>145 trips</span>
                      <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <circle cx="2" cy="2" r="2" fill="#FFCC4D"/>
                      </svg>
                      <span>4.5 Rating</span>
                    </h3>

                  </div>

                </div>

                <div class="flex flex-col items-center justify-center gap-y-2">
                  <h1 class="w-full Grotesque-Regular px-2 py-1 rounded-md bg-[#F1F0FE] flex items-center justify-center gap-x-1 text-[12px] text-[#0050A8]">
                    <img src="~/assets/img/tel.svg" class=""/>
                    Call Rider
                  </h1>

                  <h1 class="w-full Grotesque-Regular px-2 py-1 rounded-md bg-[#FFF4F4] flex items-center justify-center gap-x-1 text-[12px] text-[#EF3333]">
                    Cancel Trip
                  </h1>
                </div>

              </div>


            </div>

          </div>
          


        </div>



        

      </div>


    </div>


    <!-- right right -->



    <div v-if="openTimeLine" class="hidden lg:flex col-span-12 lg:col-span-6 flex-col items-start justify-start bg-[#FAFAFA] rounded-md">

      <h1 class="Grotesque-Regular flex-none text-[16px] text-[#010109] mx-6 my-4">
        Trip Timeline
      </h1>

      <Separator class="bg-[#F7F7F7] data-[orientation=horizontal]:h-[2px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"/>


      <div class="w-full flex items-start justify-start px-7 py-6">

        <Timeline/>

      </div>

      
    </div>
    


  </div>

</template>

<script setup lang="ts">
import { GoogleMap, Polyline } from 'vue3-google-map'

const openTimeLine = ref(false)

const center = { lat: 6.5284923, lng: 3.2847496 }

const flightPlanCoordinates = [
  { lat: 6.5372117, lng: 3.2462568},
  { lat: 6.5284923, lng: 3.2847496 }
]
const flightPath = {
  path: flightPlanCoordinates,
  geodesic: true,
  strokeColor: '#FF0000',
  strokeOpacity: 1.0,
  strokeWeight: 2,
}


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


const tab = ref('ongoing')

const toggleState = ref(false)
const startDate = ref();
const EndDate = ref();

// const toggle = (event: any) => {
//     menu.value.toggle(event);
// };

    
</script>

<style scoped>

.timeline{
  border-left: 1px dashed #1A1A1A;
}

.timeline2{
  border-left: 1px dashed #66C27C;
}

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