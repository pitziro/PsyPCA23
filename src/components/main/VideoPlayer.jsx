import React from 'react'
import vpStyles from '../../pages/Equipo.module.css'

export const VideoPlayer = () => {
	const videoUrl =
		'https://res.cloudinary.com/dcnim91yg/video/upload/v1729748479/Presentacio%CC%81n_de_todos_compress_b2qxfw.mp4'

	return (
		<div className={vpStyles.videoContainer}>
			<video className={vpStyles.videoContent} controls>
				<source src={videoUrl} type="video/mp4" />
			</video>
		</div>
	)
}
