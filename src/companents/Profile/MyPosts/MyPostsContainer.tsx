import React from "react";
import {addPostActionCreator, onAreaChangeActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";


type MyPostsPropsType = {
    // profile : ProfilePageType
    // myPostText : string
    // dispatch : (action:ActionsTypes) => void
    // store : StoreReduxType
}


export const MyPostsContainer = (props: MyPostsPropsType) => {



    return <StoreContext.Consumer>
        {  (store) =>{
                let state = store.getState()
                const addPost = ()=>{
                    store.dispatch(addPostActionCreator())
                }
                const onAreaChange = (text:string) => {

                    store.dispatch(onAreaChangeActionCreator(text))

                }


      return  <MyPosts
            profile={state.profilePage}
            myPostText={state.profilePage.myPostText}
            addPost={addPost}
            updateNewPostText={onAreaChange}/>
            }
        }
        </StoreContext.Consumer>

}

