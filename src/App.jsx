import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Footer from './components/bottom/Footer';
import Welcome from '../src/pages/Welcome';
import Equipo from '../src/pages//Equipo';
import Nosotros from '../src/pages/Nosotros';
import Servicios from '../src/pages/Servicios';
import Preguntas from '../src/pages/Preguntas';
import Navbar from './components/top/Navbar';

import aStyle from './App.module.css';

function App() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, [pathname]);

	return (
		<div className={aStyle.App}>
			<Navbar />

			<div className={aStyle.zonamain}>
				<Routes>
					<Route exact path='/' element={<Welcome />} />
					<Route exact path='/nosotros' element={<Nosotros />} />
					<Route exact path='/equipo' element={<Equipo />} />
					<Route exact path='/servicios' element={<Servicios />} />
					<Route exact path='/QandA' element={<Preguntas />} />
				</Routes>
			</div>

			<Footer />
		</div>
	);
}

export default App;
