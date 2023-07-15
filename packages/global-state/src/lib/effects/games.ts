import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { State } from '../state/global-state';
import { GamesService } from '../services/games/games.service';
import { catchError, exhaustMap, map, of, switchMap, withLatestFrom } from 'rxjs';
import { GetGames, GetGamesError, GetGamesSuccess } from '../actions';

@Injectable()
export class GamesEffects {
  constructor(
    private actions$: Actions,
    private gamesService: GamesService,
    private store: Store<State>
  ) {}

    getGames$ = createEffect(() =>
      this.actions$.pipe(
        ofType(GetGames),
        withLatestFrom(this.store.select(({ games }) => games.query)),
        exhaustMap(([, queryParams]) =>
          this.gamesService.getGames(queryParams).pipe(
            map((response) => GetGamesSuccess({ payload: response })),
            catchError((error) => of(GetGamesError({ payload: { error } })))
          )
        )
      )
    );
}
