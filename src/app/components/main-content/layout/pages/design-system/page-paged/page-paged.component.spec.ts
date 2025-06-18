import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePagedComponent } from './page-paged.component';

describe('PagePagedComponent', () => {
  let component: PagePagedComponent;
  let fixture: ComponentFixture<PagePagedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePagedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagePagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
