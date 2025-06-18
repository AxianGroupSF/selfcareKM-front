import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotificationComponent } from './page-notification.component';

describe('PageNotificationComponent', () => {
  let component: PageNotificationComponent;
  let fixture: ComponentFixture<PageNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotificationComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PageNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
