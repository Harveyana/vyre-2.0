import { defineStore } from 'pinia';
import axios,{AxiosError} from 'axios';


export const useOrderStore = defineStore('order', {
    state: () => ({
      loading: false,
    }),
    actions: {


      async fetchPairs() {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/orders/pairs';
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

      async getOrders(entry:{cursor?:string, type?:string, pairId?:string, priceMin?:number|null, priceMax?:number|null}) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/orders';
          // const token = useCookie('token');
          const response = await axiosInstance.get(url, {
            params: {
              cursor: entry.cursor, 
              type: entry.type, 
              pairId: entry.pairId,
              priceMin: entry.priceMin,
              priceMax: entry.priceMax
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

      async getOrder(orderId:string) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = `/order/${orderId}`;
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

      async createOrder(payload:{price:number; amount:number; type:string; pairId:string, minimumAmount:number}) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/orders/create';
          // const token = useCookie('token');
          const response = await axiosInstance.post(url, payload);

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

      async processOrder(payload:{amount:number, orderId:string}) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/orders/process';
          // const token = useCookie('token');
          const response = await axiosInstance.post(url, payload);

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

      async getPairWallets(orderType:string,pairId:string) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = `/orders/getPairWallets`;
          // const token = useCookie('token');
          const response = await axiosInstance.get(url,{
            params: {
              orderType,
              pairId
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

      async getTransactions(walletId?:string) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/transactions';
          // const token = useCookie('token');
          const response = await axiosInstance.get(url, {
            params: {
              walletId
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
  