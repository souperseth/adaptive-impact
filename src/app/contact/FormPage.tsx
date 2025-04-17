import styles from "./contact.module.css"

export default function FormPage() {
	return (
        <div className={styles.pageWrapper}>
          <div className={styles.pageHeadingWrapper}>
            <p className={styles.text}>Any Question or remarks? Just write us a message</p>
          </div>
          <div className={styles.formContainer}></div>
        </div>
      );
}
