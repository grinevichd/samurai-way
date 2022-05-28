import React from "react";

import style from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () =>{
    return(
        <div>
            <div>My Post</div>
            <textarea></textarea>
            <button>add post</button>
            <Post message={"Hello how are u?"} countLikes={15}/>
            <Post message={"yup it's my first post"} countLikes={25}/>
       </div>
    );
}