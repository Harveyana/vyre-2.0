export default defineEventHandler(async (event) => {
    // const config = useRuntimeConfig(event)
    const body = await readBody(event)

//    console.log(body)
   try {
        const repo = await $fetch('http://localhost:5000/api/account/verifyCode', {
            method:'POST',
            headers: {
                idToken: body.idToken
            },
            body:{
            code:body.code
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