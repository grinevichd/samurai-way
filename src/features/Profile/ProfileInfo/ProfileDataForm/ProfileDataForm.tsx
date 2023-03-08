import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {RequestStatusType} from "../../../../app/appReducer";
import {ProfileUserStatusType} from "../../../../api/api";
import s from "./ProfileDataForm.module.scss";
import styleButton from "../ProfileInfo.module.scss"
import {Checkbox, Input, Textarea} from "../../../../common/components/FormControls/FormControlss";


type ProfileDataFormPropsType = {
  profile: ProfileUserStatusType | null
  statusApp: RequestStatusType
}

export const ProfileDataForm = (props: InjectedFormProps<ProfileUserStatusType, ProfileDataFormPropsType> & ProfileDataFormPropsType) => {

  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <div className={`${styleButton.buttons} ${s.buttons}`}>
        <button
          className={`${styleButton.button} ${styleButton.followButton} ${s.saveButton}`}
          disabled={props.statusApp === "loading"}
        >
          {props.statusApp === "loading" ?
            <span className={s.loader}></span>
            :
            <span>
              <span className={styleButton.span}>Save</span>
                        </span>
          }

        </button>
      </div>
      {props.error &&
				<div className={`${s.formSummeryError} ${s.titleBox} ${s.titleError}`}>
					<span>{props.error}</span>
				</div>
      }
      <div className={`${s.titleBox} ${s.titleName}`}>
        <h3 className={s.title}>Full name:</h3>
        <Field
          name={'fullName'}
          placeholder={'Full Name'}
          component={Input}
          type={'text'}
          validate={[]}
        />
      </div>
      <div className={s.titleBox}>
        <h3 className={s.title}>About me:</h3>
        <Field
          name={'aboutMe'}
          placeholder={'About me'}
          component={Textarea}
          type={'text'}
          validate={[]}
        />
      </div>
      <div className={s.titleBox}>
        <h3 className={s.title}>Looking for a job:</h3>
        <Field
          name={'lookingForAJob'}
          component={Checkbox}
          text={'I am looking for a job'}
          type={'checkbox'}
          validate={[]}
          hello={'hello text'}
        />
        <Field
          name={'lookingForAJobDescription'}
          placeholder={'My professional skills'}
          component={Textarea}
          type={'text'}
          validate={[]}
        />
      </div>
      {props.profile && Object.keys(props.profile.contacts).map((key, index) => {
        return <div key={index} className={s.titleBox}>
          <h3 className={s.title}>{key}:</h3>
          <Field
            name={'contacts.' + key}
            placeholder={key}
            component={Input}
            type={'text'}
            validate={[]}
          />
        </div>
      })}
    </form>
  )
}

export const ProfileDataReduxForm = reduxForm<ProfileUserStatusType, ProfileDataFormPropsType>({form: 'profileData'})(ProfileDataForm)