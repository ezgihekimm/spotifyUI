import Image from "next/image"
import styles from "./menu.module.css"
import React from "react"

const Menu = () => {
    return(
        <div className={styles.container}>
			<div className={styles.menu}>
				<div className={styles.logo}>
					<Image src="images/logo.svg" alt="logo" width={119} height={35} />
				</div>
				<div className={styles.home}>
					<Image src="images/home.svg" alt="home" width={14} height={14} />
					<p className={styles.homeText}>Home</p>
				</div>
				<div className={styles.search}>
					<Image src="images/search.svg" alt="search" width={14} height={14} />
					<p className={styles.searchText}>Search</p>
				</div>
				<div className={styles.library}>
					<Image src="images/library.svg" alt="library" width={14} height={14} />
					<p className={styles.libraryText}>Your Library</p>
				</div>
				<div className={styles.plus}>
					<Image src="images/plus.svg" alt="create" width={14} height={14} />
					<p className={styles.plusText}>Create Playlist</p>
				</div>
				<div className={styles.like}>
					<Image src="images/like.svg" alt="profile" width={14} height={14} />
					<p className={styles.likeText}>Liked Songs</p>
				</div>

			</div>
			<div className={styles.footer}>

				<div className={styles.subTexts}>
					<div className={styles.firstRow}>
						<p className={styles.subText}>Legal</p>
						<p className={styles.subText}>Privacy Center</p>
						<p className={styles.subText}>Privacy Policy</p>
					</div>
					<div className={styles.secondRow}>
						<p className={styles.subText}>Cookies</p>
						<p className={styles.subText}>About</p>
						<p className={styles.subText}>Ads</p>
					</div>
						
				</div>
				
				<div className={styles.button}>
					<Image src="images/world.svg" alt="usa" width={14} height={14} />
					<p className={styles.buttonText}>English</p>
				</div>
			
			</div>
		</div>
    )
}
export default Menu;