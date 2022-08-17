import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {userReducer} from "./user-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware  from "redux-thunk"

export type StoreReduxType = ReturnType<typeof reducers>
let reducers = combineReducers({
    messagesPage : dialogsReducer,
    profilePage : profileReducer,
    sidebar : sidebarReducer,
    usersPage : userReducer,
    auth : authReducer

})


export let store = createStore(reducers,applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store



