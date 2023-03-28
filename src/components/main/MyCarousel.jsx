import React, { useEffect, useState } from 'react';
import cStyle from './carrusel.module.css';

function MyCarousel() {
	const [currIndex, setcurrIndex] = useState(0);

	const imagenes = [
		{ name: '01_kids_smile.png', desc: 'img kids' },
		{ name: '02_pareja_joven.jpg', desc: 'img pareja' },
		{ name: '03_familia_sonriendo.png', desc: 'img familia' },
		{ name: '04_grupo_gente_joven.png', desc: 'img jovenes' },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			clickSlideRight();
		}, 3000);
		return () => clearInterval(interval);
	}, [currIndex]);

	const clickSlideLeft = () => {
		let isFirst = currIndex === 0;
		const newIndex = isFirst ? imagenes.length - 1 : currIndex - 1;
		setcurrIndex(newIndex);
	};

	const clickSlideRight = () => {
		let isLast = currIndex === imagenes.length - 1;
		const newIndex = isLast ? 0 : currIndex + 1;
		setcurrIndex(newIndex);
	};

	const goToSlide = (index) => {
		setcurrIndex(index);
	};

	return (
		<div className={cStyle.carouselContainer}>
			<div className={cStyle.carouselSlider}>
				<div className={cStyle.leftArrowSlide} onClick={clickSlideLeft}>
					⮜
				</div>
				<div
					className={cStyle.carouselSlideItem}
					style={{ backgroundImage: `url(/img/${imagenes[currIndex].name})` }}
				></div>
				<div className={cStyle.rightArrowSlide} onClick={clickSlideRight}>
					⮞
				</div>
				<div className={cStyle.dotContainer}>
					{imagenes.map((imagen, index) => (
						<div
							key={index}
							className={cStyle.dotIndicator}
							onClick={() => goToSlide(index)}
						>
							○
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default MyCarousel;
