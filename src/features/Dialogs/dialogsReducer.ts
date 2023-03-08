import {randomId} from "../../common/utils/randomId";
import {AddMessageFormType} from "./AddMessageForm/AddMessageForm";

const initialDialogsState = {
  dialogsData: [
    {id: randomId(), name: 'Margo Bukhta'},
    {id: randomId(), name: 'Pavel Sergit'},
    {id: randomId(), name: 'Dima Radionov'},
    {id: randomId(), name: 'Vova Krivicki'},
    {id: randomId(), name: 'Anna Lukach'},

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
// | ReturnType<typeof onMessageChangeAC>

// export const sendMessageAC = (newMessageBody: string) => {
//   return {
//     type: 'ADD-MESSAGE',
//     postMessage: newMessageBody
//   } as const
// }
export const sendMessageAC = (formData: AddMessageFormType) => {
  return {type: 'ADD-MESSAGE', formData} as const
}

// export const onMessageChangeAC = (newMessageBody: string) => {
//     return {
//         type: 'UPDATE-NEW-MESSAGE-TEXT',
//         newMessage: newMessageBody
//     } as const
// }

// export type DialogsDataType = {
//   id: number
//   name: string
//   photo: string
// }
//
// export type MessagesType = {
//   id: number
//   message: string
//   photo: string
//   name: string
// }
export type InitialDialogsStateType = typeof initialDialogsState



// let initialState = {
//   dialogsData: [
//     {
//       id: randomId(),
//       name: 'Wlad',
//       photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKH8Ew3p9hw0I9QKHFDP58aWZ-d6NUfHkA&usqp=CAU'
//     },
//     {
//       id: randomId(),
//       name: 'Margo',
//       photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU'
//     },
//     {
//       id: randomId(),
//       name: 'Pascha',
//       photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KjoRsUfR-lyCcHd4_fbLsIDGLrVQKB6Iug&usqp=CAU'
//     },
//     {
//       id: randomId(),
//       name: 'Radic',
//       photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5VKFOTn-2IxmSp9pcNC_B0PHDDvNQSAeVQ&usqp=CAU'
//     },
//   ],
//   messages: [
//     {
//       id: 1,
//       message: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!',
//       name: 'Wlad',
//       photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKH8Ew3p9hw0I9QKHFDP58aWZ-d6NUfHkA&usqp=CAU'
//     },
//     {
//       id: randomId(),
//       message: 'How is you',
//       name: 'Margo',
//       photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU'
//     },
//     {
//       id: randomId(),
//       message: 'Yo',
//       name: 'Wlad',
//       photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKH8Ew3p9hw0I9QKHFDP58aWZ-d6NUfHkA&usqp=CAU'
//     },
//   ],
//   newMessageText: '',
// }

export type DialogsDataType = {
  id: number,
  name: string
}

export type MessagesDataType = {
  id: number,
  message: string
}
