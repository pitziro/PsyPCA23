import {
	CONST_ADDRESS,
	CONST_LINK_INSTAGRAM,
	CONST_LINK_TIKTOK,
	CONST_PHONE_NUMBER,
} from '../../utils/constants'

import instagramSVG from '../../assets/svg/iglogo-whitebg.svg'
import tiktokSVG from '../../assets/svg/tiktoklogo-whitebg.svg'
// import MapsApi from '../../utils/MapsApi'

import fStyles from './Footer.module.css'

export default function Footer() {
	return (
		<div className={fStyles.zona_bot}>
			<img alt="logo_completo" src="/img/00_LOGO-SIN-FONDO_r.png" />

			<div className={fStyles.sec_redes}>
				<p>
					Atención de consultas: <br />
					{CONST_PHONE_NUMBER}
				</p>
				<p>
					Siguenos en redes: <br />
					<a href={CONST_LINK_INSTAGRAM} target="_blank" rel="noreferrer">
						<img src={instagramSVG} alt="instagram" />
					</a>
					<a href={CONST_LINK_TIKTOK} target="_blank" rel="noreferrer">
						<img src={tiktokSVG} alt="tiktok" />
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
				{/* <div className={fStyles.sec_dir_map}>
					<MapsApi className={fStyles.sec_dir_map} />
				</div> */}
			</div>
		</div>
	)
}
