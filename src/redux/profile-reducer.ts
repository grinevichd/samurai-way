import {ActionsTypes, AddPostActionType, ChangePostActionType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST = "CHANGE-NEW-POST";

let initialState =  {

    postsData: [
        {id: 1, message: "Hello how are u?", countLikes: 15},
        {id: 2, message: "yup it's my first post", countLikes: 25},
    ],
        myPostText: "dima"
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 5, message: state.myPostText, countLikes: 0}
            state.postsData.push(newPost)
            state.myPostText = ""
            return state
        case CHANGE_NEW_POST:
            state.myPostText = action.postText
            return state
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