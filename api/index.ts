import axios from "axios"
import { toast } from "sonner"

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_SERVER_URL })

api.interceptors.request.use(function (config) {
    // Get the token and assign to the request 
    console.log("process-ev", process.env.NEXT_PUBLIC_SERVER_URL);
    let token = localStorage.getItem("user-token");
    if (token) {
        const tokenParsed = JSON.parse(token);
        config.headers['Authorization'] = `Bearer ${tokenParsed.access_token}`

    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

api.interceptors.response.use((response) => {
    return response
}, (e) => {
    if (e?.response?.status == 401) {
        localStorage.removeItem('user-token');
        window.location.href = "/auth/sign-in"
    }
    if (e?.response?.data?.message) {
        toast.error(e.response.data.message)
    } else {
        toast.error("Some Error Occured")
    }
    return Promise.reject(e)
})

export const apiClient = async (method: 'get' | "post" | "delete" | "patch", url: string, body?: any) => {
    if (method.toLowerCase() === "get") {
        return await api.get(url);
    }
    else if (method.toLowerCase() === "post") {
        console.log("Got inside the wait area");
        console.log(body);
        console.log(url)
        return await api.post(url, body);
    }
    else if (method.toLowerCase() === 'delete') {
        return await api.delete(url);
    }
    else if (method.toLowerCase() === "patch") {
        return await api.patch(url, body)
    }
}