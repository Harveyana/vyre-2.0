export default defineEventHandler(async (event) => {
    // const config = useRuntimeConfig(event)
    const body = await readBody(event)

//    console.log(body)
    try {
        const repo = await $fetch('http://localhost:5000/api/account/fetchStatus', {
            method:'POST',
            headers: {
                idtoken: body.idToken
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