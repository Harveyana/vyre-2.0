<template>
    <TabsContent
                    class="grow bg-white rounded-b-md outline-none"
                    :value="props.value"
                  >
                    
                    <div class="gap-3 w-[16rem] sm:w-[25rem] flex flex-col items-center rounded-2xl">

                      <!-- <div class=" w-full sm:w-3/4 inline-flex flex-col gap-2 mt-5"> -->
                        <!-- <span class="text-sm font-semibold">Mode</span> -->
                        <!-- <Input id="email" class="bg-blue-50 rounded-3xl border-none p-2 sm:p-2.5 text-[#1D3160]" type="email"></Input> -->
                        <!-- <div class="flex flex-row items-center justify-center bg-blue-100 rounded-2xl w-fit ">
                          <span @click="Mode='email'" :class="{ 'bg-[#DAA520] ': Mode == 'email' }" class="text-black text-xs cursor-default font-bold rounded-l-2xl py-2 px-4 transition ease-in-out duration-300">Email</span>
                          <span @click="Mode='blockchain transfer'" :class="{ 'bg-[#DAA520] ': Mode == 'blockchain transfer' }" class="text-black text-xs cursor-default font-bold py-2 px-4 transition ease-in-out duration-300">Blockchain</span>
                          <span @click="Mode='bank'" :class="{ 'bg-[#DAA520] ': Mode == 'bank' }" class="text-black text-xs cursor-default font-bold rounded-r-2xl py-2 px-4 transition ease-in-out duration-300">Bank</span>
                        </div> -->
                      <!-- </div> -->

                      <div class=" w-full sm:w-3/4 inline-flex flex-col gap-2 py-4">
                        <span for="email" class="text-sm font-semibold">Send Btc to </span>
                        <!-- FOR EMAIL MODE -->
                        <Input v-if="Mode == 'email'" id="email" @input="" @blur="showList = false" v-model="EmailReceipientInputValue" placeholder="UserName , email, mobile" class="bg-blue-50 rounded-3xl border-none p-3 sm:p-4 text-[#1D3160]" type="email"></Input>
                        <!-- FOR BLOCKCHAIN MODE -->
                        <div v-if="Mode =='blockchain transfer'" class="w-full flex flex-col items-start">
                          <Input id="blockchain address" v-model="BlockchainReceipientInputValue" placeholder="Enter bitcoin address" class="w-full bg-blue-50 text-xs rounded-3xl border-none p-2 sm:p-2.5 text-[#1D3160]" type="text"></Input>
                          <span class="text-[11px] px-2 font-semibold">please enter a bitcoin blockchain address</span>
                        </div>
                        <!-- FOR BANK MODE -->
                        <div v-if="Mode =='bank'" class="w-full flex flex-col items-start">

                          <div class="flex flex-row items-center justify-center bg-blue-100 rounded-2xl w-fit mb-2">
                            <span @click="bankMode='SWIFT'" :class="{ 'bg-[#DAA520] ': bankMode == 'SWIFT' }" class="text-black text-[10px] cursor-default font-semibold rounded-l-2xl py-1 px-2 transition ease-in-out duration-300">SWIFT</span>
                            <span @click="bankMode='SEPA/TARGET'" :class="{ 'bg-[#DAA520] ': bankMode == 'SEPA/TARGET' }" class="text-black text-[10px] cursor-default rounded-r-2xl font-semibold py-1 px-2 transition ease-in-out duration-300">SEPA/TARGET</span>
                          </div>

                          <!-- FOR SWIFT TRANSFER -->
                          <div v-if="bankMode=='SWIFT'" class="w-full flex flex-col space-y-2">
                            
                            <div class="w-full flex flex-row items-center justify-between space-x-2">
                              <!-- BENEFICIARY ACCOUNT NUMBER  -->
                              <Input v-model="BlockchainReceipientInputValue" placeholder="Account number(IBAN)" class="w-[60%] bg-blue-50 text-xs rounded-3xl border-none p-2 sm:p-2.5 text-[#1D3160]" type="number"></Input>
                              <!-- BENEFICIARY BANK CODE -->
                              <Input v-model="BlockchainReceipientInputValue" placeholder="Bank code" class="w-[50%] bg-blue-50 text-xs rounded-3xl border-none p-2 sm:p-2.5 text-[#1D3160]" type="text"></Input>
                            </div>

                            <div class="w-full flex flex-row items-center justify-between space-x-2">
                              <!-- BENEFICIARY NAME -->
                              <Input v-model="BlockchainReceipientInputValue" placeholder="Beneficiary name" class="w-[60%] bg-blue-50 text-xs rounded-3xl border-none p-2 sm:p-2.5 text-[#1D3160]" type="text"></Input>
                              <!-- BENEFICIARY COUNTRY -->
                              <Input v-model="BlockchainReceipientInputValue" placeholder="Country" class="w-[50%] bg-blue-50 text-xs rounded-3xl border-none p-2 sm:p-2.5 text-[#1D3160]" type="text"></Input>
                            </div>
                             <!-- BENEFICIARY ADDRESS -->
                            <Input v-model="BlockchainReceipientInputValue" placeholder="Beneficiary address" class="w-[90%] bg-blue-50 text-xs rounded-3xl border-none p-2 sm:p-2.5 text-[#1D3160]" type="text"></Input>
                            <!-- DESCRIPTION -->
                            <Input v-model="BlockchainReceipientInputValue" placeholder="Description" class="w-[80%] bg-blue-50 text-xs rounded-3xl border-none p-2 sm:p-2.5 text-[#1D3160]" type="text"></Input>
                            <span class="text-[11px] px-2 font-semibold">SWIFT TRANSFER</span>
                          </div>
                          
                          <!-- FOR SEPA/TARGET TRANSFER -->
                          <div v-if="bankMode=='SEPA/TARGET'" class="w-full flex flex-col space-y-2">
                            
                            <div class="w-full flex flex-row items-center justify-between space-x-2">
                              <!-- BENEFICIARY ACCOUNT NUMBER  -->
                              <Input v-model="BlockchainReceipientInputValue" placeholder="Account number (IBAN)" class="w-[60%] bg-blue-50 text-xs rounded-3xl border-none p-2 sm:p-2.5 text-[#1D3160]" type="number"></Input>
                            </div>

                            <div class="w-full flex flex-row items-center justify-between space-x-2">
                              <!-- BENEFICIARY NAME -->
                              <Input v-model="BlockchainReceipientInputValue" placeholder="Beneficiary name" class="w-[60%] bg-blue-50 text-xs rounded-3xl border-none p-2 sm:p-2.5 text-[#1D3160]" type="text"></Input>
                              <!-- BENEFICIARY COUNTRY -->
                              <Input v-model="BlockchainReceipientInputValue" placeholder="Country" class="w-[50%] bg-blue-50 text-xs rounded-3xl border-none p-2 sm:p-2.5 text-[#1D3160]" type="text"></Input>
                            </div>
                             <!-- BENEFICIARY ADDRESS -->
                            <Input v-model="BlockchainReceipientInputValue" placeholder="Beneficiary address" class="w-[90%] bg-blue-50 text-xs rounded-3xl border-none p-2 sm:p-2.5 text-[#1D3160]" type="text"></Input>
                            <!-- DESCRIPTION -->
                            <Input v-model="BlockchainReceipientInputValue" placeholder="Description" class="w-[80%] bg-blue-50 text-xs rounded-3xl border-none p-2 sm:p-2.5 text-[#1D3160]" type="text"></Input>
                            <span class="text-[11px] px-2 font-semibold">SEPA/TARGET TRANSFER</span>
                          </div>
                          
                        </div>
                      </div>

                      <div v-if="Mode == 'email'" class="w-full overflow-y-scroll scroll-smooth">
                        <div data-aos="fade-up" data-aos-once="true"  class="w-full overflow-y-scroll scroll-smooth max-h-[10rem] lg:max-h-[10rem] flex flex-col items-center justify-start rounded-2xl px-2 md:px-3 col-span-12 py-2  space-y-2">
                          <div v-for="person in persons" :key="person.email" @click="emitPerson(person)" class="w-full flex flex-row items-center justify-start rounded-2xl hover:bg-[#d9d5d5]" >
                            <EmailReciepients :person="person" />
                          </div>
                        </div>
                        <EmailReciepient v-if="EmailReciepientValue?.email" :person="EmailReciepientValue"/>
                      </div>
                      


                      <div class="w-full sm:w-3/4 flex items-center justify-between">
                        <Button label="Cancel" @click="$emit('cancel')" text class="p-2 text-xs rounded-xl w-full border-black"></Button>
                        <button @click="$emit('nextTab')" class="text-black text-xs font-bold bg-blue-100 rounded-2xl py-2 px-4">Next</button>
                      </div>

                    </div>
                  </TabsContent>
  </template>

  
  <script setup lang="ts">

    type person = {
    email: string;
    name: string;
    imgurl:URL;
    }

    const tab = ref('Receipient');

    //  TRANSFER MODE
    const Mode = ref('email');

    //  FOR EMAIL MODE
    const EmailReceipientInputValue = ref()
    const EmailReciepientValue = ref<person>()

    //  FOR BLOCKCHAIN MODE
    const BlockchainReceipientInputValue = ref()

    //  FOR BANK TRANSFER MODE
    const bankMode = ref('SWIFT');

    const showList = ref(false)


    const emitPerson = (person:person)=>{
    EmailReciepientValue.value = person
    }

    const props = defineProps<{
        value:string
    }>()

    const persons:{name:string;imgurl:URL;email:string}[]=[
      {
        name:'Emana Clems',
        imgurl:new URL("~/assets/img/person3.png",import.meta.url),
        email:'eamsclems3@gmail.com'
      },
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