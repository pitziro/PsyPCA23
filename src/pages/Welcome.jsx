import { useEffect, useState } from 'react';
//import { Box, Modal, Fade, Backdrop } from '@mui/material';
import wStyles from './Welcome.module.css';

export default function Welcome() {
	const modalStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'white',
		boxShadow: 24,
		p: 4,
	};

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		handleOpen();
	// 	}, 3000);

	// 	return () => {
	// 		clearInterval(timer);
	// 	};
	// }, []);

	return (
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
				<p> Video Bienvenida </p>
			</section>

			<section className={wStyles.wBienvenida}>
				<p> beneficios </p>
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
	);
}
