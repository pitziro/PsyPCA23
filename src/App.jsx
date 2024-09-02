import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Navbar from './components/top/Navbar'
import Footer from './components/bottom/Footer'
import Welcome from '../src/pages/Welcome'
import Spinner from './components/visuals/Spinner'
import aStyle from './App.module.css'

const EquipoLazy = lazy(() => import('../src/pages/Equipo'))
const NosotrosLazy = lazy(() => import('../src/pages/Nosotros'))
const ServiciosLazy = lazy(() => import('../src/pages/Servicios'))
const PreguntasLazy = lazy(() => import('../src/pages/Preguntas'))

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
						</Routes>
					</Suspense>
				</div>
				<Footer />
			</div>
		</HelmetProvider>
	)
}

export default App
