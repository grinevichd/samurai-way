import React from "react";
import {addPostActionCreator, ProfilePageType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StoreReduxType} from "../../../redux/store-redux";


type mapDispatchToPropsType = {
    addPost: (value : string) => void

}
type mapStateToPropsType = {
    profile: ProfilePageType

}
export type MyPostsPropsType = mapDispatchToPropsType & mapStateToPropsType


const mapStateToProps = (state: StoreReduxType): mapStateToPropsType => {

    return {
        profile: state.profilePage,

    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (value) => dispatch(addPostActionCreator(value)),

    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

