import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfieldsComponent } from './allfields.component';

describe('AllfieldsComponent', () => {
  let component: AllfieldsComponent;
  let fixture: ComponentFixture<AllfieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllfieldsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllfieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
