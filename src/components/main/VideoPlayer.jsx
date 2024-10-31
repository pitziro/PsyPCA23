import React, { useEffect, useRef, useState } from 'react'
import vpStyles from '../../pages/Equipo.module.css'

export const VideoPlayer = () => {
	const videoUrl =
		'https://res.cloudinary.com/dcnim91yg/video/upload/v1729748479/Presentacio%CC%81n_de_todos_compress_b2qxfw.mp4'

	const videoRef = useRef(null)
	const [userPaused, setUserPaused] = useState(false)

	useEffect(() => {
		const videoElement = videoRef.current

		const videoObserver = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting && !userPaused) {
						videoElement.play()
					} else {
						videoElement.pause()
					}
				})
			},
			{ threshold: 0.4 }
		)

		if (videoElement) {
			videoObserver.observe(videoElement)
		}

		return () => {
			if (videoElement) {
				videoObserver.unobserve(videoElement)
			}
		}
	}, [userPaused])

	return (
		<div className={vpStyles.videoContainer}>
			<video
				ref={videoRef}
				className={vpStyles.videoContent}
				controls
				autoPlay={false}
				onPlay={() => setUserPaused(false)}
				onPause={() => setUserPaused(true)}
			>
				<source src={videoUrl} type="video/mp4" />
			</video>
		</div>
	)
}
