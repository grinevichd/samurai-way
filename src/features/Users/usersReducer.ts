import {ItemsUsersType, usersAPI} from '../../api/api';
import {AnyAction, Dispatch} from 'redux';
import {setAppStatusAC} from "../../app/appReducer";

let initialProfileState = {
  users: [],
  pageSize: 25,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}


export const usersReducer = (state: InitialUsersStateType = initialProfileState, action: UsersActionType): InitialUsersStateType => {
  switch (action.type) {
    case 'FOLLOW': {
      return {
        ...state,
        users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
      }
    }
    case 'UN-FOLLOW': {
      return {
        ...state,
        users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)
      }
    }
    case 'SET-USERS': {
      return {
        ...state,
        users: [
          ...action.users,
        ]
      }
    }
    case "SET-PAGE-SIZE":
      return {...state, pageSize: action.pageSize}
    case 'SET-CURRENT-PAGE': {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case 'SET-USERS-TOTAL-COUNT': {
      return {
        ...state,
        totalUsersCount: action.totalCount
      }
    }
    case 'TOGGLE-IS-FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      }
    case 'TOGGLE-IS-FOLLOWING-PROGRESS':
      return {
        ...state,
        followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : [...state.followingInProgress.filter(id => id !== action.userId)]
      }
    default:
      return state
  }
}

export type UsersActionType =
  FollowACType
  | UnfollowACType
  | SetUserACType
  | SetCurrentPageACType
  | SetUsersTotalUsersCountAC
  | ToggleIsFetchingAC
  | ToggleIsFollowingProgressAC
  | SetPageSizeAC

type FollowACType = ReturnType<typeof followSuccessAC>
export const followSuccessAC = (userId: number) => {
  return {
    type: 'FOLLOW',
    userId
  } as const
}

type UnfollowACType = ReturnType<typeof unfollowSuccessAC>
export const unfollowSuccessAC = (userId: number) => {
  return {
    type: 'UN-FOLLOW',
    userId
  } as const
}


type SetUserACType = ReturnType<typeof setUserAC>
export const setUserAC = (users: ItemsUsersType[]) => {
  return {
    type: 'SET-USERS',
    users
  } as const
}

type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: 'SET-CURRENT-PAGE',
    currentPage
  } as const
}

type SetPageSizeAC = ReturnType<typeof setPageSizeAC>

export const setPageSizeAC = (pageSize: number) => ({
  type: 'SET-PAGE-SIZE',
  pageSize
} as const)

type SetUsersTotalUsersCountAC = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalCount: number) => {
  return {
    type: 'SET-USERS-TOTAL-COUNT',
    totalCount
  } as const
}

type ToggleIsFetchingAC = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = (isFetching: boolean) => {
  return {
    type: 'TOGGLE-IS-FETCHING',
    isFetching
  } as const
}

type ToggleIsFollowingProgressAC = ReturnType<typeof toggleIsFollowingProgressAC>
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number) => {
  return {
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
    isFetching,
    userId,
  } as const

}

export const getUsersTC = (currentPage: number, pageSize: number): any => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"))
  dispatch(toggleIsFetchingAC(true))
  dispatch(setCurrentPageAC(currentPage))

  try {
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetchingAC(false))
    dispatch(setUserAC(data.items))
    dispatch(setTotalUsersCountAC(data.totalCount))
  } finally {
    dispatch(toggleIsFetchingAC(false))
    dispatch(setAppStatusAC("idle"))
  }
}


const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: (userId: number) => AnyAction) => {
  dispatch(toggleIsFollowingProgressAC(true, userId))

  let response = await apiMethod(userId)

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleIsFollowingProgressAC(false, userId))
}

export const followTC = (userId: number): any => async (dispatch: Dispatch) => {
  let apiMethod = usersAPI.follow.bind(usersAPI)

  followUnfollowFlow(dispatch, userId, apiMethod, followSuccessAC)
}
export const unfollowTC = (userId: number): any => async (dispatch: Dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccessAC)
}


export type PhotosType = {
  small: string
  large: string
}


export type InitialUsersStateType = {
  users: ItemsUsersType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
}

