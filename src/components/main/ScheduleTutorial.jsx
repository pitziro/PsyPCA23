import wAgenda from '../../pages/Welcome.module.css'

import calendarSVG from '../../../src/assets/svg/calendar.svg'
import confirmedSVG from '../../../src/assets/svg/confirmed.svg'
import pickOneSVG from '../../../src/assets/svg/pickone.svg'

const ScheduleTutorial = () => {
	return (
		<div className={wAgenda.agendaContainer}>
			<p className={wAgenda.wSectionTitle}> ¿Cómo agendar una cita?</p>

			<div className={wAgenda.agendaContent}>
				<div className={wAgenda.agendaItem}>
					<img
						src={pickOneSVG}
						alt="escoge"
						className={wAgenda.agendaIcon}
					/>
					<span className={wAgenda.agendaSubtitle}>
						Elige tu psicólogo
					</span>
					<span className={wAgenda.agendaDesc}>
						En la página de especialistas, encontrarás a todos los
						profesionales de nuestro equipo. Selecciona el ideal para ti.
					</span>
				</div>

				<div className={wAgenda.agendaItem}>
					<img
						src={calendarSVG}
						alt="escoge"
						className={wAgenda.agendaIcon}
					/>
					<p className={wAgenda.agendaSubtitle}>Reserva tu cita</p>
					<p className={wAgenda.agendaDesc}>
						Reserva tu cita mediante Whatssapp en la sección contáctanos o
						dando click aquí.
					</p>
				</div>

				<div className={wAgenda.agendaItem}>
					<img
						src={confirmedSVG}
						alt="escoge"
						className={wAgenda.agendaIcon}
					/>
					<p className={wAgenda.agendaSubtitle}> Confirma tu cita</p>
					<p className={wAgenda.agendaDesc}>
						Una vez reservada la cita, te llegará un mensaje donde se
						explicará cómo realizar el pago y el proceso de confirmación.
						¡Tu cita ha sido confirmada!
					</p>
				</div>
			</div>
		</div>
	)
}

export default ScheduleTutorial
