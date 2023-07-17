import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RemoveFromWishlist, State } from '@maxi/global-state';
import { Game } from '@maxi/shared-types';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as bootstrap from 'bootstrap';
@UntilDestroy()
@Component({
  selector: 'maxi-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  wishlist$: Observable<Game[]> = this.store.pipe(
    untilDestroyed(this),
    select(({ wishlist }) => wishlist.items)
  );

  buyedGame!: Game | null;
  dialog!: bootstrap.Modal;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.dialog = new bootstrap.Modal('#dialog', {
      backdrop: 'static',
    });
  }

  removeFromWishlist(game: Game): void {
    this.store.dispatch(RemoveFromWishlist({ payload: { id: game.id } }));
  }

  displayDialog(game: Game): void {
    this.buyedGame = game;
    this.dialog.show();
  }

  closeDialog() {
    if (this.buyedGame)
      this.store.dispatch(
        RemoveFromWishlist({ payload: { id: this.buyedGame.id } })
      );
    this.buyedGame = null;
    this.dialog.hide();
  }
}
