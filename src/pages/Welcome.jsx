import wStyles from './Welcome.module.css'
import SeoHelmet from '../components/seo/seo'
import Carousel from '../components/main/Carousel'
import IntroTeam from '../components/main/IntroTeam'
import ScheduleTutorial from '../components/main/ScheduleTutorial'
import Benefits from '../components/main/Benefits'

export default function Welcome() {
	return (
		<>
			<SeoHelmet
				title="Perspectivas | CAP"
				descContent="Encontrando tu nuevo enfoque"
			/>

			<div className={wStyles.div_welcome}>
				<section className={wStyles.wMain}>
					<Carousel />
				</section>

				<section className={wStyles.wEquipo}>
					<IntroTeam />
				</section>

				<section className={wStyles.wAgenda}>
					<ScheduleTutorial />
				</section>

				<section className={wStyles.wBeneficios}>
					<Benefits />
				</section>
			</div>
		</>
	)
}
