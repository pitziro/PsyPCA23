import React, { useEffect, useState } from 'react'
import cStyle from './carrusel.module.css'

import rightArrow from '../../assets/svg/rightArrow.svg'
import leftArrow from '../../assets/svg/leftArrow.svg'
import circlefilled from '../../assets/svg/circlefilled.svg'
import circleempty from '../../assets/svg/circleempty.svg'

function MyCarousel() {
	const [currIndex, setcurrIndex] = useState(0)

	const imagenes = [
		{ name: '01_kids_smile_r.webp', desc: 'img kids' },
		{ name: '02_pareja_joven_r.webp', desc: 'img pareja' },
		{ name: '03_familia_sonriendo_r.webp', desc: 'img familia' },
		{ name: '04_grupo_gente_joven_r.webp', desc: 'img jovenes' },
	]

	useEffect(() => {
		const interval = setInterval(() => {
			clickSlideRight()
		}, 3500)
		return () => clearInterval(interval)
	}, [currIndex])

	const clickSlideLeft = () => {
		let isFirst = currIndex === 0
		const newIndex = isFirst ? imagenes.length - 1 : currIndex - 1
		setcurrIndex(newIndex)
	}

	const clickSlideRight = () => {
		let isLast = currIndex === imagenes.length - 1
		const newIndex = isLast ? 0 : currIndex + 1
		setcurrIndex(newIndex)
	}

	const goToSlide = index => {
		setcurrIndex(index)
	}

	return (
		<div className={cStyle.carouselContainer}>
			<div className={cStyle.carouselSlider}>
				<img
					src={leftArrow}
					className={cStyle.leftArrowSlide}
					onClick={clickSlideLeft}
				/>
				<div
					className={cStyle.carouselSlideItem}
					style={{
						backgroundImage: `url(/img/carrusel/${imagenes[currIndex].name})`,
					}}
				></div>
				<img
					src={rightArrow}
					className={cStyle.rightArrowSlide}
					onClick={clickSlideRight}
				/>
				<div className={cStyle.dotContainer}>
					{imagenes.map((imagen, index) => (
						<div key={index} onClick={() => goToSlide(index)}>
							{index === currIndex ? (
								<img src={circlefilled} />
							) : (
								<img src={circleempty} />
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default MyCarousel
