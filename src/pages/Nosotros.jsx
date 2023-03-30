import MyCarousel from '../components/main/MyCarousel';
import {
	HandshakeTwoTone,
	Diversity3TwoTone,
	HealthAndSafetyTwoTone,
	GppGoodTwoTone,
	SpaTwoTone,
} from '@mui/icons-material';

import aStyle from '../App.module.css';
import nStyle from './Nosotros.module.css';

export default function Nosotros() {
	return (
		<div className={aStyle.nosotrosdiv}>
			<MyCarousel />

			<div className={nStyle.valoresTagName}>
				<h2> ¿QUIENES SOMOS? </h2>
			</div>

			<div className={nStyle.main_somos_desc}>
				<div className={nStyle.main_somos_desc_one}>
					<p>
						Somos un centro dedicado a la salud mental e integral, nuestro
						objetivo es atender y cuidar las necesidades de las personas a nivel
						nacional e internacional, desde una perspectiva multidisciplinaria.
						<br />
						<br />
						Contamos con un equipo de profesionales altamente calificados para
						brindarles el mejor enfoque orientado a su bienestar. Comprometidos
						a resolver las distintas problemáticas en el momento que más lo
						necesiten.
						<br />
						<br />
						<b>Recordemos, todos tenemos #unaperspectivadiferente</b>
					</p>
				</div>
				<img className={nStyle.main_somos_desc_img} src='/img/logotipo16.png' />
			</div>

			<div className={nStyle.main_somos_obj}>
				<div className={nStyle.obj_mision}>
					<h2> MISIÓN </h2>
					<p>
						<br />
						Perspectivas nace con el propósito de satisfacer y transformar la
						calidad de atención en salud mental a nivel nacional e
						internacional. Nuestro objetivo es la prevención, promoción e
						intervención de la salud mental e integral a fin de mejorar la
						calidad de vida de las personas; comprometidos con la calidad de
						servicio para impactar a más personas.
					</p>
				</div>

				<div className={nStyle.obj_vision}>
					<h2> VISIÓN </h2>
					<p>
						<br />
						Cuidar y valorar la salud mental a nivel nacional e internacional,
						convirtiéndonos en referentes de la atención, calidad y
						profesionalismo.
					</p>
				</div>
			</div>

			<div className={nStyle.valoresTagName}>
				<h2> VALORES </h2>
			</div>

			<div className={nStyle.valores}>
				<div className={nStyle.valorx}>
					<HandshakeTwoTone />
					<p>
						Respeto: por lo que hacemos, por nuestros pacientes, por nuestra
						sociedad y las personas que la componen
					</p>
				</div>

				<div className={nStyle.valorx}>
					<HealthAndSafetyTwoTone />
					<p>
						Vocación de servicio: mostrarnos siempre dispuestos a atender tus
						necesidades y de tus seres queridos.
					</p>
				</div>

				<div className={nStyle.valorx}>
					<GppGoodTwoTone />
					<p>
						Responsabilidad: brindarte una atención de calidad, profesionalismo
						y mejoría en tu bienestar.
					</p>
				</div>

				<div className={nStyle.valorx}>
					<Diversity3TwoTone />
					<p>
						Empatía: entender tus emociones, pensamientos y perspectivas de
						vida.
					</p>
				</div>

				<div className={nStyle.valorx}>
					<SpaTwoTone />
					<p>Integridad: Honestidad y ética en cada atención que brindamos. </p>
				</div>
			</div>
		</div>
	);
}
