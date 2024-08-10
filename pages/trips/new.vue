<template>

  <div class="w-full gap-x-1 lg:gap-x-6 px-4 sm:px-10">

    <div class="w-full py-3 flex items-start justify-start mb-3">

      <h1 class="Grotesque-Bold text-xl text-[#010109]">
        My Trips
      </h1>

    </div>


    <!-- lower band -->


    <div class="w-full py-3 gap-y-4 flex flex-col items-center justify-center">

      <div v-if="formStep !== 'vehicle'" class="w-full sm:w-[55%] flex items-center justify-between border-t border-[#D1D1D1]">

        <!-- if sender -->
        <div class='flex flex-col items-start justify-center -mt-2.5 gap-y-1'>
          <svg v-if="true" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#D9D9D9"/><circle cx="10" cy="10" r="5" fill="#0050A8"/></svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#D9D9D9"/></svg>

          <h1 class="Grotesque-Light text-[16px] text-[#010109] ">
            Sender
          </h1>
        </div>


        <!-- if receiver -->
        <div class='flex flex-col items-center justify-center -mt-2.5 gap-y-1'>
          <svg v-if="formStep =='receiver' || formStep =='item'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#D9D9D9"/><circle cx="10" cy="10" r="5" fill="#0050A8"/></svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#D9D9D9"/></svg>

          <h1 class="Grotesque-Light text-[16px] text-[#010109] ">
            Receiver
          </h1>
        </div>

        <!-- if item -->
        <div class='flex flex-col items-end justify-center -mt-2.5 gap-y-1'>
          <svg v-if="formStep =='item'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#D9D9D9"/><circle cx="10" cy="10" r="5" fill="#0050A8"/></svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#D9D9D9"/></svg>

          <h1 class="Grotesque-Light text-[16px] text-[#010109] ">
            Item
          </h1>
        </div>


      </div>



      <!-- senders details -->
      <Sender v-if="formStep == 'sender'" @proceed="formStep = 'receiver'" @back=""/>

      <!-- receivers details -->
      <Receiver v-if="formStep == 'receiver'" @proceed="formStep = 'item'" @back="formStep = 'sender'" />

      <!-- item details -->
      <Item v-if="formStep == 'item'" @proceed="formStep = 'vehicle'"  @back="formStep = 'receiver'" />

      <!-- vehicle  -->
      <Vehicle v-if="formStep == 'vehicle'" @back="formStep = 'item'" @proceed="openDialogue = true" />



    </div>


    <BaseDialogue :visible="openDialogue" @close="openDialogue = false" title="Make Payment">
      <div class="w-full flex flex-col items-center justify-start gap-y-6 mt-6 mb-8">

              <div @click="openSuccess = true" class="w-full flex flex-row items-center px-4 py-3 justify-start gap-x-3 rounded-lg border hover:border-[#0050A8] bg-[#F9F9FC]">
                <img src="~/assets/img/dynamoWallet.svg" class=""/>

                <div class="flex flex-col items-start justify-center">

                  <h1 class="Grotesque-Light text-[14px] text-[#010109] ">
                    Pay From Wallet
                  </h1>

                  <h1 class="Grotesque-Light text-[14px] text-[#737373] ">
                    Wallet Balance (65,302,98NGN)
                  </h1>

                </div>

              </div>


              <div class=" w-full flex flex-row items-center px-4 py-3 justify-start gap-x-3 rounded-lg border hover:border-[#0050A8] bg-[#F9F9FC]">
                <img src="~/assets/img/dynamoBank.svg" class=""/>

                <div class="flex flex-col items-start justify-center">

                  <h1 class="Grotesque-Light text-[14px] text-[#010109] ">
                    Third Party
                  </h1>

                  <h1 class="Grotesque-Light text-[14px] text-[#737373] ">
                    Pay with Card or Bank Transfer
                  </h1>

                </div>

              </div>

          </div>
    </BaseDialogue>



    <BaseDialogue :visible="openSuccess" @close="openSuccess = false" title="">
      <div class="w-full flex flex-col items-center justify-start gap-y-6 mt-14 mb-8">


              <div class="w-full flex flex-col items-center justify-center ">

                <div class="flex flex-row items-center justify-center">
                  <h1 class="Grotesque-Light text-[16px] text-[#737373] ">
                  Hooray! 
                  </h1>
                  <img src="~/assets/img/Emoji.svg" class=""/>
                </div>
                

                <h1 class="Grotesque-Regular text-[20px] text-[#010109] ">
                  Trip Created Successfully
                </h1>


                <img src="~/assets/img/checked.svg" class="my-6"/>

                <baseButton @click="openSuccess = false" class="bg-[#0050A8] Grotesque-Light w-full py-2.5 px-6 text-white text-[16px] mt-10">
                  Close
                </baseButton>

              </div>


          </div>
    </BaseDialogue>


    <BaseDialogue1 :visible="true" @close="openSuccess = false" title="">
      <div class="w-full flex flex-col items-center justify-start gap-y-6 ">


              <InputDate1 operation="new operation"/>


          </div>
    </BaseDialogue1>


  </div>

