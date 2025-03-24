import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesterDetailsComponent } from './requester-details.component';

describe('RequesterDetailsComponent', () => {
  let component: RequesterDetailsComponent;
  let fixture: ComponentFixture<RequesterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequesterDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequesterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
