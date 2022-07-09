import {ActionsTypes, AddMessageActionType, MessagesPageType} from "./store";
const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE_POST = "CHANGE-MESSAGE-POST";
let initialState = {
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
    }
export const dialogsReducer = (state : MessagesPageType = initialState,action : ActionsTypes) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const message = {id: 6, message: state.messageText}
            state.messages.push(message)
            state.messageText = ""
            return state
        case CHANGE_MESSAGE_POST:
            state.messageText = action.message
            return state
        default :
            return state
    }


}
export const addMessageActionCreator = (): AddMessageActionType => {
    return {type: ADD_MESSAGE}
}

export const onMessageChangeActionCreator = (text: string) => {

    return {type: CHANGE_MESSAGE_POST, message: text} as const
}