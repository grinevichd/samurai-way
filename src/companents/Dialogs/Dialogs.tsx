import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./Dialogs.module.css"

type DialogType ={
    name : string
    id : string
}
type MessageType = {
    message:string
}

const Dialog = (props : DialogType) =>{
    let way = `/dialogs/${props.id}`
    return(
        <div className={`${s.dialog}`}><NavLink to={way}>{props.name}</NavLink></div>
        );
}
const Message = (props : MessageType)=>{
    return(
        <div className={s.message}>{props.message}</div>
    );
}

export const Dialogs = () =>{
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={"Kate"} id={"1"}/>
                <Dialog name={"Sasha"} id={"2"}/>
                <Dialog name={"Dima"} id={"3"}/>
                <Dialog name={"Victor"} id={"4"}/>
                <Dialog name={"Max"} id={"5"}/>
                <Dialog name={"Nick"} id={"6"}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi dude"}/>
                <Message message={"Yo man"}/>
                <Message message={"How are u"}/>
            </div>
        </div>
    )
}



