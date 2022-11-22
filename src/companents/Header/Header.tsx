import React from "react";
import {NavLink, Redirect} from "react-router-dom";

import style from "./Header.module.css"
import {HeaderPropsType} from "./HeaderContainer";
import {Avatar, Button, Col, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {Header} from "antd/lib/layout/layout";


const AppHeader: React.FC<HeaderPropsType> = (props) => {

    return (
        <Header className='header'>
            <div className='logo'/>
            <Row>
                <Col span={20}/>
                <Col span={4}>

                    {props.isAuth

                        ? <div>

                            <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                           <span style={{color:"white", marginLeft:5}}>{props.login}</span>  - <Button onClick={() => props.logoutThunk()}>Log out</Button></div>
                        : <Button><NavLink to={"/login"}>Login</NavLink></Button>}
                </Col>
            </Row>


        </Header>
        // <header className={style.header}>
        //     <img
        //         src="https://thumbs.dreamstime.com/b/vector-graphic-initials-letter-js-logo-design-template-emblem-hexagon-204622912.jpg"
        //         alt=""/>
        //     <div className={style.loginBlock}>
        //         {props.isAuth
        //             ?<div>{props.login} -   <button onClick={()=>props.logoutThunk()}>Log out</button></div>
        //             :<NavLink to={"/login"}>Login</NavLink>}
        //         </div>
        // </header>
    );
}

export default AppHeader