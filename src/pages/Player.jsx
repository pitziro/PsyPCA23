import pStyle from './Equipo.module.css'

export default function Player({ player }) {
	return (
		<div className={pStyle.p_card}>
			<img src={player.ruta} alt="Avatar" loading="lazy" />
			<h3>{player.nombre}</h3>
			<p className={pStyle.desc}>{player.desc}</p>
		</div>
	)
}
