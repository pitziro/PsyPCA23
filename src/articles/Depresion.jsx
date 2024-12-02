import SeoHelmet from '../components/seo/seo'
import styles from './article.module.css'

const Depresion = () => {
	return (
		<>
			<SeoHelmet
				title="Perspectivas | Depresión"
				descContent="Comprendiendo qué es la depresión y sus mitos"
			/>
			<div className={styles.articleContainer}>
				<p className={styles.title}>
					Desmintiendo la Depresión: Comprendiendo Qué es y Qué No es
				</p>

				<section className={styles.articleContent}>
					<p>
						<strong>
							¿Cuántas veces hemos dicho: "¡Ay, estoy deprimido!" sin
							realmente saber qué es la depresión?
						</strong>{' '}
						A menudo usamos la palabra "depresión" para describir un mal
						día o una semana difícil, pero la depresión clínica es una
						condición de salud mental compleja y seria que va mucho más
						allá de la tristeza ocasional. En Perspectiva, queremos
						ayudarte a entender mejor qué es realmente la depresión y
						aclarar los mitos que rodean esta condición
					</p>
				</section>

				<p className={styles.subtitle}>¿Qué es realmente la depresión?</p>
				<section className={styles.articleSection}>
					<div>
						<p className={styles.articleParragraph}>
							¿Sabías que la depresión es mucho más que "estar triste"?
							La depresión clínica es un trastorno que afecta no solo el
							estado de ánimo, sino también los pensamientos, el
							comportamiento y la vida cotidiana. La depresión implica un
							conjunto de síntomas que duran al menos dos semanas e
							interfieren significativamente en la vida diaria. Los
							sentimientos de vacío, desesperanza y pérdida de interés
							son persistentes y no suelen mejorar con el tiempo o
							simplemente "echándole ganas".
						</p>
					</div>
					<img
						src="/img/articles/depresion_1.png"
						alt="depresion1"
						className={styles.paragraphImg}
					/>
				</section>

				<p className={styles.subtitle}>
					Mito 1: "La depresión es solo estar triste"
				</p>

				<section className={styles.articleSectionReverse}>
					<p className={styles.articleParragraph}>
						¿Cuántas veces has escuchado que la depresión es solo
						tristeza? En realidad, la depresión es una condición mucho más
						compleja. Las personas con depresión a menudo experimentan una
						combinación de síntomas emocionales, físicos y cognitivos que
						afectan su vida diaria de manera profunda. Además de la
						tristeza, pueden sentir apatía, insomnio o incluso síntomas
						físicos como dolores inexplicables. Según la Asociación
						Americana de Psiquiatría (APA), la tristeza es solo uno de los
						muchos síntomas, y no todas las personas con depresión se
						sienten tristes.
					</p>
					<img
						src="/img/articles/depresion_2.png"
						alt="depresion2"
						className={styles.paragraphImg}
					/>
				</section>

				<p className={styles.subtitle}>
					Mito 2: "La depresión se cura con actitud positiva"
				</p>

				<section className={styles.articleSection}>
					<p className={styles.articleParragraph}>
						¿Has escuchado que “pensar en positivo” cura la depresión?
						Aunque un enfoque optimista puede ayudar en situaciones
						difíciles, la depresión clínica es una condición médica que no
						desaparece con fuerza de voluntad. Como indican estudios del
						Instituto Nacional de Salud Mental (NIMH), la depresión
						requiere un tratamiento estructurado, que puede incluir
						terapia psicológica y, en algunos casos, medicación. La ayuda
						profesional es fundamental para el manejo efectivo de esta
						condición.
					</p>
					<img
						src="/img/articles/depresion_3.png"
						alt="depresion3"
						className={styles.paragraphImg}
					/>
				</section>

				<section>
					<p className={styles.subtitle}> Reflexión: </p>

					<p
						className={styles.articleParragraph}
						style={{ marginBlock: '15px' }}
					>
						La depresión es una condición compleja que merece comprensión,
						no juicios ni mitos. En Perspectiva, queremos que sepas que no
						estás solo y que tu proceso importa. Si necesitas orientación
						profesional, en nuestra sección de psicólogos encontrarás
						apoyo y acompañamiento en este camino.
					</p>
					<p
						className={styles.articleParragraph}
						style={{ marginBottom: '15px' }}
					>
						<strong>
							¿Te has enfrentado a alguno de estos mitos sobre la
							depresión?
						</strong>
						Cuéntanos tu experiencia en los comentarios y comparte tus
						pensamientos. Queremos escucharte y aprender juntos.
					</p>
				</section>
			</div>
		</>
	)
}

export default Depresion
