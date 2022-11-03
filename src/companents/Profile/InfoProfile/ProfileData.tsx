import {UserProfile} from "../../../redux/profile-reducer";
import {Contacts} from "./Contacts/Contacts";

export type ProfileDataType = {
    profileUser: UserProfile
    isOwner : boolean
    toEditMode : () => void
}


export const ProfileData = (props: ProfileDataType) => {
    return <>
        {props.isOwner && <div><button onClick={props.toEditMode}>Edit</button></div> }
        <div>{props.profileUser.aboutMe}</div>
        <div><b>Full Name</b>: {props.profileUser.fullName}</div>
        <div>
            <b>Looking for a job</b>: {props.profileUser.lookingForAJob ? "yes" : "no"}
        </div>
        {props.profileUser.lookingForAJob && <div>
            <b>My professional skills</b>: {props.profileUser.lookingForAJobDescription}
        </div>}
        <div>
            <b>Contacts</b>: {Object.entries(props.profileUser.contacts).map(key => {
            return <Contacts key={key[0]} contactTitle={key[0]} contactValue={key[1]}/>
        })}
        </div>
    </>
}