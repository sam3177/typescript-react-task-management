import React, { useState } from 'react';

import {
	TextField,
	Paper,
	Button,
	Typography,
} from '@material-ui/core/';
import{Alert} from '@mui/material'
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { baseURL } from '../store/middleware/api';
import{registerUserInfo} from '../store/logedUser'
import configStore from '../store/configureStore'
import useStyles from '../styles/Form'

const store = configStore()

const LoginForm = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ error, setError ] = useState([]);
	const [ isError, setIsError ] = useState(false);
	const history = useHistory();
	const submitForm = async (
		event: React.FormEvent<HTMLFormElement>,
	) => {
		event.preventDefault();
		try {
			const result = await axios.request({
				baseURL,
				url: '/auth/signin',
				data: { username, password },
				method: 'post',
			});
			dispatch(registerUserInfo(result.data))
			// setTimeout(() =>{
				localStorage.setItem('user',JSON.stringify(result.data))
				history.push('/');
			// },4000)
		} catch (error:any) {
			setError(error.response.data.message);
			setIsError(true);
		}
	};
	return (
		<Paper elevation={3} className={classes.paper}>
			<Typography variant='h4' align='center'>
				Login
			</Typography>
			<form
				className={classes.form}
				noValidate={true}
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
				<Button variant='contained' color='primary' type='submit'>
					Login
				</Button>
				<Typography variant='subtitle1'>
					Don't have an account? Please {' '}
					<Link to='/signup'>signup</Link>!
				</Typography>
			</form>
		</Paper>
	);
};

export default LoginForm;
