import mStyles from './Navbar.module.css'

import menuIcon from '../../assets/svg/menuIcon.svg'
import CloseMenu from '../top/CloseMenu'

function Mobile({ fClick }) {
	const { sideBarOpened, handleSideClick } = fClick

	return (
		<div className={mStyles.mobileMenu}>
			{!sideBarOpened ? (
				<img src={menuIcon} alt="menu" onClick={handleSideClick} />
			) : (
				<CloseMenu onClick={handleSideClick} />
			)}
		</div>
	)
}

export default Mobile
