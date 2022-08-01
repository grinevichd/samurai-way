import React from "react";
import {addPostActionCreator, onAreaChangeActionCreator, ProfilePageType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StoreReduxType} from "../../../redux/store-redux";


type mapDispatchToPropsType = {
    addPost: () => void
    onAreaChange: (text: string) => void
}
type mapStateToPropsType = {
    profile: ProfilePageType
    myPostText: string
}
export type MyPostsPropsType = mapDispatchToPropsType & mapStateToPropsType


const mapStateToProps = (state: StoreReduxType): mapStateToPropsType => {
    debugger
    return {
        profile: state.profilePage,
        myPostText: state.profilePage.myPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        onAreaChange: (text: string) => dispatch(onAreaChangeActionCreator(text))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

