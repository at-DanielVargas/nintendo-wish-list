import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './atoms/input/input.component';
import { SelectComponent } from './atoms/select/select.component';
import { TextComponent } from './atoms/text/text.component';
import { ButtonComponent } from './atoms/button/button.component';
import { SearchInputComponent } from './molecules/search-input/search-input.component';
import { GameCardComponent } from './molecules/game-card/game-card.component';
import { BannerComponent } from './organisms/banner/banner.component';
import { GamesGridComponent } from './organisms/games-grid/games-grid.component';
import { GamesListComponent } from './organisms/games-list/games-list.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { FooterComponent } from './molecules/footer/footer.component';
import { LikeButtonComponent } from './molecules/like-button/like-button.component';
import { RouterModule } from '@angular/router';
import { GameListItemComponent } from './molecules/game-list-item/game-list-item.component';

const components = [
  InputComponent,
  SelectComponent,
  TextComponent,
  ButtonComponent,
  SearchInputComponent,
  GameCardComponent,
  BannerComponent,
  GamesGridComponent,
  GamesListComponent,
  NavbarComponent,
  FooterComponent,
  LikeButtonComponent,
  GameListItemComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...components],
  exports: [...components],
})
export class NwlUiModule {}
