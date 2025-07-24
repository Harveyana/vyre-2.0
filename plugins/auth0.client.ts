import { createAuth0Client } from '@auth0/auth0-spa-js'

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig()
  
  // Initialize Auth0 client
  const auth0 = await createAuth0Client({
    domain: 'https://auth.vyre.africa',
    clientId: 'XEgb4HtDsid25mPtpDesXYB0McI2LrZr',
    authorizationParams: {
      redirect_uri: window.location.origin + '/callback',
      audience: 'https://api.vyre.africa',
      // Optional: Force Google as default connection
      connection: 'google-oauth2' 
    },
    cacheLocation: 'localstorage',
    useRefreshTokens: true
  })

  // await auth0.checkSession()
  // Get initial auth state
  const isAuthenticated = await auth0.isAuthenticated()
  const user = isAuthenticated ? await auth0.getUser() : null

  console.log({'isAuthenticated':isAuthenticated, 'user':user})

  // Provide auth0 client directly as $auth
  // nuxtApp.provide('auth', {
  //   ...auth0, // Spread all Auth0Client methods
  //   user,     // Current user
  //   isAuthenticated // Auth state
  // })
  nuxtApp.provide('auth', {
    client: auth0,
    loginWithRedirect: auth0.loginWithRedirect,
    logout: auth0.logout,
    getUser: auth0.getUser,
    isAuthenticated: isAuthenticated
  })


})