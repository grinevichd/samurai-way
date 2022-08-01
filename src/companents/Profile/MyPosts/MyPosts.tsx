import React from "react";
import style from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";




export const MyPosts = (props: MyPostsPropsType) => {

    const elementRef = React.createRef<HTMLTextAreaElement>()


    const addPost = ()=>{
        props.addPost()
    }
    const onAreaChange = () => {

      const text = elementRef.current
        if(text){
            props.onAreaChange(text.value)
        }
    }

    const postsElements = props.profile.postsData.map(post => <Post message={post.message} countLikes={post.countLikes}/>)
    return (
        <div className={style.postBlock}>
            <h3>My Post</h3>
            <div>
                <textarea ref={elementRef} value={props.myPostText} onChange={onAreaChange} />
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
            {postsElements}

        </div>
    );
}