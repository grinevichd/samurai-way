import React from 'react';
import './App.css';
import {Header} from "./companents/Header/Header";
import {Navi} from "./companents/Navi/Navi";
import {Profile} from "./companents/Profile/Profile";


const App = () => {
    return (
        <div className="app-wrapper">
        <Header />
        <Navi/>
        <Profile/>
        </div>
    );
}

//test commit

export default App;
