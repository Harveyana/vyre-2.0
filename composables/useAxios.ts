import axios from 'axios'


export const useAxios = () => {

  const config = useRuntimeConfig();
  const baseURL = config.public.baseUrl;
  
  const axiosInstance = axios.create({
    baseURL: baseURL, // Replace with your base URL
    // timeout: 1000, // Optional, set a timeout for requests
  });

    const token = useCookie('token');
    const router = useRouter()
    axiosInstance.defaults.headers.common['authorization'] = `Bearer ${token.value}`;
    axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';


    axiosInstance.interceptors.response.use(
      (response) => {
        // If the response is successful, just return the response
        return response;
      },
      (error) => {
        // If the response has a status of 401 or 403, handle it accordingly
        if (error.response) {
          if (error.response.status === 401) {

            token.value = null;
            router.push('/login')

            // Handle unauthorized access
            // console.error('Unauthorized access - 401');

          } else if (error.response.status === 403) {

              token.value = null;
              router.push('/login')

            // console.error('Forbidden access - 403');
            
          }
        }
        // Always return a rejected promise so that the calling code knows an error occurred
        return Promise.reject(error);
      }
    );

  return {axiosInstance}
}