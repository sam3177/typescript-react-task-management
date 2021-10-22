import React, { useState } from 'react';
import axios from 'axios';
import {
	TextField,
	Paper,
	Button,
	Typography,
} from '@material-ui/core/';
import{Alert} from '@mui/material'
import { Link, useHistory } from 'react-router-dom';
import { baseURL } from '../store/middleware/api';
import useStyles from '../styles/Form'



const LoginForm = () => {
	const classes = useStyles();
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [error, setError] = useState([]);
	const[isError, setIsError] = useState(false);
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const history = useHistory();
	const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try{
			await axios
			.request({
				baseURL,
				url: '/auth/signup',
				data: { username, password },
				method: 'post',
			})
			history.push('/login')
		} catch (error:any) {
				setError(error.response.data.message)
				setIsError(true)
		}
			
	};

	return (
		<Paper elevation={3} className={classes.paper}>
			<Typography variant='h4' align='center'>
				Signup
			</Typography>
			<form
		className={classes.form}
		noValidate
		autoComplete='off'
		onSubmit={submitForm}>
					{isError ? <Alert className={classes.error} severity="error">{<p>{error}</p>}</Alert> : null}
		
				<TextField
					label='Username'
					variant='outlined'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<TextField
					type='password'
					label='Password'
					variant='outlined'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<TextField
					type='password'
					label='Confirm Password'
					variant='outlined'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<Button variant='contained' type='submit' color='primary'>
					Create Account
				</Button>
				<Typography variant='subtitle1'>
					Already have an account? Please{' '}
					<Link to='/login'>login</Link>!
				</Typography>
			</form>
		</Paper>
	);
};

export default LoginForm;
