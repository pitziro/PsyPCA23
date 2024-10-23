import { memo } from 'react'
import mstyle from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Upperline() {
	return (
		<div className={mstyle.topRowOne}>
			<Link to="/">
				<img src="/img/logo/logo-h-white.webp" alt="logo-h" />
			</Link>
		</div>
	)
}

export default memo(Upperline)
