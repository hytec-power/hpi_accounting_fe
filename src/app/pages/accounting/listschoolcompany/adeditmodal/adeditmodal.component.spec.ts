import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdeditmodalComponent } from './adeditmodal.component';

describe('AdeditmodalComponent', () => {
  let component: AdeditmodalComponent;
  let fixture: ComponentFixture<AdeditmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdeditmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdeditmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
