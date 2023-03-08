import React from "react";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AddPostFormType} from "./addPostForm/AddPostForm";
import {reset} from "redux-form";
import {addPostAC, InitialProfileStateType} from "../profileReducer";
import {AppStateType} from "../../../redux/redux-store";


export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
  profilePage: InitialProfileStateType
}

type mapDispatchPropsType = {
  addPost: (formData: AddPostFormType) => void
  reset: () => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
  return {
    addPost: (formData: AddPostFormType) => dispatch(addPostAC(formData.newPostText)),
    reset: () => dispatch(reset('addPostForm'))
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
