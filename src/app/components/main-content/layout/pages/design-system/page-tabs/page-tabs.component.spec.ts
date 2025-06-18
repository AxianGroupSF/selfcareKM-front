import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTabsComponent } from './page-tabs.component';

describe('PageTabsComponent', () => {
  let component: PageTabsComponent;
  let fixture: ComponentFixture<PageTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTabsComponent]
    })
    .compileComponents();
<<<<<<< HEAD
    
=======

>>>>>>> release-3.0.0
    fixture = TestBed.createComponent(PageTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
