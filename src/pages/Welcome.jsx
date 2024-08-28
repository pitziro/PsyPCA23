// import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import wStyles from './Welcome.module.css'
import SeoHelmet from '../components/seo/seo'

export default function Welcome() {
	// const modalStyle = {
	// 	position: 'absolute',
	// 	top: '50%',
	// 	left: '50%',
	// 	transform: 'translate(-50%, -50%)',
	// 	width: 400,
	// 	bgcolor: 'white',
	// 	boxShadow: 24,
	// 	p: 4,
	// }

	// const [open, setOpen] = useState(false)
	// const handleOpen = () => setOpen(true)
	// const handleClose = () => setOpen(false)

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		handleOpen();
	// 	}, 3000);

	// 	return () => {
	// 		clearInterval(timer);
	// 	};
	// }, []);

	console.log('Main Div Rendered')

	return (
		<>
			<SeoHelmet
				title="Perspectivas | CAP"
				descContent="Encontrando tu nuevo enfoque"
			/>

			<div className={wStyles.div_welcome}>
				<section className={wStyles.wMain}>
					<div className={wStyles.imgContainer}> </div>

					{/* <Link to={linkWasap} target='_blank'>
					<div className={wStyles.imgWasap}>
						<p>¿Necesitas ayuda?</p>
						<WhatsApp />
					</div>
				</Link> */}
				</section>
				{/* 
            
			<Modal
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={open}>
					<Box sx={modalStyle}>
						<h3>Text in a modal</h3>
						<p>
							Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
						</p>
					</Box>
				</Fade>
			</Modal> */}

				<section className={wStyles.wBeneficios}>
					<p> Bloque Bienvenida </p>
				</section>

				<section className={wStyles.wBienvenida}>
					<p> Bloque Beneficios </p>
				</section>

				{/*
			<section className={wStyles.wBienvenida}>
				<p> Bloque Reviews </p>
			</section>

			<section className={wStyles.wBienvenida}>
				<p> Bloque Blog </p>
			</section>
            */}
			</div>
		</>
	)
}
