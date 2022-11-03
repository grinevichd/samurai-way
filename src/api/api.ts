import axios from "axios";
import exp from "constants";
import {saveProfile} from "../redux/profile-reducer";


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
        console.warn("Please use profileAPI object")

       return  profileAPI.getProfile(userID)

    }
}
export const profileAPI = {
    getProfile(userID:string){

        return instanceAxios.get(`profile/${userID}`)

    },
    getStatus(userID:string){

        return instanceAxios.get(`profile/status/${userID}`)

    },
    updateStatus(status : string){
        return instanceAxios.put(`profile/status/`, {status})
    },
    savePhoto(photoFile : any){
        const formData = new FormData()
        formData.append("image", photoFile)
        return instanceAxios.put(`profile/photo/`, formData, { headers : {"Content-Type" : "multipart/form-data"}})
    },
    saveProfile(profile : any){

        return instanceAxios.put(`profile`, profile)
    },


}

export const authAPI = {
    authLogin(){
        return instanceAxios.get(`auth/me`)
            .then(res => res.data)
    },
    login(email:string ,password :string, rememberMe: boolean = false ){
        return instanceAxios.post(`/auth/login`,{email ,password , rememberMe})
    },
    logout(){
        return instanceAxios.delete(`/auth/login`)
    },

}




