import {randomId} from "../../common/utils/randomId";
import {AddMessageFormType} from "./AddMessageForm/AddMessageForm";

const initialDialogsState = {
  dialogsData: [
    {id: randomId(), name: 'Keti Bibol'},
    {id: randomId(), name: 'Nikita Apatick'},
    {id: randomId(), name: 'Dima Tihonov'},
    {id: randomId(), name: 'Vova Glinski'},
    {id: randomId(), name: 'George Hanutiski'},

  ] as Array<DialogsDataType>,
  messagesData: [
    {id: randomId(), message: 'Hello'},
    {id: randomId(), message: 'Thanks, I\'m trying hard to make the social network better.'},
  ] as Array<MessagesDataType>,
}

export const dialogsReducer = (state: InitialDialogsStateType = initialDialogsState, action: AddMessage): InitialDialogsStateType => {
  switch (action.type) {
    case 'ADD-MESSAGE': {
      return {
        ...state,
        messagesData: [...state.messagesData, {id: randomId(), message: action.formData.newMessageText}]
      };
    }
    default:
      return state
  }
}

export type AddMessage = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (formData: AddMessageFormType) => {
  return {type: 'ADD-MESSAGE', formData} as const
}


export type InitialDialogsStateType = typeof initialDialogsState


export type DialogsDataType = {
  id: number,
  name: string
}

export type MessagesDataType = {
  id: number,
  message: string
}
