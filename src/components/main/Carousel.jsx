import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import carStyle from './carousel.module.css'
import { CONST_IMG_CAROUSEL as slides } from '../../utils/constants'
import { Link } from 'react-router-dom'

const Carrousel = () => {
	const [currSlide, setCurrSlide] = useState(0)

	const nextSlide = () => {
		setCurrSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
	}

	const prevSlide = () => {
		setCurrSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))
	}

	const goToSlide = index => {
		setCurrSlide(index)
	}

	return (
		<div className={carStyle.carousel}>
			<div className={carStyle.carouselContainer}>
				{slides.map((slide, index) => (
					<div
						key={index}
						className={
							carStyle.carouselSlide +
							`${index === currSlide ? 'active' : ''}`
						}
					>
						{/* Background Image */}
						<img
							src={slide.imgUrl}
							alt="imgCar1"
							className={carStyle.carouselImage}
						/>

						{/* Content Overlay */}
						<div className={carStyle.carouselContent}>
							<h3 className={carStyle.carouselTitle}>
								{slide.imgTitle}
							</h3>
							<p className={carStyle.carouselDesc}>{slide.imgDesc}</p>
							<Link to={slide.linkTo} className={carStyle.carouselBtn}>
								{slide.btnText}
							</Link>
						</div>
					</div>
				))}
			</div>

			{/* Navigation Arrows */}
			<ChevronLeft
				onClick={prevSlide}
				className={carStyle.prevButton}
				aria-label="Previous slide"
			/>

			<ChevronRight
				onClick={nextSlide}
				className={carStyle.nextButton}
				aria-label="Next slide"
			/>

			{/* Slide Indicators */}
			<div className={carStyle.carouselIndicators}>
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={
							carStyle.carouselIndicator +
							`${currSlide === index ? 'active' : ''}`
						}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	)
}

export default Carrousel
