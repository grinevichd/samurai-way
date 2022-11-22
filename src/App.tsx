import React, {lazy} from 'react';
import './App.css';
import {News} from './companents/News/News';
import {Music} from "./companents/Music/Music";
import {Settings} from "./companents/Settings/Settings";
import {BrowserRouter, Link, Redirect, Route, useParams} from "react-router-dom";
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
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb, Avatar, Row, Col} from "antd";
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons'
import style from "./companents/Navi/Navi.module.css";

const {SubMenu} = Menu
const {Header, Content, Footer, Sider} = Layout

export type MapDispatchPropsType = {
    initializeTC: () => void
}
export type MapStatePropsType = {
    initialized: boolean
}

const DialogContainer = lazy(() => import ('./companents/Dialogs/DialogsContainer'))
const ProfileContainer = lazy(() => import('./companents/Profile/ProfileContainer'))



class App extends React.Component<MapDispatchPropsType & MapStatePropsType> {
    componentDidMount() {
        this.props.initializeTC()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>

        return (
            <Layout>
                <HeaderContainer/>
                <Content style={{padding: '0 50px'}}>
                    {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
                    {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    <Layout className='site-layout-background' style={{padding: '24px 0'}}>
                        <Sider className='site-layout-background' width={200}>
                            <Menu
                                mode='inline'
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                            >
                                <SubMenu key='sub1' icon={<UserOutlined/>} title='My profile'>

                                    <Menu.Item key='1'><Link to={"/profile"}>Profile</Link></Menu.Item>
                                    <Menu.Item key='2'><Link to={"/dialogs"}>Messages</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key='sub2' icon={<LaptopOutlined/>} title='Users'>
                                    <Menu.Item key='3'><Menu.Item key='3'><Link to={"/users"} >Users</Link></Menu.Item></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px'}}>
                            <React.Suspense fallback={<Preloader/>}>
                                <Route path={"/dialogs"} render={() => <DialogContainer/>}/>
                                <Route path={"/profile/:id?"} render={() => <ProfileContainer/>}/>
                                <Route exact path={"/"} render={() => <Redirect to={'/profile'}/>}/>
                                <Route path={"/news"} component={News}/>
                                <Route path={"/music"} component={Music}/>
                                <Route path={"/settings"} component={Settings}/>
                                <Route path={"/users"} render={() => <UsersAPIComponent/>}/>
                                <Route path={"/login"} component={Login}/>

                            </React.Suspense>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Social Network</Footer>
            </Layout>
        );
    }
}

const mapStateToProps = (state: StoreReduxType): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}
const AppContainer = compose(connect(mapStateToProps, {initializeTC})(App));

const MainApp = (props: any) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default MainApp