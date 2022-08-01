import {ActionsTypes, AddMessageActionType, ChangeMessageActionType} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE_POST = "CHANGE-MESSAGE-POST";
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    messageText: string

}
let initialState: MessagesPageType = {
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
export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionsTypes): MessagesPageType => {


    switch (action.type) {
        case ADD_MESSAGE: {

            const message = {id: 6, message: state.messageText}
            return {
                ...state,
                messages: [...state.messages, message],
                messageText: ""
            }

        }
        case CHANGE_MESSAGE_POST:
            return {
                ...state,
                messageText: action.message
            }


        default :
            return state
    }


}
export const addMessageActionCreator = (): AddMessageActionType => {
    return {type: ADD_MESSAGE}
}

export const onMessageChangeActionCreator = (text: string): ChangeMessageActionType => {

    return {type: CHANGE_MESSAGE_POST, message: text} as const
}

// export type DialogReducerAC = ReturnType<typeof addMessageActionCreator> | ReturnType<typeof onMessageChangeActionCreator>