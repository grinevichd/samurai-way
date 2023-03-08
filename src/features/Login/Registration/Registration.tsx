import styles from "./Registration.module.scss";
import React from "react";
import {RepairComponent} from "../../../common/components/RepairComponent/RepairComponent";

export const Registration = () => {
  return <div className={styles.registrationComponent}>
    <div className={styles.text}>
      <p>To log in get registered <a className={styles.a}
                                     href={'https://social-network.samuraijs.com/'}
                                     target={'_blank'}>here
      </a>
      </p>
      <p>or use common test account credentials:</p>
      <p>Email: <b>free@samuraijs.com</b></p>
      <p>Password: <b>free</b></p>
    </div>
    <RepairComponent text={'This page is under development.'}/>
  </div>
}