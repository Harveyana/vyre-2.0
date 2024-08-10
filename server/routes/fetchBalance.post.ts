export default defineEventHandler(async (event) => {
    // const config = useRuntimeConfig(event)
    const body = await readBody(event)

//    console.log(body)
    try {
        const repo = await $fetch('http://localhost:5000/api/wallet/fetchBalance', {
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
            statusMessage: 'operation failed',
        })
          
    }
    
  })

//   You can simply use event wrapper passed in the defineEventHandler like this:

// export default defineEventHandler((event) => {
//     event.res.statusCode = 401;
//     return { message: "Unauthorized access" };
//   });



// import { sendError, createError } from 'h3';
// export default function handleError(err, event) {
//   error = createError({
//     statusCode: err.status,
//     statusMessage: err.status,
//     data: err.body,
//   });
//   sendError(event, error, false);
// }