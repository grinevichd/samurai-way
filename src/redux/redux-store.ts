import {Action, applyMiddleware, combineReducers, createStore} from 'redux';
import {AddPostType, profileReducer} from '../features/Profile/profileReducer';
import {AddMessage, dialogsReducer} from '../features/Dialogs/dialogsReducer';
import {sidebarReducer} from './sidebarReducer';
import {UsersActionType, usersReducer} from '../features/Users/usersReducer';
import {authReducer, AuthUserDateType} from '../features/Login/authReducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from '../app/appReducer';

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,

})

export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


//общий екшен со всех редюсеров
export  type AppActionType = AddPostType
  | AuthUserDateType
  | AddMessage
  | UsersActionType

//типизация сатки(в санки добавили екшен редаксовский , что бы можно было диспачить в санке в форм-редас stopSubmit)
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, Action>

// @ts-ignore
window.store = store
