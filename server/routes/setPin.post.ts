export default defineEventHandler(async (event) => {
    // const config = useRuntimeConfig(event)
    const body = await readBody(event)

//    console.log(body)
   try {
        const repo = await $fetch('http://localhost:5000/api/account/setAuthorisation', {
            method:'POST',
            headers: {
                idtoken: body.idToken
            },
            body:{
            pin: body.pin
            }
        })
    
        return repo
        
   } catch (error) {
        throw createError({
            statusCode: 400,
            statusMessage: 'operation failed',
        })
      
   }
    
  })