import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPersonneComponent } from './detail-personne.component';

describe('DetailPersonneComponent', () => {
  let component: DetailPersonneComponent;
  let fixture: ComponentFixture<DetailPersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
