import React from 'react';
import './App.css';
import {Header} from "./companents/Header/Header";
import {Profile} from "./companents/Profile/Profile";
import {News} from './companents/News/News';
import {Music} from "./companents/Music/Music";
import {Settings} from "./companents/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogContainer} from "./companents/Dialogs/DialogsContainer";
import {NaviContainer} from "./companents/Navi/NaviContainer"
import UsersAPIComponent from "./companents/Users/UserContainer";
import ProfileContainer from "./companents/Profile/ProfileContainer";
import HeaderContainer from "./companents/Header/HeaderContainer";
import {Login} from "./companents/Login/Login";


type AppPropsType = {
    // state: RootPropsType
    // dispatch: (action: ActionsTypes) => void
    // store : StoreReduxType
}


const App = () => {


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
                    {/*<Route path={"/users"} component={UsersContainer}/>*/}
                    <Route path={"/users"} render={() => <UsersAPIComponent/>}/>
                    <Route path={"/login"} component={Login}/>
                </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
