import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FacebookTwoTone, Instagram } from '@mui/icons-material';
import { Button } from '@mui/material';

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

	const linkWasap = 'https://wa.link/unpjhx';
	const correoContacto = 'contacto@centroperspectivas.com';

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

	const buttonWhatsappTheme = createTheme({
		palette: {
			primary: {
				main: '#333B4F',
			},
		},
		typography: {
			fontFamily: 'Alga',
			button: {
				textTransform: 'none',
				fontSize: '1.2rem',
			},
		},
	});

	return (
		<div className={aStyle.zonatop}>
			<div className={mstyle.topRowOne}>
				<span className={mstyle.spanFono}>Llámanos al: +51 999 666 333 </span>
				<span> {correoContacto} </span>
				<span>
					<FacebookTwoTone />
					<Instagram />
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

				<ThemeProvider theme={buttonWhatsappTheme}>
					<div className={mstyle.combutton}>
						<Button variant='outlined' href={linkWasap} target='_blank'>
							¿Necesitas ayuda?&nbsp;
							<img alt='whatsapp' src='/img/50_whatstapp_icon.webp' />
						</Button>
					</div>
				</ThemeProvider>

				<Mobile fClick={{ barOpened, handleClick }} />
			</div>
		</div>
	);
}

export default Navbar;
