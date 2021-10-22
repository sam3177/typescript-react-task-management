import { createStyles, makeStyles } from '@material-ui/core/styles';


export default makeStyles(() =>
	createStyles({
		container: {
			// display: 'flex',
			// flexDirection: 'column',
			width: '70%',
			margin: '2rem auto',
			'& > *': {
				margin: '5px!important',
				width: '97%',
			},
		},
		taskList: {
			width: '100%',
			margin: '10rem auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
		},
	}),
);