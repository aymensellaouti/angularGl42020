import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbaucheComponent } from './embauche.component';

describe('EmbaucheComponent', () => {
  let component: EmbaucheComponent;
  let fixture: ComponentFixture<EmbaucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbaucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
