import React from 'react';
import style from "./users.module.css";
import user from "../../assets/images/avatar.png";
import {followThunk, setFollowing, UnfollowThunk, UsersType} from "../../redux/user-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    users: UsersType[]
    followingInProgress : Array<number>
    UnfollowThunk : (userID : number) => void
    followThunk : (userID : number) => void
}


export const Users = (props: UsersPropsType) => {
    debugger
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (

        <div>
            {pages.map(p => <span onClick={() => props.onPageChange(p)}
                                  className={props.currentPage === p ? style.selected : ""}>{p}</span>)}

            {
                props.users?.map((u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small ? u.photos.small : user}
                                 style={{width: "200px", borderRadius: "50%"}}/>
                            </NavLink>
                            {u.followed ? <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                    props.UnfollowThunk(u.id)
                                    // props.setFollowing(true,u.id)
                                    // usersAPI.unfollowUser(u.id)
                                    //     .then(resultCode => {
                                    //
                                    //         if (resultCode === 0) {
                                    //             props.unfollow(u.id)
                                    //         }
                                    //     }).finally(()=>props.setFollowing(false,u.id))

                                }

                                }>Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                    debugger
                                    props.followThunk(u.id)
                                    // props.setFollowing(true,u.id)
                                    // usersAPI.followUser(u.id)
                                    //     .then(resultCode => {
                                    //         if (resultCode === 0) {
                                    //             debugger
                                    //             props.follow(u.id)
                                    //         }
                                    //
                                    //     }).finally(() => props.setFollowing(false,u.id))


                                }
                                }>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>

                    </span>
                </div>))
            }
        </div>
    );
};

