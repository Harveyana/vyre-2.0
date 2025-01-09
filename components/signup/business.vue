<template>
    <div class="w-full bg-white  rounded-xl">
      <PersonalForm v-if="tab === 'PERSONAL'" @back="$emit('back')"  @submit="(value)=>{submit(value,'PERSONAL','BUSINESS')}" />
      <BusinessForm v-if="tab === 'BUSINESS'" @back="tab = 'PERSONAL'" @submit="(value)=>{submit(value,'BUSINESS','DIRECTOR')}" />
      <DirectorForm  v-if="tab === 'DIRECTOR'" @back="tab = 'BUSINESS'"  @submit="(value)=>{submit(value,'DIRECTOR')}" />

    </div>
  </template>
  <script setup lang="ts">
  
  const emit = defineEmits(['back'])  // Declare Events

  const details = reactive({
    TYPE:'BUSINESS',
    PERSONAL:{},
    BUSINESS:{},
    DIRECTOR:{}
  })
  const tab = ref('PERSONAL')

  function isObjectNotEmpty(obj:{}) {
    return Object.keys(obj).length > 0;
  }

  const submit = (value:{}, name?:string, step?:string)=>{
    details[name!] = value
    console.log(details)

    if(isObjectNotEmpty(details.PERSONAL) 
      && isObjectNotEmpty(details.BUSINESS) 
      && isObjectNotEmpty(details.DIRECTOR)
    ){

    }

    tab.value = step!

  }

  // const props = defineProps<{
  //   model: boolean;
  //   title: string;
  //   description:string;
  //   success:boolean
  // }>()
  // const open =ref(false)
  </script>

