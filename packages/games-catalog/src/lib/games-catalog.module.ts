import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gamesCatalogRoutes } from './lib.routes';
import { GamesCatalogComponent } from './games-catalog.component';
import { NwlUiModule } from '@maxi/nwl-ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(gamesCatalogRoutes),
    NwlUiModule,
  ],
  declarations: [GamesCatalogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GamesCatalogModule {}
