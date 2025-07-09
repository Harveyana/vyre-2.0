import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware((to) => {
  const { authenticated } = storeToRefs(useAuthStore());
  const token = useCookie('token');
  
  if (token.value) {
    authenticated.value = true;
  }

  // If logged in and trying to access auth pages, redirect home
  if (token.value && (to?.name === 'login' || to?.name === 'signup' || to?.name === 'forgotPassword')) {
    return navigateTo('/');
  }

  // If not logged in and trying to access protected page
  if (!token.value && to?.name !== 'login' && to?.name !== 'signup') {
    // Store the original path only if it's a dashboard route
    if (to.fullPath.startsWith('/') || to.fullPath.startsWith('/app')) {
      sessionStorage.setItem('preLoginRoute', to.fullPath);
    }
    abortNavigation();
    return navigateTo('/login');
  }
});