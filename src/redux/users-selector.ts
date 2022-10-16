import {StoreReduxType} from "./store-redux";
import {createSelector} from "reselect";

export const getUsers = (state:StoreReduxType) =>{
    return state.usersPage.users
}

export const getPageSize = (state:StoreReduxType) =>{
    return state.usersPage.pageSize
}
export const getUserSuperSelector = createSelector(getUsers,(users) =>{
    debugger
    return users.filter(u => true)
})

export const getTotalUsersCount = (state:StoreReduxType) =>{
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state:StoreReduxType) =>{
    return state.usersPage.currentPage
}
export const getIsFetching = (state:StoreReduxType) =>{
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state:StoreReduxType) =>{
    return state.usersPage.followingInProgress
}