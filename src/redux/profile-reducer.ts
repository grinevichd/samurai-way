import {ActionsTypes, AddPostActionType, ChangePostActionType, UserProfileAT} from "./store";
import {Dispatch} from "redux";
import {authAPI, profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";

const SET_USER_TYPE = "SET_USER_TYPE"; 
const SET_STATUS = "SET_STATUS";
export  type PostsType = {
    id: number
    message: string
    countLikes: number
}

export type UserProfile = {
    "aboutMe": null | string
    "contacts": {
        "facebook": null | string
        "website": null | string
        "vk": null | string
        "twitter": null | string
        "instagram": null | string
        "youtube": null | string
        "github": null | string
        "mainLink": null | string
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": null | string
    "fullName": string
    "userId": number
    "photos": {
        "small": undefined | string
        "large": undefined | string
    }
}

export type ProfilePageType = {
    postsData: Array<PostsType>

    profileUser : UserProfile | null
    status : string

}


let initialState: ProfilePageType = {

    postsData: [
        {id: 1, message: "Hello how are u?", countLikes: 15},
        {id: 2, message: "yup it's my first post", countLikes: 25},
    ],

    profileUser : null,
    status : ""

}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
            const newPost = {id: 5, message: action.value, countLikes: 0}
            return {
                ...state,
                postsData : [...state.postsData, newPost],

            }
        }

        case SET_USER_TYPE:{
            return {
                ...state,
                profileUser : action.profile
            }
        }
        case SET_STATUS:
            return {
                ...state,
                status : action.status
            }

        default :
            return state
    }

}
export const addPostActionCreator = (value : string): AddPostActionType => {
    return {type: ADD_POST,value}
}

export const setUserProfile = (profile:UserProfile):UserProfileAT => {
    debugger
  return{
      type : SET_USER_TYPE,
      profile
  }
}
const setStatus = (status : string) =>{
    return {
        type : SET_STATUS,
        status
    }
}


export const getProfileThunk = (userID : string)=>{
    return (dispatch: Dispatch)=>{
        usersAPI.getProfile(userID)
            .then(response =>{
                dispatch(setUserProfile(response.data))
            })
    }
}
export const getUserStatusThunk = (userID : string) =>{
    debugger
    return (dispatch : Dispatch) =>{
        profileAPI.getStatus(userID)
            .then(res =>{
                debugger
                dispatch(setStatus(res.data))
            })
    }
}
export const updateStatusThunk = (status : string) =>{
    return (dispatch : Dispatch) =>{
        profileAPI.updateStatus(status)
            .then(res =>{
                if(res.data.resultCode === 0){

                    dispatch(setStatus(status))
                }

            })
    }
}

