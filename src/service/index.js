import axios from "axios";

const httpClient = axios.create({
    baseURL:"http://localhost:3000/api/poligonos/",
    timeout:10000
})
export default httpClient;