function HamButton({ handleSideClick }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			width="28px"
			height="28px"
			onClick={handleSideClick}
		>
			<path
				d="M4 6h16M4 12h16M4 18h16"
				stroke="#413e3e"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default HamButton
