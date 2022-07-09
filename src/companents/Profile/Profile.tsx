import React from "react";
import {InfoProfile} from "./InfoProfile/InfoProfile";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    // profilePage: ProfilePageType
    // dispatch: (action: ActionsTypes) => void
    // store : StoreReduxType
}


export const Profile = (props: ProfilePropsType) => {

    return (
        <>

            <InfoProfile/>
            {/*<MyPostsContainer*/}
            {/*    profile={props.profilePage}*/}
            {/*    myPostText={props.profilePage.myPostText}*/}
            {/*    dispatch={props.dispatch}*/}
            {/*/>*/}
            <MyPostsContainer
                // store={props.store} dispatch={props.dispatch}
            />



        </>
    );
}