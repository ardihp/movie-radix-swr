export interface MovieDetail {
  id: number;
  title: string;
  original_title?: string;
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  genre_ids: Array<number>;
  release_date: string;
  overview: string;
  vote_average: number;
  vote_count?: number;
  popularity?: number;
}
