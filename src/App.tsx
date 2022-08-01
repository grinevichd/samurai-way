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
import {UsersContainer} from "./companents/Users/UserContainer";
import ProfileContainer from "./companents/Profile/ProfileContainer";


type AppPropsType = {
    // state: RootPropsType
    // dispatch: (action: ActionsTypes) => void
    // store : StoreReduxType
}


const App = () => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
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
                    <Route path={"/users"} component={UsersContainer}/>
                </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
