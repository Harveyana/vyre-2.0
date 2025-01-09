import { defineStore } from 'pinia';
import axios,{AxiosError} from 'axios';

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


      async createWallet(ISO: string) {
        this.loading = true

        try {
          const token = useCookie('token');
          const { axiosInstance } = useAxios()
          const url = `/wallet/create/${ISO}`;
          // const token = useCookie('token');
          const response = await axiosInstance.post(url);

          
          console.log(response.data);
           if(response.data.token) token.value = response.data.token
          
          // this.authenticated = true
           return response.data
          
          } catch (error: any | AxiosError) {
            console.log(error)
              if (axios.isAxiosError(error))  {
                // Access to config, request, and response
                console.log(error.response?.data)
                return error.response?.data
  
              } else {
                // Just a stock error
                console.error('Error:', error.message);
              }
              
          } finally {
            this.loading = false
          }
      },

      async initDeposit(currency: string, amount:number) {
        this.loading = true

        try {
          const token = useCookie('token');
          const { axiosInstance } = useAxios()
          const url = `/wallet/deposit`;
          // const token = useCookie('token');
          const response = await axiosInstance.post(url,{
            currency,
            amount
          });

          console.log(response.data);
          
          // this.authenticated = true
           return response.data
          
          } catch (error: any | AxiosError) {
            console.log(error)
              if (axios.isAxiosError(error))  {
                // Access to config, request, and response
                console.log(error.response?.data)
                return error.response?.data
  
              } else {
                // Just a stock error
                console.error('Error:', error.message);
              }
              
          } finally {
            this.loading = false
          }
      },

      async vyreTransfer(
        details:{
          amount: number,
          currency: number,
          receipient_id:string
        } 
      ) 
        {
        this.loading = true

        try {
          const token = useCookie('token');
          const { axiosInstance } = useAxios()
          const url = `/wallet/vyre_tranfer`;
          // const token = useCookie('token');
          const response = await axiosInstance.post(url,details);

          // this.authenticated = true
           return response.data
          
          } catch (error: any | AxiosError) {
            console.log(error)
              if (axios.isAxiosError(error))  {
                // Access to config, request, and response
                console.log(error.response?.data)
                return error.response?.data
  
              } else {
                // Just a stock error
                console.error('Error:', error.message);
              }
              
          } finally {
            this.loading = false
          }
      },

      async bankTransfer(details:{account_number:number, bank_code:number, recipient_name:string, endpoint_url:string} ) {
        this.loading = true

        try {
          const token = useCookie('token');
          const { axiosInstance } = useAxios()
          const url = `/wallet/bank_tranfer`;
          // const token = useCookie('token');
          const response = await axiosInstance.post(url,details);

          // this.authenticated = true
           return response.data
          
          } catch (error: any | AxiosError) {
            console.log(error)
              if (axios.isAxiosError(error))  {
                // Access to config, request, and response
                console.log(error.response?.data)
                return error.response?.data
  
              } else {
                // Just a stock error
                console.error('Error:', error.message);
              }
              
          } finally {
            this.loading = false
          }
      },

      async blockchainTransfer(
        details:{
            amount: number,
            currency: string,
            address: string, 
            destinationTag?:string
        } 
      ) 
        {
        this.loading = true

        try {
          const token = useCookie('token');
          const { axiosInstance } = useAxios()
          const url = `/wallet/blockchain_tranfer`;
          // const token = useCookie('token');
          const response = await axiosInstance.post(url,details);

          // this.authenticated = true
           return response.data
          
          } catch (error: any | AxiosError) {
            console.log(error)
              if (axios.isAxiosError(error))  {
                // Access to config, request, and response
                console.log(error.response?.data)
                return error.response?.data
  
              } else {
                // Just a stock error
                console.error('Error:', error.message);
              }
              
          } finally {
            this.loading = false
          }
      },

      async getWallets(type?:string) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/wallet/all';
          // const token = useCookie('token');
          const response = await axiosInstance.get(url, {
            params: {
              type
            }
          });

          console.log(response.data);
       
          return response.data
          
        } catch (error: any | AxiosError) {
          console.log(error)
            if (axios.isAxiosError(error))  {
              // Access to config, request, and response
              console.log(error.response?.data)
              return error.response?.data

            } else {
              // Just a stock error
              console.error('Error:', error.message);
            }
            
        } finally {
          this.loading = false
        }
      },

      async getWallet(walletId:string) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = `/wallet/${walletId}`;
          // const token = useCookie('token');
          const response = await axiosInstance.get(url);

          console.log(response.data);
       
          return response.data
          
        } catch (error: any | AxiosError) {
          console.log(error)
            if (axios.isAxiosError(error))  {
              // Access to config, request, and response
              console.log(error.response?.data)
              return error.response?.data

            } else {
              // Just a stock error
              console.error('Error:', error.message);
            }
            
        } finally {
          this.loading = false
        }
      },

      async fetchRate(currency:string, basePair:string, amount?:number) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/rate';
          // const token = useCookie('token');
          const response = await axiosInstance.get(url, {
            params: {
              currency, 
              basePair,
              amount,
            }
          });

          console.log(response.data);
       
          return response.data
          
        } catch (error: any | AxiosError) {
          console.log(error)
            if (axios.isAxiosError(error))  {
              // Access to config, request, and response
              console.log(error.response?.data)
              return error.response?.data

            } else {
              // Just a stock error
              console.error('Error:', error.message);
            }
            
        } finally {
          this.loading = false
        }
      },



    },
    
  });
  