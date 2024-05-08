import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'antd';
import Moment from 'react-moment';
import Link from 'next/link';

function Header() {
	const [date, setDate] = useState('2050-11-22T23:59:59');
	const [isModalVisible, setIsModalVisible] = useState(false);

	useEffect(() => {
		setDate(new Date());
	}, []);

	const showModal = () => {
		setIsModalVisible(!isModalVisible);
	};

	const modalContent = (
		<div className={styles.registerContainer}>
			<div className={styles.registerSection}>
				<p>Sign-up</p>
				<input type="text" placeholder="Username" id="signUpUsername" />
				<input type="password" placeholder="Password" id="signUpPassword" />
				<button id="register">Register</button>
			</div>
			<div className={styles.registerSection}>
				<p>Sign-in</p>
				<input type="text" placeholder="Username" id="signInUsername" />
				<input type="password" placeholder="Password" id="signInPassword" />
				<button id="connection">Connect</button>
			</div>
		</div>
	);

	let userSection;
	if (isModalVisible) {
		userSection = <FontAwesomeIcon icon={faXmark} onClick={() => showModal()} className={styles.userSection} />;
	} else {
		userSection = <FontAwesomeIcon icon={faUser} onClick={() => showModal()} className={styles.userSection} />;
	}

	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<Moment className={styles.date} date={date} format="MMM Do YYYY" />
				<h1 className={styles.title}>Morning News</h1>
				{userSection}
			</div>

			<div className={styles.linkContainer}>
				<span className={styles.link}>
				<Link href="/">
					<p>Articles</p>
					</Link>
					</span>
				<span className={styles.link}>
				<Link href="/bookmarks">
					<p>Bookmarks</p>
					</Link>
					</span>
			</div>

			{isModalVisible && <div id="react-modals">
				<Modal getContainer="#react-modals" className={styles.modal} visible={isModalVisible} closable={false} footer={null}>
					{modalContent}
				</Modal>
			</div>}
		</header >
	);
}

export default Header;
