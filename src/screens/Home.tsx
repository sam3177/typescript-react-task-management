import React , {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Typography} from '@material-ui/core'
import Task from '../components/Task'
import {loadTasks} from '../store/tasks'
import NewTask from '../components/NewTask'
// import configureStore from '../store/configureStore';
import useStyles from '../styles/Home'


const Home = () => {
	const classes = useStyles();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadTasks());
  }, []);
	const tasks = useSelector((state:{entities:any}) => state.entities.tasks.list);


	return (
		<div className={classes.container}>
			<Typography variant="h3">
          Dashboard
        </Typography>
        <NewTask/>
        <div className={classes.taskList}>
      {tasks.map((task:any)=> <Task key={task.id} {...task}/>)}
        </div>
		</div>
	);
};

export default Home;
