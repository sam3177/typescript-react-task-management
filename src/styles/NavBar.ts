import {
	createStyles,
	makeStyles,
	Theme,
} from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
	createStyles({
		logContent: {
			display: 'flex',
			width: 'fitContent',
			marginRight: 0,
			'& a': {
				textDecoration: 'none',
				color: 'white',
			},
		},
		separator: {
			border: '1px solid rgb(185, 185, 185)',
		},
		toolBar: {
			display: 'flex',
			justifyContent: 'space-between',
		},
	}),
);
