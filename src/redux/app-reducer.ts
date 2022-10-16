import {AuthUserLogin} from "./auth-reducer";


const initialized_success = "initialized_success"

export type InitialStateAuthType = {

    initialized: boolean

}


let initialState: InitialStateAuthType = {

    initialized : false
}

export const appReducer = (state: InitialStateAuthType = initialState, action: initializedAT): InitialStateAuthType => {

    switch (action.type) {
        case initialized_success :
            return {
                ...state,
                initialized : true


            }
        default :
            return state
    }

}


export const initializedSuccessAC = () => ({type: initialized_success})


export type  initializedAT =
    ReturnType<typeof initializedSuccessAC>



export const  initializeTC = ()=>{
    debugger
    return    (dispatch : any)=>{
       const promise = dispatch(AuthUserLogin())
         return    Promise.all([promise]).then(() => {
                dispatch(initializedSuccessAC())
            })


    }
}
