import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesListComponent } from './games-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NwlUiModule } from '../../nwl-ui.module';
import { ButtonComponent } from '../../atoms';

describe('GamesListComponent', () => {
  let component: GamesListComponent;
  let fixture: ComponentFixture<GamesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesListComponent, ButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
