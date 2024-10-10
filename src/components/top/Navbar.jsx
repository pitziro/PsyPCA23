import { useState, useEffect, useRef } from 'react'
import NavItem from './NavItem'
import Mobile from './Mobile'
import Upperline from './Upperline'
import WAComponent from './WAComponent'

import myitems from '../../data/navbarData.json'
import mstyle from './Navbar.module.css'
import aStyle from '../../App.module.css'
import NavLogo from './NavLogo.jsx'
function Navbar() {
	const navRef = useRef(null)
	const [sideBarOpened, setSideBarOpened] = useState(false)

	const handleSideClick = () => {
		setSideBarOpened(prev => !prev)
	}

	useEffect(() => {
		const clickOutsideBar = evt => {
			console.log('---- Ejecutnado clickOutsideBar')
			if (
				sideBarOpened &&
				navRef.current &&
				!navRef.current.contains(evt.target)
			) {
				setSideBarOpened(false)
				console.log('clickedOut Navbar')
			}
			// console.log(evt.target)
			console.log('(1) sideBarOpened: ', sideBarOpened)
			// console.log('navref', navRef.current)
		}
		document.addEventListener('click', clickOutsideBar, true)
		return () => {
			document.removeEventListener('click', clickOutsideBar, true)
		}
	}, [navRef, sideBarOpened])

	// al agregar la dependencia sideBarOpened, no funciona el cambio de icono de movil.
	// al quitarla.. no funciona el clickoutside en movil

	return (
		<div className={aStyle.zonatop}>
			<Upperline />

			<div className={mstyle.topRowTwo}>
				<NavLogo />

				<nav
					ref={navRef}
					id={mstyle.categorybar}
					className={sideBarOpened ? `${mstyle.show}` : ''}
				>
					{myitems.map(item => (
						<NavItem
							key={item.id}
							item={item}
							handleSideClick={handleSideClick}
							sideBarOpened={sideBarOpened}
						/>
					))}
				</nav>

				<WAComponent />

				<Mobile fClick={{ sideBarOpened, handleSideClick }} />
			</div>
		</div>
	)
}

export default Navbar
