import styles from "./profile-card.module.css";
import Image from "next/image";

const ProfileCard = ({name, position, bio, image}: {name:string, position: string, bio: string[], image: string}) => {
    const paragraphs = [];
    for (let i = 0; i < bio.length; i++) {
        paragraphs.push(<div className={styles.bio} key={i}>{bio[i]}</div>);
    }
    
    return (
        <div>
            <div className={styles.profileHeader}>
                <h2>{name}</h2>
                <h3>{position}</h3>
            </div>

            <div className={styles.profileContainer}>

            
                <img src={image} alt="" width="300" height="400"/>
                
                <div className={styles.container}>
                    {/* <Image src={image} alt='' width={300} height={400}/> */}
                    <div className={styles.bioContainer}>
                        {paragraphs}
                    </div>
            </div>

            </div>
        </div>
    );
}

export default ProfileCard;