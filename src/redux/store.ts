import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

type FriendsType = {
    name: string
}


type PostsType = {
    id: number
    message: string
    countLikes: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    postsData: Array<PostsType>
    myPostText: string

}

export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    messageText: string

}
export type SidebarType = {
    friends: Array<FriendsType>
}

export type RootPropsType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType


}


export type storeType = {
    _state: RootPropsType,
    getState: () => RootPropsType
    _callSubscriber: (state: any) => void
    subscriber: (observer: (state: any) => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    AddPostActionType
    | ChangePostActionType
    | AddMessageActionType
    | ChangeMessageActionType

export type AddPostActionType = {
    type: "ADD-POST"
}
export type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
export type ChangePostActionType = {
    type: "CHANGE-NEW-POST",
    postText: string
}
export type ChangeMessageActionType = {
    type : "CHANGE-MESSAGE-POST",
    message : string
}


export let store: storeType = {
    _state: {
        profilePage: {

            postsData: [
                {id: 1, message: "Hello how are u?", countLikes: 15},
                {id: 2, message: "yup it's my first post", countLikes: 25},
            ],
            myPostText: "dima"
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: "Kate"},
                {id: 2, name: "Dima"},
                {id: 3, name: "Sasha"},
                {id: 4, name: "Victor"},
                {id: 5, name: "Max"},
                {id: 6, name: "Nick"},
            ],
            messages: [
                {id: 1, message: "Hi dude"},
                {id: 2, message: "Yo man"},
                {id: 3, message: "How are u"},
            ],
            messageText: ""
        },
        sidebar: {
            friends: [

                {name: "Kate"},
                {name: "Dima"},
                {name: "Victoria"}

            ]
        }
    },
    _callSubscriber(state: any) {
        console.log(1)
    },
    getState() {
        return this._state
    },
    subscriber(observer: (state: any) => void) {

        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state)
    }

}














