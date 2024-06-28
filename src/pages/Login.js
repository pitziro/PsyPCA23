import { Link } from 'react-router-dom'

function Login() {
	return (
		<>
			<h1>Inicia Sesion </h1>

			<form action="">
				<input type="text" placeholder="Usuario" />
				<input type="password" placeholder="Contraseña" />
				<button>Login</button>
			</form>

			<p>
				Don't have an account? <Link to="/register">Register here.</Link>
			</p>
		</>
	)
}

export default Login
