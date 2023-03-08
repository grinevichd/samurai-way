import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginTC} from './authReducer';
import {AppStateType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';
import styles from './Login.module.scss'
import {LoginFormType, LoginReduxForm} from "./LoginReduxForm/LoginReduxForm";
import {RequestStatusType} from "../../app/appReducer";
import {Dispatch} from "redux";
import {Registration} from "./Registration/Registration";


type LoginPropsType = {
    isAuth: boolean
    // captchaUrl: string
    status: RequestStatusType
    login: (formData: LoginFormType) => void
}

const Login = (props: LoginPropsType) => {
    const [visibility, setVisibility] = useState<boolean>(true)

    const onClickOnHandler = () => {
        setVisibility(true)
    }

    const onClickOffHandler = () => {
        setVisibility(false)
    }

    const onSubmitHandler = (formData: LoginFormType) => {
        props.login(formData)
    }

    const finalOneButtonStyles = `${styles.oneButton} ${visibility ? styles.active : ''}`
    const finalTwoButtonStyles = `${styles.twoButton} ${!visibility ? styles.active : ''}`

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={styles.loginComponent}>
            <div className={styles.repair}>
            <span>The project is under development. Some features may be unavailable.<br/>
                <a
                    className={styles.a}
                    href={'https://github.com/grinevichd/samurai-way'}
                    target="_blank">Read more on GitHub</a>
            </span>
            </div>
            <div className={styles.loginBox}>
                <div className={styles.loginForm}>
                    <div className={styles.loginButtons}>
                        <button className={finalOneButtonStyles} onClick={onClickOnHandler}>Sign in</button>
                        <button className={finalTwoButtonStyles} onClick={onClickOffHandler}>Sign up</button>
                    </div>
                    {visibility ?
                        <LoginReduxForm
                            onSubmit={onSubmitHandler}
                            captchaUrl={''}
                            status={props.status}
                        />
                        : <Registration/>

                    }
                </div>
            </div>
            <div className={styles.copyright}>
                <span>Copyright © 2022. All Rights Reserved.</span>
                <span>Developed by <a
                    className={styles.a}
                    href={'https://www.linkedin.com/in/dmitry-grinevich-493321220/'}
                    target="_blank">Grinevich Dmitry</a>
            </span>
            </div>
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
    status: state.app.status
})
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        login: (formData: LoginFormType) => dispatch(loginTC(formData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

type mapDispatchToPropsType = {
    login: (formData: LoginFormType) => void
}

