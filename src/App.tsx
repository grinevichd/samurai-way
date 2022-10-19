import React from 'react';
import './App.css';
import {News} from './companents/News/News';
import {Music} from "./companents/Music/Music";
import {Settings} from "./companents/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogContainer} from "./companents/Dialogs/DialogsContainer";
import {NaviContainer} from "./companents/Navi/NaviContainer"
import UsersAPIComponent from "./companents/Users/UserContainer";
import ProfileContainer from "./companents/Profile/ProfileContainer";
import HeaderContainer from "./companents/Header/HeaderContainer";
import Login from "./companents/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeTC} from "./redux/app-reducer";
import {StoreReduxType} from "./redux/store-redux";
import {Preloader} from "./companents/Preloader/Preloader";

export type MapDispatchPropsType = {
    initializeTC : ()=>void
}
export type MapStatePropsType = {
    initialized : boolean
}


class App extends React.Component<MapDispatchPropsType & MapStatePropsType> {
    componentDidMount() {
        this.props.initializeTC()
    }
    render() {
        if(!this.props.initialized) return <Preloader/>

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NaviContainer/>
                    <div className="app-wrapper-content">
                        <Route path={"/dialogs"}
                               render={() => <DialogContainer
                               />}/>

                        <Route path={"/profile/:id?"}
                               render={() => <ProfileContainer

                               />}

                        />
                        <Route path={"/news"} component={News}/>
                        <Route path={"/music"} component={Music}/>
                        <Route path={"/settings"} component={Settings}/>
                        <Route path={"/users"} render={() => <UsersAPIComponent/>}/>
                        <Route path={"/login"} component={Login}/>
                    </div>


                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state : StoreReduxType):MapStatePropsType => {
    return {
        initialized : state.app.initialized
    }
}
export default compose(

    connect(mapStateToProps, {initializeTC})(App));
