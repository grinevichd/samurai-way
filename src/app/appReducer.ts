import {AppThunk} from '../redux/redux-store';
import {getAuthUserDateTC,} from '../features/Login/authReducer';

const initialProfileState = {
  initialized: false,
  status: 'idle' as RequestStatusType,
}

export const appReducer = (state: InitialProfileStateType = initialProfileState, action: AuthUserDateType): InitialProfileStateType => {
  switch (action.type) {
    case 'SET-INITIALIZED':
      return {...state, initialized: true}
    case "SET-STATUS": {
      return {...state, status: action.status}
    }
    default:
      return state
  }
}


export const setInitializedAC = () => ({type: 'SET-INITIALIZED'} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'SET-STATUS', status} as const)

export const initializeApp = (): AppThunk => (dispatch) => {
  const promise = dispatch(getAuthUserDateTC())
  Promise.all([promise])
    .then((res) => {
      dispatch(setInitializedAC())
    })
}

type InitialProfileStateType = {
  initialized: boolean
  status: RequestStatusType,
}


export type AuthUserDateType = InitializedSuccessType
type InitializedSuccessType =
  | ReturnType<typeof setInitializedAC>
  | ReturnType<typeof setAppStatusAC>

export type RequestStatusType = 'idle' | 'loading'
