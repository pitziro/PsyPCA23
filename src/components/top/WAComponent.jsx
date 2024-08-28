import mstyle from './Navbar.module.css'
import whatsappColorLogoSVG from '../../assets/svg/whatsappColorLogo.svg'
import whatsappDarkLogoSVG from '../../assets/svg/whatsappDarkLogo.svg'

import { CONST_LINK_WHATSAPP } from '../../utils/constants'
import { Link } from 'react-router-dom'

const WAComponent = () => {
	const handleWAbtn = () => {
		window.open(CONST_LINK_WHATSAPP, '_blank')
	}

	console.log('WA Comp rendered')

	return (
		<>
			<div className={mstyle.btnContainer}>
				<button
					className={mstyle.combutton}
					type="button"
					onClick={handleWAbtn}
				>
					¿Conversamos?&nbsp;&nbsp;
					<img alt="whatsapp" src={whatsappColorLogoSVG} />
				</button>
			</div>

			<div className={mstyle.iconContainer}>
				<Link to={CONST_LINK_WHATSAPP} target="_blank">
					<img alt="whatsapp" src={whatsappDarkLogoSVG} />
				</Link>
			</div>
		</>
	)
}

export default WAComponent
