import styles from "./songs.module.css"
import Image from "next/image"
import PlayButton from "./playButton"


const Songs = () => {
	return(
		<div className={styles.container}>
			<div className={styles.title}>
				<p className={styles.focus}>Focus</p>
				<p className={styles.show}>Show all</p>
			</div>
			<div className={styles.row}>
				<div className={styles.col}>
					<Image src="/images/img1.png" alt="song1" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>Peaceful Piano</p>
						<p className={styles.songDescription}>Peaceful piano to help you slow down, breathe, and...</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/Img2.png" alt="song2" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>Deep Focus</p>
						<p className={styles.songDescription}>Keep calm and focus with ambient and post-rock music.</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/Img3.png" alt="song3" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>Instrumental Study</p>
						<p className={styles.songDescription}>Focus with soft study music in the background.</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/Img4.png" alt="song3" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>Focus Flow</p>
						<p className={styles.songDescription}>Uptempo instrumental hip hop beats.</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/Img5.png" alt="song3" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>Beats to think to</p>
						<p className={styles.songDescription}>Focus with deep techno and tech house.</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/Img2.png" alt="song2" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>Deep Focus</p>
						<p className={styles.songDescription}>Keep calm and focus with ambient and post-rock music.</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/Img4.png" alt="song3" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>Focus Flow</p>
						<p className={styles.songDescription}>Uptempo instrumental hip hop beats.</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/img1.png" alt="song1" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>Peaceful Piano</p>
						<p className={styles.songDescription}>Peaceful piano to help you slow down, breathe, and...</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/Img5.png" alt="song3" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>Beats to think to</p>
						<p className={styles.songDescription}>Focus with deep techno and tech house.</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/Img2.png" alt="song2" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>Deep Focus</p>
						<p className={styles.songDescription}>Keep calm and focus with ambient and post-rock music.</p>
				</div>
			</div>
			<div className={styles.title}>
				<p className={styles.focus}>Spotify Playlists</p>
				<p className={styles.show}>Show all</p>
			</div>
			<div className={styles.row}>
				<div className={styles.col}>
					<Image src="/images/Img6.png" alt="song3" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>Today’s Top Hits</p>
						<p className={styles.songDescription}>Harry Styles is on top of the Hottest 50!</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/Img7.png" alt="song3" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>RapCaviar</p>
						<p className={styles.songDescription}>New music from Lil Baby, Gucci Mane and DaBaby.</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/Img8.png" alt="song3" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>All Out 2010s</p>
						<p className={styles.songDescription}>The biggest songs of the 2010s.</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/Img9.png" alt="song3" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>Rock Classics</p>
						<p className={styles.songDescription}>Rock legends & epic songs that continue to inspire...</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/Img10.png" alt="song3" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>Chill Hits</p>
						<p className={styles.songDescription}>Kick back to the best new and recent chill hits.</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/Img8.png" alt="song3" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>All Out 2010s</p>
						<p className={styles.songDescription}>The biggest songs of the 2010s.</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/Img6.png" alt="song3" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>Today’s Top Hits</p>
						<p className={styles.songDescription}>Harry Styles is on top of the Hottest 50!</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/Img7.png" alt="song3" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>RapCaviar</p>
						<p className={styles.songDescription}>New music from Lil Baby, Gucci Mane and DaBaby.</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/Img6.png" alt="song3" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>Today’s Top Hits</p>
						<p className={styles.songDescription}>Harry Styles is on top of the Hottest 50!</p>
				</div>
				<div className={styles.col}>
					<Image src="/images/Img8.png" alt="song3" width={149.396} height={149.396} className={styles.image}/>
						<p className={styles.songName}>All Out 2010s</p>
						<p className={styles.songDescription}>The biggest songs of the 2010s.</p>
				</div>

			</div>
		</div>
	)
}

export default Songs;