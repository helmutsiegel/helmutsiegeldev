import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCleanCodePrinciplesComponent } from './favorite-clean-code-principles.component';

describe('FavoriteCleanCodePrinciplesComponent', () => {
  let component: FavoriteCleanCodePrinciplesComponent;
  let fixture: ComponentFixture<FavoriteCleanCodePrinciplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteCleanCodePrinciplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCleanCodePrinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
