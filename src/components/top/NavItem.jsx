import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import expandIcon from '../../assets/svg/expandIcon.svg';
import mstyle from './Navbar.module.css';

export default function NavItem(props) {
	const { item, handleClick, barOpened } = props;

	const [subcategoryOpened, setSubcategoryOpened] = useState(false);
	const handleOpenSub = () => {
		setSubcategoryOpened((prev) => !prev);
	};

	const navRefSub = useRef(null);

	const scrollWithOffset = (el) => {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = -120;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
	};

	useEffect(() => {
		setSubcategoryOpened(false);
	}, [barOpened]);

	useEffect(() => {
		const clickOutside = (evt) => {
			if (
				navRefSub.current &&
				!navRefSub.current.contains(evt.target) &&
				!subcategoryOpened
			) {
				setSubcategoryOpened(false);
			}
		};
		document.addEventListener('mousedown', clickOutside);

		return () => {
			document.removeEventListener('mousedown', clickOutside);
		};
	}, [navRefSub]);

	if (item.childrens) {
		return (
			<div
				ref={navRefSub}
				className={mstyle.categoryitem}
				onClick={handleOpenSub}
			>
				<div className={mstyle.subcategory_title}>
					<Link to='#'>{item.title}</Link>
					<img
						src={expandIcon}
						alt='expand'
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
						<NavItem key={index} item={child} handleClick={handleClick} />
					))}
				</div>
			</div>
		);
	} else {
		return (
			<div className={mstyle.categoryitem}>
				{/* <Link to={item.path} onClick={handleClick}>
					{item.title}
				</Link> */}

				<HashLink
					smooth
					to={item.path}
					onClick={handleClick}
					scroll={scrollWithOffset}
				>
					{item.title}
				</HashLink>
			</div>
		);
	}
}
