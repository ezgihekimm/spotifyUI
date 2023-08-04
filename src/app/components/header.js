import styles from "./header.module.css"


const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.row}>
				<p className={styles.sign}>Sign Up</p>
					<div className={styles.button}>
						Log in 
					</div>
			</div>
		</div>
	)
}

export default Header;