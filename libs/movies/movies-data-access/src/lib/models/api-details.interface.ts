// The api returns data capitalized instead of in camelCase.
// This could lead to errors because I'm not used to using objects like that.
// Converting back to camelCase makes it easier to not have to worry about it.

export interface ApiResultsModel {
  Search: ApiSingeResultModel[];
  totalResults: number;
  Response: string;
}

export interface ApiSingeResultModel {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface ApiDetails {
  Title: string;
  Year: string;
  Rated: string;
  Runtime: string;
  Released: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface ApiRatings {
  Source: string;
  Value: string;
}
