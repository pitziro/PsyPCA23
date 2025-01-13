import { Link } from 'react-router-dom'
import pStyle from './Equipo.module.css'
import graduationSVG from '../assets/svg/graduation.svg'
import diplomaSVG from '../assets/svg/diplomas.svg'
import calendarSVG from '../assets/svg/calendar.svg'
import locationSVG from '../assets/svg/location.svg'
import audienceSVG from '../assets/svg/audience.svg'

export default function Player({ player }) {
	return (
		<div className={pStyle.p_card}>
			<div>
				<div className={pStyle.p_imgFrame}>
					<div
						className={pStyle.p_image}
						style={{ backgroundImage: `url(${player.rutaImg})` }}
						alt="Avatar"
						role="img"
						loading="lazy"
					/>
				</div>
				<section className={pStyle.p_cardBtns}>
					<Link to={player.waUrl} className={pStyle.p_cardBtn}>
						Agenda tu cita
					</Link>
				</section>
			</div>

			<div className={pStyle.p_cardContent}>
				<section className={pStyle.p_cardTitle}>
					<p className={pStyle.p_cardTitleName}>{player.nombre}</p>
					<p className={pStyle.p_cardSubTitle}>{player.especialidad}</p>
				</section>
				<div className={pStyle.p_cardDetails}>
					<section className={pStyle.p_cardContentSection}>
						<img src={graduationSVG} alt="educacion" />
						<span className={pStyle.p_cardSubTitle}>
							{player.educacion}
						</span>
					</section>
					<section className={pStyle.p_cardContentSection}>
						<img src={diplomaSVG} alt="certificados" />
						<span className={pStyle.p_cardSubTitle}>
							{player.tecnica}
						</span>
					</section>
					<section className={pStyle.p_cardContentSection}>
						<img src={audienceSVG} alt="Especilidad" />
						<span className={pStyle.p_cardSubTitle}>
							{player.audiencia}
						</span>
					</section>
					<section className={pStyle.p_cardContentSection}>
						<img src={calendarSVG} alt="horario" />
						<span className={pStyle.p_cardSubTitle}>
							{player.horario}
						</span>
					</section>
					<section className={pStyle.p_cardContentSection}>
						<img src={locationSVG} alt="ubicacion" />
						<span className={pStyle.p_cardSubTitle}>
							{player.modalidad}
						</span>
					</section>
				</div>
			</div>
		</div>
	)
}
