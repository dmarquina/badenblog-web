import { IPostDisplay } from './post';

export interface IScheduleFeed {
	name : string,
	description : string,
    applicationDate : string,
	posts : IPostDisplay[]
}
