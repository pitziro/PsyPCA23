import React from 'react';
import cStyles from './Consejeria.module.css';

export default function Consejeria() {
	return (
		<div className={cStyles.ConsejeriaMain}>
			<section>
				<div className={cStyles.consejImg}></div>
			</section>

			<section className={cStyles.psicoTagName}>
				<h2> Consejería </h2>
			</section>

			<section>
				<p className={cStyles.consejDesc}>
					La orientación y consejería psicológica es un proceso dirigido a la
					atención oportuna de problemas psicológicos de baja complejidad. Suele
					ser un primer contacto con el paciente. Los casos más comunes son:
					auto-control, solución de problemas, control del estrés y manejo de la
					crisis.
				</p>
			</section>

			<section></section>
		</div>
	);
}
