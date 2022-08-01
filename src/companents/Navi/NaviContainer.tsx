import React from "react";

import {Navi} from "./Navi";
import {connect} from "react-redux";
import {StoreReduxType} from "../../redux/store-redux";
import {addFriend, changeFriend, SidebarType} from "../../redux/sidebar-reducer";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    myFriends : SidebarType
}
type mapDispatchToPropsType = {
    addFriend : () => void
    changeFriend : (text : string) => void
}
export type FriendsType = mapStateToPropsType & mapDispatchToPropsType

const mapDispatchToProps = (dispatch : Dispatch) : mapDispatchToPropsType => {
    return {
        addFriend : () => dispatch(addFriend()),
        changeFriend : (text : string) => dispatch(changeFriend(text))

}
    }
const mapStateToProps = (state : StoreReduxType):mapStateToPropsType => {
  return {
      myFriends : state.sidebar
  }
}

export const NaviContainer = connect(mapStateToProps,mapDispatchToProps)(Navi)