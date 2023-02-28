import axios from 'axios'

const BasicFetch = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL ,

})

export default BasicFetch;