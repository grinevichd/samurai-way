
import React from "react";
import styles from "./Preloader.module.scss"

export const Preloader = () => {
  return (
    <div className={styles.preloaderContainer}>
      <div className={styles.preloaderBox}>
        <span className={styles.loader}></span>
      </div>
    </div>
  )
}

// import React from 'react';
// import preloader from '../../../assets/img/loading/Lazy-Loader.svg';
//
// export let Preloader = () => {
//   return <div>
//     <div><img src={preloader} alt={''}/></div>
//   </div>
// };

