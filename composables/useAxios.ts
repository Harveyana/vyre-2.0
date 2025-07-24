import axios from 'axios';

export const useAxios = () => {
  const config = useRuntimeConfig();
  const { $auth } = useNuxtApp();
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
        const token = await $auth.client.getTokenSilently().catch(async (error:any) => {
          await handleAuthError(error, $auth, router);
          throw error; // Stop request execution
        });
        
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
        localStorage.clear();

        await $auth.client.logout({
          returnTo: window.location.origin + '/login',
          federated: true
        });

      }
      return Promise.reject(error);
    }
  );

  return { axiosInstance };
};

const handleAuthError = async (error: any, $auth: any, router: any) => {
  const errorCode = error?.error || error?.message;
  
  const authErrors = [
    'missing_refresh_token',
    'invalid_grant',
    'login_required',
    'timeout'
  ];

  if (authErrors.some(code => errorCode?.includes(code))) {
    const currentRoute = router.currentRoute.value.fullPath;
    
    if (isProtectedRoute(currentRoute)) {
      sessionStorage.setItem('preLoginRoute', currentRoute);
    }
    localStorage.clear();
    await $auth.client.logout({
      returnTo: window.location.origin + '/login',
      federated: true
    });
  }
};

const isProtectedRoute = (path: string) => {
  const protectedPaths = ['/', '/app', '/account'];
  return protectedPaths.some(p => path.startsWith(p));
};