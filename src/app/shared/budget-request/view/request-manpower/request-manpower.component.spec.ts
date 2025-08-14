import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestManpowerComponent } from './request-manpower.component';

describe('RequestManpowerComponent', () => {
  let component: RequestManpowerComponent;
  let fixture: ComponentFixture<RequestManpowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestManpowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestManpowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
