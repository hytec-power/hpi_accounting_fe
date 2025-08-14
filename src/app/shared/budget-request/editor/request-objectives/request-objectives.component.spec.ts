import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestObjectivesComponent } from './request-objectives.component';

describe('RequestObjectivesComponent', () => {
  let component: RequestObjectivesComponent;
  let fixture: ComponentFixture<RequestObjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestObjectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
