/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor, ControlGroup, FormBuilder, formDirectives, Validators} from "angular2/angular2";

import {Movie} from "../model/Movie";
import {MovieDbService} from "../service/MovieDbService";

@Component({
	selector: "movie-db",
	appInjector: [MovieDbService, FormBuilder]
})
@View({
	templateUrl: "component/view/movie-db.html",
	directives: [NgFor]
})
class MovieDbComponent {

	private _movies: Array<Movie>;
	movieForm: ControlGroup;

	constructor(movieDbService: MovieDbService, builder: FormBuilder) {
		this._movies = movieDbService.getMovies();
		this.movieForm = builder.group({
			movieId: [""]
		});
	}

	get movies() {
		return this._movies;
	}

	addMovie(movieId: string) {
		var movie = new Movie(movieId);
		this._movies.push(movie);
	}
}

bootstrap(MovieDbComponent);