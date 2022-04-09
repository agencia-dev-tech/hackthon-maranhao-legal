console.log(process.env.API_URL)


const api = axios.create({
    baseURL: process.env.API_URL,
  })