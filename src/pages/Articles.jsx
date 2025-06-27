import { Link, Outlet, useLocation } from 'react-router-dom'
import styles from './Articles.module.css'
import articles from '../data/articles.json'
import SeoHelmet from '../components/seo/seo'

const Articles = () => {
	const location = useLocation()

	const showArticleList = location.pathname === '/articles'

	return (
		<>
			<SeoHelmet
				title="Perspectivas | Articulos"
				descContent="Conoce los artículos más importantes de Perspectivas"
			/>
			{showArticleList && (
				<div className={styles.articleList}>
					<h2> Visita nuestros artículos </h2>

					<section className={styles.articlesContainer}>
						{[...articles].reverse().map(article => (
							<article key={article.id} className={styles.article}>
								<img
									className={styles.cardImg}
									src={article.img}
									alt={article.title}
								/>
								<Link to={article.path} key={article.id}>
									<h3>{article.title}</h3>
									<p>{article.desc}</p>
								</Link>
								<span>{article.date}</span>
							</article>
						))}
					</section>
				</div>
			)}

			<Outlet />
		</>
	)
}

export default Articles
