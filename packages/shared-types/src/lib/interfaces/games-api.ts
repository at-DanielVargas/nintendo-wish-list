export interface GamesResponse {
  games: Game[];
  currentPage: number;
  totalPages: number;
  totalGames: number;
}

export interface Game {
  slug: string;
  name: string;
  playtime: number;
  platforms: Partial<Platform>[];
  stores: Store[];
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Partial<Rating>[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: Partial<AddedByStatus>;
  metacritic?: number | null;
  suggestions_count: number;
  updated: string;
  id: number;
  score: any;
  clip: any;
  tags: Tag[];
  esrb_rating: Partial<EsrbRating> | null;
  user_game: any;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  short_screenshots: ShortScreenshot[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  inWishlist?: boolean;
}

export interface Platform {
  platform: Platform2;
}

export interface Platform2 {
  id: number;
  name: string;
  slug: string;
}

export interface Store {
  store: Store2;
}

export interface Store2 {
  id: number;
  name: string;
  slug: string;
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

export interface EsrbRating {
  id: number;
  name: string;
  slug: string;
  name_en: string;
  name_ru: string;
}

export interface ShortScreenshot {
  id: number;
  image: string;
}

export interface ParentPlatform {
  platform: Platform3;
}

export interface Platform3 {
  id: number;
  name: string;
  slug: string;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}
