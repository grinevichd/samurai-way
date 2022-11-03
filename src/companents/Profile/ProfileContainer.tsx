import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunk,
    getUserStatusThunk,
    savePhoto, saveProfile,
    setUserProfile,
    updateStatusThunk,
    UserProfile
} from "../../redux/profile-reducer";
import {StoreReduxType} from "../../redux/store-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
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
    getUserStatusThunk:(userID : string) => void
    updateStatusThunk:(status : string) => void
    savePhoto:(photo : any) => void
    saveProfile : (value : any) => void
}
type mapStateToProps = {
    profileUser : UserProfile | null
    status : string
    userId : number | null
    isAuthorized : boolean
}
type ParamsIDType = {
    id :  string
}


type ProfileContainerType = mapStateToProps & mapDispatchToProps & RouteComponentProps<ParamsIDType>

 class ProfileContainer extends React.Component<ProfileContainerType> {

    refreshProfile(){
        let userID = this.props.match.params.id
        if(!userID){
            userID = this.props.userId!.toString()
            if(!userID){
                this.props.history.push('/login')
            }
        }
        this.props.getProfileThunk(userID)
        this.props.getUserStatusThunk(userID)
    }
    componentDidMount() {
       this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<ProfileContainerType>) {
        if(this.props.match.params.id != prevProps.match.params.id)
        this.refreshProfile()
    }

     render() {

        return (
            <>
                <Profile
                    {...this.props}
                    profileUser={this.props.profileUser}
                    status={this.props.status}
                    updateStatusThunk={this.props.updateStatusThunk}
                    isOwner = {!this.props.match.params.id}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}
                />
            </>
        );

    }
}


const mapStateToProps = (state:StoreReduxType) : mapStateToProps => ({
    profileUser : state.profilePage.profileUser,
    status : state.profilePage.status,
    userId : state.auth.id,
    isAuthorized : state.auth.isAuth

})
export default compose<React.ComponentType>(
    connect(mapStateToProps,{setUserProfile,getProfileThunk, updateStatusThunk,getUserStatusThunk,savePhoto,saveProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)
//
// const ComponentWithRouter = withRouter(AuthRedirectComponent)
//
//  connect(mapStateToProps,{setUserProfile,getProfileThunk})(ComponentWithRouter)