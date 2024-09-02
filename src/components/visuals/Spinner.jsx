import { Spin } from 'antd'
const Spinner = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				marginTop: '40px',
			}}
		>
			<Spin size="large" />
		</div>
	)
}

export default Spinner
