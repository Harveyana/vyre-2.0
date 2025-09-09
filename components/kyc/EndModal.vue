<template>
    <div class="w-full h-fit flex flex-col items-center justify-start gap-3 rounded-3xl px-2 pt-4 pb-4">
            <div class="w-full flex flex-col items-center justify-start bg-white rounded-xl shadow-lg overflow-hidden">
                <!-- Header -->
                <div class="w-full bg-black text-white py-6 px-8">
                    <div class="flex items-center justify-between">
                        <div>
                            <h1 class="text-xl font-bold">KYC Verification Status</h1>
                            <p class="text-gray-300 mt-1 text-[13px]">Your identity verification process</p>
                        </div>
                        <div class="bg-white text-black rounded-lg px-3 py-1 text-xs font-semibold">
                            Completed
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div class="p-8">
                    <!-- Status Indicator -->
                    <div class="flex flex-col items-center justify-center mb-8">
                        <div class="relative mb-4">
                            <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                                <svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path class="checkmark" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div class="absolute -top-1 -right-1">
                                <span class="flex h-6 w-6">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-6 w-6 bg-green-500"></span>
                                </span>
                            </div>
                        </div>
                        <h2 class="text-xl font-semibold text-gray-800">Verification Submitted</h2>
                        <p class="text-gray-600 mt-1 text-center text-[12px]">Your KYC documents have been successfully submitted for review</p>
                    </div>

                    <!-- Status Info Cards -->
                    <div class="grid grid-cols-1 gap-4 mb-8">
                        <div class="status-card border border-gray-200 rounded-xl p-5 bg-gray-50">
                            <div class="flex items-center">
                                <div class="bg-gray-200 p-3 rounded-lg mr-4">
                                    <i class="fas fa-hourglass-half text-gray-700 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-[13px]">Current Status</h3>
                                    <p class="text-gray-600 text-[11px]">{{user && user?.userStatus}}</p>
                                </div>
                            </div>
                        </div>

                        <div v-if="user && user?.userStatus !=='ACTIVE'" class="status-card border border-gray-200 rounded-xl p-5 bg-gray-50">
                            <div class="flex items-center">
                                <div class="bg-gray-200 p-3 rounded-lg mr-4">
                                    <i class="fas fa-envelope text-gray-700 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-[13px]">Notification</h3>
                                    <p class="text-gray-600 text-[11px]">You'll receive an email once verified</p>
                                </div>
                            </div>
                        </div>

                        <div v-if="user && user?.userStatus !=='ACTIVE'" class="status-card border border-gray-200 rounded-xl p-5 bg-gray-50">
                            <div class="flex items-center">
                                <div class="bg-gray-200 p-3 rounded-lg mr-4">
                                    <i class="fas fa-clock text-gray-700 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-[13px]">Processing Time</h3>
                                    <p class="text-gray-600 text-[11px]">Typically within 24 Hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Additional Information -->
                    <div v-if="user && user?.userStatus !=='ACTIVE'" class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <i class="fas fa-info-circle text-blue-500 text-xl"></i>
                            </div>
                            <div class="ml-3">
                                <h3 class="text-sm font-medium text-blue-800">What happens next?</h3>
                                <div class="mt-2 text-sm text-blue-700">
                                    <p>Our team will carefully review your submitted documents. You'll receive an email notification once your verification is complete. This process typically takes 24 hours max.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex items-end justify-end gap-x-4">

                          <button
                          @click="$router.push('/')"
                          class="px-6 py-3 bg-black text-white rounded-2xl Grotesque-Regular transition-colors flex items-center"
                          >
                             Go Back Home >>
                          </button>
                    </div>

                </div>
            </div>
    </div>
  </template>
  <script setup lang="ts">

  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { user } = storeToRefs(useAuthStore());
  const { SubmitKyc } = useAuthStore();
  
  // const imageFile = ref<File>()
   const resetKey = ref(2)    
    // const address = reactive({
    //   streetLine1:'',
    //   city:'',
    //   stateRegionProvince:'',
    //   postalCode:'',
    //   countryCode:''
    // })

  const emit = defineEmits(['back','next'])  // Declare Events

  const submitForm = async()=>{

    emit('next')

  }


  // const props = defineProps<{
  //   model: boolean;
  //   title: string;
  //   description:string;
  //   success:boolean
  // }>()
  // const open =ref(false)



  </script>

