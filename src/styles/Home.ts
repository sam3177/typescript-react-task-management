import { createStyles, makeStyles } from '@material-ui/core/styles';


export default makeStyles(() =>
	createStyles({
		container: {
			// display: 'flex',
			// flexDirection: 'column',
			width: '70%',
			margin: '2rem auto',
			'& > *': {
				width: '100%',
			},
		},
		taskList: {
			boxSizing: 'border-box',
			width: '100%',
			margin: '2rem auto',
      display: 'flex',
			flexDirection: 'row',
      flexWrap: 'wrap',
			padding:'2rem',
      justifyContent: 'space-between',
			alignItems: 'flex-start',
			border:'1px solid rgba(25, 118, 210, 0.5)',
			borderRadius:'4px',
			overflow: 'scroll',
			height: '70vh',
			'&::-webkit-scrollbar' :{
				display:'none'
			}
		},
		header:{
			boxSizing: 'border-box',

			width: '100%',
			margin:0,
			display:'flex',
			justifyContent: 'space-between',
			border:'1px solid rgba(25, 118, 210, 0.5)',
			padding:'1rem'
		},
		title:{
			margin: '1rem 0'
		}
	}),
);