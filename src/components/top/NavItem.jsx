import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import expandIcon from '../../assets/svg/expandIcon.svg'
import mstyle from './Navbar.module.css'

export default function NavItem(props) {
	const { item, handleSideClick, sideBarOpened } = props

	const [subcategoryOpened, setSubcategoryOpened] = useState(false)
	const handleOpenSub = () => {
		setSubcategoryOpened(prev => !prev)
	}

	const handleHashClick = () => {
		handleOpenSub()
		handleSideClick()
	}

	const navRefSub = useRef(null)
	const location = useLocation()

	const scrollWithOffset = el => {
		const yCoordinate = el.getBoundingClientRect().top + window.scrollY
		const yOffset = -120
		window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
	}

	useEffect(() => {
		if (location.hash === '') {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}, [location])

	useEffect(() => {
		const clickOutside = evt => {
			if (navRefSub.current && !navRefSub.current.contains(evt.target)) {
				setSubcategoryOpened(false)
			}
		}
		document.addEventListener('click', clickOutside)

		return () => {
			document.removeEventListener('click', clickOutside)
		}
	}, [navRefSub, sideBarOpened]) // a revisar

	if (item.childrens) {
		return (
			<div
				id={item.id}
				ref={navRefSub}
				className={mstyle.categoryitem}
				onClick={handleOpenSub}
			>
				<div className={mstyle.subcategory_title}>
					<span style={{ cursor: 'pointer', userSelect: 'none' }}>
						{item.title}
					</span>
					<img
						src={expandIcon}
						alt="expand"
						className={mstyle.subcategory_icon}
						style={{
							transform: `rotate(${subcategoryOpened ? '180deg' : '0deg'})`,
						}}
					/>
				</div>

				<div
					className={
						subcategoryOpened
							? `${mstyle.subcategory_container} ${mstyle.opened}`
							: `${mstyle.subcategory_container} `
					}
				>
					{item.childrens.map((child, index) => (
						<NavItem
							key={index}
							item={child}
							handleSideClick={handleSideClick}
							sideBarOpened
						/>
					))}
				</div>
			</div>
		)
	}
	return (
		<div className={mstyle.categoryitem}>
			<HashLink
				to={item.path}
				onClick={handleHashClick}
				scroll={scrollWithOffset}
			>
				{item.title}
			</HashLink>
		</div>
	)
}
