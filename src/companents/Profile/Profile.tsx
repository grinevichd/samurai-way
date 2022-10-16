import React from "react";
import {InfoProfile} from "./InfoProfile/InfoProfile";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {updateStatusThunk, UserProfile} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";
type ProfilePropsType = {
    profileUser : UserProfile | null
    status : string
    updateStatusThunk : (status : string) => void

}
export const Profile = (props: ProfilePropsType) => {

    return (
        <>
            <InfoProfile profileUser={props.profileUser} updateStatusThunk={props.updateStatusThunk} status = {props.status}/>
            <MyPostsContainer
            />
        </>
    );
}