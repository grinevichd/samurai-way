import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthUserLogin, logoutThunk, setAuthUserData} from "../../redux/auth-reducer";
import {StoreReduxType} from "../../redux/store-redux";
import {usersAPI} from "../../api/api";
export type MapDispatchPropsType = {
    setAuthUserData : (id:number,email:string,login:string,isAuth : boolean)=> void

    logoutThunk : () => void
}
type MapStatePropsType = {
    login : string | null
    isAuth : boolean
}
export type HeaderPropsType = MapDispatchPropsType & MapStatePropsType
class HeaderContainer extends React.Component<HeaderPropsType>{
    render() {
        return <Header {...this.props}/>;
    }
}
const mapStateToProps = (state : StoreReduxType) : MapStatePropsType=>({
    login : state.auth.login,
    isAuth : state.auth.isAuth
})
export default connect(mapStateToProps,{setAuthUserData,logoutThunk})(HeaderContainer)