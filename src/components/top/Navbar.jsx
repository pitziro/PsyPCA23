import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useWindowSize from '../../utils/useWindowSize.js'
import NavItem from './NavItem'
import Mobile from './Mobile'
import Upperline from './Upperline'
import WAComponent from './WAComponent'

import myitems from '../../data/navbarData.json'
import mstyle from './Navbar.module.css'
import aStyle from '../../App.module.css'

function Navbar() {
	const navRef = useRef(null)
	const [sideBarOpened, setSideBarOpened] = useState(false)

	// const { width } = useWindowSize()

	const handleSideClick = () => {
		setSideBarOpened(prev => !prev)
	}

	useEffect(() => {
		const clickOutsideBar = evt => {
			if (
				sideBarOpened &&
				navRef.current &&
				!navRef.current.contains(evt.target)
			) {
				setSideBarOpened(false)
				console.log('clickedOut Navbar')
			}

			console.log(evt.target)
			console.log('sideBarOpened: ', sideBarOpened)
			console.log('navref', navRef.current)
		}
		document.addEventListener('click', clickOutsideBar, true)
		return () => {
			document.removeEventListener('click', clickOutsideBar, true)
		}
	}, [navRef, sideBarOpened])

	return (
		<div className={aStyle.zonatop}>
			<Upperline />

			<div className={mstyle.topRowTwo}>
				<section className={mstyle.top_logo}>
					<Link to="/">
						<img
							className={mstyle.logo_img}
							src="/img/logotipo16.png"
							title="Home"
							alt="Home"
						/>
						<img
							className={mstyle.logo_letras}
							src="/img/nombre-sin-fondo.png"
							alt="logo_nombre"
						/>
					</Link>
				</section>

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
