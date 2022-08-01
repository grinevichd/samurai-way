import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StoreReduxType} from "../../redux/store-redux";
import {
    setLoaderParams,
    setCurrentPage,
    follow,
    setTotalUserCount,
    setState,
    unfollow,
    UsersType
} from "../../redux/user-reducer";
import loader from "../../assets/images/Infinity-1s-191px.svg"
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";


type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching : boolean
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setState: (users: Array<UsersType>) => void
    setCurrentPage: (page: number) => void
    setTotalUserCount : (count : number) => void
    setLoaderParams : (value : boolean) => void
}
export type UserPropsType = MapStateToPropsType & MapDispatchToPropsType
export class UsersAPIComponent extends React.Component<UserPropsType> {

    // constructor(props: UserPropsType) {  // если только super то можно убрать и не засорять код
    //     super(props);
    // }

    componentDidMount() {

        this.props.setLoaderParams(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)

            .then(response => {
                console.log(response)
                this.props.setState(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
                this.props.setLoaderParams(false)
            })


    }
    onPageChange = (pageNumber:number)=>{

        this.props.setCurrentPage(pageNumber)
        this.props.setLoaderParams(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber.toString()}&count=${this.props.pageSize}`)

            .then(response => {
                this.props.setState(response.data.items)
                this.props.setLoaderParams(false)

            })
    }


    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
        <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChange = {this.onPageChange}
            unfollow = {this.props.unfollow}
            follow = {this.props.follow}

        />
        </>
    }

}
const mapStateToProps = (state: StoreReduxType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching : state.usersPage.isFetching


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


export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setState,
    setCurrentPage,
    setTotalUserCount,
    setLoaderParams,
})(UsersAPIComponent)
