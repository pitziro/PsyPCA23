import sStyle from './Servicios.module.css'
import ServiceCard from './ServiceCard'
import servicios from '../data/serviciosData.json'
import SeoHelmet from '../components/seo/seo'

function Servicios() {
	return (
		<div className={sStyle.catalogo}>
			<SeoHelmet
				title="Perspectivas | Servicios"
				descContent="Servicios de terapida psicologica para cada necesidad"
			/>

			<section id="psicoterapia" className={sStyle.cat_subtitle}>
				<p className={sStyle.serviceCat}> Psicoterapia </p>
				{servicios
					.filter(s => s.agrupacion === 'psicoterapia')
					.map(x => (
						<ServiceCard key={x.id} serv={x} />
					))}
			</section>

			<section id="consejeria" className={sStyle.cat_subtitle}>
				<p className={sStyle.serviceCat}> Consejería </p>
				{servicios
					.filter(s => s.agrupacion === 'consejeria')
					.map(x => (
						<ServiceCard key={x.id} serv={x} />
					))}
			</section>

			<section id="evaluacion" className={sStyle.cat_subtitle}>
				<p className={sStyle.serviceCat}> Evaluación </p>
				{servicios
					.filter(s => s.agrupacion === 'evaluacion')
					.map(x => (
						<ServiceCard key={x.id} serv={x} />
					))}
			</section>

			<section id="taller" className={sStyle.cat_subtitle}>
				<p className={sStyle.serviceCat}> Talleres </p>
				{servicios
					.filter(s => s.agrupacion === 'taller')
					.map(x => (
						<ServiceCard key={x.id} serv={x} />
					))}
			</section>

			<section id="certificado" className={sStyle.cat_subtitle}>
				<p className={sStyle.serviceCat}> Certificados </p>
				{servicios
					.filter(s => s.agrupacion === 'certificado')
					.map(x => (
						<ServiceCard key={x.id} serv={x} />
					))}
			</section>
		</div>
	)
}

export default Servicios
