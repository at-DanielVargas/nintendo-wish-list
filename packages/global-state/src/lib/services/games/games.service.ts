import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game, GamesResponse } from '@maxi/shared-types';

@Injectable({
  providedIn: 'root',
})
export class GamesService extends BaseService {
  constructor(private client: HttpClient) {
    super(client);
  }

  getGames(query?: any): Observable<GamesResponse> {
    return this.get({ endpoint: '/games', query });
  }

  getGameById(gameId: number): Observable<Game> {
    return this.get({ endpoint: `/games/${gameId}` });
  }
}
