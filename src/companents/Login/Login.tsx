import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";
import {createField, Input} from "../FormControls/FormControl";
import {requiredField} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import {StoreReduxType} from "../../redux/store-redux";
import style from '../FormControls/FormControl.module.css'

type FormDataType ={
    login : string
    password : string
    rememberMe : boolean
    captcha : string | null
}
type mapStateToProps = {
    isAuth : boolean
    captcha : string | null
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType> & any> = ({handleSubmit,error,initialValues} ) => {

    console.log(initialValues)
    return (
            <form onSubmit={handleSubmit}>
                    {createField('text','Login','login',[requiredField],Input)}
                    {createField('password','password','password',[requiredField],Input)}
                    {createField('checkbox',null,'rememberMe',[],Input,'remember me')}
                {initialValues && <img src={initialValues} alt=""/>}
                {initialValues && createField('symbols','captcha','captcha',[requiredField],Input)}

                {error && <div className={style.formError}>
                    {error}
                </div>}
                <div>
                        <button>Login</button>
                </div>
            </form>

    );
};
const LoginReduxForm = reduxForm<FormDataType>({

    form: 'login'
})(LoginForm)

const Login = (props : any) => {

    const onSubmit = (formData : FormDataType)=>{

        props.loginThunk(formData.login,formData.password,formData.rememberMe, formData.captcha)

    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <p>
                To log in get registered <a href={'https://social-network.samuraijs.com/'}
                                            target={'_blank'}>here</a>
            </p>
            <p>
                or use common test account credentials:
            </p>
            <p> Email: free@samuraijs.com
            </p>
            <p>
                Password: free
            </p>

            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} initialValues={props.captcha}/>
        </div>
    );
};

const mapStateToProps = (state:StoreReduxType) :mapStateToProps=> {
    return {
        isAuth : state.auth.isAuth,
        captcha : state.auth.captcha
    }
}

export default connect(mapStateToProps,{loginThunk})(Login)