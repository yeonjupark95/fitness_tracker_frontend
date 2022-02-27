import {useState} from 'react';
import { login } from '../api';

const Login = (token) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		const token = await login(username,password);
		console.log(token);
	}


	return (
		
		 <form className="login-form" onSubmit={handleSubmit}>
			<h2>Login</h2>
			<input value={username} onChange={(event) => {setUsername(event.target.value)}}/>
			<input type="password" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
			<button>submit</button>

		</form>
		
	)
	
}

export default Login;