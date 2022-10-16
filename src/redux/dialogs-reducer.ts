import {ActionsTypes, AddMessageActionType, ChangeMessageActionType} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE";

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

}
export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionsTypes): MessagesPageType => {


    switch (action.type) {
        case ADD_MESSAGE: {

            const message = {id: 6, message: action.value}
            return {
                ...state,
                messages: [...state.messages, message],

            }

        }


        default :
            return state
    }


}
export const addMessageActionCreator = (value: string): AddMessageActionType => {
    return {type: ADD_MESSAGE , value}
}



// export type DialogReducerAC = ReturnType<typeof addMessageActionCreator> | ReturnType<typeof onMessageChangeActionCreator>