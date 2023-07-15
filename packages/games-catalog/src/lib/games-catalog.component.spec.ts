import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesCatalogComponent } from './games-catalog.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { GamesService } from '@maxi/global-state';

describe('GamesCatalogComponent', () => {
  let component: GamesCatalogComponent;
  let fixture: ComponentFixture<GamesCatalogComponent>;
  let store: MockStore;
  let gameService: GamesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
