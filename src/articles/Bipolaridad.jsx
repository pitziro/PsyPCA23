import SeoHelmet from '../components/seo/seo'
import styles from './article.module.css'

const Bipolaridad = () => {
	return (
		<>
			<SeoHelmet
				title="Perspectivas | Bipolaridad"
				descContent="Desmitificando el transtorno Bipolaridad "
			/>
			<div className={styles.articleContainer}>
				<p className={styles.title}>
					Desmintiendo la Bipolaridad: ¿Realmente Entendemos lo que Es?
				</p>
				<section className={styles.articleContent}>
					<p>
						<strong>
							¿Cuántas veces hemos dicho: "eres un bipolar” solo porque
							alguien estaba feliz a los minutos molesto?{' '}
						</strong>{' '}
						En la vida diaria solemos usar términos de salud mental para
						describir cómo nos sentimos, pero esto puede llevar a
						malentendidos, especialmente sobre trastornos complejos como
						el trastorno bipolar. En Perspectiva, queremos ayudarte a
						entender mejor esta condición, derribar mitos y fomentar una
						comprensión más empática y fundamentada.
					</p>
				</section>

				<section className={styles.articleSection}>
					<div>
						<p className={styles.subtitle}>
							¿Qué es realmente el trastorno bipolar?
						</p>
						<p className={styles.articleParragraph}>
							Tal vez te preguntas: ¿Acaso no es simplemente cambiar de
							ánimo rápidamente? En realidad, el trastorno bipolar va
							mucho más allá. Esta condición afecta el estado de ánimo de
							una persona en ciclos más prolongados, alternando entre
							períodos de manía (o hipomanía) y depresión, que pueden
							durar semanas o incluso meses. Esto significa que alguien
							puede sentirse en la cima del mundo un mes y caer en una
							profunda tristeza al siguiente, sin razón aparente. ¿Te
							sorprende?
						</p>
					</div>
					<img
						src="/img/articles/bipolar_1.png"
						alt="bipolar1"
						className={styles.paragraphImg}
					/>
				</section>

				<p className={styles.subtitle}>
					Mito 1: "Las personas bipolares cambian de ánimo constantemente"
				</p>

				<section className={styles.articleSectionReverse}>
					<p className={styles.articleParragraph}>
						¿Alguna vez pensaste que el trastorno bipolar es sinónimo de
						cambios de humor bruscos? Este es uno de los conceptos
						erróneos más comunes. El trastorno bipolar no se trata de
						cambios de humor repentinos de un momento a otro, sino de
						episodios definidos y duraderos. Según el Manual Diagnóstico y
						Estadístico de los Trastornos Mentales (DSM-5), los episodios
						maníacos duran al menos una semana, mientras que los
						depresivos duran al menos dos. Esto es muy diferente de los
						cambios emocionales que todos experimentamos en el día a día.
					</p>
					<img
						src="/img/articles/bipolar_2.png"
						alt="bipolar2"
						className={styles.paragraphImg}
					/>
				</section>

				<p className={styles.subtitle}>
					Mito 2: "Las personas con trastorno bipolar son peligrosas"
				</p>

				<section className={styles.articleSection}>
					<p className={styles.articleParragraph}>
						¿Te has preguntado si la bipolaridad está relacionada con la
						violencia? Este es un estereotipo dañino. Las personas con
						trastorno bipolar no son inherentemente agresivas o
						peligrosas. De hecho, el Instituto Nacional de Salud Mental
						(NIMH) enfatiza que los síntomas no incluyen violencia. Los
						episodios de manía pueden causar impulsividad, pero esto no
						convierte a alguien en peligroso. Es importante entender y
						apoyar, no temer ni estigmatizar.
					</p>
					<img
						src="/img/articles/bipolar_3.png"
						alt="bipolar3"
						className={styles.paragraphImg}
					/>
				</section>

				<section>
					<p className={styles.subtitle}> Reflexión: </p>
					<p className={styles.articleParragraph}>
						<strong>
							¿Te has dado cuenta de que si existen mitos sobre el
							trastorno bipolar?
						</strong>
					</p>
					<p
						className={styles.articleParragraph}
						style={{ marginBlock: '15px' }}
					>
						Si te identificaste con algo de lo que mencionamos, siéntete
						libre de compartir tu proceso; esta siempre será una
						plataforma segura para todos. En Perspectivas, nos
						comprometemos a brindar un espacio donde todos puedan
						expresarse sin temor y encontrar apoyo.
					</p>
					<p>
						Si necesitas ayuda psicológica profesional,
						<strong>
							no dudes en acudir a nuestra sección de psicólogos.
						</strong>
						Ahí encontrarás al profesional perfecto para acompañarte en tu
						camino hacia el bienestar.
					</p>
					<p
						className={styles.articleParragraph}
						style={{ marginBlock: '15px' }}
					>
						¿Y tú? ¿Cómo ha sido tu experiencia viviendo con ansiedad o
						apoyando a alguien con un diagnóstico? Cuéntanos en los
						comentarios y únete a nuestra comunidad de apoyo y
						comprensión.
					</p>
				</section>
			</div>
		</>
	)
}

export default Bipolaridad
