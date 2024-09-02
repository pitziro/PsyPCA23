import mStyles from './Navbar.module.css'

import menuIcon from '../../assets/svg/menuIcon.svg'
// import CloseMenu from '../top/CloseMenu'
import crossIcon from '../../assets/svg/crossIcon.svg'
// import HamButton from '../top/HamButton'

function Mobile({ fClick }) {
	const { sideBarOpened, handleSideClick } = fClick

	console.log('estadomovile: ', sideBarOpened)

	return (
		<div className={mStyles.mobileMenu}>
			{!sideBarOpened ? (
				<img src={menuIcon} onClick={handleSideClick} />
			) : (
				<img src={crossIcon} onClick={handleSideClick} />
			)}
		</div>
	)
}

export default Mobile
