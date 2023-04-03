import fStyles from './Footer.module.css';

import { FacebookTwoTone, Instagram, LinkedIn } from '@mui/icons-material';

export default function Footer() {
	return (
		<div className={fStyles.zona_bot}>
			<div className={fStyles.sec_logo}>
				<img alt='logo_completo' src='/img/00_LOGO-SIN-FONDO_r.png' />
			</div>

			<div className={fStyles.sec_dir}>
				<p>
					Dirección: <br />
					Av. Las Artes Norte 343 , San Borja
					<br />
					<br />
					Teléfono:
					<br />
					345 454 33 334 44. 33
				</p>
			</div>

			<div className={fStyles.sec_redes}>
				<p>
					Atención de consultas: <br />
					+99 433 4455
					<br />
					<br />
					Siguenos en redes: <br />
					<FacebookTwoTone />
					<Instagram />
					<LinkedIn />
				</p>
			</div>
		</div>
	);
}
