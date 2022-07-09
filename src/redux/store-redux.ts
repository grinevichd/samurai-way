import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type StoreReduxType = ReturnType<typeof reducers>
let reducers = combineReducers({
    messagesPage : dialogsReducer,
    profilePage : profileReducer,
    sidebar : sidebarReducer,
})


export let store = createStore(reducers);
console.log(store)

