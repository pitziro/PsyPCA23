import { VideoPlayer } from '../components/main/VideoPlayer'
import pStyle from './Equipo.module.css'
import Player from './Player'

import SeoHelmet from '../components/seo/seo'
import equipo from '../data/especialistas.json'

function Equipo() {
	return (
		<div>
			<SeoHelmet
				title="Perspectivas | Especialistas"
				descContent="Conoce a nuestro personal especializado para darte una nueva perspectiva de las cosas."
			/>
			<section className={pStyle.pIntro}>
				<VideoPlayer />
				<div className={pStyle.pIntroText}>
					<p className={pStyle.pIntroTitle}>¡CONÓCENOS!</p>
					<p>
						Conoce al equipo que estará contigo en cada paso de tu camino.
						En este video, nuestros especialistas se presentan para que
						descubras quiénes somos y cómo trabajamos para ayudarte. Cada
						uno aporta su experiencia y vocación para brindarte el mejor
						acompañamiento.
					</p>
				</div>
			</section>

			<section className={pStyle.p_especialistas}> Especialistas</section>

			<section className={pStyle.p_team}>
				{equipo.map(player => (
					<Player key={player.id} player={player} />
				))}
			</section>
		</div>
	)
}

export default Equipo
