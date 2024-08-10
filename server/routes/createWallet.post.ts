export default defineEventHandler(async (event) => {
    // const config = useRuntimeConfig(event)
    const body = await readBody(event)

//    console.log(body)
    try {
        const repo = await $fetch('http://localhost:5000/api/wallet/createWallet', {
            method:'POST',
            headers: {
                idtoken: body.idToken
            },
            body:{
            ISO: body.ISO
            }
        })
    
        return repo
    
    } catch (error) {

        throw createError({
            statusCode: 400,
            statusMessage: 'already exists',
          })
          
    }
    
  })