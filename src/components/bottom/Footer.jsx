import {
	CONST_ADDRESS,
	CONST_LINK_FACEBOOK,
	CONST_LINK_INSTAGRAM,
	CONST_LINK_LINKEDIN,
	CONST_PHONE_NUMBER,
} from '../../utils/constants';
import fStyles from './Footer.module.css';

import instagramSVG from '/img/svg/instagramLogo.svg';
import facebookSVG from '/img/svg/facebookLogo.svg';
import linkedinSVG from '/img/svg/linkedinLogo.svg';

export default function Footer() {
	return (
		<div className={fStyles.zona_bot}>
			<img alt='logo_completo' src='/img/00_LOGO-SIN-FONDO_r.png' />

			<div className={fStyles.sec_redes}>
				<p>
					Atención de consultas: <br />
					{CONST_PHONE_NUMBER}
					<br />
					<br />
					<br />
					Siguenos en redes: <br />
					<a href={CONST_LINK_FACEBOOK} target='_blank'>
						<img src={facebookSVG} alt='facebook'></img>
					</a>
					<a href={CONST_LINK_INSTAGRAM} target='_blank'>
						<img src={instagramSVG}></img>
					</a>
					<a href={CONST_LINK_LINKEDIN} target='_blank'>
						<img src={linkedinSVG} alt='linkedin' />
					</a>
				</p>
			</div>

			<div className={fStyles.sec_dir}>
				<p>
					Dirección: <br />
					{CONST_ADDRESS}
				</p>
			</div>
		</div>
	);
}
