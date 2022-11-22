import React, {ChangeEvent, useState} from "react";
import style from "./InfoProfile.module.css"
import {UserProfile} from "../../../redux/profile-reducer";
import {Preloader} from "../../Preloader/Preloader";
import image from "../../../assets/images/avatar.png"
import {ProfileStatus} from "./ProfileStatus";
import {ProfileData} from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

type InfoProfileType = {
    profileUser: UserProfile | null
    updateStatusThunk: (status: string) => void
    status: string
    isOwner: boolean
    savePhoto: (photo: any) => void
    saveProfile : (value : any) => void
}

export const InfoProfile = (props: InfoProfileType) => {


    const [editMode,setEditMode] = useState(false)
    if (!props.profileUser) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0]);
        }
    }

const onSubmit =  (formData : any) =>{
     // @ts-ignore
     props.saveProfile(formData).then(()=>{
         setEditMode(false)
     })

}

    return (
        <>
            <div className={style.disriptionBlock}>
                <img style={{width: "200px"}} src={props.profileUser.photos.large || image} alt="empty"/>
            </div>
            {props.isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
            <div>
            {editMode
                ?<ProfileDataForm initialValues={props.profileUser} onSubmit={onSubmit} />
                :<ProfileData profileUser={props.profileUser} isOwner={props.isOwner} toEditMode={()=>setEditMode(true)}/>}
            </div>
            <div>
                <b>Status : <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk}/></b>
            </div>


        </>
    );
}

