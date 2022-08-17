import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthUserLogin, setAuthUserData} from "../../redux/auth-reducer";
import {StoreReduxType} from "../../redux/store-redux";
import {usersAPI} from "../../api/api";
export type MapDispatchPropsType = {
    setAuthUserData : (id:number,email:string,login:string)=> void
    AuthUserLogin : ()=>void
}
type MapStatePropsType = {
    login : string | null
    isAuth : boolean
}
export type HeaderPropsType = MapDispatchPropsType & MapStatePropsType
class HeaderContainer extends React.Component<HeaderPropsType>{

    componentDidMount() {
        debugger
        this.props.AuthUserLogin()
        // usersAPI.authLogin()
        //     .then(data =>{
        //         debugger
        //         if(data.resultCode ===0){
        //             const {id,email,login} = data.data
        //             this.props.setAuthUserData(id,email,login)
        //         }
        //     })
    }

    render() {
        return <Header {...this.props}/>;
    }
}
const mapStateToProps = (state : StoreReduxType) : MapStatePropsType=>({
    login : state.auth.login,
    isAuth : state.auth.isAuth
})
export default connect(mapStateToProps,{setAuthUserData,AuthUserLogin})(HeaderContainer)