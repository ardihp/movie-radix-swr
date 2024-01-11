export interface MovieDetail {
  id: number;
  title: string;
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  genre_ids: Array<number>;
  release_date: string;
  overview: string;
  vote_average: number;
}
