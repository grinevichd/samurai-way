import {authAPI} from '../../api/api';
import {stopSubmit} from 'redux-form';
import {LoginFormType} from "./LoginReduxForm/LoginReduxForm";
import {Dispatch} from "redux";
import {setAppStatusAC} from "../../app/appReducer";

const initialProfileState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    avatarUrl: '',
    captchaUrl: '',
}

export const authReducer = (state: InitialProfileStateType = initialProfileState, action: AuthUserDateType): InitialProfileStateType => {
    switch (action.type) {

        case 'SET-USER-DATE':
            return {
                ...state,
                ...action.payload,
            }
        case "GET-CAPTCHA": {
            return {...state, captchaUrl: action.captchaUrl}
        }
        case "SET-AVATAR": {
            return {...state, avatarUrl: action.avatarUrl}
        }
        default:
            return state
    }
}

// export type AuthUserDateType = SetAuthUserDateType
//
// type SetAuthUserDateType = ReturnType<typeof setAuthUserDate>

export const setAuthUserDate = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATE' as const,
        payload: {
            userId,
            isAuth,
            login,
            email,
        }
    }
}

export const getCaptchaAC = (captchaUrl: string) => ({type: 'GET-CAPTCHA', captchaUrl} as const)

export const setAvatarAC = (avatarUrl: string) => ({type: 'SET-AVATAR', avatarUrl} as const)


export const getAuthUserDateTC = (): any => (dispatch: Dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, login, email} = response.data.data
                dispatch(setAuthUserDate(id, login, email, true))
            }
        })
}


export const loginTC = (formData: LoginFormType): any => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))

    try {
        const response = await authAPI.login(formData.email, formData.password, formData.rememberMe)

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserDateTC())
        } else {
            const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    } finally {
        dispatch(setAppStatusAC("idle"))
    }


}

export const logoutTC = (): any => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    debugger
    try {
        const response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            debugger
            dispatch(setAuthUserDate(null, null, null, false))
            dispatch(getCaptchaAC(''))
            dispatch(setAvatarAC(''))
        }
    } finally {
        dispatch(setAppStatusAC("idle"))
    }

}


export type AuthUserDateType =
    | ReturnType<typeof setAuthUserDate>
    | ReturnType<typeof getCaptchaAC>
    | ReturnType<typeof setAvatarAC>


export type DatePropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean

}
type InitialProfileStateType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: string
    avatarUrl: string

}
