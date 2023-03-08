import React from "react";
import styles from './Dialogs.module.scss'
import {Message} from "./Message/Message";
import {RepairComponent} from "../../common/components/RepairComponent/RepairComponent";
import imgAvatar from "../../assets/user.png";
import {AddMessageFormRedux, AddMessageFormType} from "./AddMessageForm/AddMessageForm";
import {DialogItem} from "./DialogItem/DialogsItem";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs = (props: DialogsPropsType) => {

  const addNewMessage = (formData: AddMessageFormType) => {
    props.addMessages(formData)
    props.reset()
  }

  return <div className={styles.dialogsComponent}>
    <div className={styles.dialogsItem}>
      <div className={styles.repairBox}>
        <RepairComponent text={'This page is under development. Functions are not available.'}/>
      </div>
      <div className={styles.dialogItemsBox}>
        {props.dialogsPage.dialogsData.map(u => <DialogItem
          key={u.id}
          name={u.name}
          id={u.id}
        />)}
      </div>
    </div>
    <div className={styles.messagesBox}>
      <div className={styles.messages}>
        <div className={styles.messageUserBox}>
          <img className={styles.imgAvatar} src={imgAvatar} alt={'imgAvatar'}/>
          <span className={styles.messageUser}>Hello friend, you have a great social network.</span>
        </div>
        {props.dialogsPage.messagesData.map(u => <Message
          key={u.id}
          message={u.message}
          id={u.id}
        />)}
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  </div>
};

