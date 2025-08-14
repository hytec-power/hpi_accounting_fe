import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatustagComponent } from './statustag.component';

describe('StatustagComponent', () => {
  let component: StatustagComponent;
  let fixture: ComponentFixture<StatustagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatustagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatustagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
