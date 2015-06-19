/// <reference path="../typings/jquery/jquery.d.ts" />

import {Movie} from "../model/Movie";

export class MovieDbService {
	
	constructor() {
	}
	
	getMovies(): Array<Movie> {
		
		var movies = new Array<Movie>();
		
		movies.push(new Movie("The Matrix (1999)"));
		movies.push(new Movie("The Incredibles (2004)"));
		movies.push(new Movie("Blood Diamond (2004)"));
		return movies;
	}
}