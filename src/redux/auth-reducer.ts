import {StoreReduxType} from "./store-redux";
import {authAPI, securityAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";


type FormReduxSubmitType = ReturnType<typeof stopSubmit>

const SET_USERS_DATE = "auth/SET_USERS" as const
const SET_CAPTCHA = "auth/SET_CAPTCHA" as const

export type InitialStateAuthType = {

    id: number | null,
    email: string | null,
    login: string | null
    isFetching: boolean
    isAuth: boolean
    captcha: string | null
}


let initialState: InitialStateAuthType = {

    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captcha: null,
}

export const authReducer = (state: InitialStateAuthType = initialState, action: authAC): InitialStateAuthType => {

    switch (action.type) {
        case SET_USERS_DATE :
            return {
                ...state,
                ...action.payload,


            }
        case SET_CAPTCHA :
            return {
                ...state,
                captcha : action.url
            }
        default :
            return state
    }

}


export const setAuthUserData = (userID: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USERS_DATE, payload: {
        id: userID, email, login, isAuth
    }
})
export const setCaptchaUrl = (url: string) => ({
    type: SET_CAPTCHA, url
})


export type authAC =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setCaptchaUrl>


export const AuthUserLogin = () => async (dispatch: Dispatch) => {
    const data = await authAPI.authLogin()
    if (data.resultCode === 0) {
        const {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const res = await securityAPI.getCaptchaUrl()
    const captchaUrl = res.data.url
    dispatch(setCaptchaUrl(captchaUrl))
}

export const loginThunk = (email: string, password: string, rememberMe: boolean,captcha : string | null): ThunkAction<void, StoreReduxType, unknown, authAC | FormReduxSubmitType> =>
    async (dispatch) => {
        const res = await authAPI.login(email, password, rememberMe,captcha)
        if (res.data.resultCode === 0) {
            await dispatch(AuthUserLogin())
        } else {
            if(res.data.resultCode === 10){
             await   dispatch(getCaptchaUrl())
            }
            const message = res.data.messages.length > 0 ? res.data.messages[0] : "some Error"
            dispatch(stopSubmit('login', {_error: message}))
        }


    }
export const logoutThunk = () => async (dispatch: Dispatch) => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
