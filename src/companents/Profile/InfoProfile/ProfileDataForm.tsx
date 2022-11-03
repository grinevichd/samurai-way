import {createField, Input, TextArea} from "../../FormControls/FormControl";
import {reduxForm} from "redux-form";
import React from "react";
import { Contacts } from "./Contacts/Contacts";
import style from "../../FormControls/FormControl.module.css";




const ProfileDataForm:React.FC<any> = ({handleSubmit,initialValues,error}) => {
    console.log(initialValues);
    debugger
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error && <div className={style.formError}>
            {error}
        </div>}

        <div><b>About me </b>:  {createField('text', 'About Me', 'aboutMe', [], TextArea)}</div>
        <div><b>Full Name</b>: {createField('text', 'Full name', 'fullName', [], Input)}</div>
        <div>
            <b>Looking for a job</b>: {createField('checkbox', '', 'lookingForAJob', [], Input)}
        </div>
        <div>
            <b>My professional skills</b>:
            {createField('text', 'My professional skills', 'lookingForAJobDescription', [], TextArea)}
        </div>

        <div>
            <b>Contacts</b>: {Object.keys(initialValues.contacts).map(key => {
            return <div key={key}>
                <b>{key}</b>: {createField('text', key,'contacts.'+ key, [], Input)}
            </div>
        })}
        </div>
    </form>
}



 const ProfileDataFormReduxForm = reduxForm<any>({

    form: 'form'
})(ProfileDataForm)

export default ProfileDataFormReduxForm