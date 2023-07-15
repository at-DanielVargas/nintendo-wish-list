import { Game, GamesResponse } from '@maxi/shared-types';
import { createAction, props } from '@ngrx/store';

export enum EGameActions {
  GET = '@games/get',
  GET_SUCCESS = '@games/getSuccess',
  GET_ERROR = '@games/getError',
  SORT_BY = '@games/sortBy',
  CLEAR = '@games/clear',
}

export const GetGames = createAction(
  EGameActions.GET,
  props<{ payload: { query?: Record<string, any> } }>()
);

export const GetGamesSuccess = createAction(
  EGameActions.GET_SUCCESS,
  props<{ payload: GamesResponse }>()
);

export const GetGamesError = createAction(
  EGameActions.GET_ERROR,
  props<{ payload: { error: any } }>()
);

export const ClearGamesState = createAction(EGameActions.CLEAR);
