import React from "react";
import {InfoProfile} from "./InfoProfile/InfoProfile";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getProfileThunk, setUserProfile, UserProfile} from "../../redux/profile-reducer";
import {StoreReduxType} from "../../redux/store-redux";
import {withRouter, RouteComponentProps, Redirect} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
// type ProfilePropsType = {
//     // profilePage: ProfilePageType
//     // dispatch: (action: ActionsTypes) => void
//     // store : StoreReduxType
// }

type mapDispatchToProps={
    setUserProfile:(profile : UserProfile)=>void
    getProfileThunk:(userID : string) => void
}
type mapStateToProps = {
    profileUser : UserProfile | null

}
type ParamsIDType = {
    id :  string
}


type ProfileContainerType = mapStateToProps & mapDispatchToProps & RouteComponentProps<ParamsIDType>

 class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        let userID = this.props.match.params.id
        if(!userID){
            userID = "2"
        }

        // usersAPI.getProfile(userID)
        //     .then(response =>{
        //         this.props.setUserProfile(response.data)
        //     })
        this.props.getProfileThunk(userID)
    }

    render() {

        return (
            <>
                <Profile {...this.props} profileUser={this.props.profileUser} />
            </>
        );

    }
}


const mapStateToProps = (state:StoreReduxType) : mapStateToProps => ({
    profileUser : state.profilePage.profileUser,

})
export default compose<React.ComponentType>(
    connect(mapStateToProps,{setUserProfile,getProfileThunk}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)
//
// const ComponentWithRouter = withRouter(AuthRedirectComponent)
//
//  connect(mapStateToProps,{setUserProfile,getProfileThunk})(ComponentWithRouter)