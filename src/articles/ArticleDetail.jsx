import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArticleBySlug, loadArticleComponent } from '../utils/articleUtils'

import Spinner from '../components/visuals/Spinner'
import styles from './articlelayout.module.css'

export default function ArticleDetail() {
	const { slug } = useParams()
	const navigate = useNavigate()
	const [ArticleComponent, setArticleComponent] = useState(null)
	const [articleData, setArticleData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const loadArticle = async () => {
			try {
				setLoading(true)
				setError(null)

				// Obtener datos del artículo
				const data = getArticleBySlug(slug)
				if (!data) {
					setError('Artículo no encontrado')
					return
				}

				setArticleData(data)

				// Cargar componente dinámicamente
				const component = await loadArticleComponent(slug)
				setArticleComponent(() => component)
			} catch (err) {
				console.error('Error loading article:', err)
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		if (slug) {
			loadArticle()
		}
	}, [slug])

	if (loading) {
		return (
			<div className="flex justify-center items-center min-h-96">
				<Spinner />
			</div>
		)
	}

	if (error) {
		return (
			<div className="text-center py-12">
				<h2 className="text-2xl font-bold text-gray-900 mb-4">
					Artículo no encontrado
				</h2>
				<p className="text-gray-600 mb-6">{error}</p>
				<button
					onClick={() => navigate('/articles')}
					className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
				>
					Volver a artículos
				</button>
			</div>
		)
	}

	if (!ArticleComponent || !articleData) {
		return (
			<div className="text-center py-12">
				<h2 className="text-2xl font-bold text-gray-900">
					Error cargando el artículo
				</h2>
			</div>
		)
	}

	return (
		<>
			<section>
				<nav className={styles.breadcrumb}>
					<a href="/" className={styles.breadcrumbLink}>
						Inicio
					</a>
					<span className={styles.breadcrumbSeparator}>/</span>
					<a href="/articles" className={styles.breadcrumbLink}>
						Artículos
					</a>
					<span className={styles.breadcrumbSeparator}>/</span>
					<span className={styles.breadcrumbItem}>
						{' '}
						{articleData.title}
					</span>
				</nav>
			</section>
			<ArticleComponent />
			<section className={styles.author}>
				<span>
					Por{' '}
					<span className={styles.authorName}> {articleData.author} </span>
				</span>
				<span className={styles.publishDate}> {articleData.date} </span>
			</section>
		</>
	)
}
