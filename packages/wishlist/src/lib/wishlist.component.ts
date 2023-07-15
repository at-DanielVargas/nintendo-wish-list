import { Component } from '@angular/core';
import { State } from '@maxi/global-state';
import { Game } from '@maxi/shared-types';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'maxi-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent {
  wishlist$: Observable<Game[]> = this.store.pipe(
    untilDestroyed(this),
    select(({ wishlist }) => wishlist.items)
  );

  constructor(private store: Store<State>) {}
}
