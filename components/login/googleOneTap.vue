<template>
  <div>
    <slot />
    <div id="google-one-tap-container"></div>
  </div>
</template>

  <script setup lang="ts">

  import { Toaster, toast } from 'vue-sonner';
  import { useClerk } from 'vue-clerk';

  // Add Google to Window type
declare global {
  interface Window {
    google?: any;
  }
}

const clerk = useClerk();
const router = useRouter();

  onMounted(() => {
    // Load the Google One Tap script
    loadGoogleScript().then(() => {
      initializeGoogleOneTap();
    });
  });

  const loadGoogleScript = () => {
    return new Promise((resolve) => {
      if (document.getElementById('google-one-tap-script')) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.id = 'google-one-tap-script';
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => resolve(true);
      document.head.appendChild(script);
    });
  };

  const initializeGoogleOneTap = () => {
    if (!window.google) return;

    window.google.accounts.id.initialize({
      // Replace with your Google Client ID
      client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
      callback: async (response) => {
        await handleGoogleOneTapResponse(response.credential);
      },
      prompt_parent_id: 'google-one-tap-container',
      cancel_on_tap_outside: false,
    });

    // Show the One Tap UI after a short delay
    setTimeout(() => {
      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed()) {
          console.log('Not displayed reason:', notification.getNotDisplayedReason());
        } else if (notification.isSkippedMoment()) {
          console.log('Skipped reason:', notification.getSkippedReason());
        } else if (notification.isDismissedMoment()) {
          console.log('Dismissed reason:', notification.getDismissedReason());
        }
      });
    }, 2000);
  };

  const handleGoogleOneTapResponse = async (token: string) => {
    try {
      const res = await clerk.authenticateWithGoogleOneTap({ token });
      
      await clerk.handleGoogleOneTapCallback(res, {
        signInFallbackRedirectUrl: '/sign-in',
        signUpFallbackRedirectUrl: '/sign-up',
      });
      
      // Redirect to dashboard or previous page
      router.push('/dashboard');
    } catch (error) {
      console.error('Google One Tap authentication failed:', error);
      router.push('/sign-in');
    }
  };

  </script>

  <style>
  * {
  font-family: 'cabinetGrotesk', sans-serif;
 }

 .extraboldCabinet{
  font-family: 'cabinetGroteskBold', sans-serif;
 }

 .blackCabinet{
  font-family: 'cabinetGroteskBlack', sans-serif;
 }
  </style>

