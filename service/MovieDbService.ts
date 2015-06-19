/// <reference path="../typings/jquery/jquery.d.ts" />

import {Movie} from "../model/Movie";

export class MovieDbService {
	
	private _movies: Array<Movie>;
	
	constructor() {
		this._movies = new Array<Movie>();
		this._movies.push(new Movie("The Matrix (1999)"));
		this._movies.push(new Movie("The Incredibles (2004)"));
		this._movies.push(new Movie("Blood Diamond (2004)"));
	}
	
	getMovies(): Array<Movie> {
		return this._movies;
	}
	
	addMovie(movie: Movie) {
		this._movies.push(movie);
	}
	
	
}