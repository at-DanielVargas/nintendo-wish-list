import { Component, HostListener, OnInit } from '@angular/core';
import {
  AddToWishlist,
  GetGames,
  RemoveFromWishlist,
  State,
} from '@maxi/global-state';
import { Game, NetworkState } from '@maxi/shared-types';
import { Store, select } from '@ngrx/store';
import { Observable, map, take, withLatestFrom } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'maxi-games-catalog',
  templateUrl: './games-catalog.component.html',
  styleUrls: ['./games-catalog.component.scss'],
})
export class GamesCatalogComponent implements OnInit {
  games$: Observable<Game[]> = this.store.pipe(
    untilDestroyed(this),
    select(({ games }) => games.games),
    withLatestFrom(
      this.store.pipe(
        untilDestroyed(this),
        select(({ wishlist }) => wishlist.items)
      )
    ),
    map(([games, wishList]) => {
      const markedGames = [...games.map((a) => ({ ...a, inWishlist: false }))];
      for (const targetItem of wishList) {
        const sourceItem = markedGames.find(
          (item) => item.id === targetItem.id
        );
        if (sourceItem) {
          sourceItem.inWishlist = true;
        }
      }
      return markedGames;
    })
  );

  networkStatus$: Observable<NetworkState> = this.store.pipe(
    untilDestroyed(this),
    select(({ games }) => games.networkState)
  );

  constructor(private store: Store<State>) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScroll = window.innerHeight + window.scrollY;
    const documentHeight = document.body.scrollHeight;
    console.log({ currentScroll, documentHeight });

    if (currentScroll >= documentHeight) {
      this.store
        .pipe(
          untilDestroyed(this),
          select(({ games }) => ({
            currentPage: games.query.page,
            totalPages: games.totalPages,
          })),
          take(1)
        )
        .subscribe(({ currentPage, totalPages }) => {
          let page = currentPage;
          if (currentPage < totalPages) {
            page++;
            this.store.dispatch(
              GetGames({
                payload: {
                  query: {
                    page,
                  },
                },
              })
            );
          }
        });
    }
  }

  ngOnInit(): void {
    this.store.dispatch(GetGames({ payload: {} }));
  }

  sort(event: any): void {
    this.store.dispatch(
      GetGames({
        payload: {
          query: {
            sort: 'name',
            order: event.target.value,
          },
        },
      })
    );
  }

  addGameToWishlist(game: Game): void {
    this.store
      .pipe(
        take(1),
        select(({ wishlist }) => wishlist.items),
        map((list) => list.some((g) => g.id === game.id))
      )
      .subscribe((inList) => {
        if (inList) {
          this.store.dispatch(RemoveFromWishlist({ payload: { id: game.id } }));
        } else {
          this.store.dispatch(AddToWishlist({ payload: { game } }));
        }
      });
  }
}
