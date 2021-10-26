import React, { useState , useEffect} from 'react';
import {
	Box,
	Button,
	Typography,
	Modal,
	TextField,
} from '@mui/material';
import useStyles from '../styles/NewTask';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { useDispatch } from 'react-redux';
import { addTask } from '../store/tasks';

const NewTask = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ open, setOpen ] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 960;
  useEffect(() => {
   const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
	const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(addTask({ title, description }));
		handleClose()
		setTitle('');
		setDescription('');
	};
	return (
		<div className={classes.container}>
			<Button
				className={classes.newTaskBtn}
				variant='outlined'
				onClick={handleOpen}>
				{width < breakpoint? <AddOutlinedIcon/>:'Add new task'}
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
