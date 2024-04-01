import axios from "axios"
import { toast } from "sonner"

const api = axios.create({ baseURL: "http://localhost:4000/api" })

api.interceptors.response.use((response) => {
    return response
}, (e) => {
    if (e?.response?.data?.error) {
        toast.error(e.response.data.error)
    } else {
        toast.error("Some Error Occured")
    }
    return Promise.reject(e)
})

export const apiClient = async (method: 'get' | "post", url: string, body?: any) => {
    if (method.toLowerCase() === "get") {
        return await api.get(url);
    }
    else if (method.toLowerCase() === "post") {
        return await api.post(url, body)
    }
}