import React from 'react';
import {UsersType} from "../../redux/user-reducer";
import {Paginator} from "../Pagenator/Paginator";
import {User} from './User/User';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    users: UsersType[]
    followingInProgress: Array<number>
    UnfollowThunk: (userID: number) => void
    followThunk: (userID: number) => void
}


export const Users = (props: UsersPropsType) => {
    return (
        <div>
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChange={props.onPageChange}
            />
            {
                props.users?.map((u => <User
                    key={u.id}
                    user={u}
                    UnfollowThunk={props.UnfollowThunk}
                    followThunk={props.followThunk}
                    followingInProgress={props.followingInProgress}
                />))

            }
        </div>
    );
};

