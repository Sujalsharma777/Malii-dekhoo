import axios from "axios"
const api = axios.create(
    {
            baseURL: 'https://malii-dekhoo.onrender.com/',
            withCredentials: true,
    }
)

export default api
