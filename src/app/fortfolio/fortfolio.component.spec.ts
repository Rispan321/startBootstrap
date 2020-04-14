import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortfolioComponent } from './fortfolio.component';

describe('FortfolioComponent', () => {
  let component: FortfolioComponent;
  let fixture: ComponentFixture<FortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
