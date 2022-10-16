import React from "react";
import style from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {TextArea} from "../../FormControls/FormControl";

type FormDataType ={
    myPostText : string

}


export const MyPosts = (props: MyPostsPropsType) => {




    const addPost = (value : FormDataType)=>{
        props.addPost(value.myPostText)
    }



    const postsElements = props.profile.postsData.map(post => <Post message={post.message} countLikes={post.countLikes}/>)
    return (
        <div className={style.postBlock}>
            <h3>My Post</h3>
            <AddPostFormRedux onSubmit={addPost}/>
            {postsElements}

        </div>
    );
}

const maxLength = maxLengthCreator(5)

const AddPostForm:  React.FC<InjectedFormProps<FormDataType>> = (props) => {
   return <form onSubmit={props.handleSubmit}>
       <Field component={TextArea} name="myPostText" placeholder = "new Post" validate={[requiredField,maxLength]}/>
        <button >add post</button>
    </form>
}

const AddPostFormRedux = reduxForm<FormDataType>({
    form : "postAddPostForm"
})(AddPostForm)