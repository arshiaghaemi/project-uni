const fetchUrl = async ({url, method = 'GET', body}) => {
    const absoluteUrl = `${process.env.NEXT_PUBLIC_ABSOLUTE_URL}${url}`
    return new Promise((resolve) => {
        setTimeout(async () => {
            const params = {
                method,
                headers: {
                    'Content-Type': 'application/json' 
                },
            }
            if (method === 'POST') {
                params.body = JSON.stringify(body)
            }
            const response = await fetch(absoluteUrl, params)
            resolve(await response.json())
        }, 0)
    })
}

export default fetchUrl 
/*
const fetchUrl = async ({ url, method = 'GET'}) => {
    return new Promise((resolve) => {
        setTimeout(async()=> {
            const response = await fetch(url, {
                method,
            })
            resolve(await response.json())
        },1000)
    })
}

export default fetchUrl 
*/