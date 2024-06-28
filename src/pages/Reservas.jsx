import React, { useState } from 'react'
import axios from 'axios'

const CalendlyComponent = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [dateTime, setDateTime] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await axios.post(
				'https://api.calendly.com/scheduled_events',
				{
					name: name,
					email: email,
					start_time: dateTime,
					location: 'online', // You can customize this if needed
				},
				{
					headers: {
						Authorization: `Bearer YOUR_API_KEY`, // Replace with your actual API key
					},
				}
			)
			setMessage('Reservation created successfully!')
		} catch (error) {
			setMessage('Error creating reservation.')
		}
	}

	return (
		<div>
			<h1>Create a Calendly Reservation</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={e => setName(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="dateTime">Date and Time:</label>
					<input
						type="datetime-local"
						id="dateTime"
						value={dateTime}
						onChange={e => setDateTime(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Create Reservation</button>
			</form>
			{message && <p>{message}</p>}
		</div>
	)
}

export default CalendlyComponent
