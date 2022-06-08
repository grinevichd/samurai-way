import React from "react";

import style from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={style.postBlock}>
            <h3>My Post</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>add post</button>
            </div>

            <Post message={"Hello how are u?"} countLikes={15}/>
            <Post message={"yup it's my first post"} countLikes={25}/>
        </div>
    );
}