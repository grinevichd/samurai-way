import React from 'react';
import './App.css';
import {Header} from "./companents/Header/Header";
import {Navi} from "./companents/Navi/Navi";
import {Profile} from "./companents/Profile/Profile";
import {Dialogs} from "./companents/Dialogs/Dialogs";
import { News } from './companents/News/News';
import {Music} from "./companents/Music/Music";
import {Settings} from "./companents/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
        <Header />
        <Navi/>

            <div className="app-wrapper-content">
                <Route path={"/dialogs"} component={Dialogs}/>
                <Route path={"/profile"} component={Profile}/>
                <Route path={"/news"} component={News}/>
                <Route path={"/music"} component={Music}/>
                <Route path={"/settings"} component={Settings}/>
            </div>


        </div>
        </BrowserRouter>
    );
}

//test commit

export default App;