</template>

<script setup lang="ts">

import { Loader } from "@googlemaps/js-api-loader"

import Sender from "~/components/haulage/sender.vue";
import Receiver from "~/components/haulage/receiver.vue";
import Item from "~/components/haulage/item.vue";
import Vehicle from "~/components/haulage/vehicle.vue";


const openDialogue = ref(false)

const openSuccess = ref(false)

const showAdditional = ref(false)
const formStep = ref('receiver')


const options = ref(['Partyer', 'DJ', 'Hypeman', 'Club Manager', 'Event Organizer'])

const images = ref<File[]>([])
const imageURL = ref<string[]>([]);


const sender = reactive({
  location:'',
  name:'',
  phoneNumber:'',
  additional_Number:''
})

const receiver = reactive({
  location:'',
  name:'',
  phoneNumber:'',
  additional_Number:''
})

const item = reactive({
  type:'',
  category:'',
  name:'',
  additional_Number:'',
  scheduled:false,
})

const { files, open, reset, onChange } = useFileDialog({
    accept: 'image/*', // Set to accept what type of files
    multiple: true
})

onChange((files) => {
  /** do something with files */
  console.log(files)
  if(files?.length)images.value.push(files[0])
  updateImageURLs();
  
})

const updateImageURLs = () => {
  imageURL.value = images.value.map(file => window.URL.createObjectURL(file));
};

const removeImage = (index: number) => {
  images.value.splice(index, 1);
  imageURL.value.splice(index, 1);
};


const route = useRoute()
const router = useRouter()


const search= ref('')

const toggleState = ref(false)
const autocomplete = ref();
const EndDate = ref();

// const toggle = (event: any) => {
//     menu.value.toggle(event);
// };

onMounted(async () => {

    const loader = new Loader({
      apiKey: 'AIzaSyBBYUi-MAFpiGyHI67x-xCrAWArKPm4n7w', //standard vite env implementation
      version: "weekly",

    });

    console.log('loader', loader);//optional logging

    const Places = await loader.importLibrary('places')

    const input = document.getElementById("place");

    //this object will be our second arg for the new instance of the Places API
    const options = {
      // bounds: defaultBounds, //optional
      // types: ["establishment"], //optioanl
      // componentRestrictions: { country: "us" }, //limiter for the places api search
      fields: ["address_components", "geometry", "icon", "name"], //allows the api to accept these inputs and return similar ones
      strictBounds: false, //optional
    };

    // per the Google docs create the new instance of the import above. I named it Places.
    const autocomplete = new Places.Autocomplete(input, options);

    console.log('autocomplete', autocomplete); //optional log but will show you the available methods and properties of the new instance of Places.

    //add the place_changed listener to display results when inputs change
    autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace(); //this callback is inherent you will see it if you logged autocomplete
        console.log('place', place);
        console.log(place.geometry.location.lat())
        console.log(place.geometry.location.lng())
    });


})

    
</script>

<style scoped>

</style>