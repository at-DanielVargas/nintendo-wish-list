import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '@maxi/shared-types';

@Component({
  selector: 'nwl-ui-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.scss'],
})
export class GameListItemComponent {
  @Input() game: Game | null = null;
  @Output() unlike: EventEmitter<boolean> = new EventEmitter();
  @Output() buyGame: EventEmitter<void> = new EventEmitter();
}
