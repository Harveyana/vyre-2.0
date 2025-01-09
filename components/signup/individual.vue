<template>
    <div class="w-full bg-white rounded-xl">

      <PersonalForm v-if="tab =='FORM'" :AccountType="props.AccountType" @back="$emit('back')" @submit="(value)=>{submit(value)}" />
      <Verify :email="details.DETAILS?.email || 'NON'" v-if="tab =='VERIFY'" @verified="(id)=>{userVerified(id)}" />
      <CreatePassword v-if="tab =='PASSWORD'" :userId="userId"  @passwordCreated="tab = 'SUCCESS'" />
      <Congratulation v-if="tab =='SUCCESS'" successMessage="Account Created Successfully" buttonText="Login To Dashboard" />

    </div>
  </template>

  <script setup lang="ts">

    import { Toaster, toast } from 'vue-sonner'
    import { storeToRefs } from 'pinia';
    import { useAuthStore } from '~/store/auth';
    const { register_User } = useAuthStore();

    const { loading } = storeToRefs(useAuthStore());
    const { $toast } = useNuxtApp()

    interface Userpayload {
        TYPE: string;
        DETAILS:{
          firstName: string;
          lastName: string;
          businessName?: string;
          email:string;
          phoneNumber: string
        }
    }

    const props = defineProps<{
      AccountType: string;
    }>()


    const emit = defineEmits(['back'])  // Declare Events
    
    const details = reactive<Userpayload>({
      TYPE: props.AccountType,
      DETAILS:{
          firstName: '',
          lastName: '',
          businessName:'',
          email: '',
          phoneNumber: ''
      }
    })

    const tab = ref('FORM')
    const userId = ref('')

    function isObjectNotEmpty(obj:{}) {
      return Object.keys(obj).length > 0;
    }

    const submit = async(value:{businessName?:string;firstName: string;lastName: string;email:string;phoneNumber: string})=>{
      details.DETAILS = value
      console.log(details)
      if(isObjectNotEmpty(details.DETAILS)){

        const registered = await register_User(details)
        if (registered.success) {
          toast.success(registered.msg)
          tab.value = 'VERIFY'
        }else{
          toast.error(registered.msg)
        }
      }
    }

    const userVerified = (id:string)=>{
      userId.value = id
      tab.value = 'PASSWORD'
    }

    // style="padding: 50px 40px 20px; background-image: url(/portal/20097973338/mailagents/13ef.77aaa135805f0ced.58a53f6e8a8d2879/files/13ef.77aaa135805f0ced.h1.320ea720-5abb-11ef-bb3a-525400b65433.19154339292/download); background-repeat: no-repeat; background-position: center; background-size: cover;"

  </script>

