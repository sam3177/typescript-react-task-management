import React from 'react';
import {
	Box,
	AppBar,
	Toolbar,
	Typography,
	Button,
} from '@material-ui/core';
import{useDispatch, useSelector} from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import useStyles from '../styles/NavBar'
import{logOut} from '../store/logedUser'

interface UserInfo {
	accessToken?: string;
	username?: string;
}

const NavBar = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const classes = useStyles();
	const logedUser: UserInfo = useSelector((state:any)=> state.user.data)
	const logout = ()=>{
		dispatch(logOut())
		history.push('/login')
	}
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar className={classes.toolBar}>
					<Typography variant='h4' component='div'>
						Task Manager
					</Typography>
					{logedUser.accessToken ? (
						<div className={classes.logContent}>
							<Button color='inherit'>
								{logedUser.username}
							</Button>
							<span className={classes.separator} />
							<Button color='inherit' onClick={logout}>
								Logout
							</Button>
						</div>
					) : (
						<div className={classes.logContent}>
							<Button color='inherit'>
								<Link to='/login'>Login</Link>
							</Button>
							<span className={classes.separator} />
							<Button color='inherit'>
								<Link to='/signup'>Signup</Link>
							</Button>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
