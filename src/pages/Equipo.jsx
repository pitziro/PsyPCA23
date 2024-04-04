//TODO: crear un JSON Para los doctores

import Player from './Player';
import pStyle from './Equipo.module.css';

export default function Equipo() {
	const equipo = [
		{
			id: 1,
			nombre: 'Santiago Sarmiento',
			ruta: '/img/team/20_equipo_santiago.webp',
			desc: `Licenciado de la Universidad Peruana de Ciencias Aplicadas (UPC) en el 2018.  Máster en Psicología Clínica y de la Salud por la universidad CEU San Pablo – España. Posgrado en Psicología Cognitivo Conductual y TREC en la Universidad Continental. Posgrado en Terapia de Pareja y Familia por el Institute of Medicine and Psychology y la Universidad de Piura. Ponente y tallerista de habilidades socioemocionales en niños, adolescentes y adultos; como también con cargos administrativos y gerenciales.
            Experiencia clínica durante más de 5 años en práctica privada y en instituciones públicas y privadas a nivel nacional.
            Fundador de “Perspectivas – Centro de Abordaje Psicológico”; centro dedicado a la prevención, promoción e intervención de la salud mental e integral.`,
		},
		{
			id: 4,
			nombre: 'Stephany Sarmiento',
			ruta: '/img/team/20_equipo_tepy.webp',
			desc: `Licenciada por la Universidad Peruana de Ciencias Aplicadas (UPC). Cuenta con un Máster en Psicologia Clinica y de la Salud por la universidad CEU San Pablo- España. Psicoterapeuta especializada en Terapia Cognitivo Conductual.
            Se ha desenvuelto en ambientes clínicos y hospitalarios, realizando acompañamiento a niños y adolescentes dentro de una clínica privada bajo el programa Emergencia Pedriátrica. 
            Experiencia clínica en consultorio privado por más de 5 años, en los que se ha desenvuelto trabajando con niños, adolescentes, adultos y parejas.`,
		},
		{
			id: 3,
			nombre: 'Kiara Díaz',
			ruta: '/img/team/20_equipo_Kiara.webp',
			desc: `Licenciada en psicología por la universidad de San Martín de Porres, con experiencia en el ámbito clínico y educativo, asimismo, como docente de habilidades blandas. Cuenta con formación en terapia Dialéctica Comportamental y terapia Cognitivo Conductual. Estudios de lengua de señas básica, diseño instruccional e intervención en riesgo suicida. Se desempeña brindando acompañamiento terapéutico y como psicóloga en una universidad cumpliendo las funciones de consejerías psicológicas, charlas, talleres grupales, prevención e intervención en distintos temas (inclusión, prevención suicidad, discapacidad, vulnerabilidad, control de impulsos, ansiedad, depresión, relaciones de pareja, entre otros)`,
		},
		{
			id: 2,
			nombre: 'Sharon Sosa',
			ruta: '/img/team/20_equipo_Sharon.webp',
			desc: `Psicóloga especializada en la creación y ejecución de proyectos de salud mental. Terapeuta de adolescentes, jóvenes, parejas y padres de familia. Licenciada en Psicología Clínica por la Universidad de Ciencias Aplicadas (UPC). Maestría en Psicología de la Salud y Estilos de Vida de la UPC. Certificación en Terapia de Aceptación y Compromiso (ACT).  Especializada en modificación de conducta y en trabajo con adolescentes.  Diplomado en Programación Neurolingüistica: Desarrollo de Cambio y Aprendizaje.`,
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
