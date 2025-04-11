import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileRequirementComponent } from './file-requirement.component';

describe('FileRequirementComponent', () => {
  let component: FileRequirementComponent;
  let fixture: ComponentFixture<FileRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileRequirementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
