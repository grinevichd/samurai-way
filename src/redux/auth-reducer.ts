import {StoreReduxType} from "./store-redux";
import {MapDispatchPropsType} from "../companents/Header/HeaderContainer";
import {authAPI, usersAPI} from "../api/api";
import {DispatchProp} from "react-redux";
import {Dispatch} from "redux";



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
                ...action.data,
                isAuth : true

            }
        default :
            return state
    }

}


export const setAuthUserData = (userID: number, email:string,login:string) => ({type: SET_USERS_DATE, data:{
        id:userID,email,login
    }})


export type authAC =
    ReturnType<typeof setAuthUserData>



export const AuthUserLogin = ()=>{
    return    (dispatch : Dispatch<any>)=>{
        debugger
        authAPI.authLogin()
            .then(data =>{
                debugger
                if(data.resultCode ===0){
                    const {id,email,login} = data.data
                    dispatch(setAuthUserData(id,email,login))
                }
            })
    }
}
