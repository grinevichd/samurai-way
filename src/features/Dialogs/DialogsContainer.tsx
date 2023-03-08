import React from "react";
// import {addMessagesAC, DialogsPageType} from "./dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
// import {AppStateType} from "../../app/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";
// import {AddMessageFormType} from "./addMessageForm/AddMessageForm";
import {reset} from "redux-form";
import {AddMessageFormType} from "./AddMessageForm/AddMessageForm";
import {AppStateType} from "../../redux/redux-store";
import {InitialDialogsStateType, sendMessageAC} from "./dialogsReducer";

export type DialogsPropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
  dialogsPage: InitialDialogsStateType
}

type mapDispatchPropsType = {
  addMessages: (formData: AddMessageFormType) => void
  reset: () => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
  return {
    addMessages: (formData: AddMessageFormType) => dispatch(sendMessageAC(formData)),
    reset: () => dispatch(reset('addMessageForm')),
  }
}

const DialogsContainer = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

export default DialogsContainer




// import React, {ComponentType} from 'react';
// import {sendMessageAC, DialogsDataType, MessagesType} from './dialogsReducer';
// import {Dialogs} from './Dialogs';
// import {connect} from 'react-redux';
// import {AppStateType} from '../../redux/redux-store';
// import {compose, Dispatch} from 'redux';
// import {withAuthRedirect} from '../../common/hoc/withAuthRedirect';
//
//
// let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//   return {
//     newMessageText: state.dialogsPage.newMessageText,
//     dialogsData: state.dialogsPage.dialogsData,
//     messages: state.dialogsPage.messages,
//   }
// }
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//   return {
//     addMessageNew: (newMessageBody: string) => {
//       dispatch(sendMessageAC(newMessageBody))
//     },
//   }
// }
//
//
// export default compose<ComponentType>(
//   connect(mapStateToProps, mapDispatchToProps),
//   withAuthRedirect,
// )(Dialogs)
//
// type MapStateToPropsType = {
//   newMessageText: string
//   dialogsData: DialogsDataType[]
//   messages: MessagesType[]
// }
//
// type MapDispatchToPropsType = {
//   addMessageNew: (newMessageBody: string) => void
//   // onMessageNewChange: (body: string) => void
// }
