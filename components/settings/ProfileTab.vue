<template>
    <div class="w-full h-full flex flex-col items-start justify-start gap-y-4 sm:pr-10">


            <div class="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-5">

              <div class="w-fit flex items-end justify-center gap-x-5">

                <AvatarRoot class="inline-flex h-[70px] min-w-[70px] w-[70px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
                  <AvatarImage
                    class="h-full w-full rounded-[inherit] object-cover"
                    :src="user?.photoUrl!"
                    alt="Colm Tuite"
                  />
                  <AvatarFallback
                    class="text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                    :delay-ms="600"
                  >
                  {{user?.firstName.charAt(0)}}{{user?.lastName.charAt(0)}}
                  </AvatarFallback>
                </AvatarRoot>

                <div class="w-full flex flex-col gap-y-2 items-start">
                  <h1 class="interSemiBold leading-none text-[16px] text-[#010109]">
                    Profile Picture
                  </h1>

                  <h4 class="text-[12px] whitespace-nowrap interRegular text-[#686767]">
                    PNG, JPEG UNDER 10MB
                  </h4>
                </div>

              </div>

              <button @click="showUpload = true"  class="w-fit bg-[#F9FAFB] h-fit flex items-center justify-center whitespace-nowrap py-1.5 px-2.5 rounded-lg border shadow-sm border-gray-300" type="button">
                <span class="text-[13px] interRegular text-[#686767] text-center">Upload new picture</span>
              </button>

            </div>


            <div class="w-full flex flex-col items-center justify-center gap-y-4">

              <div class="w-full flex items-center justify-center gap-x-1">

                <div class="w-1/2 flex flex-col items-start justify-start gap-y-1">
                  <span class="text-[15px] interRegular text-[#6B7280] text-left ">First Name</span>
                  <input
                    type="text"
                    v-model="inputs.firstName"
                    class="w-full bg-[#F9FAFB] interRegular appearance-none border-none outline-none focus:outline-none focus:ring-0 text-[#4B5563] text-[14px] py-2 px-3 rounded-xl"
                  />
                </div>

                <div class="w-1/2 flex flex-col items-start justify-start gap-y-1">
                  <span class="text-[15px] interRegular text-[#6B7280] text-left ">Last Name</span>
                  <input
                    type="text"
                    v-model="inputs.lastName"
                    class="w-full bg-[#F9FAFB] interRegular appearance-none border-none outline-none focus:outline-none focus:ring-0 text-[#4B5563] text-[14px] py-2 px-3 rounded-xl outline-none"
                  />
                </div>

              </div>

              <!-- <div class="w-full flex flex-col items-start justify-start gap-y-1">
                <span class="text-[15px] interRegular text-[#6B7280] text-left ">Email Address</span>
                <input
                  type="text"
                  v-model="inputs.email"
                  disabled
                  class="w-full bg-[#F9FAFB] interRegular appearance-none border-none outline-none focus:outline-none focus:ring-0 text-[#4B5563] text-[14px] py-2 px-3 rounded-xl outline-none"
                />
              </div> -->

              <div class="w-full flex flex-col items-start justify-start gap-y-1">
                <span class="text-[15px] interRegular text-[#6B7280] text-left ">Phone Number</span>
                <input
                  type="tel"
                  v-model="inputs.phoneNumber"
                  class="w-full bg-[#F9FAFB] interRegular appearance-none border-none outline-none focus:outline-none focus:ring-0 text-[#4B5563] text-[14px] py-2 px-3 rounded-xl outline-none"
                />
              </div>

              <button :disable="showLoader" @click="updateDetails()" class="w-full sm:w-[30%] self-end mt-6 flex items-center justify-center whitespace-nowrap interRegular py-3.5 px-6 gap-x-2 text-[16px] text-[#FFFFFF] bg-black rounded-lg border shadow-sm border-gray-300" type="button">
                <span v-if="!showLoader" class="text-[14px] interRegular text-[#FFFFFF] text-center">Save Changes</span>
                <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
                  animationDuration=".5s" aria-label="Custom ProgressSpinner" 
                />
              </button>

            </div>

          
          </div>



          <BaseDialogue :visible="showUpload">

            <div class="w-full flex flex-col h-fit lg:w-[400px] gap-y-6">
                
              <div class="w-full flex items-start justify-between">

                <button @click="showUpload = false">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                    <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
                  </svg>
                </button>

              </div>

              <!-- Import product from file -->
              <Uploader :defaultImg="user?.photoUrl!" @update="(imageUrl:string)=>{updateDetails(imageUrl)}" />

            </div>

          </BaseDialogue>


  </template>

  <script setup lang="ts">
  import { Toaster, toast } from 'vue-sonner'

  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { updateProfile } = useAuthStore();

  const { loading, user } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

  const showLoader = ref(false)
  const showUpload = ref(false)

 
  

  const inputs = reactive({
    photoUrl: user!.value?.photoUrl ? user!.value?.photoUrl :'',
    firstName: user!.value?.firstName ? user!.value?.firstName :'',
    lastName: user!.value?.lastName ? user!.value?.lastName :'',
    email: user.value?.email ? user.value?.email :'',
    phoneNumber: user.value?.phoneNumber ? user.value?.phoneNumber :''
  })


  const updateDetails = async(imageUrl?:string)=>{
    showLoader.value = true
    showUpload.value = false

    if(imageUrl)inputs.photoUrl = imageUrl
    console.log(inputs)
    const result = await updateProfile(inputs);

    console.log(result)
    if(result?.success){
      user.value = result?.user
      toast.success(result?.msg)
      showLoader.value = false
    }else{
      toast.error(result?.msg)
      showLoader.value = false
    }

  }


  
  </script>