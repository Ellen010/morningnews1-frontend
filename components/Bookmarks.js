import Head from 'next/head';
import styles from '../styles/Bookmarks.module.css';


function Bookmarks() {
	return (
		<div>
			<Head>
				<title>Morning News - Bookmarks</title>
			</Head>
			<div className={styles.container}>
				<h2>Bookmarks</h2>
				<p>No bookmark</p>
			</div>
		</div>

	);
}

export default Bookmarks;
