import React, {useState} from 'react';
import s from './Navbar.module.scss'
import {NavOpenMenu} from "./NavOpenMenu/NavOpenMenu";
import {UserMenu} from "./UserMenu/UserMenu";
import {NavClosedMenu} from "./NavClosedMenu/NavClosedMenu";

type NavPropsType = {
  login: string | null
  logout: () => void
}

export const Navbar: React.FC<NavPropsType> = (props) => {

  const [visibilityUserMenu, setVisibilityUserMenu] = useState<boolean>(false)
  const [visibilityNavMenu, setVisibilityNavMenu] = useState<boolean>(false)

  const userMenuHandler = () => {
    setVisibilityUserMenu(!visibilityUserMenu)
    setVisibilityNavMenu(false)
  }

  const navMenuHandler = () => {
    setVisibilityNavMenu(!visibilityNavMenu)
    setVisibilityUserMenu(false)
  }

  const userMenuOffHandler = () => {
    setVisibilityUserMenu(false)
  }

  const navMenuOffHandler = () => {
    setVisibilityNavMenu(false)
  }

  return <nav className={s.navBox}>
    <NavOpenMenu visibilityCallBack={userMenuOffHandler}/>
    <NavClosedMenu
      visibilityNavMenu={visibilityNavMenu}
      navMenuHandler={navMenuHandler}
      visibilityCallBack={navMenuOffHandler}
    />
    <div className={s.userNav}>
      <div onClick={userMenuHandler}
           className={`${s.userButton} ${visibilityUserMenu ? s.activeLink : ''}`}>
        <span className={s.user}>{props.login} {!visibilityUserMenu ?
          <span className={s.symbol}>&#9660;</span>
          :
          <b className={s.symbol}>&times;</b>}
                </span>
      </div>
      {visibilityUserMenu &&
				<UserMenu
					logout={props.logout}
					visibilityCallBack={userMenuOffHandler}
				/>}
    </div>
  </nav>
};
