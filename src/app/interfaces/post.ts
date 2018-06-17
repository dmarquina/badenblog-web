import { Userprofile } from '../interfaces/userprofile';
import { ICategory } from './category';

export interface IPostFeed {
    id : number,
	name : string,
	description : string,
	minAge : string,
    categories : string[]
    creationDate: Date
}

export interface IPost {
	name?: string,
	description?: string,
    minAge?: number,
    creationDate?: Date,
    categories?: string[],
    materials?: string[]
}

export interface INewpost {
    name : string,
    description : string,
    minAge : number,
    materials: string[],
    categories: ICategoryNewPost[]
}

export interface ICategoryNewPost{
    id:string,
    name:string
}