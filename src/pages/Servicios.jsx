import sStyle from './Servicios.module.css'
import ServiceCard from './ServiceCard'
import servicios from '../data/serviciosData.json'
import SeoHelmet from '../components/seo/seo'

function Servicios() {
	return (
		<section className={sStyle.catalogo}>
			<SeoHelmet
				title="Perspectivas | Servicios"
				descContent="Conoce todos nuestros servicios de terapia psicologica para cada necesidad"
			/>

			<div id="psicoterapia" className={sStyle.subCatService}>
				<p className={sStyle.serviceCat}> Psicoterapias </p>
				{servicios
					.filter(s => s.agrupacion === 'psicoterapia')
					.map(x => (
						<ServiceCard key={x.id} serv={x} />
					))}
			</div>

			<div id="consejeria" className={sStyle.subCatService}>
				<p className={sStyle.serviceCat}> Consejerías </p>
				{servicios
					.filter(s => s.agrupacion === 'consejeria')
					.map(x => (
						<ServiceCard key={x.id} serv={x} />
					))}
			</div>

			<div id="evaluacion" className={sStyle.subCatService}>
				<p className={sStyle.serviceCat}> Evaluaciones </p>
				{servicios
					.filter(s => s.agrupacion === 'evaluacion')
					.map(x => (
						<ServiceCard key={x.id} serv={x} />
					))}
			</div>

			<div id="taller" className={sStyle.subCatService}>
				<p className={sStyle.serviceCat}> Talleres </p>
				{servicios
					.filter(s => s.agrupacion === 'taller')
					.map(x => (
						<ServiceCard key={x.id} serv={x} />
					))}
			</div>

			<div id="certificado" className={sStyle.subCatService}>
				<p className={sStyle.serviceCat}> Certificados </p>
				{servicios
					.filter(s => s.agrupacion === 'certificado')
					.map(x => (
						<ServiceCard key={x.id} serv={x} />
					))}
			</div>
		</section>
	)
}

export default Servicios
