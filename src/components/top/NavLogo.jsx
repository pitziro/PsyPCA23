import { Link } from 'react-router-dom'
import mstyle from './Navbar.module.css'
import { memo } from 'react'
const NavLogo = () => {
	console.log('navlogo rendered.')
	return (
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
	)
}

export default memo(NavLogo)
