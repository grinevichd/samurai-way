import {usersAPI} from "../api/api";

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
    followingInProgress : Array<number>

}


let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress : []
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
        case "FOLLOWING_IN_PROGRESS":
            return {...state,
                followingInProgress : action.value
                ? [...state.followingInProgress, action.userID]
                :state.followingInProgress.filter((id) => id!== action.userID)
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
export const setFollowing = (value:boolean,userID:number)=>({type : "FOLLOWING_IN_PROGRESS",value,userID}as const)

export type UsersAC =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setState>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof setLoaderParams>
    | ReturnType<typeof setFollowing>


export const getUsersThunkCreator = (currentPage:number,pageSize:number)  =>{
    return (dispatch:any)=> {
    dispatch(setLoaderParams(true));
        dispatch(setCurrentPage(currentPage))
    usersAPI.getUsers(currentPage, pageSize)
        .then(response => {
            dispatch(setState(response.items));
            dispatch(setTotalUserCount(response.totalCount));
            dispatch(setLoaderParams(false));
        })

}
}

export const UnfollowThunk = (userID : number)=>{

    return (dispatch:any) =>{

        dispatch(setFollowing(true,userID))
        usersAPI.unfollowUser(userID)
            .then(resultCode => {

                if (resultCode === 0) {
                    dispatch(unfollow(userID))
                }
            }).finally(()=>dispatch(setFollowing(false,userID)))
    }
}
export const followThunk = (userID : number)=>{

    return (dispatch:any) =>{

        dispatch(setFollowing(true,userID))
        usersAPI.followUser(userID)
            .then(resultCode => {

                if (resultCode === 0) {
                    dispatch(follow(userID))
                }
            }).finally(()=>dispatch(setFollowing(false,userID)))
    }
}


