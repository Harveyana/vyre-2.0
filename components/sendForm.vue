<template>
    <Dialog
    v-model:visible="props.visible"
    :closable="false"
    modal
    :pt="{
        mask: {
            style: 'backdrop-filter: blur(10px)'
        },
        root:{
          class:'bg-white py-4 rounded-2xl shadow-[0_2px_10px] shadow-black transition ease-in-out duration-300'
        }
    }"
    >
            <div class=" w-full" style="border-radius: 12px;">

              <img src="~/assets/img/close.svg" @click="$emit('cancel')" class="w-6 border-2 border-black p-1 sm:mx-3 rounded-2xl" alt='close'/>
              
              <div class="w-full rounded-2xl mt-2">

                <TabsRoot v-model:modelValue="tab" class="flex flex-col w-full" default-value="tab1">
                  <TabsList class="relative shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
                    
                    <TabsTrigger
                      class="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-xs leading-none text-mauve11 select-none  rounded-tl-md  hover:text-grass11 data-[state=active]:bg-[#1D3160] data-[state=active]:text-white outline-none cursor-default transition ease-in-out duration-300"
                      value="tab1"
                    >
                      Receipient
                    </TabsTrigger>
                    <TabsTrigger
                      class="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-xs leading-none text-mauve11 select-none  rounded-t-md hover:text-grass11 data-[state=active]:bg-[#1D3160] data-[state=active]:text-white outline-none cursor-default transition ease-in-out duration-300"
                      value="tab2"
                    >
                      Amount
                    </TabsTrigger>
                    <TabsTrigger
                      class="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-xs leading-none text-mauve11 select-none  rounded-tr-md hover:text-grass11 data-[state=active]:bg-[#1D3160] data-[state=active]:text-white outline-none cursor-default transition ease-in-out duration-300"
                      value="tab3"
                    >
                      Confirm
                    </TabsTrigger>
                  </TabsList>

                  <!-- TAB 1 -->
                  <SENDTAB1 value="tab1" @nextTab="tab='tab2'" />

                  <!-- TAB 2 -->
                  <SENDTAB2 value="tab2" @previousTab="tab='tab1'" @nextTab="tab='tab3'" />

                  <!-- TAB 3 -->
                  <SENDTAB3 value="tab3" @previousTab="tab='tab2'" />
                </TabsRoot>

              </div>
             
            </div>

            <Toast group="success" severity='success' :pt="{
                  container: {
                      style: 'background: #7fdbb4; margin: 10px; padding:5px; color: white'
                  }
            }"/>

            <Toast group="fail" severity='error' :pt="{
                  container: {
                      style: 'background: #CA3433; margin: 10px; padding:5px; color: white'
                  }
            }"/>

    </Dialog>
    
  </template>


  <script setup lang="ts">
   import { useForm } from 'vee-validate';
   import { toTypedSchema } from '@vee-validate/yup';
   import * as yup from 'yup';
   import { useToast } from "primevue/usetoast";

    type person = {
    email: string;
    name: string;
    imgurl:URL;
    }

   const appConfig = useAppConfig()

    const baseColor = appConfig.theme.colors.primary
    const vyreYellow = appConfig.theme.colors.vyreYellow
    const vyreGreen = appConfig.theme.colors.vyreGreen
    const vyreLemon = appConfig.theme.colors.vyreLemon
    const vyreGrey = appConfig.theme.colors.vyreGrey

   const tab = ref('tab1');

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

  const handleInput = () => {
      // Call your search function here with the current search term
      // search(searchTerm.value);
      if(!EmailReceipientInputValue){
        showList.value = false
        console.log('switched')
      }else{
        showList.value = true
      }
      
  };

   


   const toast = useToast();
   const {addUser,nover} = useFireBase()
   const {objectToArray} = useConverters()

   const showLoader = ref(false)
  
    const props = defineProps<{
      visible: boolean
      bar?: number
    }>()

    const amount = ref(0);
  


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


  <style scoped>

  .baseBg{
    background-color: v-bind(baseColor);
  }
  .vyreGrey{
    background-color: v-bind(vyreGrey);
  }
  .vyreYellow{
      background-color: v-bind(vyreYellow);
  }
  .vyreGreen{
      background-color: v-bind(vyreGreen);
  }
  .vyreLemon{
      background-color: v-bind(vyreLemon);
  }
 </style>