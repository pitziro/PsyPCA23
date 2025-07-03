import QAccordion from '../components/main/QAccordion'
import SeoHelmet from '../components/seo/seo'
import questions from '../data/preguntas.json'

import qaStyle from './QndA.module.css'
export default function Preguntas() {
	return (
		<>
			<SeoHelmet
				title="Perspectivas | Q & A"
				descContent="¿Tienes alguna pregunta? Revisa las principales dudas sobre nuestro servicio y los profesionales "
			/>

			<div className={qaStyle.qaContainer}>
				<h1>¿Tienes preguntas?</h1>
				<QAccordion questions={questions} />

				<section className={qaStyle.qaClosing}>
					<span>
						Recuerda que en Perspectivas estamos dispuestos para ayudarte
						en lo que requieras. Comprendemos que cada uno puede tener
						diferentes motivos para llevar terapia y es por ello que
						buscamos hacer que cada sesión y abordaje sea totalmente
						personalizado.
					</span>
					<br />
					<p>
						Creemos que todos tenemos <b>#unaperspectivadiferente.</b>
					</p>
				</section>
			</div>
		</>
	)
}
