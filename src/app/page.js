import styles from './page.module.css'
import Menu from './components/menu'
import React from 'react'
import Header from './components/header'
import Songs from './components/songs'
import classcat from 'classcat'


const Home = () => {
	return (
	  <div className={styles.container}>
		<div className={styles.col}>
		  <Menu />
		</div>
		<div className={classcat([styles.col, styles.flex])}>
		  <Header />
		  <div className={styles.scrollable}>
			<Songs />
		  </div>
		</div>
	  </div>
	);
  };
export default Home;  



