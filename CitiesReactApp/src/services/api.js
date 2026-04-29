import axios from "axios"

const API_BASE_URL = "https://localhost:5003/api/";

const apiClient = axios.create({baseURL: API_BASE_URL,
                                headers:{
                                    "content-type":"application/json"
                                }
})

const citiesService = {
    getAll : async ()=>{await apiClient.get("v1/cities")},
    getByID : async(id)=>{await apiClient.get("v1/cities/"+id)},
    postData : async({formData})=>{await apiClient.post("v1/cities",formData)},
    deleteByID : async(id)=>{await apiClient.delete("v1/cities/"+id)},
    putByID: async(id,cityData)=>{await apiClient.patch("v1/cities/"+id,cityData)}
}

export default citiesService