import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItManagerComponent } from './it-manager.component';

describe('ItManagerComponent', () => {
  let component: ItManagerComponent;
  let fixture: ComponentFixture<ItManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
