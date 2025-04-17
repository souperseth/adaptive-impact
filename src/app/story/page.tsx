import ProfileCard from "./ProfileCard";
import styles from "../styles.module.css";
import { profileData } from '../../../public/data.js';

const Story = ()=> {
	return (
		<div>
			<h1>Story</h1>
			<div className={styles.pageWrapper}>
				<div className={styles.cardColumn}>
					<p className={styles.story}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div className={styles.cardColumn}>
					
					<h2>Founders</h2>
					{profileData.map((profile) => (
						<ProfileCard name={profile.name} position={profile.position} bio={profile.bio} key={profile.name}/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Story;