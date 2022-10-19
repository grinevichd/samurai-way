import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {StoreReduxType} from "../../redux/store-redux";
import {followThunk, getUsersThunkCreator, setCurrentPage, UnfollowThunk, UsersType} from "../../redux/user-reducer";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUserSuperSelector
} from "../../redux/users-selector";


type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type MapDispatchToPropsType = {

    setCurrentPage: (page: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    UnfollowThunk : (userID : number) => void
    followThunk : (userID : number) => void

}
export type UserPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIComponent extends React.Component<UserPropsType> {

    // constructor(props: UserPropsType) {  // если только super то можно убрать и не засорять код
    //     super(props);
    // }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.setLoaderParams(true)
        //
        //
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(response => {
        //         this.props.setState(response.items)
        //         this.props.setTotalUserCount(response.totalCount)
        //         this.props.setLoaderParams(false)
        //     })


    }

    onPageChange = (pageNumber: number) => {

        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber)
        // this.props.setLoaderParams(true)
        //
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(response => {
        //
        //         this.props.setState(response.items)
        //         this.props.setLoaderParams(false)
        //
        //     })
    }


    render() {
        console.log(this.props)

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChange={this.onPageChange}
                followingInProgress={this.props.followingInProgress}
                UnfollowThunk={this.props.UnfollowThunk}
                followThunk={this.props.followThunk}
            />
        </>
    }

}

// const mapStateToProps = (state: StoreReduxType): MapStateToPropsType => {
//
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//
//     }
// }
const mapStateToProps = (state: StoreReduxType): MapStateToPropsType => {

    return {
        users: getUserSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userID: number) => dispatch(follow(userID)),
//         unfollow: (userID: number) => dispatch(unfollow(userID)),
//         setState: (users: UsersType[]) => dispatch(setState(users)),
//         setCurrentPage: (page: number) => dispatch(setCurrentPage(page)),
//         setTotalUserCount : (count : number) =>dispatch(setTotalUserCount(count)),
//         setLoaderParams : (value : boolean) => dispatch(setLoaderParams(value))
//
//     }
// }





// export const UsersContainer = compose<React.ComponentType>(
//     connect(mapStateToProps, {
//         setCurrentPage,
//         getUsers: getUsersThunkCreator,
//         UnfollowThunk,
//         followThunk
//     }),
//     WithAuthRedirect
// )(UsersAPIComponent)
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setCurrentPage,
        getUsers: getUsersThunkCreator,
        UnfollowThunk,
        followThunk
    }),

)(UsersAPIComponent)

