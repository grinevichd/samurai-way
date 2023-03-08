import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {getAuthUserDateTC, logoutTC} from '../Login/authReducer';
import {AppStateType} from '../../redux/redux-store';
import {RequestStatusType} from "../../app/appReducer";
import {Dispatch} from "redux";


type MapStateToPropsType = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}
export type MapDispatchToPropsType = {
  logout: () => void
}

export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderAPI extends React.Component<ProfilePropsType> {

  componentDidMount() {
    this.props.setAuthUserDateTC()
  }

  render() {
    return <Header
      isAuth={this.props.isAuth}
      login={this.props.login}
      logout={this.props.logout}
      status={this.props.status}
    />
  }
}

type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsTye

type mapStateToPropsType = {
  isAuth: boolean
  login: string | null
  status: RequestStatusType
}

type mapDispatchToPropsTye = {
  setAuthUserDateTC: () => void
  logout: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    status: state.app.status
  }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsTye => {
  return {
    setAuthUserDateTC: () => dispatch(getAuthUserDateTC()),
    logout: () => dispatch(logoutTC())
  }
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPI)