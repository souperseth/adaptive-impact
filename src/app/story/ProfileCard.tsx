import styles from "./profile-card.module.css";
import Image from "next/image";

const ProfileCard = ({name, position, bio, image, imageFirst}: {name:string, position: string, bio: string[], image: string, imageFirst: number}) => {
    const paragraphs = [];
    for (let i = 0; i < bio.length; i++) {
        paragraphs.push(<div className={styles.bio} key={i}>{bio[i]}</div>);
    }
    
    return (
        <div>
            <div className={styles.profileHeader}>
                <h1>{name}</h1>
                <h3>{position}</h3>
            </div>

            <div className={styles.profileContainer}>
                {(imageFirst % 2 == 0) ? (
                    <div className={styles.profileContainerA}>
                        <img className={styles.image} src={image} alt="" width="300" height="400"/>
                        <div className={styles.container}>
                            <div className={styles.bioContainer}>
                                {paragraphs}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.profileContainerB}>
                        <div className={styles.container}>
                            <div className={styles.bioContainer}>
                                {paragraphs}
                            </div>
                        </div>
                        <img className={styles.image} src={image} alt="" width="300" height="400"/>
                    </div>
     )
            }

            </div>
        </div>
    );
}

export default ProfileCard;