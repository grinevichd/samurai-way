import React from "react";
import {InfoProfile} from "./InfoProfile/InfoProfile";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, UserProfile} from "../../redux/profile-reducer";
import {StoreReduxType} from "../../redux/store-redux";
import {withRouter,RouteComponentProps} from "react-router-dom";
// type ProfilePropsType = {
//     // profilePage: ProfilePageType
//     // dispatch: (action: ActionsTypes) => void
//     // store : StoreReduxType
// }

type mapDispatchToProps={
    setUserProfile:(profile : UserProfile)=>void
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
        debugger

        let userID = this.props.match.params.id
        if(!userID){
            userID = "2"
        }
        console.log(userID)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response =>{
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <>
                <Profile {...this.props} profileUser={this.props.profileUser}/>
            </>
        );

    }
}

const mapStateToProps = (state:StoreReduxType) : mapStateToProps => ({
    profileUser : state.profilePage.profileUser
})

const ComponentWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfile})(ComponentWithRouter)