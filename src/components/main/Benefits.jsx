import wBenefit from '../../pages/Welcome.module.css'

import services from '../../../src/assets/svg/services.svg'
import quality from '../../../src/assets/svg/services.svg'
import efficiency from '../../../src/assets/svg/services.svg'

const Benefits = () => {
	return (
		<>
			<p className={wBenefit.wSectionTitle}>
				¿Qué beneficios tiene hacer terapia?
			</p>

			<div className={wBenefit.benefitContainer}>
				<div className={wBenefit.benefitContent}>
					<img
						src={quality}
						alt="benefits"
						className={wBenefit.benefitImg}
					/>
					<p className={wBenefit.benefitDesc}>Atencion de Calidad </p>
				</div>

				<div className={wBenefit.benefitContent}>
					<img
						src={efficiency}
						alt="benefits"
						className={wBenefit.benefitImg}
					/>
					<p className={wBenefit.benefitDesc}>Servicios Eficientes</p>
				</div>

				<div className={wBenefit.benefitContent}>
					<img
						src={services}
						alt="benefits"
						className={wBenefit.benefitImg}
					/>
					<p className={wBenefit.benefitDesc}>
						Variedad de especialidades
					</p>
				</div>
			</div>
		</>
	)
}

export default Benefits
