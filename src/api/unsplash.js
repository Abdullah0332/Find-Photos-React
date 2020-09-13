import Axios from 'axios'

export default Axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: 'Client-ID zGEQ4bF9XMRpsb56Zf3p8-19xToUrGOnMxrR_KRthA0'
    }
})

