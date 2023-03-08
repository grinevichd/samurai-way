import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../common/utils/validators/validators";
import s from './AddMessageForm.module.scss'
import {Textarea} from "../../../common/components/FormControls/FormControlss";


const maxLength100 = maxLengthCreator(100)

export type AddMessageFormType = {
  newMessageText: string
}

const AddMessageForm = (props: InjectedFormProps<AddMessageFormType>) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <div className={s.titleBox}>
        <Field
          component={Textarea}
          name={'newMessageText'}
          placeholder={'Enter your message'}
          validate={[]}
        />
      </div>
      <div className={s.buttons}>
        <button className={`${s.button} ${s.settings}`}>
          <span className={s.span}>Message</span>
        </button>
      </div>
    </form>


  )
}

export const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'addMessageForm'})(AddMessageForm)