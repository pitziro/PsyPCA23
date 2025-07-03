import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { CONST_IMG_CAROUSEL as slides } from '../../utils/constants'
import carStyle from './carousel.module.css'

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

	// Get current slide
	const currentSlide = slides[currSlide]

	return (
		<div className={carStyle.carousel}>
			<div className={carStyle.carouselContainer}>
				{/* Only render the current slide */}
				<div className={`${carStyle.carouselSlide} ${carStyle.active}`}>
					<img
						src={currentSlide.imgUrl}
						alt="imgCar1"
						loading="eager"
						fetchpriority="high"
						className={carStyle.carouselImage}
					/>

					{/* Content Overlay */}
					<div className={carStyle.carouselContent}>
						<h3 className={carStyle.carouselTitle}>
							{currentSlide.imgTitle}
						</h3>
						<p className={carStyle.carouselDesc}>
							{currentSlide.imgDesc}
						</p>
						<Link
							to={currentSlide.linkTo}
							className={carStyle.carouselBtn}
						>
							{currentSlide.btnText}
						</Link>
					</div>
				</div>
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

			<div style={{ display: 'none' }}>
				{/* Preload next slide */}
				{slides[currSlide === slides.length - 1 ? 0 : currSlide + 1] && (
					<img
						src={
							slides[currSlide === slides.length - 1 ? 0 : currSlide + 1]
								.imgUrl
						}
						loading="lazy"
						fetchpriority="low"
					/>
				)}
				{/* Preload previous slide */}
				{slides[currSlide === 0 ? slides.length - 1 : currSlide - 1] && (
					<img
						src={
							slides[currSlide === 0 ? slides.length - 1 : currSlide - 1]
								.imgUrl
						}
						loading="lazy"
						fetchpriority="low"
					/>
				)}
			</div>
		</div>
	)
}

export default Carrousel
