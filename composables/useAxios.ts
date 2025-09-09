import axios from 'axios';

export const useAxios = () => {
  const config = useRuntimeConfig();
  const { $clerk } = useNuxtApp();
  const router = useRouter();

  const axiosInstance = axios.create({
    baseURL: config.public.baseUrl,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Request interceptor to inject token
  axiosInstance.interceptors.request.use(
    async (config) => {
      try {
        let token;
        try {
          token = await $clerk.getToken();
        } catch (error) {
          await handleAuthError(error, router);
          throw error; // Still propagate the error
        }
        
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor for error handling
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        const currentRoute = router.currentRoute.value.fullPath;
        
        // Only store protected routes
        if (isProtectedRoute(currentRoute)) {
          sessionStorage.setItem('preLoginRoute', currentRoute);
        }

        // const loginPath = '/login';
        // const redirectUrl = new URL(loginPath, window.location.origin).toString();
        await navigateTo('/login');

      }
      return Promise.reject(error);
    }
  );

  return { axiosInstance };
};

const handleAuthError = async (error: any,router: any) => {

  console.log(error)

    const currentRoute = router.currentRoute.value.fullPath;
    
    if (isProtectedRoute(currentRoute)) {
      sessionStorage.setItem('preLoginRoute', currentRoute);
    }
    // const loginPath = '/login';
    // const redirectUrl = new URL(loginPath, window.location.origin).toString();
    await navigateTo('/login');
};

const isProtectedRoute = (path: string) => {
  const protectedPaths = ['/', '/app', '/account'];
  return protectedPaths.some(p => path.startsWith(p));
};