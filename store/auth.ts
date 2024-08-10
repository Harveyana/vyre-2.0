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


export const useAuthStore = defineStore('auth', {
    state: () => ({
      authenticated: false,
      loading: false,
    }),
    actions: {
      async authenticateUser({ email, password }: UserPayloadInterface) {
        // useFetch from nuxt 3
        const { data, pending, error }: any = await useFetch('/login', {
          method: 'post',
          body: {
            email,
            password,
          },
        });
        this.loading = pending;

        if(error.value){
            console.log(error.value);
            return false
        }
  
        if (data.value) {
            // console.log(data.value)
          const token = useCookie('token'); // useCookie new hook in nuxt 3
          const refreshtoken = useCookie('refreshtoken');
          token.value = data.value?.stsTokenManager.accessToken
          refreshtoken.value = data.value?.stsTokenManager.refreshToken // set token to cookie
          this.authenticated = true; // set authenticated  state value to true
          return true
        }
      },

      async createUser({ name, email, password }: Userpayload) {
        // useFetch from nuxt 3
        const { data, pending, error }: any = await useFetch('/createAccount', {
          method: 'post',
          body: {
            name,
            email,
            password,
          },
        });
        this.loading = pending;

        if(error.value){
            console.log(error.value);
            return false
        }
  
        if (data.value) {
            // console.log(data.value)
          const token = useCookie('token'); // useCookie new hook in nuxt 3
          const refreshtoken = useCookie('refreshtoken');
          console.log(data.value?.stsTokenManager.accessToken)
          token.value = data.value?.stsTokenManager.accessToken;
          refreshtoken.value = data.value?.stsTokenManager.refreshToken // set token to cookie
          this.authenticated = true; // set authenticated  state value to true
          return true
        }
      },

      logUserOut() {
        const router = useRouter()
        const token = useCookie('token'); // useCookie new hook in nuxt 3
        this.authenticated = false; // set authenticated  state value to false
        token.value = null; // clear the token cookie
        // router.push('/auth')
      },

      async refreshSession() {
        const token = useCookie('token');
        const refreshtoken = useCookie('refreshtoken');
        const { data, pending,error }: any = await useFetch('/refreshSession', {
            method: 'post',
            body: {
              refreshToken: refreshtoken.value
            },
        });

        if(error.value){
            console.log('logged out')
            this.logUserOut()
            // console.log(error.value);
        }

        if(data.value){
           console.log(data.value)
           token.value = data.value.idToken
           refreshtoken.value = data.value.refreshToken
            return true 
        }
        
        // token.value = null; // clear the token cookie
      },

      async sendVerification() {
        const token = useCookie('token');
        const { data, pending,error }: any = await useFetch('/sendVerification', {
            method: 'post',
            body: {
               idToken: token.value
            },
        });
         
        if(error.value){
            return false
            // console.log(error.value);
        }

        if(data.value){
           console.log(data.value)
            return true 
        }

      },

      async verifyCode(code) {
        const token = useCookie('token');
        const { data, pending, error }: any = await useFetch('/verifyCode', {
            method: 'post',
            body: {
               idToken: token.value,
               code:code
            },
        });

        if(error.value){
            return false
            // console.log(error.value);
        }

        if(data.value){
           console.log(data.value)
            return true 
        }
      },


      async verifyIdentity(BVN) {
        const token = useCookie('token');
        const { data, pending,error }: any = await useFetch('/verifyIdentity', {
            method: 'post',
            body: {
               idToken: token.value,
               BVN: BVN
            },
        });

        if(error.value){
            return false
            // console.log(error.value);
        }

        if(data.value){
           console.log(data.value)
            return true 
        }
      },

      async fetchUser() {
        const token = useCookie('token');
        const { data, pending,error }: any = await useFetch('/fetchUser', {
            method: 'post',
            body: {
               idToken: token.value
            },
        });

        if(error.value){
            console.log('logged out')
            return null
        }

        if(data.value){
           console.log(data.value)
            return data.value
        }

      },


      async setPin(pin) {
        const token = useCookie('token');
        const { data, pending, error }: any = await useFetch('/setPin', {
            method: 'post',
            body: {
               idToken: token.value,
               pin: pin
            },
        });

        if(error.value){
            console.log('logged out')
            return null
            // console.log(error.value);
        }

        if(data.value){
           console.log(data.value)
            
            return data.value
        }
      }


    },
    
  });
  