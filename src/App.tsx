import React from 'react';
import './App.css';
import {Header} from "./companents/Header/Header";
import {Profile} from "./companents/Profile/Profile";
import {News} from './companents/News/News';
import {Music} from "./companents/Music/Music";
import {Settings} from "./companents/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogContainer} from "./companents/Dialogs/DialogsContainer";
import {NaviContainer} from "./companents/Navi/NaviContainer";


type AppPropsType = {
    // state: RootPropsType
    // dispatch: (action: ActionsTypes) => void
    // store : StoreReduxType
}



const App = (props: AppPropsType) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                {/*<Navi myFriends={props.store.sidebar}/>*/}
                <NaviContainer/>
                <div className="app-wrapper-content">
                    {/*<Route path={"/dialogs"}*/}
                    {/*       render={() => <Dialogs messagesPage={props.state.messagesPage} dispatch={props.dispatch}*/}

                    {/*       />*/}

                    {/*       }/>*/}
                    <Route path={"/dialogs"}
                           render={() => <DialogContainer
                           />

                           }/>
                    {/*<Route path={"/profile"}*/}
                    {/*       render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}*/}
                    {/*       />}*/}

                    {/*/>*/}
                    <Route path={"/profile"}
                           render={() => <Profile
                               // store={props.store}
                               //                    dispatch={props.dispatch}
                           />}

                    />
                    
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
