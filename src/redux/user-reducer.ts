import {StoreReduxType} from "./store-redux";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
type LocationType = {
    city: string
    country: string
}


type FollowAT = {
    type: "FOLLOW"
    userID: number
}
type UnfollowAT = {
    type: "UNFOLLOW"
    userID: number
}
type SetUsersAT = {
    type: "SET_USERS"
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

type InitialStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

}


let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export const userReducer = (state: InitialStateType = initialState, action: UsersAC): InitialStateType => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.page}
        case "SET_TOTAL_COUNT" :
            return {...state, totalUsersCount: action.count}
        case "CHANGE-LOADER" :
            return {...state, isFetching : action.value}
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

export type UsersAC =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setState>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof setLoaderParams>