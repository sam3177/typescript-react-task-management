import React, { useState } from 'react';
import {
	Box,
	Button,
	Typography,
	Modal,
	Alert,
	TextField,
} from '@mui/material';
import useStyles from '../styles/Form';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/tasks';

const NewTask = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [ open, setOpen ] = useState(false);
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ error, setError ] = useState([]);
	const [ isError, setIsError ] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(addTask({ title, description }));
	};
	return (
		<div className={classes.newFormModal}>
			<Button
				className={classes.newTaskBtn}
				variant='outlined'
				onClick={handleOpen}>
				Add new task
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box className={classes.modalBox}>
					<Typography variant='h4' align='center'>
						Create a task
					</Typography>
					<form
						className={classes.form}
						noValidate={true}
						onSubmit={submitForm}>
						{isError ? (
							<Alert className={classes.error} severity='error'>
								{<p>{error}</p>}
							</Alert>
						) : null}

						<TextField
							label='Title'
							variant='outlined'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<TextField
							label='Description'
							variant='outlined'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
						<Button variant='contained' color='primary' type='submit'>
							Add task
						</Button>
					</form>
				</Box>
			</Modal>
		</div>
	);
};

export default NewTask;
