import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBadgesComponent } from './page-badges.component';

describe('PageBadgesComponent', () => {
  let component: PageBadgesComponent;
  let fixture: ComponentFixture<PageBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBadgesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
