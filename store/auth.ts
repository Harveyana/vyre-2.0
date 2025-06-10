import { defineStore } from 'pinia';
import axios,{AxiosError} from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:5000', // Replace with your base URL
//   // timeout: 1000, // Optional, set a timeout for requests
// })


interface UserPayloadInterface {
    email: string;
    password: string;
}

interface Userpayload {
    DETAILS:{
      firstName: string;
      lastName: string;
      businessName?: string;
      email:string;
      phoneNumber: string
    }
}

interface Businesspayload {
  TYPE: string;
  PERSONAL:{
    firstName: string;
    lastName: string;
    email:string;
    phoneNumber: string
  }
  BUSINESS:{
    type: string;
    name: string;
    regNo: string;
    address: string;
    file: string;
  }
  DIRECTOR:{
    portfolio: string;
    firstName: string;
    lastName: string;
    idType: string;
    idFile: string;
  }

}

interface storePayload {
  location: string;
  latitude: number;
  longitude: number;
  admin:{
    firstName: string,
    lastName: string,
    email: string,
    phoneNo: string
  };
}



export const useAuthStore = defineStore('auth', {
  
    state: () => ({
      authenticated: false,
      loading: false,
      progress: 10,
      user: null,
      permisssions: [''],
      store: null,
      organisation: null,
      email: ''
    }),
    actions: {

      permittedTo(action:string,subject:string){
        if(this.permisssions.includes(`can ${action} ${subject}`) || 
        this.permisssions.includes('can manage all')){
          return true
        }else return false
      },

      
      async loginUser(payload:{email: string; password: string}) {
        this.loading = true

        try {
          const token = useCookie('token');
          const { axiosInstance } = useAxios()
          const url = '/login';
          // const token = useCookie('token');
          const response = await axiosInstance.post(url, payload);

          
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

      async authenticateOtp(payload:{code:string, userId:string}) {
        
        this.loading = true
        console.log(payload)

        try {
          const { axiosInstance } = useAxios()
          const url = '/authenticate-Otp';
          const token = useCookie('token');
          const response = await axiosInstance.post(url, payload);

          console.log(response.data);
          token.value = response.data.token
    
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

      async recoverAccount(payload:{email:string} ) {
        
        this.loading = true

        try {
          const { axiosInstance } = useAxios()
          const url = '/forgot-password';
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

      async register_User(payload: Userpayload) {
        
        this.loading = true

        try {
          // const token = useCookie('token');
          const { axiosInstance } = useAxios()
          const url = '/register';
          this.email = payload.DETAILS.email
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

      async userAddress(payload:{userId:string, country:string,address:string, state:string, city:string, postalCode:string}) {
        
        this.loading = true
        console.log(payload)

        try {
          const token = useCookie('token');
          const { axiosInstance } = useAxios()
          const url = '/user-Address';
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

      // async register_Business(payload: Businesspayload) {
        
      //   this.loading = true

      //   try {
      //     // const token = useCookie('token');
      //     const { axiosInstance } = useAxios()
      //     const url = '/register';
      //     this.email = payload.email
      //     // const token = useCookie('token');
      //     const response = await axiosInstance.post(url, payload);

      //     console.log(response.data);
    
      //      return response.data
          
      //   } catch (error: any | AxiosError) {
      //     console.log(error)
      //       if (axios.isAxiosError(error))  {
      //         // Access to config, request, and response
      //         console.log(error.response?.data)
      //         return error.response?.data

      //       } else {
      //         // Just a stock error
      //         console.error('Error:', error.message);
      //       }
            
      //   } finally {
      //     this.loading = false
      //   }
      // },

      async setupPassword(payload:{userId:string, password:string}) {
        
        this.loading = true
        console.log(payload)

        try {
          const token = useCookie('token');
          const { axiosInstance } = useAxios()
          const url = '/setup-password';
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

      async SubmitOtp(payload:{code:number, email:string}) {
        
        this.loading = true
        console.log(payload)

        try {
          const { axiosInstance } = useAxios()
          const url = '/verify-Otp';
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

      // forgot password update
      async updatePassword(payload:{userId:string, password:string}) {
        
        this.loading = true
        console.log(payload)

        try {
          const { axiosInstance } = useAxios()
          const url = '/update-password';
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

      // password change from current password
      async changePassword(payload:{currentPassword:string, newPassword:string}) {
        
        this.loading = true
        console.log(payload)

        try {
          const { axiosInstance } = useAxios()
          const url = '/user/change-password';
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

      async resendOtp(payload:{email:string}) {
        
        this.loading = true
        console.log(payload)

        try {
          const { axiosInstance } = useAxios()
          const url = '/resent-otp';
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

      async resendEmail(payload:{email:string}) {
        
        this.loading = true
        console.log(payload)

        try {
          const token = useCookie('token');
          const { axiosInstance } = useAxios()
          const url = '/organisation/user/resend-email';
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

       async queryUser(email:string) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/user/query';
          // const token = useCookie('token');
          const response = await axiosInstance.post(url,{
            email
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


      async getAuthSecret() {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/user/get-Auth-secret';
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

      async set2Factor(method:string, userSecret?:string, token?:string) {
        
        this.loading = true
        // console.log(payload)

        try {
          const { axiosInstance } = useAxios()
          const url = '/user/two-factor-authentication';
          // const token = useCookie('token');
          const response = await axiosInstance.post(url, { method, userSecret, token });

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

      async disable2Factor(token?:string) {
        
        this.loading = true
        // console.log(payload)

        try {
          const { axiosInstance } = useAxios()
          const url = '/user/disable-two-factor-authentication';
          // const token = useCookie('token');
          const response = await axiosInstance.post(url, {token});

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

      async get2Factor() {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/user/get-two-factor-authentication-status';
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

      async getProfile() {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/user/get-profile';
          // const token = useCookie('token');
          const response = await axiosInstance.get(url);

          console.log(response.data);
          if(response.data.success) this.user = response.data.user
          // if(response.data.organisation) this.organisation = response.data.organisation
          // if(response.data.store) this.store = response.data.store

          // this.permisssions = response.data.user.role.permissions.map((item:any)=>{
          //   const action = item.permission.action
          //   const subject = item.permission.subject
          //   return `can ${action} ${subject}`
          // })

          // console.log(this.permisssions)
       
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

      async updateProfile(payload:{firstName:string, lastName:string, email:string, photoUrl:string, phoneNumber:string}) {
        
        this.loading = true
        console.log(payload)

        try {
          const { axiosInstance } = useAxios()
          const url = '/user/update-profile';
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

      async updateOrg(payload:{organizationName:string, organizationCacRegNo:string, logo:string}) {
        
        this.loading = true
        console.log(payload)

        try {
          const { axiosInstance } = useAxios()
          const url = '/organisation/profile/update';
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

      async getStoreNotifications(date_from?:string, date_to?:string,limit?:number) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/store/notification';
          const response = await axiosInstance.get(url,{
            params: {
              date_from, 
              date_to,
              limit
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

      async getOrgNotifications(date_from?:string, date_to?:string,limit?:number) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/organisation/notification';
          const response = await axiosInstance.get(url,{
            params: {
              date_from, 
              date_to,
              limit
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

      // async filterNotifications(date_from:string, date_to:string, limit?:number) {
      //   this.loading = true
      //   try {
      //     const { axiosInstance } = useAxios()
      //     const url = '/user/notification/filter';
      //     const response = await axiosInstance.get(url,{
      //       params: {
      //         limit,
      //         date_from,
      //         date_to
      //       }
      //     });

      //     console.log(response.data);
    
      //     return response.data
          
      //   } catch (error: any | AxiosError) {
      //     console.log(error)
      //       if (axios.isAxiosError(error))  {
      //         // Access to config, request, and response
      //         console.log(error.response?.data)
      //         return error.response?.data

      //       } else {
      //         // Just a stock error
      //         console.error('Error:', error.message);
      //       }
            
      //   } finally {
      //     this.loading = false
      //   }
      // },


      async getNotificationSetup() {
        
        // this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/user/notification-setting';
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
          // this.loading = false
        }
      },

      async updateNotificationSetup(payload:{emailNotification:boolean, pushNotification:boolean, smsNotification:boolean}) {
        
        // this.loading = true
        console.log(payload)

        try {
          const { axiosInstance } = useAxios()
          const url = '/user/notification-setting';
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
          // this.loading = false
        }
      },

      async getbanks(search?:string) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/banks';
          const response = await axiosInstance.get(url,{
              params: {
                search
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

      async verifyBank(payload:{bankId:string, accountNumber:string}) {
        
        this.loading = true
        console.log(payload)

        try {
          const { axiosInstance } = useAxios()
          const url = '/user/verify-account-detail';
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

      async saveBank(payload:{bankId:string, accountNumber:string, accountName:string}) {
        
        this.loading = true
        console.log(payload)

        try {
          const { axiosInstance } = useAxios()
          const url = '/user/bank/create';
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

      async getbankAccounts() {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/user/bank';
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

      async deleteBankAccount(userBankId:string) {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = `/user/bank/${userBankId}`;
          const response = await axiosInstance.delete(url);

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

      async getPermissions() {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/role/permissions/all';
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
      
      async createRole(payload:{name:string, description:string, permissions:string[]}) {
        
        this.loading = true
        console.log(payload)

        try {
          const { axiosInstance } = useAxios()
          const url = '/role';
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

       async getRole(roleId:string) {
        
        this.loading = true

        try {
          const { axiosInstance } = useAxios()
          const url = `/role/${roleId}`;
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

      async editRole(name:string, description:string, permissions:string[],roleId:string) {
        
        this.loading = true

        try {
          const { axiosInstance } = useAxios()
          const url = `/role/${roleId}`;
          // const token = useCookie('token');
          const response = await axiosInstance.patch(url,{
            name,
            description,
            permissions
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

      async createStoreAdmin(payload:{firstName:string, lastName:string, email:string, password:string, roleId:string}) {
        
        this.loading = true
        console.log(payload)

        try {
          const { axiosInstance } = useAxios()
          const url = '/store/admin';
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

      async createOrgAdmin(payload:{firstName:string, lastName:string, email:string, password:string, roleId:string}) {
        
        this.loading = true
        console.log(payload)

        try {
          const { axiosInstance } = useAxios()
          const url = '/organisation/user/add';
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

      async fetchAdministrators(limit?:number, page?:number) {
          
        this.loading = true

        try {
          const { axiosInstance } = useAxios()
          const url = '/store/administrators';
          const response = await axiosInstance.get(url, {
            params: {
              limit,
              page
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

      async fetchOrgAdministrators(limit?:number, page?:number) {
          
        this.loading = true

        try {
          const { axiosInstance } = useAxios()
          const url = '/organisation/administrators';
          const response = await axiosInstance.get(url, {
            params: {
              limit,
              page
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

      async deleteAdmin(adminId:string) {
        
        // this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = `/store/admin/${adminId}`;
          const response = await axiosInstance.delete(url);

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
          // this.loading = false
        }
      },

      async deleteOrganisationAdmin(adminId:string) {
        
        // this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = `/organisation/user/delete/${adminId}`;
          const response = await axiosInstance.delete(url);

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
          // this.loading = false
        }
      },

      async getRoles() {
        
        this.loading = true
        try {
          const { axiosInstance } = useAxios()
          const url = '/roles';
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

      logUserOut() {
        const router = useRouter()
        const token = useCookie('token'); // useCookie new hook in nuxt 3
        this.authenticated = false; // set authenticated  state value to false
        token.value = null; // clear the token cookie
        // router.push('/auth')
      },






    


    },
    
  });
  