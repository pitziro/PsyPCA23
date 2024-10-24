import pStyle from './Equipo.module.css'

export default function Player({ player }) {
	return (
		<div className={pStyle.p_card}>
			<p className={pStyle.p_title}>{player.nombre}</p>
			<div
				className={pStyle.p_image}
				style={{ backgroundImage: `url(${player.ruta})` }}
				alt="Avatar"
				role="img"
				loading="lazy"
			/>
			<p className={pStyle.desc}>{player.desc}</p>
		</div>
	)
}
