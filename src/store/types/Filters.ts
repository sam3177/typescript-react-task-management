import { TaskStatus } from './TaskStatus';

export default interface Filters {
	status?: TaskStatus;
	searchTerm?: string;
};
