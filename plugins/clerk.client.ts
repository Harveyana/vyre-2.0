// plugins/clerk.client.ts
import { Clerk } from '@clerk/clerk-js';
 
export default defineNuxtPlugin(async (nuxtApp) => {
  const publishableKey = 'pk_test_ZGVlcC1sYW1iLTUwLmNsZXJrLmFjY291bnRzLmRldiQ';

  // pk_test_ZGVlcC1sYW1iLTUwLmNsZXJrLmFjY291bnRzLmRldiQ 
  // pk_live_Y2xlcmsudnlyZS5hZnJpY2Ek

  if (!publishableKey) {
    throw new Error('Missing Clerk Publishable Key');
  }

  const clerk = new Clerk(publishableKey);

  try {
    await clerk.load();
    
    // Create reactive state
    const isAuthenticated = ref(clerk.session?.status === "active");
    const user = ref(clerk.user);

    // Update state when Clerk changes
    clerk.addListener((event) => {
      if (event.session || event.user) {
        isAuthenticated.value = clerk.session?.status === "active";
        user.value = clerk.user;
      }
    });

    nuxtApp.provide('clerk', {
      ...clerk,
      isAuthenticated: computed(() => isAuthenticated.value),
      user: computed(() => user.value),
      getToken: async () => {
        try {
          return await clerk.session?.getToken();
        } catch (error) {
          console.error('Failed to get session token:', error);
          return null;
        }
      }
    });

    console.log('Clerk initialized successfully');

  } catch (error) {
    console.error('Failed to initialize Clerk:', error);
    throw error;
  }
});
