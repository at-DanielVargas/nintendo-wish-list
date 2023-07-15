import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { GamesState } from './games';
import { GamesReducer } from '../reducers/games';
import { WishlistState } from './wishlist';
import { WishListReducer } from '../reducers';

export interface State {
  games: GamesState;
  wishlist: WishlistState;
}

export const reducers: ActionReducerMap<State> = {
  games: GamesReducer,
  wishlist: WishListReducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['wishlist'], rehydrate: true })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
];
