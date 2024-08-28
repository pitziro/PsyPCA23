import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Navbar from './components/top/Navbar'
import Footer from './components/bottom/Footer'
import Welcome from '../src/pages/Welcome'
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
					<Routes>
						<Route path="/" element={<Welcome />} />
						<Route
							path="/nosotros"
							element={
								<Suspense fallback="loading...">
									<NosotrosLazy />
								</Suspense>
							}
						/>
						<Route
							path="/equipo"
							element={
								<Suspense fallback="loading...">
									<EquipoLazy />
								</Suspense>
							}
						/>
						<Route
							path="/servicios"
							element={
								<Suspense fallback="loading...">
									<ServiciosLazy />
								</Suspense>
							}
						/>
						<Route
							path="/QandA"
							element={
								<Suspense fallback="loading...">
									<PreguntasLazy />
								</Suspense>
							}
						/>
					</Routes>
				</div>
				<Footer />
			</div>
		</HelmetProvider>
	)
}

export default App
