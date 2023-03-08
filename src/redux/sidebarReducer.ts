import {FriendsType} from './TypeRedux';
import {randomId} from "../common/utils/randomId";

export const sidebarReducer = (state: initialDialogsStateType = initialDialogsState, action: any): initialDialogsStateType => {
  switch (action.type) {

    default:
      return state
  }
};

type initialDialogsStateType = {
  friends: FriendsType[]
}

let initialDialogsState = {

  friends: [
    {
      id: randomId(),
      name: 'Margo',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU'
    },
    {
      id: randomId(),
      name: 'Pascha ',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KjoRsUfR-lyCcHd4_fbLsIDGLrVQKB6Iug&usqp=CAU'
    },
    {
      id: randomId(),
      name: 'Radic',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5VKFOTn-2IxmSp9pcNC_B0PHDDvNQSAeVQ&usqp=CAU'
    },
  ]
}
