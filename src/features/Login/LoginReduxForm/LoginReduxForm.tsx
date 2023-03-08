import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {RequestStatusType} from "../../../app/appReducer";
import {required} from '../../../common/utils/validators/validators'
import {Checkbox, Input} from "../../../common/components/FormControls/FormControlss";
import {NavLink} from "react-router-dom";
import formControlsStyles from '../../../common/components/FormControls/FormControls.module.scss'
import s from './LoginReduxForm.module.scss'

export type LoginFormType = {
  email: string
  password: string
  rememberMe: boolean
  captcha?: string
}

type LoginFormPropsType = {
  captchaUrl: string
  status: RequestStatusType
}

const LoginForm = (props: InjectedFormProps<LoginFormType, LoginFormPropsType> & LoginFormPropsType) => {

  const onClickHandler = () => {
    alert('This page is under development')
  }

  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <h3 className={s.h3}>Sign in</h3>
      <div className={s.formInput}>
        <div className={s.svgIcon}>
          {/*<SvgSelector svgName={"User"}/>*/}
        </div>
        <Field
          name={'email'}
          placeholder={'Email'}
          component={Input}
          validate={[required]}
          disabled={props.status === 'loading'}
        />
      </div>
      <div className={s.formInput}>
        <div className={s.svgIcon}>
          {/*<SvgSelector svgName={"Password"}/>*/}
        </div>
        <Field
          name={'password'}
          placeholder={'Password'}
          component={Input}
          type={'password'}
          validate={[required]}
          disabled={props.status === 'loading'}
        />
      </div>
      <div className={s.formCheckbox}>
        <div style={{marginRight: '25px'}}>
          <Field
            name={'rememberMe'}
            type={"checkbox"}
            component={Checkbox}
            text={'Remember me'}
            disabled={props.status === 'loading'}
          />
        </div>
        <NavLink className={s.a} onClick={onClickHandler} to={'/login'}>Forgot Password?</NavLink>
      </div>
      {props.captchaUrl && <img src={props.captchaUrl} alt={'captchaUrl'}/>}
      {props.captchaUrl && <div className={`${s.formInput} ${s.captcha}`}>
				<div className={s.svgIcon}>
          {/*<SvgSelector svgName={"Captcha"}/>*/}
				</div>
				<Field
					name={'captcha'}
					placeholder={'Captcha'}
					component={Input}
					type={'text'}
					validate={[required]}
					disabled={props.status === 'loading'}
				/>
			</div>}
      <div className={s.error}>
        {props.error &&
					<div className={formControlsStyles.formSummeryError}><b>{props.error}</b></div>}
      </div>
      <div>
        <button
          className={s.formButton}
          disabled={props.status === 'loading'}
        >
          {props.status === 'loading' ? <span className={s.loader}></span> : 'Sign in'}
        </button>
      </div>
    </form>
  )
}

export const LoginReduxForm = reduxForm<LoginFormType, LoginFormPropsType>({form: 'login'})(LoginForm)