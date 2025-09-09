import { useOnline } from '@vueuse/core'

export const useAuth = () => {
  const { $clerk } = useNuxtApp();
  const router = useRouter();
  const online = useOnline()
  
  // Sign up with email and password
  const signUp = async (
    email: string, 
    password: string
  ): Promise<{
    success: boolean;
    message: string;
  }> => {
    try {
      const signUpResult = await $clerk.client.signUp.create({
        emailAddress: email,
        password,
      });
  
      // Check if email verification is needed
      // if (signUpResult.status === 'complete') {
      //   // If sign up is complete (unlikely with email), proceed to dashboard
      //   await $clerk.setActive({ session: signUpResult.createdSessionId });
      //   isAuthenticated.value = true
      //   return {
      //     success: true,
      //     message: 'Sign up successful!',
      //     nextStep: 'dashboard'
      //   };
      // }
  
      // Prepare email verification by default
      await $clerk.client.signUp.prepareEmailAddressVerification();
      
      return {
        success: true,
        message: 'Verification email sent! Please check your inbox.',
      };
  
    } catch (error: any) {
      console.error('Sign up failed:', error);
      
      // Extract Clerk-specific error messages
      const clerkError = error?.errors?.[0]?.longMessage 
        || error?.errors?.[0]?.message;
      
      // Common error cases with user-friendly messages
      const errorMessage = clerkError 
        || (error?.message.includes('password') ? 'Password does not meet requirements' : null)
        || (error?.message.includes('email') ? 'Invalid email address' : null)
        || 'Sign up failed. Please try again.';
      
      return {
        success: false,
        message: errorMessage
      };
    }
  };

  // handle email verification 
  const handleVerification = async (code: string): Promise<{
    success: boolean;
    message: string;
  }> => {
    try {
      const signUpAttempt = await $clerk.client.signUp.attemptEmailAddressVerification({
        code,
      });
  
      if (!signUpAttempt.createdSessionId) {
        return {
          success: false,
          message: 'Verification succeeded but no session was created',
        };
      }
  
      await $clerk.setActive({ session: signUpAttempt.createdSessionId });
      location.reload()
      
      return {
        success: true,
        message: 'Verification successful! Redirecting to dashboard...',
      };
  
    } catch (error: any) {
      console.error('Verification failed:', error);
      
      // Extract Clerk error message or use a default
      const errorMessage = error?.errors?.[0]?.message 
        || error?.message 
        || 'Verification failed. Please try again.';
      
      return {
        success: false,
        message: errorMessage,
      };
    }
  };

  const ResendVerification = async (): Promise<{
    success: boolean;
    message: string;
  }> => {
    try {
      await $clerk.client.signUp.prepareEmailAddressVerification();
      
      return {
        success: true,
        message: 'Verification email resent successfully!',
      };
  
    } catch (error: any) {
      console.error('Resending verification failed:', error);
      
      // Extract Clerk error message or use a default
      const errorMessage = error?.errors?.[0]?.longMessage 
        || error?.message 
        || 'Failed to resend verification email. Please try again.';
      
      return {
        success: false,
        message: errorMessage,
      };
    }
  };
  
  // Sign in with email and password
  const signIn = async (
    email: string,
    password: string
  ): Promise<{
    success: boolean;
    message: string;
  }> => {
    try {
      const result = await $clerk.client.signIn.create({
        identifier: email,
        password,
      });
  
      // Handle different sign-in statuses
      if (result.status === 'complete') {
        await $clerk.setActive({ session: result.createdSessionId });
        location.reload()
        return {
          success: true,
          message: 'Sign in successful! Redirecting...',
        };
      }
  
      // Handle cases where additional verification is needed
      if (result.status === 'needs_second_factor' || result.status === 'needs_new_password') {
        return {
          success: false,
          message: 'Additional verification required',
        };
      }
  
      // Default case for incomplete sign-in
      return {
        success: true,
        message: 'Sign in initiated - please complete verification',
      };
  
    } catch (error: any) {
      console.error('Sign in failed:', error);
      
      // Extract Clerk-specific error messages
      const clerkError = error?.errors?.[0]?.longMessage 
        || error?.errors?.[0]?.message;
  
      // Common error cases with user-friendly messages
      const errorMessage = clerkError 
        || (error?.message?.includes('password') ? 'Invalid email or password' : null)
        || (error?.message?.includes('identifier') ? 'Account not found' : null)
        || 'Sign in failed. Please try again.';
  
      return {
        success: false,
        message: errorMessage
      };
    }
  };
  
  // Sign in with Google (including One Tap)
  const signInWithGoogle = async () => {
    try {
      await $clerk.client.signIn.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: '/callback',
        redirectUrlComplete: '/',
      });
    } catch (error) {
      console.log('Google sign in failed:', error);
      throw error;
    }
  };
  
  // Sign out
  const signOut = async () => {
    await $clerk.signOut({ redirectUrl: '/login' });
    // await router.push('/login');
  };

  const checkAuth = async (): Promise<boolean> => {
    try {
      // Try to get auth state from Clerk
      if ($clerk.isAuthenticated.value) {
        return true;
      }
      
      // Fallback to stored state if offline
      // const isOnline = navigator.onLine;
      if (!online.value) {
        const storedState = localStorage.getItem('clerk-auth-state');
        return storedState === 'Authenticated';
      }
      
      // If online but Clerk state is false, try to refresh
      await $clerk.load();
      return $clerk.isAuthenticated.value;
      
    } catch (error) {
      console.warn('Auth check failed, using fallback:', error);
      const storedState = localStorage.getItem('clerk-auth-state');
      return storedState === 'authenticated';
    }
  };

  watch($clerk.isAuthenticated, (newValue) => {
    console.log('isAuthenticated', newValue )
    if(online.value){  /// only update if online 
      localStorage.setItem('clerk-auth-state', newValue ? 'Authenticated' : 'Unauthenticated');
    }
    
  }, { immediate: true });


  watch(online, async(newValue) => {
    if(online.value){
      console.log('clerk reloaded', newValue )
      await $clerk.load();
    }
    
  }, { immediate: true });




  return {
    signUp,
    checkAuth,
    signIn,
    signInWithGoogle,
    signOut,
    handleVerification,
    ResendVerification,
  };
};