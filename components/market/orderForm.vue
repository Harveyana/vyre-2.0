<template>


  <div class="w-full" >

    <OrderPreference v-if="tab === 'TYPE'"
      v-model="DETAILS.type"
      @next="tab = 'PAIR'"  
    />

    <SelectPair v-if="tab === 'PAIR'"
      v-model="DETAILS.pairId"
      @next="tab = 'AMOUNT'"  
    />

    <OrderAmount v-if="tab === 'AMOUNT'"
      v-model:rate="DETAILS.price"
      @back="tab='PAIR'"
      @submit="(value:any)=>submitOrder(value.amount,value.minimumAmount)"
      :pairId="DETAILS.pairId"
      :orderType="DETAILS.type"
    />

    <OrderSuccess v-if="tab === 'SUCCESS'"
      v-model="order"
    />

    
  </div>

    
  </template>


  <script setup lang="ts">

   import { useDebounceFn } from '@vueuse/core'
    import { Toaster, toast } from 'vue-sonner';
    import { storeToRefs } from 'pinia';
    import { useOrderStore } from '~/store/order';
    const { createOrder } = useOrderStore();

    const { loading } = storeToRefs(useOrderStore());

    // const props = defineProps({
    //   type: String,
    //   currency: String,
    //   balance: Number
    // });

    // const {currency, balance, type} = props

   const tab = ref('PAIR');
   const emit = defineEmits(['close'])
   
   const order = ref()

   const showList = ref(false)

   const DETAILS = reactive({
      type: 'BUY',
      amount: 0.00,
      pairId:'',
      price: 0.00,
      minimumAmount:0
    })

    

    const submitOrder = async(amount:number,minimumAmount:number)=>{
      DETAILS.amount = amount
      DETAILS.minimumAmount = minimumAmount
      emit('close')
      toast.promise(() => new Promise(async(resolve,reject) =>{
        const created = await createOrder(DETAILS)
        if (created?.success) {
          order.value = created?.order
          tab.value = 'SUCCESS'

          resolve({msg:created.msg})
          // emit('verified', verified?.userId)
        }else{
          reject({msg:created.msg})
          // $toast.error(verified.msg)
        }
      }), 
      {
        loading: 'Creating Order',
        success: (data: any) => {
          // emit('close')
          return data.msg
        },
        error: (data: any) => {return data.msg}
      })

  }

  


    
  </script>


  