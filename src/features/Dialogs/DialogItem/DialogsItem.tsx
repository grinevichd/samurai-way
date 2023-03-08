import React from "react";
import styles from './DialogItem.module.scss'
// import {DialogsDataType} from "../dialogs-reducer";
import imgAvatar from '../../../assets/user.png'
import {DialogsDataType} from "../dialogsReducer";

export const DialogItem = (props: DialogsDataType) => {
  return <div className={styles.dialog}>
    <img className={styles.imgAvatar} src={imgAvatar} alt={'imgAvatar'}/>
    <div
      className={styles.nav}
    >
      {props.name}
    </div>
  </div>
}

// import React from 'react';
// import s from '../Dialogs.module.scss'
// import {NavLink} from 'react-router-dom';
//
// type DialogPropsType = {
//   name: string
//   id: number
//   foto: string
// }
//
// export const DialogItem: React.FC<DialogPropsType> = (props) => {
//   return (
//     <div className={`${s.dialog} ${s.active}`}>
//       <img src={props.foto}/>
//       <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
//     </div>
//   )
// }
