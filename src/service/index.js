import axios from "axios";

const httpClient = axios.create({
    baseURL:"http://ec2-100-24-63-57.compute-1.amazonaws.com:3000/api/poligonos/",
    timeout:10000
})
export default httpClient;