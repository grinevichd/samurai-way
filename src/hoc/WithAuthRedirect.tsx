import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {StoreReduxType} from "../redux/store-redux";
import {connect} from "react-redux";

type mapStateToPropsForRedirect = {
    auth : boolean
}

const mapStateToPropsForRedirect = (state:StoreReduxType) : mapStateToPropsForRedirect => ({
    auth : state.auth.isAuth
})
export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: mapStateToPropsForRedirect) {
        const {auth, ...restProps} = props
        if (!auth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>;
    }

    const ConnectedAuthRedirectComponent =connect(mapStateToPropsForRedirect)(RedirectComponent)
      return ConnectedAuthRedirectComponent
};

