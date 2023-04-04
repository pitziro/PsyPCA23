import wStyles from './Welcome.module.css';
import { WhatsApp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Welcome() {
	const linkWasap = 'https://wa.link/unpjhx';
	return (
		<div className={wStyles.div_welcome}>
			<section className={wStyles.wMain}>
				<div className={wStyles.imgContainer}> </div>

				<Link to={linkWasap} target='_blank'>
					<div className={wStyles.imgWasap}>
						<p>¿Necesitas ayuda?</p>
						<WhatsApp />
					</div>
				</Link>
			</section>

			<section className={wStyles.wBeneficios}>
				<p> Video Bienvenida </p>
			</section>

			<section className={wStyles.wBienvenida}>
				<p> beneficios </p>
			</section>

			<section className={wStyles.wBienvenida}>
				<p> Bloque Reviews </p>
			</section>

			<section className={wStyles.wBienvenida}>
				<p> Bloque Blog </p>
			</section>
		</div>
	);
}
