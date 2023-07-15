import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '@maxi/shared-types';

@Component({
  selector: 'nwl-ui-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent {
  @Input() wishlist: Game[] | null = [];
  @Output() unlikeGame: EventEmitter<Game> = new EventEmitter();
  @Output() buyGame: EventEmitter<Game> = new EventEmitter();
}
