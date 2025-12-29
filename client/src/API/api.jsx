import axios from "axios"
const api = axios.create(
    {
            baseURL: 'https://malii-dekhoo-backend-server.onrender.com',
            withCredentials: true,
    }
)

export default api
