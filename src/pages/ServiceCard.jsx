import sStyle from './Servicios.module.css';

export default function ServiceCard({ serv }) {
	return (
		<div className={sStyle.serv_card}>
			<section className={sStyle.serv_card_text}>
				<p className={sStyle.serv_card_title}> {serv.title} </p>
				<span className={sStyle.serv_card_content}> {serv.desc} </span>
			</section>
			<img src={serv.rutaimg} />
		</div>
	);
}
