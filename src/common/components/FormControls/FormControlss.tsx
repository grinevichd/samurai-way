import React from "react";
import s from './FormControls.module.scss'

export const Textarea = ({input, meta, ...props}: any) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
      <div>
        <textarea {...props} {...input}/>
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Input = ({input, meta, ...props}: any) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
      <div>
        <input {...props} {...input}/>
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Checkbox = ({input, meta, text, ...props}: any) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
      <div className={s.checkboxBox}>
        <input className={s.checkbox} id={'rememberMe'} {...props} {...input}/>
        <label htmlFor={'rememberMe'}>{text}</label>
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}