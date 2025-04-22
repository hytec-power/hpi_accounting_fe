import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListschoolcompanyComponent } from './listschoolcompany.component';

describe('ListschoolcompanyComponent', () => {
  let component: ListschoolcompanyComponent;
  let fixture: ComponentFixture<ListschoolcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListschoolcompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListschoolcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
