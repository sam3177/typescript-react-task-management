import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
	createStyles({
		task: {
			display: 'flex',
			flexDirection: 'column',
			margin: '.5rem',
			boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
			'& > *': {
				textAlign: 'left',
			},
			[theme.breakpoints.down('sm')]: {
				width: '80%',
			margin: '.5rem auto',

			},
			[theme.breakpoints.up('md')]: {
				width: '45%',
			},
			[theme.breakpoints.up('lg')]: {
				width: '30%',
			},
		},
		separator: {
			width: '100%',
			height: 0,
			border: '0.5px solid rgb(214, 211, 211)',
		},
		deleteBtn: {
			height: '100%',
			color: 'red',
		},
		actions: {
			height: '2rem',
			display:'flex',
			justifyContent: 'space-between',
		},
		select: {
			width: '10rem',
			height: '2rem',
		},
	}),
);
