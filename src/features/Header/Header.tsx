import React from "react";
import styles from './Header.module.scss'
import {LinearProgress} from "../../common/components/LinearProgress/LinearProgress";
import {RequestStatusType} from "../../app/appReducer";
import {Navbar} from "./Navbar/Navbar";


type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
  status: RequestStatusType
}

export const Header = (props: HeaderPropsType) => {
  return (
    <header className={styles.headerComponent}>
      <div className={styles.headerBox}>
        <div className={styles.searchBox}>
          <img
            className={styles.image}
            alt={'Logo'}
            src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mastodon-icon.png'
          />

        </div>
        <Navbar
          login={props.login}
          logout={props.logout}
        />
      </div>
      {props.status === 'loading' && <LinearProgress/>}
    </header>
  )
}
