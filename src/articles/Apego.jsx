import SeoHelmet from '../components/seo/seo'
import styles from './article.module.css'

const Apego = () => {
	return (
		<>
			<SeoHelmet
				title="Perspectivas | Apego"
				descContent="Conoce los tipos de apego y cómo afectan nuestras relaciones"
			/>
			<div className={styles.articleContainer}>
				<p className={styles.title}>¿Ya sabes que tipo de apego tienes?</p>

				<p className={styles.subtitle}>
					¿Qué son los tipos de apego y cómo afectan nuestras relaciones?
				</p>

				<section className={styles.articleContent}>
					<p>
						¿Alguna vez te has preguntado por qué algunas relaciones
						fluyen naturalmente mientras que otras parecen llenas de
						altibajos? Muchas de nuestras reacciones emocionales en
						relaciones amorosas, de amistad o familiares están ligadas a
						nuestro tipo de apego, una teoría en psicología que explica
						cómo las personas tienden a conectarse con los demás desde la
						infancia hasta la adultez. Aquí en Perspectivas, queremos
						ayudarte a entender cómo funciona el apego y cómo puede
						influir en tu vida social y emocional.
					</p>
				</section>

				<p className={styles.subtitle}>¿Qué es el apego?</p>

				<section className={styles.articleContent}>
					<p>
						El apego es el vínculo emocional profundo que establecemos con
						las personas importantes en nuestra vida, comenzando con
						nuestros cuidadores en la infancia. Según la teoría del apego,
						propuesta por el psicólogo John Bowlby, nuestras experiencias
						tempranas con nuestros padres o cuidadores influyen en cómo
						entendemos y formamos relaciones en la adultez.
					</p>
					<p style={{ marginTop: '15px' }}>
						Existen cuatro tipos principales de apego: seguro, ansioso,
						evitativo y desorganizado. ¿Te suena? Vamos a conocer cada uno
						y a ver cómo pueden afectar nuestras relaciones.
					</p>
				</section>

				<section className={styles.articleCards}>
					{/* APEGO #1 */}
					<card className={styles.cardFlex}>
						<p className={styles.cardTitle}> Apego Seguro </p>

						<div className={styles.cardApego}>
							<div>
								<strong>Cómo se ve?</strong>
								<p className={styles.articleParragraph}>
									Las personas con apego seguro suelen sentirse cómodas
									al confiar en los demás y permiten que otros confíen
									en ellas. Tienen una visión positiva de sí mismas y
									de los demás, lo que les ayuda a construir relaciones
									estables y satisfactorias
								</p>
							</div>
							<img
								src="/img/articles/apego1.png"
								alt="Seguro"
								className={styles.cardImg}
							/>
						</div>
						<p>
							<strong>Impacto en las relaciones:</strong>
						</p>
						<p className={styles.articleParragraph}>
							El apego evitativo puede dificultar la creación de
							conexiones profundas, ya que estas personas tienden a
							reprimir sus emociones y evitan mostrarse vulnerables. En
							una relación, pueden parecer distantes o fríos, lo que
							puede frustrar a sus parejas.
						</p>
					</card>

					{/* APEGO #2 */}
					<card className={styles.cardFlex}>
						<p className={styles.cardTitle}> Apego Ansioso </p>

						<div className={styles.cardApego}>
							<div>
								<strong>Cómo se ve?</strong>
								<p className={styles.articleParragraph}>
									Las personas con apego ansioso tienden a preocuparse
									mucho por sus relaciones, temiendo ser abandonadas o
									no ser lo suficientemente buenas. Pueden necesitar
									frecuentes muestras de afecto y seguridad de los
									demás.
								</p>
							</div>
							<img
								src="/img/articles/apego2.png"
								alt="Ansioso"
								className={styles.cardImg}
							/>
						</div>
						<p>
							<strong>Impacto en las relaciones:</strong>
						</p>
						<p className={styles.articleParragraph}>
							Este tipo de apego puede hacer que alguien se sienta
							inseguro o necesitado en una relación, buscando constante
							validación. Esto puede resultar en conflictos y
							malentendidos, ya que la persona con apego ansioso podría
							interpretar la distancia o el silencio de su pareja como
							falta de interés.
						</p>
					</card>

					{/* APEGO #3 */}
					<card className={styles.cardFlex}>
						<p className={styles.cardTitle}> Apego Evitativo </p>

						<div className={styles.cardApego}>
							<div>
								<strong>Cómo se ve?</strong>
								<p className={styles.articleParragraph}>
									Las personas con apego evitativo prefieren ser
									autosuficientes y pueden evitar la cercanía
									emocional. Suelen creer que confiar en los demás es
									innecesario y que mantener una distancia emocional es
									una forma de protegerse.
								</p>
							</div>
							<img
								src="/img/articles/apego3.png"
								alt="evitativo"
								className={styles.cardImg}
							/>
						</div>
						<p>
							<strong>Impacto en las relaciones:</strong>
						</p>
						<p className={styles.articleParragraph}>
							El apego evitativo puede dificultar la creación de
							conexiones profundas, ya que estas personas tienden a
							reprimir sus emociones y evitan mostrarse vulnerables. En
							una relación, pueden parecer distantes o fríos, lo que
							puede frustrar a sus parejas.
						</p>
					</card>

					{/* APEGO #4 */}
					<card className={styles.cardFlex}>
						<p className={styles.cardTitle}> Apego Desorganizado </p>

						<div className={styles.cardApego}>
							<div>
								<strong>Cómo se ve?</strong>
								<p className={styles.articleParragraph}>
									Las personas con apego desorganizado experimentan una
									mezcla de comportamientos de apego ansioso y
									evitativo. Suelen querer cercanía, pero al mismo
									tiempo, temen la intimidad y la confianza.
								</p>
							</div>
							<img
								src="/img/articles/apego4.png"
								alt="Desorganizado"
								className={styles.cardImg}
							/>
						</div>
						<p>
							<strong>Impacto en las relaciones:</strong>
						</p>
						<p className={styles.articleParragraph}>
							Este tipo de apego puede crear relaciones caóticas e
							impredecibles, ya que las personas pueden oscilar entre
							buscar cercanía y retirarse por miedo. Esto puede ser
							confuso para ellos mismos y para sus parejas, pero entender
							sus patrones y trabajar en terapia puede ayudarlos a sanar
							y a formar vínculos más saludables.
						</p>
					</card>
				</section>

				<p className={styles.subtitle}>
					¿Qué puedo hacer si me identifico con un tipo de apego en
					particular?
				</p>

				<p className={styles.articleParragraph}>
					Identificar es un paso clave para entender tus comportamientos y
					necesidades en las relaciones. No importa el tipo de apego que
					tengas; todos tenemos la capacidad de trabajar en nosotros mismos
					para mejorar nuestras relaciones.
				</p>
				<p className={styles.articleParragraph}>
					En Perspectivas, contamos con psicólogos que pueden ayudarte a
					explorar tus patrones de apego y a fortalecer tus habilidades
					para crear conexiones más seguras y significativas. Comprender tu
					historia emocional puede ser la clave para construir relaciones
					más sanas y satisfactorias.
				</p>
			</div>
		</>
	)
}

export default Apego
