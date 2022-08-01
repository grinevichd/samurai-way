import React from 'react'
import {addMessageActionCreator, MessagesPageType, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StoreReduxType} from "../../redux/store-redux";
import { Dispatch } from 'redux';


type MapStateToPropsType = {                     // +
    messagesPage : MessagesPageType
}

type mapDispatchToPropsType = {
    sendMessage :() => void
    changeNewMessage : (message:string) => void
}

export type DialogsPropsType = MapStateToPropsType & mapDispatchToPropsType


    const mapStateToProps = (state : StoreReduxType) : MapStateToPropsType => {
      return {messagesPage : state.messagesPage}
    }
    const mapDispatchToProps = (dispatch:Dispatch) : mapDispatchToPropsType => {
      return {
          sendMessage : () => dispatch(addMessageActionCreator()),                               //+
          changeNewMessage : (message:string) => dispatch(onMessageChangeActionCreator(message))  // +
      }
    }

    const resConnect = connect(mapStateToProps,mapDispatchToProps);
resConnect(Dialogs)
 export  const DialogContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)//+

