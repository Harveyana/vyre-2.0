import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware(async(to) => {
  // const { authenticated } = storeToRefs(useAuthStore());
  // const token = useCookie('token');

  // const { $clerk } = useNuxtApp();
  const { checkAuth } = useAuth();

   // Check authentication state
    const isAuthenticated = await checkAuth()
    console.log('middleware auth', isAuthenticated)

  
  // if (token.value) {
  //   authenticated.value = true;
  // }

  // If logged in and trying to access auth pages, redirect home
  // if (token.value && (to?.name === 'login' || to?.name === 'signup' || to?.name === 'forgotPassword')) {
  //   return navigateTo('/');
  // }

  //  If logged in and trying to access auth pages, redirect home
  if (isAuthenticated && (to?.name === 'login' || to?.name === 'signup' || to?.name === 'forgotPassword' || to?.name === 'callback')) {
    return navigateTo('/');
  }

  // If not logged in and trying to access protected page
  if (!isAuthenticated && !['login', 'callback', 'signup', 'forgotPassword'].includes(to?.name as string)) {
    // Store the original path for post-login redirect
    if (to.fullPath.startsWith('/') || to.fullPath.startsWith('/app')) {
      sessionStorage.setItem('preLoginRoute', to.fullPath);
    }
    
    // Redirect to login with return_to parameter
    return navigateTo({
      path: '/login',
      query: { return_to: to.fullPath }
    });
  }


  // If not logged in and trying to access protected page
  // if (!token.value && to?.name !== 'login' && to?.name !== 'signup') {
  //   // Store the original path only if it's a dashboard route
  //   if (to.fullPath.startsWith('/') || to.fullPath.startsWith('/app')) {
  //     sessionStorage.setItem('preLoginRoute', to.fullPath);
  //   }
  //   abortNavigation();
  //   return navigateTo('/login');
  // }

  // For protected routes, ensure valid token
  // if (isAuthenticated && to?.meta.requiresAuth) {
  //   try {
  //     const token = await $auth.client.getTokenSilently();
  //     if (!token) throw new Error('No token found');
  //   } catch (error) {
  //     console.error('Token validation failed:', error);
  //     return navigateTo('/login');
  //   }
  // }

});