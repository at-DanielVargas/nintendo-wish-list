import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';
import { WishlistComponent } from './wishlist.component';
import { ButtonComponent, GamesListComponent, NwlUiModule } from '@maxi/nwl-ui';
import { Store, StoreModule } from '@ngrx/store';
import {
  InitialGamesState,
  InitialWishlistState,
  RemoveFromWishlist,
  State,
  metaReducers,
  reducers,
} from '@maxi/global-state';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Game, MockData } from '@maxi/shared-types';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let gamesList: GamesListComponent;
  let fixture: ComponentFixture<WishlistComponent>;
  let store: MockStore;

  const wishlistState: Game[] = MockData.games
    .sort(() => 0.5 - Math.random())
    .slice(0, 7)
    .map((game) => ({ ...game, inWishlist: true }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NwlUiModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers, { metaReducers }),
      ],
      declarations: [WishlistComponent],
      providers: [provideMockStore({ initialState: InitialWishlistState })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    store.setState({
      games: { ...InitialGamesState },
      wishlist: { ...InitialWishlistState },
    });
    gamesList = fixture.debugElement.query(
      By.directive(GamesListComponent)
    ).componentInstance;
    fixture.detectChanges();
  });

  beforeAll(() => {
    HTMLDialogElement.prototype.show = jest.fn();
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();
  });

  it('should display selected games in catalog screen', fakeAsync(() => {
    store.setState({
      wishlist: {
        items: wishlistState,
      },
    });
    component.wishlist$.subscribe((games) => {
      expect(games).toEqual(wishlistState);
      fixture.detectChanges();
      const gameListItemElements = Array.from(
        fixture.debugElement.nativeElement.getElementsByTagName(
          'NWL-UI-GAME-LIST-ITEM'
        )
      ).length;
      expect(gameListItemElements).toEqual(wishlistState.length);
    });
    tick();
  }));

  it('should remove game from the list when like button is clicked', fakeAsync(() => {
    const fakeEvent = wishlistState[3];
    jest.spyOn(component, 'removeFromWishlist');
    jest.spyOn(store, 'dispatch');
    gamesList.unlikeGame.emit(fakeEvent);
    expect(component.removeFromWishlist).toHaveBeenCalledWith(fakeEvent);
    expect(store.dispatch).toHaveBeenCalledWith(
      RemoveFromWishlist({ payload: { id: fakeEvent.id } })
    );
    store.setState({
      wishlist: {
        items: wishlistState.filter((game) => game.id !== fakeEvent.id),
      },
    });
    component.wishlist$.subscribe((games) => {
      fixture.detectChanges();
      const gameListItemElements = Array.from(
        fixture.debugElement.nativeElement.getElementsByTagName(
          'NWL-UI-GAME-LIST-ITEM'
        )
      ).length;
      expect(gameListItemElements).toEqual(wishlistState.length - 1);
    });
    tick();
    flush();
  }));

  it('should remove game from store when buy button is clicked', fakeAsync(() => {
    component.ngOnInit();
    fixture.detectChanges();
    const gameToBuy: Game = wishlistState[3];
    jest.spyOn(component, 'displayDialog');
    jest.spyOn(component, 'closeDialog');
    jest.spyOn(store, 'dispatch');
    store.setState({
      wishlist: {
        items: wishlistState,
      },
    });
    gamesList.buyGame.emit(gameToBuy);
    expect(component.displayDialog).toHaveBeenCalledWith(gameToBuy);
    component.displayDialog(gameToBuy);
    fixture.detectChanges();
    tick(300);
    const dialogElement = fixture.debugElement.query(By.css('.modal'));
    expect(dialogElement.classes).toStrictEqual({
      modal: true,
      fade: true,
      show: true,
    });

    const dialogCloseButton = dialogElement.query(
      By.directive(ButtonComponent)
    );
    dialogCloseButton.nativeElement.click();
    fixture.detectChanges();
    expect(component.closeDialog).toBeCalled();
    expect(store.dispatch).toHaveBeenCalledWith(
      RemoveFromWishlist({ payload: { id: gameToBuy.id } })
    );
    flush();
  }));

  it('should display empty state message if not games in wishlist global store', () => {
    const element = fixture.debugElement.query(By.css('.nocontent'));
    const message = element.nativeElement.textContent.trim();
    expect(message).toEqual('Aún no has agregado nada a tu lista deseos.');
  });
});
