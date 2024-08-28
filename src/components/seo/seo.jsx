import { Helmet } from 'react-helmet-async'
const SeoHelmet = ({ title, descContent }) => {
	return (
		<Helmet>
			<title> {title} </title>
			<meta name="description" content={descContent} />
		</Helmet>
	)
}

export default SeoHelmet
