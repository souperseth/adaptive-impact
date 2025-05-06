import styles from "./contact.module.css"
import DetailsBar from "./DetailsBar"
import SideInput from "./SideInput"

export default function FormPage() {
	return (
        <div className={styles.pageWrapper}>
          <div className={styles.pageHeadingWrapper}>
            <p className={styles.text}>Write us a message to inquire about an adaptive experience!</p>
          </div>
          <div className={styles.formContainer}>
            <DetailsBar/>
            <SideInput/>
          </div>
        </div>
      );
}
