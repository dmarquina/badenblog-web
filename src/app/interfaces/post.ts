import { Userprofile } from '../interfaces/userprofile';

export interface Post {
    idPost : number,
	postName : String,
	description : String,
	minAge : String,
	maxAge : Date,
	categories : String[]
}

export interface PostfeedResponse {
	content: Post[],
	last: false,
    totalPages: 2,
    totalElements: 12,
    size: 10,
    number: 0,
    sort: null,
    first: true,
    numberOfElements: 10
}