import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { wishlistRoutes } from './lib.routes';
import { StoreModule } from '@ngrx/store';
import { NwlUiModule } from '@maxi/nwl-ui';
import { WishlistComponent } from './wishlist.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(wishlistRoutes),
    StoreModule,
    NwlUiModule,
  ],
  declarations: [WishlistComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WishlistModule {}
