
import axios,{AxiosError} from 'axios';


export const useRate = async(amount:number, currency:string, base:string) => {

   const rate = ref(0)
   const loading = ref(false)

    const getRate = async()=>{

      console.log('started composable')
      // if(!currency || !amount || !base || 0 === amount ) return

      loading.value = true
      try {
        const { axiosInstance } = useAxios()
        const url = '/rate';
        const response = await axiosInstance.get(url, {
          params: {
            currency, 
            basePair:base,
            amount,
          }
        });

        console.log(response.data);
     
        return rate.value = response.data.value
        
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
        loading.value = false
      }
  
    

    }

    // watch(() => [amount, currency, base], async(newvalue, oldvalue) => {
    //   getRate()
    // });

    // onMounted(async()=>{
    //   getRate()
    // })


    return {
      rate,
      getRate,
      refreshing:true
    }

}