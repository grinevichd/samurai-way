import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";
import {Input} from "../FormControls/FormControl";
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
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props ) => {


    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" placeholder={"Login"}  name="login"   validate={[requiredField]} component={Input}/>
                </div>
                <div>
                    <Field type="password" placeholder={"password"} name="password"
                           validate={[requiredField]} component={Input}/>
                </div>
                <div>
                    <Field type="checkbox" component={'checkbox'} name="rememberMe"/> remember me
                </div>
                {props.error && <div className={style.formError}>
                    {props.error}
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
    debugger
    const onSubmit = (formData : FormDataType)=>{
        debugger
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