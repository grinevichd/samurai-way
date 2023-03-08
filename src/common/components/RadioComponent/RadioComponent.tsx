import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import styles from './RadioComponent.module.scss'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
  className?: string
}

export const RadioComponent: React.FC<SuperCheckboxPropsType> = ({className, ...restProps}) => {

  const finalClassName = `${styles.input} ${className}`

  return (
    <div className={styles.inputBox}>
      <input
        type={'radio'}
        className={finalClassName}
        {...restProps}
      />
    </div>
  )
}