import React from 'react';
import style from "./paginator.module.css";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
}


export const Paginator = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p => <span onClick={() => props.onPageChange(p)}
                                  className={props.currentPage === p ? style.selected : ""}>{p}</span>)}
        </div>
    );
};

