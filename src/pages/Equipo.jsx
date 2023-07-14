//TODO: crear un JSON Para los doctores

import Player from './Player';
import pStyle from './Equipo.module.css';

export default function Equipo() {
	const equipo = [
		{
			id: 1,
			nombre: 'Santiago Sarmiento',
			ruta: '/img/team/20_equipo_santiago.webp',
			desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            fugiat laudantium deserunt nulla, accusamus perferendis magni?
            Dicta, veniam nihil amet asperiores saepe enim molestias ea
            doloremque unde eaque corporis at?`,
		},
		{
			id: 2,
			nombre: 'Daniela Savila',
			ruta: '/img/team/20_equipo_daniela.webp',
			desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            fugiat laudantium deserunt nulla, accusamus perferendis magni?
            Dicta, veniam nihil amet asperiores saepe enim molestias ea
            doloremque unde eaque corporis at?`,
		},
		{
			id: 3,
			nombre: 'Stephany Sarmiento',
			ruta: '/img/team/20_equipo_daniela.webp',
			desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            fugiat laudantium deserunt nulla, accusamus perferendis magni?
            Dicta, veniam nihil amet asperiores saepe enim molestias ea
            doloremque unde eaque corporis at?`,
		},

		{
			id: 4,
			nombre: 'Ana Rojas',
			ruta: '/img/team/20_equipo_daniela.webp',
			desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            fugiat laudantium deserunt nulla, accusamus perferendis magni?
            Dicta, veniam nihil amet asperiores saepe enim molestias ea
            doloremque unde eaque corporis at?`,
		},
	];

	return (
		<div className={pStyle.p_team}>
			{equipo.map((player) => (
				<Player key={player.id} player={player} />
			))}
		</div>
	);
}
