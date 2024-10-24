import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import expandIcon from '../../assets/svg/expandIcon.svg'
import mstyle from './Navbar.module.css'

export default function NavItem(props) {
	const { item, handleSideClick, sideBarOpened } = props

	const [subcategoryOpened, setSubcategoryOpened] = useState(false)

	const location = useLocation()

	const handleOpenSub = () => {
		setSubcategoryOpened(prev => !prev)
	}

	const handleHashClick = () => {
		handleOpenSub()
		handleSideClick()
	}

	const navRefSub = useRef(null)

	const scrollWithOffset = el => {
		const yOffset = -200
		const y = el.getBoundingClientRect().top + window.scrollY + yOffset
		window.scrollTo({ top: y, behavior: 'smooth' })
	}

	useEffect(() => {
		const hash = location.hash

		if (hash === '') {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}, [location])

	useEffect(() => {
		const clickOutsideItem = evt => {
			if (
				subcategoryOpened &&
				navRefSub.current &&
				!navRefSub.current.contains(evt.target)
			) {
				setSubcategoryOpened(false)
			}
		}
		document.addEventListener('click', clickOutsideItem)

		return () => {
			document.removeEventListener('click', clickOutsideItem)
		}
	}, [navRefSub, subcategoryOpened]) // a revisar

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
							// sideBarOpened
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
				scroll={el => scrollWithOffset(el)}
			>
				{item.title}
			</HashLink>
		</div>
	)
}
