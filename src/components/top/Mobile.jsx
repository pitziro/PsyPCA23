import mStyles from './Navbar.module.css'

import menuIcon from '../../assets/svg/menuIcon.svg'
import CloseMenu from '../top/CloseMenu'
// import crossIcon from '../../assets/svg/crossIcon.svg'
// import HamButton from '../top/HamButton'

function Mobile({ fClick }) {
	const { sideBarOpened, handleSideClick } = fClick

	// por alguna razon no puedo usar 2 imagenes o 2 componentes
	// al hacerlo combinado funciona sin problemas

	return (
		<div className={mStyles.mobileMenu}>
			{!sideBarOpened ? (
				<img src={menuIcon} onClick={handleSideClick} />
			) : (
				<CloseMenu onClick={handleSideClick} />
			)}
		</div>
	)
}

export default Mobile
