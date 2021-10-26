import { createStyles, makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) =>
	createStyles({
		container: {
			// width: '90%',
			display: 'flex',
			flexDirection: 'row',
      // justifyContent: 'flex-start',
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      justifyContent: 'space-between',
      },
      [theme.breakpoints.down('sm')]: {
        width: '90%',

      },
      [theme.breakpoints.up('sm')]: {
        width: '90%',
      // justifyContent: 'flex-start',

      },
      [theme.breakpoints.up('lg')]: {
        width: '50%',
      },
		},
		select: {
			width: '10rem',
			height: '2rem',
		},
		formControl: {
      '& label': {
        top: '-.7rem',
			},
			'& label.Mui-focused': {
        top: 0,
			},
		},
		textField: {
      height: '2rem',
			marginLeft: '1rem!important',
      '& input': {
        padding: 0,
        margin: '0 5px!important',
        height: '2rem',
      },
      '& label': {
        top: '-.7rem',
			},
			'& label.Mui-focused': {
        top: 0,
			},
		},
		newTaskBtn: {
			position: 'absolute',
			right: '0',
			height: '2rem',
			marginLeft: '1rem!important',
		},
	}),
);
