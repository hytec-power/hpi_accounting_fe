import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderBouncingBallsComponent } from './loader-bouncing-balls.component';

describe('LoaderBouncingBallsComponent', () => {
  let component: LoaderBouncingBallsComponent;
  let fixture: ComponentFixture<LoaderBouncingBallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderBouncingBallsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderBouncingBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
