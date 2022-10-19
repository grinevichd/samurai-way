import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helper";

const FOLLOW = "user/FOLLOW"
const UNFOLLOW = "user/UNFOLLOW"
const SET_USERS = "user/SET_USERS"
type LocationType = {
    city: string
    country: string
}


type FollowAT = {
    type: "user/FOLLOW"
    userID: number
}
type UnfollowAT = {
    type: "user/UNFOLLOW"
    userID: number
}
type SetUsersAT = {
    type: "user/SET_USERS"
    users: UsersType[]
}

export type UsersType = {
    id: number
    name: string
    status: string
    followed: boolean
    location: LocationType
    photos: UserPhoto

}
type UserPhoto = {
    small: null | string
    large: null | string
}

export type InitialStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

}


let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const userReducer = (state: InitialStateType = initialState, action: UsersAC): InitialStateType => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                // users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
                users : updateObjectInArray<{followed : boolean}>(state.users, action.userID, {followed: true}, 'id')
            }


        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, {followed: false}, 'id')
            }
        case SET_USERS:
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.page}
        case "SET_TOTAL_COUNT" :
            return {...state, totalUsersCount: action.count}
        case "CHANGE-LOADER" :
            return {...state, isFetching: action.value}
        case "FOLLOWING_IN_PROGRESS":
            return {
                ...state,
                followingInProgress: action.value
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter((id) => id !== action.userID)
            }
        default :
            return state
    }

}


export const follow = (userID: number): FollowAT => ({type: FOLLOW, userID})
export const unfollow = (userID: number): UnfollowAT => ({type: UNFOLLOW, userID})
export const setState = (users: UsersType[]): SetUsersAT => ({type: SET_USERS, users})
export const setCurrentPage = (page: number) => ({type: "SET_CURRENT_PAGE", page} as const)
export const setTotalUserCount = (count: number) => ({type: "SET_TOTAL_COUNT", count} as const)
export const setLoaderParams = (value: boolean) => ({type: "CHANGE-LOADER", value} as const)
export const setFollowing = (value: boolean, userID: number) => ({
    type: "FOLLOWING_IN_PROGRESS",
    value,
    userID
} as const)

export type UsersAC =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setState>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof setLoaderParams>
    | ReturnType<typeof setFollowing>


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setLoaderParams(true));
    dispatch(setCurrentPage(currentPage))
    const response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setState(response.items));
    dispatch(setTotalUserCount(response.totalCount));
    dispatch(setLoaderParams(false));
}

const followUnfollowFlow = async (dispatch: any, userID: number, apiMethod: Function, actionCreator: Function) => {

    dispatch(setFollowing(true, userID))
    try {
        const resultCode = await apiMethod(userID)
        if (resultCode === 0) {
            dispatch(actionCreator(userID))
        }
    } finally {
        dispatch(setFollowing(false, userID))
    }
}

export const UnfollowThunk = (userID: number) => async (dispatch: any) => {
    await followUnfollowFlow(dispatch, userID, usersAPI.unfollowUser.bind(usersAPI), unfollow)

}
export const followThunk = (userID: number) => async (dispatch: any) => {
    await followUnfollowFlow(dispatch, userID, usersAPI.followUser.bind(usersAPI), follow)
}


