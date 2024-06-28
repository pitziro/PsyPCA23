import React from 'react'
import mStyles from './Navbar.module.css'

import CloseMenu from '../top/CloseMenu'
import menuIcon from '../../assets/svg/menuIcon.svg'
import crossIcon from '../../assets/svg/crossIcon.svg'

function Mobile({ fClick }) {
	let { barOpened, handleClick } = fClick

	return (
		<div className={mStyles.mobileMenu}>
			{!barOpened ? (
				<img src={menuIcon} alt="menu" onClick={handleClick} />
			) : (
				<CloseMenu onClick={handleClick} />
			)}
		</div>
	)
}

export default Mobile
