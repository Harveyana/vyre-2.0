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
      async(error) => {
        // If the response has a status of 401 or 403, handle it accordingly
        if (error.response) {
          if ([401, 403].includes(error.response.status)) {
            // Store current route if it's a dashboard route
            // if (router.currentRoute.value.fullPath.startsWith('/dashboard') || 
            //     router.currentRoute.value.fullPath.startsWith('/app')) {
              sessionStorage.setItem('preLoginRoute', router.currentRoute.value.fullPath);
            // }
            
            // Clear token and redirect to login
            token.value = null;
            await navigateTo('/login');
          }

        }
        // Always return a rejected promise so that the calling code knows an error occurred
        return Promise.reject(error);
      }
    );

  return {axiosInstance}
}