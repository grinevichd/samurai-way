import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router';
import {compose, Dispatch} from 'redux';
import {ItemsUsersType, ProfileUserStatusType} from '../../api/api';
import s from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {RequestStatusType} from "../../app/appReducer";
import {FormAddMyPostType, MyPosts} from "./MyPosts/MyPosts";
import {AddPostFormType} from "./MyPosts/addPostForm/AddPostForm";
import {reset} from "redux-form";
import {
  addPostAC, deletePostAC,
  getUserProfileTC,
  getUserStatusTC,
  InitialProfileStateType, savePhotoTC, saveProfileTC, updateStatusTC
} from "./profileReducer";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";
import {followTC, unfollowTC} from "../Users/usersReducer";


class ProfileAPI extends React.Component<PropsType> {


  userInfo() {
    let userID = this.props.match.params.userId
    if (userID) {
      const user = this.props.users.find(el => el.id === +userID)
      return user?.followed
    } else {
      return undefined
    }
  }

  refreshProfile() {
    let userID = this.props.match.params.userId
    if (!userID) {
      // @ts-ignore
      userID = this.props.myID
      if (!userID) {
        this.props.history.push('/login')  // не очень хорошее решение
      }
    }
    this.props.getUserProfile(+userID)
    this.props.getUserStatus(+userID)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
    if (this.props.match.params.userId !== prevProps.match.params.userId)
      this.refreshProfile()
  }


  render() {

    return (
      <div className={s.profileComponent}>
        <ProfileInfo {...this.props}
                     isOwner={!this.props.match.params.userId}
                     userID={this.props.match.params.userId}
                     userFollowed={this.userInfo()}
                     follow={this.props.followTC}
                     usFollow={this.props.usFollowTC}
                     followingInProgress={this.props.followingInProgress}
        />
        <MyPosts
          isOwner={!this.props.match.params.userId}
          reset={this.props.reset}
          addPost={this.props.addPost}
          profilePage={this.props.profilePage}
          deletePost={this.props.deletePost}
        />
        {/*<InfoContent/>*/}
      </div>
    )
  }
}

type MapStateToPropsType = {
  users: ItemsUsersType[]
  profile: ProfileUserStatusType | null
  status: string
  myID: number | null
  isAuth: boolean
  followingInProgress: number[]
  statusApp: RequestStatusType
  profilePage: InitialProfileStateType
}

type MapDispatchToPropsType = {
  getUserProfile: (userId: number) => any
  getUserStatus: (userId: number) => void
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
  saveProfile: (formData: ProfileUserStatusType) => void
  followTC: (userId: number) => void
  usFollowTC: (userId: number) => void
  addPost: (formData: FormAddMyPostType) => void
  reset: () => void
  deletePost: (id: number) => void
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  users: state.usersPage.users,
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  myID: state.auth.userId,
  isAuth: state.auth.isAuth,
  followingInProgress: state.usersPage.followingInProgress,
  statusApp: state.app.status,
  profilePage: state.profilePage
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    getUserProfile: (userId: number) => dispatch(getUserProfileTC(userId)),
    getUserStatus: (userId: number) => dispatch(getUserStatusTC(userId)),
    updateStatus: (status: string) => dispatch(updateStatusTC(status)),
    savePhoto: (file: File) => dispatch(savePhotoTC(file)),
    saveProfile: (formData: ProfileUserStatusType) => dispatch(saveProfileTC(formData)),
    followTC: (userId: number) => dispatch(followTC(userId)),
    usFollowTC: (userId: number) => dispatch(unfollowTC(userId)),
    addPost: (formData: AddPostFormType) => dispatch(addPostAC(formData.newPostText)),
    reset: () => dispatch(reset('addPostForm')),
    deletePost: (id: number) => dispatch(deletePostAC(id))
  }
}

export const ProfileContainer = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileAPI)


type PathParamsType = {
  userId: number,
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

// @ts-ignore
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
