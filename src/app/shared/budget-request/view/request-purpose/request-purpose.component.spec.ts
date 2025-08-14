import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPurposeComponent } from './request-purpose.component';

describe('RequestPurposeComponent', () => {
  let component: RequestPurposeComponent;
  let fixture: ComponentFixture<RequestPurposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestPurposeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
