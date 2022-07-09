import React, {ChangeEvent} from 'react'
import s from "./Dialogs.module.css"
import {MessagesPageType,} from "../../redux/store";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";


type DialogsPropsType = {
    messagesPage: MessagesPageType

    updateNewMessageBody : (value : string) => void
    sendMessage : () =>void
}


export const Dialogs = (props: DialogsPropsType) => {
    const newDialogs = props.messagesPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const newMessages = props.messagesPage.messages.map(message => <Message message={message.message}/>)

    const sendMessage = () =>{
            props.sendMessage()


    }
    const changeNewMessage = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        props.updateNewMessageBody(e.currentTarget.value)


    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {newDialogs}
            </div>
            <div className={s.messages}>
                {newMessages}
                <div>
                    <textarea  onChange={changeNewMessage} value={props.messagesPage.messageText}/>
                    <button onClick={sendMessage}>send message</button>
                </div>
            </div>

        </div>
    )
}



