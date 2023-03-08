import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import Dialogs from '../features/Dialogs/DialogsContainer';
import {UsersContainer} from '../features/Users/UsersContainer';
import {ProfileContainer} from '../features/Profile/ProfileContainer';
import {HeaderContainer} from '../features/Header/HeaderContainer';
import Login from '../features/Login/Login';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router';
import {compose} from 'redux';
import {initializeApp} from './appReducer';
import {AppStateType} from '../redux/redux-store';
import {Preloader} from '../common/components/Preloader/Preloader';

import s from './App.module.css'


type MapStateToPropsType = {
  initialized: boolean
}

export type MapDispatchToPropsType = {
  initializeApp: () => void
}

type PathParamsType = {}

export type HeaderContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

type PropsType = RouteComponentProps<PathParamsType> & HeaderContainerPropsType

class App extends React.Component<PropsType> {

  componentDidMount() {
    this.props.initializeApp()

  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <div>
        <HeaderContainer/>
        <main className={s.appContainer}>
          {/*<NavbarContainer/>*/}
          <div className="app-wrapper-content">
            <Route path={'/'} render={() => <Redirect to={'/login'}/>}/>
            <Route path={'/login'} render={() => <Login/>}/>
            <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
            <Route path={'/dialogs'} render={() => <Dialogs/>}/>
            <Route path={'/users'} render={() => <UsersContainer/>}/>
          </div>
        </main>
      </div>
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    initialized: state.app.initialized
  }
}


export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App)
