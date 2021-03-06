import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.withCredentials = true;

export const http = {
        get: axios.get,
        post: axios.post,
        delete: axios.delete,
        put: axios.put,
};
