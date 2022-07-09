import React from "react";
import {Store} from "redux";
import {StoreReduxType} from "./redux/store-redux";


export type ProviderType = {
    store : StoreReduxType | any
    children : any
}

 const StoreContext = React.createContext({} as Store<StoreReduxType>)




export const Provider = (props : ProviderType)=>{
        return <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
}

export default StoreContext