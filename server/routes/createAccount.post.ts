export default defineEventHandler(async (event) => {
    // const config = useRuntimeConfig(event)
    const body = await readBody(event)

//    console.log(body)
    try {
        const repo = await $fetch('http://localhost:5000/api/account/createUser', {
            method:'POST',
            body:body
        })
    
        return repo

    } catch (error) {

        throw createError({
            statusCode: error.status,
            statusMessage: 'operation failed',
        })
          
    }
    
  })