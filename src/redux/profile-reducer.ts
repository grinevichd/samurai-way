import {ActionsTypes, AddPostActionType, ChangePostActionType, UserProfileAT} from "./store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST = "CHANGE-NEW-POST";
const SET_USER_TYPE = "SET_USER_TYPE"; 
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
    myPostText: string
    profileUser : UserProfile | null


}


let initialState: ProfilePageType = {

    postsData: [
        {id: 1, message: "Hello how are u?", countLikes: 15},
        {id: 2, message: "yup it's my first post", countLikes: 25},
    ],
    myPostText: "dima",
    profileUser : null

}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
            const newPost = {id: 5, message: state.myPostText, countLikes: 0}
            return {
                ...state,
                postsData : [...state.postsData, newPost],
                myPostText : ""
            }
        }
        case CHANGE_NEW_POST: {
            return {
                ...state,
                myPostText : action.postText
            }
        }
        case SET_USER_TYPE:{
            return {
                ...state,
                profileUser : action.profile
            }
        }
        default :
            return state
    }

}
export const addPostActionCreator = (): AddPostActionType => {
    return {type: ADD_POST}
}
export const onAreaChangeActionCreator = (text: string): ChangePostActionType => {

    return {type: CHANGE_NEW_POST, postText: text}
}
export const setUserProfile = (profile:UserProfile):UserProfileAT => {
    debugger
  return{
      type : SET_USER_TYPE,
      profile
  }
}


export const getProfileThunk = (userID : string)=>{
    return (dispatch: Dispatch<any>)=>{
        usersAPI.getProfile(userID)
            .then(response =>{
                dispatch(setUserProfile(response.data))
            })
    }
}