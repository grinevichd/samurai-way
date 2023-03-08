import React from "react";


import styles from './Users.module.scss'
import {ItemsUsersType} from "../../api/api";
import {Paginator} from "../../common/components/Paginator/Paginator";
import {User} from "./User/User";


type UsersCompType = {
  users: ItemsUsersType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  onPageChanged: (el: number) => void
  onPageSize: (el: number) => void
  follow: (userID: number) => void
  usFollow: (userID: number) => void
  followingInProgress: number[]
}

export const Users = (props: UsersCompType) => {

  return (
    <div className={styles.usersComponent}>
      <Paginator
        page={props.currentPage}
        pageCount={props.pageSize}
        pageCountOptions={[25, 50, 100]}
        totalItemsCount={props.totalUsersCount}
        onPageCallBack={props.onPageChanged}
        onPageCountCallBack={props.onPageSize}
      />

      <div className={styles.usersBox}>
        {props.users.map(el => <User
            key={el.id}
            user={el}
            follow={props.follow}
            usFollow={props.usFollow}
            followingInProgress={props.followingInProgress}
          />
        )}
      </div>
    </div>
  )
}

// import React from 'react';
// import s from './Users.module.scss';
// import {ItemsUsersType} from '../../api/api';
// import {Paginator} from '../../common/components/Paginator/Paginator';
// import {User} from './User/User';
//
//
// let Users: React.FC<UsersTypeProps> = ({
//                                          currentPage,
//                                          onPageChanged,
//                                          totalUsersCount,
//                                          pageSize,
//                                          ...props
//                                        }) => {
//
//   return <div className={s.users}>
//     <Paginator
//       currentPage={currentPage}
//       onPageChanged={onPageChanged}
//       totalUsersCount={totalUsersCount}
//       pageSize={pageSize}
//     />
//
//     {
//       props.users.map((u) => <User user={u}
//                                    key={u.id}
//                                    follow={props.follow}
//                                    unfollow={props.unfollow}
//                                    followingInProgress={props.followingInProgress}
//         />
//       )
//     }
//   </div>
// }
//
// export default Users;
//
//
// export type UsersTypeProps = {
//   totalUsersCount: number
//   pageSize: number
//   currentPage: number
//   users: ItemsUsersType[]
//   unfollow: (userId: number) => void
//   follow: (userId: number) => void
//   onPageChanged: (pageNumber: number) => void
//   followingInProgress: Array<number>
// }
