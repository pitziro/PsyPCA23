import { useState } from 'react'
import qaStyle from '../../pages/QndA.module.css'

const QAccordion = ({ questions }) => {
	const [activeIndex, setActiveIndex] = useState(null)

	const onQuestionClick = index => {
		setActiveIndex(index === activeIndex ? null : index)
		console.log(activeIndex)
	}

	return (
		<div className={qaStyle.accordion}>
			{questions.map(question => (
				<div key={question.id}>
					<div
						className={`${qaStyle.title} ${activeIndex === question.id ? qaStyle.active : ''}`}
						onClick={() => onQuestionClick(question.id)}
					>
						{/* <i className="dropdown icon"> </i> */}
						{question.pregunta}
					</div>
					<div
						className={`${qaStyle.content} ${activeIndex === question.id ? qaStyle.active : ''}`}
					>
						<span>{question.respuesta}</span>
					</div>
				</div>
			))}
		</div>
	)
}

export default QAccordion
