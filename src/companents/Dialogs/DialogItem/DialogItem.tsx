import React from 'react'
import {NavLink} from 'react-router-dom'
import s from ".././Dialogs.module.css"

type DialogType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogType) => {
    let way = `/dialogs/${props.id}`
    return (
        <div className={`${s.dialog}`}><NavLink to={way}>{props.name}</NavLink></div>
    );
}





