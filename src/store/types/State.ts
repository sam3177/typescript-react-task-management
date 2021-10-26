import User from './User'
import Task from './Task'


export default interface State {
  user: {data:User};
  entities:{
    tasks:{
      list:Task[]
    }
  }
}