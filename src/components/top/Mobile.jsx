import mStyles from './Navbar.module.css'

import menuIcon from '../../assets/svg/menuIcon.svg'
import CloseMenu from '../top/CloseMenu'
// import crossIcon from '../../assets/svg/crossIcon.svg'
// import HamButton from '../top/HamButton'

function Mobile({ fClick }) {
	const { sideBarOpened, handleSideClick } = fClick

	console.log('(2) EstadoEnMobile: ', sideBarOpened)

	return (
		// <div className={mStyles.mobileMenu}>
		// 	<img
		// 		src={sideBarOpened ? crossIcon : menuIcon}
		// 		onClick={handleSideClick}
		// 	/>
		// </div>

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
