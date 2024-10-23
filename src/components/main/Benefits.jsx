import wBenefit from '../../pages/Welcome.module.css'

const Benefits = () => {
	return (
		<>
			<p className={wBenefit.wSectionTitle}>
				¿Qué beneficios tiene hacer terapia?
			</p>

			<div className={wBenefit.benefitContainer}>
				<div className={wBenefit.benefitContent}>
					<img
						src="/../src/assets/svg/quality.svg"
						alt="benefits"
						className={wBenefit.benefitImg}
					/>
					<p className={wBenefit.benefitDesc}>Atencion de Calidad </p>
				</div>

				<div className={wBenefit.benefitContent}>
					<img
						src="/../src/assets/svg/efficiency.svg"
						alt="benefits"
						className={wBenefit.benefitImg}
					/>
					<p className={wBenefit.benefitDesc}>Servicios Eficientes</p>
				</div>

				<div className={wBenefit.benefitContent}>
					<img
						src="/../src/assets/svg/services.svg"
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
