<template>
    <div class="w-full relative py-3 gap-y-4 flex flex-row items-center justify-center">

      <baseButton @click="$emit('back')" class="hidden absolute top-0 left-0 sm:flex flex-row items-center justify-center p-3">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1061_19444)"><path d="M15 6L9 12L15 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1061_19444"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
        <h4 class="Grotesque-Regular text-[16px] text-[#737373]">
          Back
        </h4>
      </baseButton>

      <!-- senders details -->

      <div class="w-full sm:w-[55%] sm:py-12 p-4 sm:px-10 gap-y-6 flex flex-col items-center justify-between rounded-lg border border-[#F4F4FB]">


        <div class="w-full flex flex-col items-star justify-center gap-y-1">
          <h4 class="Grotesque-Regular text-[16px] text-[#010109] -mr-8">
            PickUp Location
          </h4>
          <input id="place" @input="" v-model="sender.location" placeholder="enter location" class="w-full bg-[#F9F9FC] rounded-lg text-[12px] border border-gray-300 px-3 py-3 text-gray-800 outline-black"></input>
        </div>

        <div class="w-full flex flex-col items-star justify-center gap-y-1">
          <h4 class="Grotesque-Regular text-[16px] text-[#010109] -mr-8">
            Sender Name
          </h4>
          <input id="place" @input="" v-model="sender.name" placeholder="enter name" class="w-full bg-[#F9F9FC] rounded-lg text-[12px] border border-gray-300 px-3 py-3 text-gray-800 outline-black"></input>
        </div>

        <div class="w-full flex flex-col items-star justify-center gap-y-1">
          <h4 class="Grotesque-Regular text-[16px] text-[#010109] -mr-8">
            Sender Phone Number
          </h4>
          <input id="place" @input="" v-model="sender.phoneNumber" placeholder="+234" class="w-full bg-[#F9F9FC] rounded-lg border border-gray-300 text-[12px] px-3 py-3 text-gray-800 outline-black"></input>
        </div>


        <div class="w-full flex flex-row items-center justify-start">

          <h1 v-if="!showAdditional" @click="showAdditional = !showAdditional" class="Grotesque-Light cursor-pointer text-left text-[16px] text-[#0050A8]">
            +additional phone number
          </h1>

          <div v-else class="w-full flex flex-col items-start justify-center gap-y-1">
            <h4 class="Grotesque-Regular  text-[16px] text-[#010109] -mr-8">
              Additional phone number
            </h4>
            <input id="place" @input="" v-model="sender.additional_Number" placeholder="+234" class="w-full bg-[#F9F9FC] rounded-lg border border-gray-300 px-3 py-3 text-[12px] text-gray-800 outline-black"></input>
          </div>

        </div>


        <div class="w-full flex flex-row items-center justify-center mt-20 gap-x-4">

          <baseButton @click="$emit('back')" class="w-fit sm:hidden flex flex-row items-center justify-center p-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1061_19444)"><path d="M15 6L9 12L15 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1061_19444"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
            <h4 class="Grotesque-Regular text-[16px] text-[#737373]">
              Back
            </h4>
          </baseButton>

          <baseButton @click="$emit('proceed')" class="bg-[#0050A8] Grotesque-Light w-full py-2.5 px-6 text-white text-[14px]">
            Proceed
          </baseButton>

        </div>

        


      </div>

    </div>


  </template>

  <script setup lang="ts">

  import { Loader } from "@googlemaps/js-api-loader"

  const showAdditional = ref(false)

  const sender = reactive({
    location:'',
    name:'',
    phoneNumber:'',
    additional_Number:''
  })
  const emit = defineEmits(['proceed','back'])  // Declare Events



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