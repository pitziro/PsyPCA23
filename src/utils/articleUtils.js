import articlesData from '../data/articles.json'

const articleComponents = {
	bipolaridad: () => import('../articles/Bipolaridad.jsx'),
	depresion: () => import('../articles/Depresion.jsx'),
	apego: () => import('../articles/Apego.jsx'),
}

export const getArticleBySlug = slug => {
	return articlesData.find(article => {
		const articleSlug = article.path.split('/').pop()
		return articleSlug === slug
	})
}

export const loadArticleComponent = async slug => {
	const componentLoader = articleComponents[slug]

	if (!componentLoader) {
		throw new Error(`Artículo "${slug}" no encontrado`)
	}

	try {
		const module = await componentLoader()
		return module.default
	} catch (error) {
		throw new Error(`Error cargando el artículo "${slug}": ${error.message}`)
	}
}

export const getAllArticles = () => {
	return articlesData
}
