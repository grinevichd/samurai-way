import React from 'react'
import {addMessageActionCreator, MessagesPageType, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StoreReduxType} from "../../redux/store-redux";
import {compose, Dispatch} from 'redux';
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


type MapStateToPropsType = {                     // +
    messagesPage : MessagesPageType

}

type mapDispatchToPropsType = {
    sendMessage :() => void
    changeNewMessage : (message:string) => void
}

export type DialogsPropsType = MapStateToPropsType & mapDispatchToPropsType


    const mapStateToProps = (state : StoreReduxType) : MapStateToPropsType => {
      return {
          messagesPage : state.messagesPage,

      }
    }
    const mapDispatchToProps = (dispatch:Dispatch) : mapDispatchToPropsType => {
      return {
          sendMessage : () => dispatch(addMessageActionCreator()),                               //+
          changeNewMessage : (message:string) => dispatch(onMessageChangeActionCreator(message))  // +
      }
    }







 export  const DialogContainer = compose<React.ComponentType>(
     connect(mapStateToProps,mapDispatchToProps),
     WithAuthRedirect
 )(Dialogs)

