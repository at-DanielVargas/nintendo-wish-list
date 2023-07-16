import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesGridComponent } from './games-grid.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SelectComponent } from '../../atoms';

describe('GamesGridComponent', () => {
  let component: GamesGridComponent;
  let fixture: ComponentFixture<GamesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesGridComponent, SelectComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
