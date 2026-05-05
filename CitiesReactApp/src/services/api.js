import axios from "axios"

const API_BASE_URL = "https://localhost:5003/api/";

const apiClient = axios.create({baseURL: API_BASE_URL,
                                headers:{
                                    "content-type":"application/json"
                                }
})

const citiesService =(token)=> ({
    getAll : async ()=>{const response = await apiClient.get("v1/cities", {headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }}); return response},
    getByID : async(id)=>{const response = await apiClient.get("v1/cities/"+id, {headers: { Authorization: `Bearer ${token}` }}); return response},
    postData : async(formData)=>{const response = await apiClient.post("v1/cities",formData, {headers: { Authorization: `Bearer ${token}` }}); return response},
    deleteByID : async(id)=>{const response = await apiClient.delete("v1/cities/"+id, {headers: { Authorization: `Bearer ${token}` }}); return response},
    putByID: async(id,cityData)=>{const response = await apiClient.put("v1/cities/"+id,cityData, {headers: { Authorization: `Bearer ${token}` }}); return response}
})

export default citiesService