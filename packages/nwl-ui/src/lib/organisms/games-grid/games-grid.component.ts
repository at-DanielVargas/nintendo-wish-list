import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Game, NetworkState } from '@maxi/shared-types';
import { SelectOption } from '../../atoms/select/interfaces';

@Component({
  selector: 'nwl-ui-games-grid',
  templateUrl: './games-grid.component.html',
  styleUrls: ['./games-grid.component.scss'],
})
export class GamesGridComponent {
  networkStatus = NetworkState;
  @Input() games: Game[] | null = [];
  @Input() status: NetworkState | null = NetworkState.IDLE;
  @Output() gameLike: EventEmitter<Game> = new EventEmitter();
  @Output() changeSortOrder: EventEmitter<any> = new EventEmitter();

  options: SelectOption[] = [
    {
      label: 'Titulo (A-Z)',
      value: 'asc',
    },
    {
      label: 'Titulo (Z-A)',
      value: 'desc',
    },
  ];
  
}
