//TODO: Generar un JSON para esto

import sStyle from './Servicios.module.css';
import ServiceCard from './ServiceCard';

import servicios from '../data/serviciosData.json';

export default function Servicios() {
	return (
		<div className={sStyle.catalogo}>
			<section id='psicoterapia' className={sStyle.cat_subtitle}>
				<h3> Psicoterapia </h3>
				{servicios
					.filter((s) => s.agrupacion === 'psicoterapia')
					.map((x) => (
						<ServiceCard key={x.id} serv={x} />
					))}
			</section>

			<section id='consejeria' className={sStyle.cat_subtitle}>
				<h3> Consejería </h3>
				{servicios
					.filter((s) => s.agrupacion === 'consejeria')
					.map((x) => (
						<ServiceCard key={x.id} serv={x} />
					))}
			</section>

			<section id='evaluacion' className={sStyle.cat_subtitle}>
				<h3> Evaluación </h3>
				{servicios
					.filter((s) => s.agrupacion === 'evaluacion')
					.map((x) => (
						<ServiceCard key={x.id} serv={x} />
					))}
			</section>

			<section id='taller' className={sStyle.cat_subtitle}>
				<h3> Talleres </h3>
				{servicios
					.filter((s) => s.agrupacion === 'taller')
					.map((x) => (
						<ServiceCard key={x.id} serv={x} />
					))}
			</section>

			<section id='certificado' className={sStyle.cat_subtitle}>
				<h3> Certificados </h3>
				{servicios
					.filter((s) => s.agrupacion === 'certificado')
					.map((x) => (
						<ServiceCard key={x.id} serv={x} />
					))}
			</section>
		</div>
	);
}
