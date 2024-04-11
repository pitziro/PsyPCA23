import {
	CONST_ADDRESS,
	CONST_LINK_FACEBOOK,
	CONST_LINK_INSTAGRAM,
	CONST_LINK_LINKEDIN,
	CONST_PHONE_NUMBER,
} from '../../utils/constants';
import fStyles from './Footer.module.css';

import instagramSVG from '../../assets/svg/instagramLogo.svg';
import facebookSVG from '../../assets/svg/facebookLogo.svg';
import linkedinSVG from '../../assets/svg/linkedinLogo.svg';
import MapsApi from '../../utils/MapsApi';

export default function Footer() {
	return (
		<div className={fStyles.zona_bot}>
			<img alt='logo_completo' src='/img/00_LOGO-SIN-FONDO_r.png' />

			<div className={fStyles.sec_redes}>
				<p>
					Atención de consultas: <br />
					{CONST_PHONE_NUMBER}
				</p>
				<p>
					Siguenos en redes: <br />
					<a href={CONST_LINK_FACEBOOK} target='_blank'>
						<img src={facebookSVG} alt='facebook' />
					</a>
					<a href={CONST_LINK_INSTAGRAM} target='_blank'>
						<img src={instagramSVG} alt='instagram' />
					</a>
					<a href={CONST_LINK_LINKEDIN} target='_blank'>
						<img src={linkedinSVG} alt='linkedin' />
					</a>
				</p>
				<p>
					Marca Registrada
					<br />
					RUC: 20610023810
					<br />
					@Lima, Perú 2022
				</p>
			</div>

			<div className={fStyles.sec_dir}>
				<p>
					Dirección: <br />
					{CONST_ADDRESS}
				</p>
				<div className={fStyles.sec_dir_map}>
					<MapsApi className={fStyles.sec_dir_map} />
				</div>
			</div>
		</div>
	);
}
