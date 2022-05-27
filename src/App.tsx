import React from 'react';
import './App.css';
import {Header} from "./companents/Header";
import {Navi} from "./companents/Navi";
import {Profile} from "./companents/Profile";


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
