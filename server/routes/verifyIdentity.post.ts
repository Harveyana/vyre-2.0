export default defineEventHandler(async (event) => {
    // const config = useRuntimeConfig(event)
    const body = await readBody(event)

//    console.log(body)
    try {
         const repo = await $fetch('http://localhost:5000/api/account/verifyIdentity', {
            method:'POST',
            headers: {
                idtoken: body.idToken
            },
            body:{
            BVN:body.BVN
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