import { Link } from 'react-router-dom'
import wIntro from '../../pages/Welcome.module.css'

const IntroTeam = () => {
	return (
		<div className={wIntro.introContainer}>
			<div className={wIntro.introContent}>
				<h3 className={wIntro.introTitle}>
					Conoce al equipo detrás de Perspectivas
				</h3>

				<p className={wIntro.introDesc}>
					Profesionales comprometidos con tu bienestar emocional. Descubre
					nuestra misión, valores y cómo trabajamos para brindarte el
					acompañamiento que necesitas dia a dia.
				</p>

				<Link to="/nosotros" className={wIntro.valuesBtn}>
					Conoce al equipo
				</Link>
			</div>

			<img alt="team" src="/img/team/20_landing_equipo.webp" />
		</div>
	)
}

export default IntroTeam
