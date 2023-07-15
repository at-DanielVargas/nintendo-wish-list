import { Game } from '@maxi/shared-types';
import { createAction, props } from '@ngrx/store';

export enum EWishListActions {
  ADD_TO_WISHLIST = '@wishlist/addToWishlist',
  REMOVE_FROM_WISHLIST = '@wishlist/removeFromWishlist',
  CLEAR = '@wishlist/clear',
}

export const AddToWishlist = createAction(
  EWishListActions.ADD_TO_WISHLIST,
  props<{ payload: { game: Game } }>()
);

export const RemoveFromWishlist = createAction(
  EWishListActions.REMOVE_FROM_WISHLIST,
  props<{ payload: { id: number } }>()
);

export const ClearWishListState = createAction(EWishListActions.CLEAR);
