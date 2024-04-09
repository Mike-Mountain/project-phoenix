export class Title {
  title: string;
  subtitle: string;

  constructor(params: Title) {
    this.title = params.title;
    this.subtitle = params.subtitle;
  }
}

export type SearchType = 'i' | 't' | 's';
// TODO: Add search parameters for better search experience.
export type mediaType = 'movie' | 'series' | 'episode';
export type plotType = 'short' | 'full';
