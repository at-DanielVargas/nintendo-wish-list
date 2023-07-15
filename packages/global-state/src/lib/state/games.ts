import { EOrderTypes, Game, NetworkState } from '@maxi/shared-types';

export interface GamesState {
  networkState: NetworkState;
  games: Game[];
  totalPages: number;
  query: {
    page: number;
    page_size: number;
    sort: 'name';
    order: EOrderTypes;
  };
}

export const InitialGamesState: GamesState = {
  games: [],
  totalPages: 0,
  query: {
    page: 1,
    page_size: 15,
    sort: 'name',
    order: EOrderTypes.ASC,
  },
  networkState: NetworkState.IDLE,
};
