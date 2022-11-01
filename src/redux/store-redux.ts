import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {userReducer} from "./user-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";

export type StoreReduxType = ReturnType<typeof reducers>
let reducers = combineReducers({
    messagesPage : dialogsReducer,
    profilePage : profileReducer,
    sidebar : sidebarReducer,
    usersPage : userReducer,
    auth : authReducer,
    form : formReducer,
    app : appReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers((applyMiddleware(thunkMiddleware))));


// @ts-ignore
window.store = store



