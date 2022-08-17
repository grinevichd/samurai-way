import axios from "axios";
import exp from "constants";


const instanceAxios = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': '250469ca-978a-4f57-b61c-3f987a5f0b00'
    }
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instanceAxios.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
            .then(res => {
                return res.data
            })
    },
    followUser(userID: number) {
        return instanceAxios.post(`follow/${userID}`, {})
            .then(res => res.data.resultCode)
    },
    unfollowUser(userID: number) {
        return instanceAxios.delete(`follow/${userID}`)
            .then(res => res.data.resultCode)
    },

    getProfile(userID:string){

        return instanceAxios.get(`profile/${userID}`)

    }
}

export const authAPI = {
    authLogin(){
        return instanceAxios.get(`auth/me`)
            .then(res => res.data)
    }
}




