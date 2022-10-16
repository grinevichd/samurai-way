import {StoreReduxType} from "./store-redux";
import {MapDispatchPropsType} from "../companents/Header/HeaderContainer";
import {authAPI, usersAPI} from "../api/api";
import {DispatchProp} from "react-redux";
import {AnyAction, Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";


type FormReduxSubmitType = ReturnType<typeof stopSubmit>

const SET_USERS_DATE = "SET_USERS"

export type InitialStateAuthType = {

    id: number | null,
    email: string | null,
    login: string | null
    isFetching : boolean
    isAuth : boolean
}


let initialState: InitialStateAuthType = {

    id: null,
    email: null,
    login: null,
    isFetching : false,
    isAuth : false
}

export const authReducer = (state: InitialStateAuthType = initialState, action: authAC): InitialStateAuthType => {

    switch (action.type) {
        case SET_USERS_DATE :
            return {
                ...state,
                ...action.payload,


            }
        default :
            return state
    }

}


export const setAuthUserData = (userID: number | null , email:string | null ,login:string | null,isAuth : boolean) => ({type: SET_USERS_DATE, payload:{
        id:userID,email,login,isAuth
    }})


export type authAC =
    ReturnType<typeof setAuthUserData>



export const AuthUserLogin = ()=>(dispatch : Dispatch)=>{
    debugger
      return   authAPI.authLogin()
            .then(data =>{
                if(data.resultCode ===0){
                    const {id,email,login} = data.data
                    dispatch(setAuthUserData(id,email,login,true))
                }
            })
    }

export const loginThunk = (email : string,password : string, rememberMe : boolean):ThunkAction<void, StoreReduxType, unknown,authAC|FormReduxSubmitType > =>{
    return (dispatch )=> {


        authAPI.login(email,password,rememberMe)

            .then((res) => {
                if(res.data.resultCode ===0){


                    dispatch(AuthUserLogin())
                }else{
                    const message = res.data.messages.length>0? res.data.messages[0] : "some Error"
                    dispatch( stopSubmit('login',{_error : message}))
                }
            })
    }

}
export const logoutThunk = () =>{
    return (dispatch : Dispatch)=> {
        authAPI.logout()

            .then((res) => {
                if(res.data.resultCode ===0){
                    dispatch(setAuthUserData(null,null,null,false))
                }
            })
    }

}
