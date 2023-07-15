import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '@maxi/shared-types';

@Component({
  selector: 'nwl-ui-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent {
  @Input() game: Game | null = null;
  @Output() like: EventEmitter<boolean> = new EventEmitter();
}
