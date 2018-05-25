import { Userprofile } from '../interfaces/userprofile';

export interface IPost {
    id : number,
	name : String,
	description : String,
	minAge : String,
    categories : String[]
    creationDate: Date
}

export interface Post {
	name?: String,
	description?: String,
    minAge?: number,
    creationDate?: Date,
    categories?: String[],
    materials?: String[]
}

export interface INewpost {
    name : String,
    description : String,
    minAge : number,
    materials: String[],
    categories: ICategory[]
}
