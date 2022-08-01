import React from 'react';
import loader from "../../assets/images/Infinity-1s-191px.svg";

export const Preloader = () => {
    return (
        <div>
            <img style={{width:"200px"}} src={loader}/>
        </div>
    );
};

