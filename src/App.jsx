import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Navbar from './components/top/Navbar'
import Footer from './components/bottom/Footer'
import Welcome from '../src/pages/Welcome'
import Spinner from './components/visuals/Spinner'
import 'unfonts.css'
import aStyle from './App.module.css'

import Bipolaridad from './articles/Bipolaridad'
import Depresion from './articles/Depresion'
import Apego from './articles/Apego'

const EquipoLazy = lazy(() => import('../src/pages/Equipo'))
const NosotrosLazy = lazy(() => import('../src/pages/Nosotros'))
const ServiciosLazy = lazy(() => import('../src/pages/Servicios'))
const PreguntasLazy = lazy(() => import('../src/pages/Preguntas'))
const ArticlesLazy = lazy(() => import('../src/pages/Articles'))

function App() {
	return (
		<HelmetProvider>
			<div className={aStyle.App}>
				<Navbar />
				<div className={aStyle.zonamain}>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route path="/" element={<Welcome />} />
							<Route path="/nosotros" element={<NosotrosLazy />} />
							<Route path="/equipo" element={<EquipoLazy />} />
							<Route path="/servicios" element={<ServiciosLazy />} />
							<Route path="/QandA" element={<PreguntasLazy />} />
							<Route path="articles" element={<ArticlesLazy />}>
								<Route path="bipolaridad" element={<Bipolaridad />} />
								<Route path="depresion" element={<Depresion />} />
								<Route path="apego" element={<Apego />} />
							</Route>
						</Routes>
					</Suspense>
				</div>
				<Footer />
			</div>
		</HelmetProvider>
	)
}

export default App
