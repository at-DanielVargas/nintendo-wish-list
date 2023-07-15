import { RouterTestingModule } from '@angular/router/testing';
import { MockData } from '@maxi/shared-types';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { GamesCatalogComponent } from './games-catalog.component';
import { GamesGridComponent, NwlUiModule } from '@maxi/nwl-ui';
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
  let gamesService: GamesService;

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
        {
          provide: GamesService,
          useValue: {
            getGames: jest.fn((query: string) => of({ games: MockData.games })),
          },
        },
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
    gamesService = TestBed.inject(GamesService) as jest.Mocked<GamesService>;
    // gamesService.getGames.
    store.setState({
      games: { ...InitialGamesState },
      wishlist: { ...InitialWishlistState },
    });
    gamesGrid = fixture.debugElement.query(
      By.directive(GamesGridComponent)
    ).componentInstance;
    fixture.detectChanges();
  });

  it('should dispatch games request in ngOninit', () => {
    jest.spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(GetGames({ payload: {} }));
  });

  it('should display 15 elements on load', () => {
    store.setState({
      games: {
        games: MockData.games.map((game) => ({ ...game, inWishlist: false })),
      },
    });

    // fixture.debugElement.query()

    component.games$.subscribe((games) => {
      expect(games).toEqual(
        MockData.games.map((game) => ({ ...game, inWishlist: false }))
      );
    });
  });

  it('order games asc mode', () => {
    const fakeEvent = { target: { value: 'asc' } };
    jest.spyOn(component, 'sort');
    gamesGrid.changeSortOrder.emit(fakeEvent);
    expect(component.sort).toHaveBeenCalledWith(fakeEvent);
  });

  it('order games desc mode', () => {
    const fakeEvent = { target: { value: 'desc' } };
    jest.spyOn(component, 'sort');
    gamesGrid.changeSortOrder.emit(fakeEvent);
    expect(component.sort).toHaveBeenCalledWith(fakeEvent);
  });

  it('should add game to wishlist state', () => {
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
