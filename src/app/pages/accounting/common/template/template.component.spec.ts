import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingTemplateComponent  as TemplateComponent } from 'src/app/pages/accounting/common/template/template.component';

describe('TemplateComponent', () => {
  let component: TemplateComponent;
  let fixture: ComponentFixture<TemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
