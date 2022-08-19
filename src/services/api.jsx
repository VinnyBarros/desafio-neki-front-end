import axios from "axios"

export const api = axios.create({
    //http://34.123.176.124:8080/swagger-ui/index.html
    baseURL: 'http://34.123.176.124:8080'
});