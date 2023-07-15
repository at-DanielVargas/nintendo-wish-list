import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  {
    path: 'games',
    loadChildren: () =>
      import('@maxi/games-catalog').then((module) => module.GamesCatalogModule),
  },
  {
    path: 'wishlist',
    loadChildren: () =>
      import('@maxi/wishlist').then((module) => module.WishlistModule),
  },
];
