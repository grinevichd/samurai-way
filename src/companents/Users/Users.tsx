import React from 'react';
import style from "./users.module.css";
import user from "../../assets/images/avatar.png";
import {UsersType} from "../../redux/user-reducer";
import { NavLink } from "react-router-dom";
type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    users: UsersType[]
    unfollow: (userID: number) => void
    follow: (userID: number) => void

}




export const Users = (props: UsersPropsType) => {
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
                props.users.map((u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small ? u.photos.small : user}
                                 style={{width: "200px", borderRadius: "50%"}}/>
                            </NavLink>
                            {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => props.follow(u.id)}>Follow</button>}

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

