import axios from "axios";

const capacityApi = axios.create({
    baseURL: "http://localhost:4000/api/capacity/" 
})

export default capacityApi