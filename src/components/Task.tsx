import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, FormControl, Select, MenuItem } from '@mui/material';
import useStyles from '../styles/Task';
import { changeTaskStatus, deleteTask } from '../store/tasks';
import {TaskStatus} from '../store/types/TaskStatus';


const Task = (props: any) => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const { title, description, id } = props;
	
	const handleChange = (event: any) => {
		dispatch(changeTaskStatus(id, event.target.value ));
	};
	const handleDeleteTask = () => {
		dispatch(deleteTask(id));
	};
	return (
		<Card className={classes.task}>
			<CardContent>
				<Typography variant='h5'>{title}</Typography>
				<div className={classes.separator} />
				<Typography>{description}</Typography>
			</CardContent>
			<CardActions className={classes.actions}>
				<Box>
					<FormControl fullWidth>
						<Select
							className={classes.select}
							labelId='status'
							id='statusSelectt'
							value={props.status}
							onChange={handleChange}>
							<MenuItem value={TaskStatus.OPEN}>Open</MenuItem>
							<MenuItem value={TaskStatus.IN_PROGRESS}>In Progress</MenuItem>
							<MenuItem value={TaskStatus.DONE}>Done</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Button
					className={classes.deleteBtn}
					onClick={handleDeleteTask}
					variant='outlined'>
					<DeleteForeverIcon />
				</Button>
			</CardActions>
		</Card>
	);
};

export default Task;
