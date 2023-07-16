import { RouterTestingModule } from '@angular/router/testing';
import { MockData } from '@maxi/shared-types';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { GamesCatalogComponent } from './games-catalog.component';
import {
  GameCardComponent,
  GamesGridComponent,
  NwlUiModule,
} from '@maxi/nwl-ui';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  AddToWishlist,
  GamesService,
  InitialGamesState,
  WishListReducer,
  reducers,
  metaReducers,
  InitialWishlistState,
  GetGames,
  GetGamesSuccess,
} from '@maxi/global-state';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('GamesCatalogComponent', () => {
  let component: GamesCatalogComponent;
  let gamesGrid: GamesGridComponent;
  let fixture: ComponentFixture<GamesCatalogComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NwlUiModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers, { metaReducers }),
      ],
      declarations: [GamesCatalogComponent],
      providers: [
        provideMockStore({ initialState: InitialGamesState }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesCatalogComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    store.setState({
      games: { ...InitialGamesState },
      wishlist: { ...InitialWishlistState },
    });
    gamesGrid = fixture.debugElement.query(
      By.directive(GamesGridComponent)
    ).componentInstance;
    fixture.detectChanges();
  });

  it('should display ads banner', () => {
    const bannerEelement =
      fixture.debugElement.nativeElement.getElementsByTagName('NWL-UI-BANNER');
    expect(bannerEelement).toBeDefined();
  });

  it('should display 15 elements on load', fakeAsync(() => {
    store.setState({
      games: {
        games: MockData.games
          .map((game) => ({ ...game, inWishlist: false }))
          .slice(0, 15),
      },
      wishlist: {
        items: [],
      },
    });
    component.games$.subscribe((games) => {
      expect(games).toEqual(
        MockData.games
          .map((game) => ({ ...game, inWishlist: false }))
          .slice(0, 15)
      );
      fixture.detectChanges();
      const gameCardElements = Array.from(
        fixture.debugElement.nativeElement.getElementsByTagName(
          'NWL-UI-GAME-CARD'
        )
      ).length;
      expect(gameCardElements).toEqual(15);
    });
    tick();
  }));

  it('should add 15 more elements on page scroll to bottom of cards', () => {
    store.setState({
      games: {
        games: MockData.games
          .map((game) => ({ ...game, inWishlist: false }))
          .slice(0, 15),
        query: {
          totalPages: 3,
          page: 1,
        },
      },
      wishlist: {
        items: [],
      },
    });

    component.games$.subscribe((games) => {
      jest.spyOn(component, 'onScroll');
      jest.spyOn(store, 'dispatch');
      const scrollEvent = new Event('scroll');
      window.dispatchEvent(scrollEvent);
      expect(component.onScroll).toHaveBeenCalled();
      Object.defineProperty(window, 'innerHeight', { value: 500 });
      Object.defineProperty(window, 'scrollY', { value: 1000 });
      Object.defineProperty(document.body, 'scrollHeight', { value: 1500 });
      const storeResponse = { currentPage: 1, totalPages: 2 };
      jest.spyOn(store, 'pipe').mockReturnValue(of(storeResponse));
      component.onScroll();
      expect(store.dispatch).toHaveBeenCalledWith(
        GetGames({
          payload: { query: { page: storeResponse.currentPage + 1 } },
        })
      );
    });
  });

  it('should order games by asc sort order', () => {
    const fakeEvent = { target: { value: 'asc' } };
    jest.spyOn(component, 'sort');
    gamesGrid.changeSortOrder.emit(fakeEvent);
    expect(component.sort).toHaveBeenCalledWith(fakeEvent);
  });

  it('should order games by desc sort order', () => {
    const fakeEvent = { target: { value: 'desc' } };
    jest.spyOn(component, 'sort');
    gamesGrid.changeSortOrder.emit(fakeEvent);
    expect(component.sort).toHaveBeenCalledWith(fakeEvent);
  });

  it('should add game to wishlist state when like button is clicked', () => {
    const game = MockData.games[3];
    jest.spyOn(component, 'addGameToWishlist');
    jest.spyOn(store, 'dispatch');
    gamesGrid.gameLike.emit(game);
    expect(component.addGameToWishlist).toHaveBeenCalledWith(game);
    expect(store.dispatch).toHaveBeenCalledWith(
      AddToWishlist({ payload: { game } })
    );
  });
});
