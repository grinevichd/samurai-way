import style from './FormControl.module.css'
import React from "react";
import {Field} from "redux-form";


const FormControl: React.FC<any> = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${style.formControl} ${hasError ? style.error : ""}`}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const TextArea: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
}
export const Input: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input}{...restProps}/></FormControl>
}


export const createField = (type: string, placeholder: any, name: string, validators: Function[], component: any, text : string = '') => {
    return <div>
        <Field type={type} placeholder={placeholder} name={name} validate={validators} component={component}/>{text}
    </div>
}