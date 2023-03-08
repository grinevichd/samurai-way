import React from "react";
import styles from './Post.module.scss'
import avatar from '../../../../assets/user.png'
import {SvgSelector} from "../../../../common/components/SvgSelector/SvgSelector";

type PostPropsType = {
  message: string
  likes: number
  id: number
  photos: string | undefined | null
  name: string | undefined
  isOwner: boolean
  deletePost: (id: number) => void
}

export const Post = (props: PostPropsType) => {

  const deletePostHandler = () => {
    console.log(props.id)
    console.log(props)
    props.deletePost(props.id)
  }

  return <div className={styles.postBox}>
    <div className={styles.nameBox}>
      <img
        className={styles.img}
        alt={'ava'}
        src={props.photos ? props.photos : avatar}
      />
      <h3 className={styles.nameTitle}>{props.name}</h3>
    </div>
    <div className={styles.postText}>
      {props.message}
    </div>
    <div className={styles.footerPost}>
      <div className={styles.likeBox}>

        <span>like</span>
        <span className={styles.numberLike}>{props.likes}</span>
      </div>
      {props.isOwner &&
				<div className={styles.delete} onClick={deletePostHandler}>
					<SvgSelector svgName={"Delete"}/>
          <span>Delete</span>
				</div>
      }
    </div>
  </div>
};