import React from 'react';
// import { Carousel } from 'react-bootstrap';

import cStyle from './carrusel.module.css';

function Carrusel() {
	const imagenes = [
		'01_kids_smile.png',
		'02_pareja_joven.jpg',
		'03_familia_sonriendo.png',
		'04_grupo_gente_joven.png',
	];

	return (
		<div className={cStyle.carruselDiv}>
			{/* <Carousel fade>
				{imagenes.map((im, ix) => {
					return (
						<Carousel.Item key={ix}>
							<img
								className={cStyle.carruselItem}
								src={`/${im}`}
								alt='x slide'
							/>
						</Carousel.Item>
					);
				})}
			</Carousel> */}
		</div>
	);
}

export default Carrusel;
