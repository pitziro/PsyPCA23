// import MyCarousel from '../components/main/MyCarousel'

import nStyle from './Nosotros.module.css'
import handshakeIcon from '../assets/svg/handshakeIcon.svg'
import compromisoIcon from '../assets/svg/compromisoIcon.svg'
import responsibleIcon from '../assets/svg/responsibleIcon.svg'
import empathyIcon from '../assets/svg/empathyIcon.svg'
import integridadIcon from '../assets/svg/integridadIcon.svg'

function Nosotros() {
	return (
		<div className={nStyle.nosotrosdiv}>
			{/* <MyCarousel /> */}

			<div className={nStyle.valoresTagName}>
				<h1> ¿QUIENES SOMOS? </h1>
			</div>

			<section className={nStyle.main_somos_desc}>
				<div className={nStyle.main_somos_desc_one}>
					<p>
						Somos un centro dedicado a la salud mental e integral, nuestro
						objetivo es atender y cuidar las necesidades de las personas a
						nivel nacional e internacional, desde una perspectiva
						multidisciplinaria.
						<br />
						<br />
						Contamos con un equipo de profesionales altamente calificados
						para brindarles el mejor enfoque orientado a su bienestar.
						Comprometidos a resolver las distintas problemáticas en el
						momento que más lo necesiten.
						<br />
						<br />
						<b>Recordemos, todos tenemos #unaperspectivadiferente</b>
					</p>
				</div>
				<img
					className={nStyle.main_somos_desc_img}
					src="/img/logotipo16.png"
					alt="logo"
				/>
			</section>

			<section className={nStyle.main_somos_obj}>
				<div className={nStyle.obj_mision}>
					<div className={nStyle.obj_title}>
						<img alt="mision" src="/img/40_icon_mision.webp" />
						<h2> MISIÓN </h2>
					</div>
					<p>
						<br />
						Perspectivas nace con el propósito de satisfacer y transformar
						la calidad de atención en salud mental a nivel nacional e
						internacional. Nuestro objetivo es la prevención, promoción e
						intervención de la salud mental e integral a fin de mejorar la
						calidad de vida de las personas; comprometidos con la calidad
						de servicio para impactar a más personas.
					</p>
				</div>

				<div className={nStyle.obj_vision}>
					<div className={nStyle.obj_title}>
						<img alt="mision" src="/img/40_icon_vision.webp" />
						<h2> VISIÓN </h2>
					</div>
					<p>
						<br />
						Cuidar y valorar la salud mental a nivel nacional e
						internacional, convirtiéndonos en referentes de la atención,
						calidad y profesionalismo.
						<br />
						<br />
					</p>
				</div>
			</section>

			<div className={nStyle.valoresTagName}>
				<h2> VALORES </h2>
			</div>

			<section className={nStyle.valores}>
				<div className={nStyle.valorx}>
					<img src={handshakeIcon} alt="respeto" />
					<p>
						<b>Respeto:</b> por lo que hacemos, por nuestros pacientes,
						por nuestra sociedad y las personas que la componen
					</p>
				</div>

				<div className={nStyle.valorx}>
					<img src={compromisoIcon} alt="compromiso" />
					<p>
						<b>Vocación de servicio:</b> mostrarnos siempre dispuestos a
						atender tus necesidades y de tus seres queridos.
					</p>
				</div>

				<div className={nStyle.valorx}>
					<img src={responsibleIcon} alt="responsabilidad" />
					<p>
						<b>Responsabilidad:</b> brindarte una atención de calidad,
						profesionalismo y mejoría en tu bienestar.
					</p>
				</div>

				<div className={nStyle.valorx}>
					<img src={empathyIcon} alt="empatia" />
					<p>
						<b>Empatía:</b> entender tus emociones, pensamientos y
						perspectivas de vida.
					</p>
				</div>

				<div className={nStyle.valorx}>
					<img src={integridadIcon} alt="integridad" />
					<p>
						<b>Integridad:</b> Honestidad y ética en cada atención que
						brindamos.
					</p>
				</div>
			</section>
		</div>
	)
}

export default Nosotros
