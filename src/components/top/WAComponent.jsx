import { Link } from 'react-router-dom'
import { memo } from 'react'
import mstyle from './Navbar.module.css'
import whatsappColorLogoSVG from '../../assets/svg/whatsappColorLogo.svg'
import whatsappDarkLogoSVG from '../../assets/svg/whatsappDarkLogo.svg'

import { CONST_LINK_WHATSAPP } from '../../utils/constants'

const WAComponent = () => {
	const handleWAbtn = () => {
		window.open(CONST_LINK_WHATSAPP, '_blank')
	}

	// console.log('WA Comp rendered')

	return (
		<div className={mstyle.btnContainer}>
			<div>
				<button
					className={mstyle.combutton}
					type="button"
					onClick={handleWAbtn}
				>
					&nbsp;Escríbenos&nbsp;
					<img alt="whatsapp" src={whatsappColorLogoSVG} />
				</button>
			</div>

			<div className={mstyle.iconContainer}>
				<Link to={CONST_LINK_WHATSAPP} target="_blank">
					<img alt="whatsapp" src={whatsappDarkLogoSVG} />
				</Link>
			</div>
		</div>
	)
}

export default memo(WAComponent)
