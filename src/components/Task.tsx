import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
} from '@material-ui/core';
import useStyles from '../styles/Task';

const Task = (props: any) => {
	const classes = useStyles();
	const { title, description } = props;
	return (
		<Card className={classes.task}>
			<CardContent>
				<Typography variant='h3'>{title}</Typography>
				<div className={classes.separator} />
				<Typography variant='h5'>{description}</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Learn More</Button>
			</CardActions>
		</Card>
	);
};

export default Task;
