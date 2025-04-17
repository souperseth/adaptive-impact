import styles from "./profile-card.module.css";

const ProfileCard = ({name, position, bio}: {name:string, position: string, bio: string[]}) => {
    const lines = [];
    for (let i = 0; i < bio.length; i++) {
        lines.push(<div className={styles.bio} key={i}>&emsp;{bio[i]}</div>);
    }
    
    return (
        <div className={styles.container}>
            <h3>{name}</h3>
            <h3>{position}</h3>
                {lines}
        </div>
    );
}

export default ProfileCard;