export default defineEventHandler(async (event) => {
    // const config = useRuntimeConfig(event)
    const body = await readBody(event)

//    console.log(body)
    try {
        const repo = await $fetch('http://localhost:5000/api/account/login', {
            method:'POST',
            body:body
        })
    
        return repo 

    } catch (error) {
        // if (error.code == )
        throw createError({
        statusCode: error.status,
        statusMessage: error.code,
        })
    
    }
    
  })