import styles from "./ProfileData.module.scss";
import React from "react";
import {ProfileUserStatusType} from "../../../../api/api";


type ProfileDataPropsType = {
  profile: ProfileUserStatusType | null
}

export const ProfileData = (props: ProfileDataPropsType) => {

  return (
    <div className={styles.profileDataContainer}>
      <div className={styles.titleBox}>
        <h3 className={styles.title}>About me:</h3>
        <span>
                    {props.profile?.aboutMe ? ' ' + props.profile.aboutMe : '...'}
                </span>
      </div>

      {props.profile?.lookingForAJob &&
				<div className={styles.titleBox}>
					<h3 className={styles.title}>Looking for a job:</h3>
					<span>{props.profile?.lookingForAJobDescription}</span>
				</div>
      }

      {props.profile?.contacts &&
        Object.keys(props.profile.contacts).map((key, index) => {
          // @ts-ignore
          const keyContact = props.profile?.contacts ? props.profile.contacts[key] : ''
          if (keyContact) {
            return <div key={index} className={styles.contactBox}>
              <span>{key}:</span>
              <a
                target="_blank"
                className={styles.link}
                href={'https://' + keyContact}
              >{keyContact}</a>
            </div>
          }
        })
      }

    </div>
  )
}