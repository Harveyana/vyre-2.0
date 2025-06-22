import { defineStore } from 'pinia';
import axios,{AxiosError} from 'axios';

interface Address {
  country: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
}

interface BankDetails {
  bankId: string;
  accountNumber: string;
  type: string;
  currency: string;
  
  
  // Country-specific banking fields
  routingNumber?: string;       // US
  sortCode?: string;           // UK
  bicSwift?: string;           // International
  institutionNumber?: string;  // Canada
  bsbNumber?: string;          // Australia
  ifscCode?: string;           // India
  clabeNumber?: string;        // Mexico
  cnapsCode?: string;          // China
  nubanNumber?: string;        // Nigeria
  pixCode?: string;            // Brazil
  clearingCode?: string;       // Hong Kong
}

interface PaymentSource {
  sourcePaymentAccountId?: string;
  sourceCurrency: string;
  sourcePaymentMethod: string;
  sourceAmount: string;
}

interface PaymentDestination {
  destinationPaymentAccountId: string;
  destinationPaymentMethod: string;
  destinationCurrency: string;
}

interface QuotePayload {
  source: PaymentSource;
  destination: PaymentDestination;
}


export const useSwapStore = defineStore('swap', {
    state: () => ({
      loading: false,
    }),
    actions: {

      async linkBankAccount(payload:BankDetails) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/paymentAccount/fiat';
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

      async linkCryptoAccount(payload:{currency:string, chain:string, address:string}) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/paymentAccount/crypto';
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

      async getLinkedAccounts( type:string) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/linkedAccounts';
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

      async getQuote(payload:QuotePayload) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/swap/quote';
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

      async initiateSwap(payload:{quoteId:string}) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/swap/initiate';
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

      async getSwaps( currency?:string) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/swaps';
          // const token = useCookie('token');
          const response = await axiosInstance.get(url, {
            params: {
              currency
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

      async getSwap( id:string) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = `/swaps/${id}`;
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



      



    },
    
  });
  