import React from "react";
import {InfoProfile} from "./InfoProfile/InfoProfile";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfile} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";
type ProfilePropsType = {
    profileUser : UserProfile | null

}
export const Profile = (props: ProfilePropsType) => {

    return (
        <>
            <InfoProfile profileUser={props.profileUser}/>
            <MyPostsContainer
            />
        </>
    );
}