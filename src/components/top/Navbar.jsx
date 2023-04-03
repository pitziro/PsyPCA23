import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FacebookTwoTone, Instagram } from '@mui/icons-material';

import mstyle from './Navbar.module.css';
import aStyle from '../../App.module.css';

import NavItem from './NavItem';
import Mobile from './Mobile';

import myitems from '../../data/navbarData.json';

function Navbar() {
	const [barOpened, setbarOpened] = useState(false);

	const handleClick = () => {
		setbarOpened((prev) => !prev);
	};

	const navRef = useRef(null);

	useEffect(() => {
		const clickOutside = (evt) => {
			if (navRef.current && !navRef.current.contains(evt.target)) {
				setbarOpened(false);
			}
		};
		document.addEventListener('mousedown', clickOutside);

		return () => {
			document.removeEventListener('mousedown', clickOutside);
		};
	}, [navRef]);

	return (
		<div className={aStyle.zonatop}>
			<div className={mstyle.topRowOne}>
				<span className={mstyle.spanFono}>Llámanos al: +51 999 666 333 </span>
				<span> contacto@centroperspectivas.com </span>
				<span>
					<FacebookTwoTone />
					<Instagram />
				</span>
			</div>

			<div className={mstyle.topRowTwo}>
				<div className={mstyle.top_logo}>
					<Link to='/'>
						<img
							className={mstyle.logo_img}
							src='/img/logotipo16.png'
							title='Home'
							alt='Home'
						/>
						<img
							className={mstyle.logo_letras}
							src='/img/nombre-sin-fondo.png'
							alt='logo_nombre'
						/>
					</Link>
				</div>

				<nav
					ref={navRef}
					id={mstyle.categorybar}
					className={barOpened ? `${mstyle.show}` : `${mstyle.inicial}`}
				>
					{myitems.map((item) => (
						<NavItem key={item.id} {...{ item, handleClick, barOpened }} />
					))}
				</nav>
				<Mobile fClick={{ barOpened, handleClick }} />
			</div>
		</div>
	);
}

export default Navbar;
