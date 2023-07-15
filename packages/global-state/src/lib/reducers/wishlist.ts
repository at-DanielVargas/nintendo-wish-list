import { createReducer, on } from '@ngrx/store';

import { InitialWishlistState } from '../state/wishlist';
import {
  AddToWishlist,
  ClearWishListState,
  RemoveFromWishlist,
} from '../actions';

export const WishListReducer = createReducer(
  InitialWishlistState,
  on(AddToWishlist, (state, action) => {
    const items = [...state.items];
    const idExists = items.some((item) => item.id === action.payload.game.id);
    if (!idExists) {
      items.push({ ...action.payload.game, inWishlist: true });
    }
    return {
      ...state,
      items,
    };
  }),
  on(RemoveFromWishlist, (state, action) => ({
    ...state,
    items: state.items.filter((item) => item.id !== action.payload.id),
  })),
  on(ClearWishListState, (state) => ({ ...state, ...InitialWishlistState }))
);
