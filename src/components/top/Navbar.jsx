import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import instagramSVG from '../../assets/svg/instagramLogo.svg';
import facebookSVG from '../../assets/svg/facebookLogo.svg';
import whatsappColorLogoSVG from '../../assets/svg/whatsappColorLogo.svg';
import whatsappDarkLogoSVG from '../../assets/svg/whatsappDarkLogo.svg';

import mstyle from './Navbar.module.css';
import aStyle from '../../App.module.css';

import NavItem from './NavItem';
import Mobile from './Mobile';

import myitems from '../../data/navbarData.json';
import {
	CONST_EMAIL_CONTACTO,
	CONST_LINK_FACEBOOK,
	CONST_LINK_INSTAGRAM,
	CONST_LINK_WHATSAPP,
	CONST_PHONE_NUMBER,
} from '../../utils/constants';

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

	const handleWAbtn = () => {
		window.open(CONST_LINK_WHATSAPP, '_blank');
	};

	return (
		<div className={aStyle.zonatop}>
			<div className={mstyle.topRowOne}>
				<span className={mstyle.spanFono}>
					Llámanos al: {CONST_PHONE_NUMBER}{' '}
				</span>
				<span> {CONST_EMAIL_CONTACTO} </span>
				<span>
					<a href={CONST_LINK_FACEBOOK} target='_blank'>
						<img src={facebookSVG} alt='fb logo' />
					</a>
					<a href={CONST_LINK_INSTAGRAM} target='_blank'>
						<img src={instagramSVG} alt='ig logo' />
					</a>
				</span>
			</div>

			<div className={mstyle.topRowTwo}>
				<section className={mstyle.top_logo}>
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
				</section>

				<nav
					ref={navRef}
					id={mstyle.categorybar}
					className={barOpened ? `${mstyle.show}` : ''}
				>
					{myitems.map((item) => (
						<NavItem key={item.id} {...{ item, handleClick, barOpened }} />
					))}
				</nav>

				<div className={mstyle.btnContainer}>
					<button
						className={mstyle.combutton}
						type='button'
						onClick={handleWAbtn}
					>
						¿Conversamos?&nbsp;&nbsp;
						<img alt='whatsapp' src={whatsappColorLogoSVG} />
					</button>
				</div>

				<div className={mstyle.iconContainer}>
					<Link to={CONST_LINK_WHATSAPP} target='_blank'>
						<img alt='whatsapp' src={whatsappDarkLogoSVG} />
					</Link>
				</div>

				<Mobile fClick={{ barOpened, handleClick }} />
			</div>
		</div>
	);
}

export default Navbar;
