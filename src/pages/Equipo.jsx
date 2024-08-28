import Player from './Player'
import pStyle from './Equipo.module.css'

import equipo from '../data/especialistas.json'
import SeoHelmet from '../components/seo/seo'

function Equipo() {
	return (
		<div className={pStyle.p_team}>
			<SeoHelmet
				title="Perspectivas | Especialistas"
				descContent="Personal especializado para darte una nueva perspectiva de las cosas."
			/>

			{equipo.map(player => (
				<Player key={player.id} player={player} />
			))}
		</div>
	)
}

export default Equipo
