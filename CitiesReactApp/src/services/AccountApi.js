import axios from "axios"
import Register from "../Components/Register";

const API_BASE_URL = "https://localhost:5003/api/v1/account/";

const apiClient = axios.create({baseURL: API_BASE_URL,
                                headers:{
                                            "content-type":"application/json"
                                        }
                                })

const accountService = {
    register: async (registerDTO)=>{const response = await apiClient.post("register",registerDTO); return response;},
    login: async (loginDTO)=>{ const response = await apiClient.post("login",loginDTO); return response; },
    tokenFetch: async (token,refreshToken)=>{ const response = await apiClient.post("GetNewToken",{ token: token, refreshToken: refreshToken }); return response; }
}

export default accountService