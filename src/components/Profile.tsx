import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {

    const {level} = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://lh3.googleusercontent.com/ogw/ADGmqu8G7XhPAHLi7SlZ29KQOtc7XYPq8k1FkkvVk0l_XYg=s83-c-mo" alt="Christopher"/>
         <div>
           <strong>Christopher Guimarães</strong>
            <p> 
                <img src="icons/level.svg" alt="Seta cima"/>
               Level {level} 
            </p> 
         </div>
        </div>
    )
}