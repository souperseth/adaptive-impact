import styles from "../styles.module.css";

export default function TakeAction() {
	return (
		<div>
			<h1>Take Action</h1>
			<div className={styles.donate2}>
				{/* @ts-ignore */}
				<givebutter-widget className={styles.donate2} id="j1Pwxp"></givebutter-widget>
			</div>
		</div>
	);
}
