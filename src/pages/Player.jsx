import { Link } from 'react-router-dom'
import pStyle from './Equipo.module.css'
import graduationSVG from '../assets/svg/graduation.svg'
import diplomaSVG from '../assets/svg/diplomas.svg'
import calendarSVG from '../assets/svg/calendar.svg'
import locationSVG from '../assets/svg/location.svg'
export default function Player({ player }) {
	return (
		<div className={pStyle.p_card}>
			{/* <p className={pStyle.p_title}>{player.nombre}</p> */}
			<div className={pStyle.p_imgFrame}>
				<div
					className={pStyle.p_image}
					style={{ backgroundImage: `url(${player.rutaImg})` }}
					alt="Avatar"
					role="img"
					loading="lazy"
				/>
			</div>

			<div className={pStyle.p_cardContent}>
				<section className={pStyle.p_cardTitle}>
					<p className={pStyle.p_cardTitleName}>{player.nombre}</p>
					<p className={pStyle.p_cardSubTitle}>{player.especialidad}</p>
				</section>
				<section className={pStyle.p_cardContentSection}>
					<img src={graduationSVG} alt="graduation" />
					<p className={pStyle.p_cardSubTitle}>{player.educacion}</p>
				</section>
				<section className={pStyle.p_cardContentSection}>
					<img src={diplomaSVG} alt="estudios" />
					<p className={pStyle.p_cardSubTitle}>{player.tecnica}</p>
				</section>
				<section className={pStyle.p_cardContentSection}>
					<img src={calendarSVG} alt="horario" />
					<p className={pStyle.p_cardSubTitle}>{player.horario}</p>
				</section>
				<section className={pStyle.p_cardContentSection}>
					<img src={locationSVG} alt="location" />
					<p className={pStyle.p_cardSubTitle}>{player.modalidad}</p>
				</section>

				<section className={pStyle.p_cardBtns}>
					<Link to={player.waUrl} className={pStyle.p_cardBtn}>
						Agenda tu Cita
					</Link>
				</section>
			</div>
		</div>
	)
}
