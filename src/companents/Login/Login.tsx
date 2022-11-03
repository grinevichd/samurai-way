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
}
type mapStateToProps = {
    isAuth : boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit,error} ) => {


    return (
            <form onSubmit={handleSubmit}>
                    {createField('text','Login','login',[requiredField],Input)}
                    {createField('password','password','password',[requiredField],Input)}
                    {createField('checkbox',null,'rememberMe',[],Input,'remember me')}
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

        props.loginThunk(formData.login,formData.password,formData.rememberMe)

    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>

            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state:StoreReduxType) :mapStateToProps=> {
    return {
        isAuth : state.auth.isAuth,

    }
}

export default connect(mapStateToProps,{loginThunk})(Login)