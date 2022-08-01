import React, {ChangeEvent} from 'react'
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";




export const Dialogs = (props: DialogsPropsType) => {
    const newDialogs = props.messagesPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    const newMessages = props.messagesPage.messages.map(message => <Message key={message.id} message={message.message}/>)

    const sendMessage = () =>{
            props.sendMessage()


    }
    const changeNewMessage = (e:ChangeEvent<HTMLTextAreaElement>) =>{

        props.changeNewMessage(e.currentTarget.value)


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



