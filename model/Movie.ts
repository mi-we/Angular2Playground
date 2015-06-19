
export class Movie {
	
	constructor(private _movieId: string) {
	}
	
	get movieId(): string {
		return this._movieId;
	}
}