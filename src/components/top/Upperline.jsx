import mstyle from './Navbar.module.css'
import instagramSVG from '../../assets/svg/instagramLogo.svg'
import facebookSVG from '../../assets/svg/facebookLogo.svg'

import {
	CONST_EMAIL_CONTACTO,
	CONST_LINK_FACEBOOK,
	CONST_LINK_INSTAGRAM,
	CONST_PHONE_NUMBER,
} from '../../utils/constants'

function Upperline() {
	return (
		<div className={mstyle.topRowOne}>
			<span className={mstyle.spanFono}>
				Llámanos al: {CONST_PHONE_NUMBER}{' '}
			</span>
			<span> {CONST_EMAIL_CONTACTO} </span>
			<span>
				<a href={CONST_LINK_FACEBOOK} target="_blank" rel="noreferrer">
					<img src={facebookSVG} alt="fb logo" />
				</a>
				<a href={CONST_LINK_INSTAGRAM} target="_blank" rel="noreferrer">
					<img src={instagramSVG} alt="ig logo" />
				</a>
			</span>
		</div>
	)
}

export default Upperline
