import React from 'react';
import user from "../../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";
import {UsersType} from '../../../redux/user-reducer';


type UsersPropsType = {
    followingInProgress: Array<number>
    UnfollowThunk: (userID: number) => void
    followThunk: (userID: number) => void
    user : UsersType
}


export const User = (props: UsersPropsType) => {
    let u = props.user
    return (

        <div>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small ? u.photos.small : user}
                                 style={{width: "200px", borderRadius: "50%"}}/>
                            </NavLink>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.UnfollowThunk(u.id)
                                }

                                }>Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.followThunk(u.id)
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
        </div>)


};

