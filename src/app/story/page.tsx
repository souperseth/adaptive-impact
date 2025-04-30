import ProfileCard from "./ProfileCard";
import styles from "../styles.module.css";
import { profileData, story } from '../../../public/data.js';

const Story = ()=> {
	const storyParagraphs = [];
    for (let i = 0; i < story.length; i++) {
        storyParagraphs.push(<div className={styles.bio} key={i}>{story[i]}</div>);
    }
	return (
		<div>
			<h1>Our story</h1>
			<div className={styles.pageWrapper}>
				<div className={styles.cardColumn}>
					<div>
						{storyParagraphs}
					</div>
					<h2>Founders</h2>
					{profileData.map((profile) => (
						<ProfileCard name={profile.name} position={profile.position} bio={profile.bio} key={profile.name} image={profile.image}/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Story;