import { Game } from "@maxi/shared-types";

export interface WishlistState {
  items: Game[];
}

export const InitialWishlistState: WishlistState = {
  items: [],
};
