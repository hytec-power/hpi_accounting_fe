import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularsModalComponent } from './particulars-modal.component';

describe('ParticularsModalComponent', () => {
  let component: ParticularsModalComponent;
  let fixture: ComponentFixture<ParticularsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticularsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticularsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
