export default defineEventHandler(async (event) => {
    // const config = useRuntimeConfig(event)
    const body = await readBody(event)

//    console.log(body)
    try {
        const repo = await $fetch('http://localhost:5000/api/wallet/fetchWallet', {
            method:'POST',
            // body:body
            headers: {
                idToken: body.idToken
            },
            body:{
              walletId: body.walletId
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