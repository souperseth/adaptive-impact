import styles from "./profile-card.module.css";

export default function ProfileCard() {
    return (
        <div className={styles.container}>
            <h3>Name</h3>
            <div>
                description
            </div>
        </div>
    );
}