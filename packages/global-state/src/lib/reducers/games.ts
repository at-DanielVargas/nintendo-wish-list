import { createReducer, on } from '@ngrx/store';
import { InitialGamesState } from '../state/games';
import {
  AddToWishlist,
  GetGames,
  GetGamesSuccess,
  RemoveFromWishlist,
} from '../actions';
import { NetworkState } from '@maxi/shared-types';

export const GamesReducer = createReducer(
  InitialGamesState,
  on(GetGames, (state, action) => {
    let games: any[];
    let query = { ...state.query };

    if (action.payload.query && 'sort' in action.payload.query) {
      games = [];
      query = {
        ...state.query,
        ...action.payload.query,
        page: 1,
      };
    } else {
      games = [...state.games];
      query = {
        ...state.query,
        ...action.payload.query,
      };
    }

    return {
      ...state,
      networkState: NetworkState.PENDING,
      games,
      query,
    };
  }),
  on(GetGamesSuccess, (state, action) => {
    return {
      ...state,
      networkState: NetworkState.IDLE,
      games: [...state.games, ...action.payload.games],
      totalPages: action.payload.totalPages,
    };
  }),
  on(AddToWishlist, (state, action) => {
    const games = [...state.games].map((game) =>
      game.id === action.payload.game.id ? { ...game, inWishlist: true } : game
    );
    return {
      ...state,
      games,
    };
  }),
  on(RemoveFromWishlist, (state, action) => {
    const games = [...state.games].map((game) =>
      game.id === action.payload.id ? { ...game, inWishlist: false } : game
    );
    return {
      ...state,
      games,
    };
  })
);
