import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareEngineerVocabularyComponent } from './software-engineer-vocabulary.component';

describe('SoftwareEngineerVocabularyComponent', () => {
  let component: SoftwareEngineerVocabularyComponent;
  let fixture: ComponentFixture<SoftwareEngineerVocabularyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareEngineerVocabularyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareEngineerVocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
