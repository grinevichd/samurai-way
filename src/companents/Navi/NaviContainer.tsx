import React from "react";
import StoreContext from "../../StoreContext";
import {Navi} from "./Navi";


export const NaviContainer = () => {

    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState()
            return (
                <Navi myFriends={state.sidebar}/>

            );
        }
        }
    </StoreContext.Consumer>
}