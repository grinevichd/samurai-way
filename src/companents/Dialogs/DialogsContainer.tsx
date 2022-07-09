import React from 'react'
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";


type DialogsPropsType = {
    // messagesPage: MessagesPageType
    // dispatch: (action: ActionsTypes) => void
    // store: StoreReduxType
}

export const DialogContainer = (props: DialogsPropsType) => {



    return <StoreContext.Consumer>
        { (store) => {
            let state = store.getState().messagesPage
            const sendMessage = () => {

                store.dispatch(addMessageActionCreator())

            }
            const changeNewMessage = (message: string) => {

                store.dispatch(onMessageChangeActionCreator(message))

            }
            return <Dialogs sendMessage={sendMessage} updateNewMessageBody={changeNewMessage}
                            messagesPage={state}/>
        }
    }
    </StoreContext.Consumer>

}