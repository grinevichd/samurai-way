import {ActionsTypes, AddPostActionType, UserProfileAT} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "profile/ADD-POST";

const SET_USER_TYPE = "profile/SET_USER_TYPE";
const SET_STATUS = "profile/SET_STATUS";
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

    profileUser: UserProfile | null
    status: string

}


let initialState: ProfilePageType = {

    postsData: [
        {id: 1, message: "Hello how are u?", countLikes: 15},
        {id: 2, message: "yup it's my first post", countLikes: 25},
    ],

    profileUser: null,
    status: ""

}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
            const newPost = {id: 5, message: action.value, countLikes: 0}
            return {
                ...state,
                postsData: [...state.postsData, newPost],

            }
        }

        case SET_USER_TYPE: {
            return {
                ...state,
                profileUser: action.profile
            }
        }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case "profile/DELETE-POST":
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id !== action.postID)
            }

        default :
            return state
    }

}
export const addPostActionCreator = (value: string): AddPostActionType => ({type: ADD_POST, value})
export const deletePost = (postID: number) => ({type: 'profile/DELETE-POST', postID} as const)
export const setUserProfile = (profile: UserProfile): UserProfileAT => ({type: SET_USER_TYPE, profile})
const setStatus = (status: string) => ({type: SET_STATUS, status})


export const getProfileThunk = (userID: string) => async (dispatch: Dispatch) => {
    const response = await usersAPI.getProfile(userID)
    dispatch(setUserProfile(response.data))
}
export const getUserStatusThunk = (userID: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getStatus(userID)
    dispatch(setStatus(res.data))
}
export const updateStatusThunk = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

