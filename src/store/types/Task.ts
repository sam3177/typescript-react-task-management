import {TaskStatus} from './TaskStatus'

export default interface Task {
  title:string;
  description:string;
  status: TaskStatus;
  id:string;
}