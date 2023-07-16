import {
  Component,
  ComponentRef,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Game } from '@maxi/shared-types';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'nwl-ui-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.scss'],
})
export class GameListItemComponent {
  @Input() game: Game | null = null;
  @Output() unlike: EventEmitter<boolean> = new EventEmitter();
  @Output() buyGame: EventEmitter<void> = new EventEmitter();

  @ViewChild(DialogComponent, { static: true, read: ElementRef })
  dialog!: ElementRef<DialogComponent>;

  closeDialog(): void {
    if (this.dialog) {
      this.dialog.nativeElement.close();
      this.buyGame.emit();
    }
  }
}
