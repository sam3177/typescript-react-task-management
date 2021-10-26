import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
	createStyles({
    container: {
			// minWidth: '140px',
      display: 'flex',
      justifyContent: 'flex-end',
			[theme.breakpoints.down('sm')]: {
				width: '70px',
			},
			[theme.breakpoints.up('md')]: {
				width: '25%',
				},
			// [theme.breakpoints.up('lg')]: {
			// 	width: '30%',
			// },
    },
		form: {
			display: 'flex',
			flexDirection: 'column',
			width: '70%',
			margin: '2rem auto',
			'& > *': {
				margin: '5px!important',
				width: '97%',
			},
		},
		modalBox: {
			position: 'absolute',
			top: '30%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: 400,
			backgroundColor: 'white',
			// border: '2px solid #000',
			borderRadius: '5px',
			padding: '1rem',
		},
		newTaskBtn: {
			position: 'absolute',
			right: '0',
      height: '2rem'
		},
	}),
);
