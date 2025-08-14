import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestParticularsComponent } from './request-particulars.component';

describe('RequestParticularsComponent', () => {
  let component: RequestParticularsComponent;
  let fixture: ComponentFixture<RequestParticularsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestParticularsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestParticularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
