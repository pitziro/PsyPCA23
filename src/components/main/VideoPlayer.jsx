import { useEffect, useRef, useState } from 'react'
import vpStyles from '../../pages/Equipo.module.css'
import playbtnSVG from '../../assets/svg/playbtn.svg'
export const VideoPlayer = () => {
	const videoUrl =
		'https://res.cloudinary.com/dcnim91yg/video/upload/v1729748479/Presentacio%CC%81n_de_todos_compress_b2qxfw.mp4'

	const videoRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [userInitiated, setUserInitiated] = useState(false)

	const handlePlayButtonClick = () => {
		videoRef.current.play()
		setIsPlaying(true)
		setUserInitiated(true)
	}

	const handleVideoClick = () => {
		if (isPlaying) {
			videoRef.current.pause()
			setIsPlaying(false)
		} else {
			videoRef.current.play()
			setIsPlaying(true)
		}
	}

	useEffect(() => {
		const videoElement = videoRef.current

		const handleVideoVisibility = entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting && isPlaying) {
					videoElement.play().catch(error => {
						// console.log(error)
					})
				} else {
					videoElement.pause()
					setIsPlaying(false)
				}
			})
		}

		// Observa el video
		const observer = new IntersectionObserver(handleVideoVisibility, {
			threshold: 0.5,
		})

		if (videoElement) {
			observer.observe(videoElement)
		}

		return () => {
			if (videoElement) {
				observer.unobserve(videoElement)
			}
		}
	}, [isPlaying])

	return (
		<div className={vpStyles.videoContainer}>
			{!isPlaying && !userInitiated && (
				<img
					src={playbtnSVG}
					className={vpStyles.playButton}
					onClick={handlePlayButtonClick}
				/>
			)}
			<video
				ref={videoRef}
				className={vpStyles.videoContent}
				controls
				autoPlay={false}
				controlsList="nofullscreen"
				onClick={handleVideoClick}
			>
				<source src={videoUrl} type="video/mp4" />
			</video>
		</div>
	)
}
