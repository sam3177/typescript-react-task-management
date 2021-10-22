import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
	createStyles({
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
		paper: {
			width: '50%',
			padding: '3rem',
			margin: '10rem auto',
		},
		error: {
			padding: '10px!important',
			margin: 0,
		},
		modalBox: {
			position: 'absolute',
			top: '30%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: 400,
			backgroundColor: 'white',
			// border: '2px solid #000',
      borderRadius:'5px',
			padding: '1rem',
		},
    newTaskBtn: {
      position: 'absolute',
      right: '0'
    },
    newFormModal: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end'
    }
	}),
);
