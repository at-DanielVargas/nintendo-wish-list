import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameListItemComponent } from './game-list-item.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonComponent } from '../../atoms';

describe('GameListItemComponent', () => {
  let component: GameListItemComponent;
  let fixture: ComponentFixture<GameListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameListItemComponent, ButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(GameListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
