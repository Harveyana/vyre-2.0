import { defineStore } from 'pinia';

interface UserPayloadInterface {
    email: string;
    password: string;
}

interface Userpayload {
    name: string;
    email:string;
    password:string;
}


export const useWalletStore = defineStore('wallet', {
    state: () => ({
      loading: false,
    }),
    actions: {

      async createWallet(ISO) {
        const token = useCookie('token');
        const { data, pending,error }: any = await useFetch('/createWallet', {
            method: 'post',
            body: {
               idToken: token.value,
               ISO: ISO
            },
        });

        if(error.value){
          console.log(error.value)
          // console.log(error.value);
          return false
        }

        if(data.value){
           console.log(data.value)
            return true 
        }
        
      }


    },
    
  });
  