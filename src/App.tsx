import React, {lazy} from 'react';
import './App.css';
import {News} from './companents/News/News';
import {Music} from "./companents/Music/Music";
import {Settings} from "./companents/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {NaviContainer} from "./companents/Navi/NaviContainer"
import UsersAPIComponent from "./companents/Users/UserContainer";
// import ProfileContainer from "./companents/Profile/ProfileContainer";
// import DialogContainer from "./companents/Dialogs/DialogsContainer";
import HeaderContainer from "./companents/Header/HeaderContainer";
import Login from "./companents/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeTC} from "./redux/app-reducer";
import {store, StoreReduxType} from "./redux/store-redux";
import {Preloader} from "./companents/Preloader/Preloader";


export type MapDispatchPropsType = {
    initializeTC : ()=>void
}
export type MapStatePropsType = {
    initialized : boolean
}

 const DialogContainer = lazy(() => import ('./companents/Dialogs/DialogsContainer'))
const ProfileContainer = lazy(() => import('./companents/Profile/ProfileContainer'))

class App extends React.Component<MapDispatchPropsType & MapStatePropsType> {
    componentDidMount() {
        this.props.initializeTC()
    }
    render() {
        if(!this.props.initialized) return <Preloader/>

        return (

                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NaviContainer/>
                    <div className="app-wrapper-content">
                        <React.Suspense fallback={<Preloader/>}>
                        <Route path={"/dialogs"} render={() => <DialogContainer/>}/>
                        <Route path={"/profile/:id?"} render={() => <ProfileContainer/>}/>
                        <Route path={"/news"} component={News}/>
                        <Route path={"/music"} component={Music}/>
                        <Route path={"/settings"} component={Settings}/>
                        <Route path={"/users"} render={() => <UsersAPIComponent/>}/>
                        <Route path={"/login"} component={Login}/>
                        </React.Suspense>
                    </div>


                </div>

        );
    }
}

const mapStateToProps = (state : StoreReduxType):MapStatePropsType => {
    return {
        initialized : state.app.initialized
    }
}
const AppContainer = compose(connect(mapStateToProps, {initializeTC})(App));

const MainApp = (props:any) =>{
   return <BrowserRouter>
    <Provider store={store}>
        <AppContainer/>
    </Provider>
    </BrowserRouter>
}
export default MainApp