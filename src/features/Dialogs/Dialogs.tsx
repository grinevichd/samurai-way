import React from "react";
import styles from './Dialogs.module.scss'
// import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
// import {DialogsPropsType} from "./DialogsContainer";
// import {AddMessageFormRedux, AddMessageFormType} from "./addMessageForm/AddMessageForm";
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


// import React from 'react';
// import s from './Dialogs.module.scss'
// import {DialogItem} from './DialogItem/DialogsItem';
// import {Message} from './Message/Message';
// import {DialogsDataType, MessagesType} from './dialogsReducer';
// import {Field, InjectedFormProps, reduxForm} from 'redux-form';
// import {Textarea} from '../FormsControls/FormControls';
// import {maxLengthCreator, required} from '../../common/utils/validators/validators';
//
//
// export const Dialogs: React.FC<DialogsPropsType> = (props) => {
//
//   let dialogsElemets = props.dialogsData.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}
//                                                                 foto={d.photo}/>)
//   let messagesElemets = props.messages.map((m) => <Message message={m.message} key={m.id}
//                                                            name={m.name} photo={m.photo}/>)
//
//
//   const addNewMessage = (values: FormAddMessageType) => {
//     console.log(values.newMessageText)
//     props.addMessageNew(values.newMessageText)
//   }
//
//   return (
//     <div className={s.dialogs}>
//       <div className={s.dialogs_item}>
//         {dialogsElemets}
//       </div>
//       <div className={s.messages}>
//         {messagesElemets}
//         <AddMessageFormRedux onSubmit={addNewMessage}/>
//       </div>
//
//     </div>
//   );
// };
//
// const maxLength50 = maxLengthCreator(50)
//
// const AddMessageForm: React.FC<InjectedFormProps<FormAddMessageType>> = (props) => {
//
//   return (
//     <form onSubmit={props.handleSubmit}>
//       <div>
//         <Field name="newMessageText" placeholder="Enter your message" component={Textarea}
//                validate={[required, maxLength50]} type='text'/>
//       </div>
//       <div>
//         <button>Send</button>
//       </div>
//     </form>
//   )
// }
//
// const AddMessageFormRedux = reduxForm<FormAddMessageType>({form: 'dialogAddMessageForm'})(AddMessageForm);
//
// type DialogsPropsType = {
//   onMessageNewChange: (body: string) => void
//   addMessageNew: (postMessage: string) => void
//   newMessageText: string
//   dialogsData: DialogsDataType[]
//   messages: MessagesType[]
// }
//
// type FormAddMessageType = {
//   newMessageText: string
// }
