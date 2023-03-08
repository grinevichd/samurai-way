import React from "react";
import styles from './DialogItem.module.scss'
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

