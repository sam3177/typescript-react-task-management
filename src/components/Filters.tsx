import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	Button,
	FormControl,
	Select,
	MenuItem,
	TextField,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { TaskStatus } from '../store/types/TaskStatus';
import useStyles from '../styles/Filters';
import { loadTasks } from '../store/tasks';
import FiltersType from '../store/types/Filters';

const Filters = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [ status, setStatus ] = useState(undefined);
	const [ searchTerm, setSearchTerm ] = useState('');
	const [ width, setWidth ] = useState(window.innerWidth);
	const breakpoint = 960;
	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		// subscribe to window resize event "onComponentDidMount"
		window.addEventListener('resize', handleResizeWindow);
		return () => {
			// unsubscribe "onComponentDestroy"
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);
	const handleSubmit = () => {
		let filters: FiltersType = {};
		if (status) filters.status = status;
		if (searchTerm) filters.searchTerm = searchTerm;
		dispatch(loadTasks(filters));
		setSearchTerm('')
	};
	return (
		<div className={classes.container}>
			<FormControl className={classes.formControl}>
				<Select
					className={classes.select}
					labelId='status'
					id='statusSelect'
					value={status ? status : ''}
					onChange={(e: any) => setStatus(e.target.value)}>
					<MenuItem value=''>Status</MenuItem>
					<MenuItem value={TaskStatus.OPEN}>Open</MenuItem>
					<MenuItem value={TaskStatus.IN_PROGRESS}>
						In Progress
					</MenuItem>
					<MenuItem value={TaskStatus.DONE}>Done</MenuItem>
				</Select>
			</FormControl>
			<TextField
				className={classes.textField}
				label='Search'
				variant='outlined'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<Button
				className={classes.newTaskBtn}
				variant='outlined'
				onClick={handleSubmit}>
				{width < breakpoint ? <SearchOutlinedIcon /> : 'Search'}
			</Button>
		</div>
	);
};

export default Filters;
