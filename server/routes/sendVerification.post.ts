export default defineEventHandler(async (event) => {
    // const config = useRuntimeConfig(event)
    const body = await readBody(event)

//    console.log(body)
    try {
        const repo = await $fetch('http://localhost:5000/api/account/sendVerification', {
            method:'POST',
            // body:body
            headers: {
                idToken: body.idToken
            }
        })
    
        return repo

    } catch (error) {

        throw createError({
            statusCode: 400,
            statusMessage: error,
        })
          
    }
    
  })