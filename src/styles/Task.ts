import { createStyles, makeStyles } from '@material-ui/core/styles';


export default  makeStyles(() =>
	createStyles({
		task: {
			display: 'flex',
			flexDirection: 'column',
			width: '40%',
			margin: '2rem',
      '& > *': {
        textAlign: 'left'
      }
		},
    separator: {
      width: '100%',
      height: 0,
      border: '0.5px solid rgb(214, 211, 211)',

    }
		
	}),
);