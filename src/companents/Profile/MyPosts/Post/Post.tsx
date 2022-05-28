import React from "react";

import style from "./Post.module.css"


type PostType = {
    message: string
    countLikes: number
}
export const Post = (props: PostType) => {
    return (
        <div className={style.item}>
            <div className={style.post}>
            <img src="https://pm1.narvii.com/7159/53a9118738ab4359076dee7ee283c2faf1a483acr1-1000-1426v2_hq.jpg"
                 alt=""/>
            <span>{props.message}</span>
            </div>
            <div className={style.post}>
                <span>Like</span>
                <span>{props.countLikes}</span>
            </div>
        </div>
    );
}