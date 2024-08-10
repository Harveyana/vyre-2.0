export default defineEventHandler(async (event) => {
    // const config = useRuntimeConfig(event)
    const body = await readBody(event)

//    console.log(body)
    const queryString = new URLSearchParams(body).toString();

    const repo = await $fetch(`http://localhost:5000/api/rates/getRates?${queryString}`, {
        method:'GET'
        // body:body
    
    })
  
    return repo
  })