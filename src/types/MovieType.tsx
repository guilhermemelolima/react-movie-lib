import { GenreType } from "./GenreType";

export type MovieType = {
	id:number;
	title: string;
	poster_path: string;
	backdrop_path:string;
	vote_average: string;
	tagline: string;
	budget: number;
	revenue: number;
	runtime: string;
	overview: string;
	genres: GenreType[];
}
