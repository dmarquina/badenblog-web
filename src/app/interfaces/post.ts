import { Userprofile } from '../interfaces/userprofile';

export interface IPost {
    idPost : number,
	postName : String,
	description : String,
	minAge : String,
	maxAge : Date,
	categories : String[]
}

export interface IPostfeed {
    content: IPost[],
	last: false,
    totalPages: 2,
    totalElements: 12,
    size: 10,
    number: 0,
    sort: null,
    first: true,
    numberOfElements: 10
}

export interface INewpost {
    title : String,
    description : String,
    minAge : String,
    materials: String[],
    categories: ICategory[]
}

export interface ICategory{
    idCategory:number,
    name:String,
    checked?:boolean;
}