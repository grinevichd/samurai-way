import React from 'react'
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../FormControls/FormControl";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

type FormDataType ={
    newMessageBody : string

}

export const Dialogs = (props: DialogsPropsType) => {
    debugger


    const newDialogs = props.messagesPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                            id={dialog.id}/>)
    const newMessages = props.messagesPage.messages.map(message => <Message key={message.id}
                                                                            message={message.message}/>)


    const addNewMessage =(val : FormDataType) =>{

        props.sendMessage(val.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {newDialogs}
            </div>
            <div className={s.messages}>
                {newMessages}

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}
const maxLength = maxLengthCreator(25)

let AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={TextArea}
               validate = {[requiredField,maxLength]}
               name="newMessageBody" placeholder='Enter your message'/>
        <button>send message</button>
    </form>
}
const AddMessageFormRedux = reduxForm<FormDataType>({
    form : "dialogAddMessageForm"
})(AddMessageForm)





