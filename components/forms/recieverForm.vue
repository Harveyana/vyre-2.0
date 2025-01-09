<template>
    <div class="w-full flex items-center justify-center bg-white  rounded-xl">

  

      <div class="w-full flex items-center justify-center relative">

        <baseButton @click="$emit('back')" class="hidden absolute top-0 left-0 sm:flex flex-row items-center justify-center p-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1061_19444)"><path d="M15 6L9 12L15 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1061_19444"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
          <h4 class="Grotesque-Regular text-[16px] text-[#737373]">
            Back
          </h4>
        </baseButton>
        
        
        <div class="flex flex-col w-full sm:w-[75%] lg:w-[55%] sm:py-12 p-4 sm:px-10 h-full gap-y-6 my-4">

          <form
            @submit.prevent="submitForm()"
            class="w-full mt-4 flex flex-col gap-y-4"
          >
            <div class="w-full relative">
              <h4 class="Grotesque-Regular text-[16px] text-[#010109] -mr-8">
                Destination Location
              </h4>

              <input id="place" 
                required
                type="text"
                v-model="receiver.location" 
                placeholder="enter location" 
                class="w-full bg-[#F9F9FC] rounded-lg text-[12px] border border-gray-300 px-3 py-3 text-gray-800 outline-black">
              </input>

            </div>


            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Receiver’s Name
              </label>

              <input
                required
                v-model="receiver.name"
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-lg flex items-center justify-between outline-none"
                placeholder="enter name"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Sender Phone Number
              </label>

              <input
                v-model="receiver.phoneNumber"
                v-mask="'+234 ##########'"
                type="tel"
                required
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-lg flex items-center justify-between outline-none"
                placeholder="+234 810000000"
              />

            </div>

            <div class="w-full flex flex-row items-center justify-start">

              <h1 v-if="!showAdditional" @click="showAdditional = !showAdditional" class="Grotesque-Light cursor-pointer text-left text-[16px] text-[#0050A8]">
                +additional phone number
              </h1>

              <div v-else class="w-full flex flex-col items-start justify-center gap-y-1">
                <h4 class="Grotesque-Regular  text-[16px] text-[#010109] -mr-8">
                  Additional phone number
                </h4>
                <input @input="" v-mask="'+234 ##########'" v-model="receiver.additional_Number" placeholder="+234 810000000" class="w-full bg-[#F9F9FC] rounded-lg border border-gray-300 px-3 py-3 text-[12px] text-gray-800 outline-black"></input>
              </div>

            </div>

            <div class="w-full flex flex-row items-center justify-center mt-10 gap-x-4">

              <baseButton @click="$emit('back')" class="w-fit sm:hidden flex flex-row items-center justify-center p-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1061_19444)"><path d="M15 6L9 12L15 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1061_19444"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                <h4 class="Grotesque-Regular text-[16px] text-[#737373]">
                  Back
                </h4>
              </baseButton>

              <baseButton type="submit" class="bg-[#0050A8] Grotesque-Light w-full py-2.5 px-6 text-white text-[14px]">
                Proceed
              </baseButton>

            </div>
          </form>

          
        </div>
      </div>

    </div>
  </template>
  <script setup lang="ts">

  import { Loader } from "@googlemaps/js-api-loader"
  import { Toaster, toast } from 'vue-sonner';

  const showAdditional = ref(false)
  const resetKey = ref(2)

  const receiver = reactive({
    location:'',
    longitude: null,
    latitude: null,
    name:'',
    phoneNumber:'',
    additional_Number:''
  })


  const emit = defineEmits(['back','submit'])  // Declare Events

  const submitForm = ()=>{
    console.log(receiver)
    if(!receiver.location || !receiver.name || !receiver.phoneNumber ) return
    if (!receiver.latitude || !receiver.longitude ) {
      toast.error('Location not captured Please re-enter address')
      return;
    }
    console.log(receiver)
    emit('submit', receiver)

  }

  const joinAddressComponents = (addressComponents:any[]) => {
    // Extract the long_name property from each address component and join them with a comma
    return addressComponents.map(component => component.long_name).join(', ');
  };

  // const props = defineProps<{
  //   model: boolean;
  //   title: string;
  //   description:string;
  //   success:boolean
  // }>()
  // const open =ref(false)


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

        receiver.longitude = place.geometry.location.lng()
        receiver.latitude = place.geometry.location.lat()
        receiver.location = joinAddressComponents(place.address_components)
        return
    });


  })
  </script>

