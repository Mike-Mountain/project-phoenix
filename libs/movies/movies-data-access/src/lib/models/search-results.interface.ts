import { ApiDetails, ApiRatings, ApiResultsModel, ApiSingeResultModel } from './api-details.interface';

export interface Title {
  title: string;
  subtitle: string;
}

export class SingleResult {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;

  constructor(params: ApiSingeResultModel) {
    this.title = params.Title;
    this.year = params.Year;
    this.imdbID = params.imdbID;
    this.type = params.Type;
    this.poster = params.Poster;
  }
}

export class ResultsList {
  search: SingleResult[] | undefined;
  totalResults: number | undefined;
  response: string | undefined;

  constructor(params: ApiResultsModel) {
    if (params.Response === 'True') {
      this.search = params.Search.map(result => new SingleResult(result)) || [];
      this.totalResults = params.totalResults;
      this.response = params.Response;
    }
  }
}

export interface ResultRatings {
  source: string;
  value: string;
}

export interface SearchResults {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: ResultRatings[];
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbId: string;
  type: string;
  dvd: string;
  boxOffice: string;
  production: string;
  website: string;
  response: string;
}

// TODO: Move to functions in util lib
export function createResultsRatings(params: ApiRatings) {
  return {
    source: params.Source,
    value: params.Value
  }
}
export function createSearchResults(params: ApiDetails) {
  return {
    title: params.Title,
    year: params.Year,
    rated: params.Rated,
    runtime: params.Runtime,
    released: params.Released,
    genre: params.Genre,
    director: params.Director,
    actors: params.Actors,
    plot: params.Plot,
    language: params.Language,
    country: params.Country,
    awards: params.Awards,
    poster: params?.Poster,
    ratings: params.Ratings.map(rating => createResultsRatings(rating)) || [],
    metascore: params.Metascore,
    imdbRating: params.imdbRating,
    imdbVotes: params.imdbVotes,
    imdbId: params.imdbId,
    type: params.Type,
    dvd: params.DVD,
    boxOffice: params.BoxOffice,
    production: params.Production,
    website: params.Website,
    response: params.Response
  } as SearchResults;
}
