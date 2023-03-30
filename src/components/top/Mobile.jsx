import React from 'react';
import mStyles from './Navbar.module.css';

import { Menu, Close } from '@mui/icons-material';

function Mobile({ fClick }) {
	let { barOpened, handleClick } = fClick;

	return (
		<div className={mStyles.mobileMenu}>
			{!barOpened ? (
				<Menu className={mStyles.mobileIcon} onClick={handleClick} />
			) : (
				<Close onClick={handleClick} />
			)}
		</div>
	);
}

export default Mobile;
