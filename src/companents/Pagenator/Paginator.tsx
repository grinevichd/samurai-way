import React, {useState} from 'react';
import style from "./paginator.module.css";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    portionSize?: number
}


export const Paginator = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(props.totalUsersCount / 10)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * props.pageSize + 1
    const rightPortionPageNumber = portionNumber * props.pageSize
    return (
        <div>
            {portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber((portionNumber - 1))
                }}>Prev</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
                return <span key={p} onClick={() => props.onPageChange(p)}>{p}</span>
            })}
            {portionCount > portionNumber &&  <button onClick={() => {setPortionNumber((portionNumber + 1))}}>next</button>}

        </div>
    );
};

