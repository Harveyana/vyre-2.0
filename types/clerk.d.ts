import type { 
    Clerk,
    UserResource,
    SignInProps,
    SignUpProps,
    SessionResource,
    ClientResource
  } from '@clerk/types';

declare module '#app' {
  interface NuxtApp {
    $clerk: ClerkType & {
      isAuthenticated: boolean;
      user: any; // Replace with proper User type if available
      getToken: () => Promise<string | null>;
    };
  }
}