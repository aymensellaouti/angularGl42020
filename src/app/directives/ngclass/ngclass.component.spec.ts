import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassComponent } from './ngclass.component';

describe('NgclassComponent', () => {
  let component: NgclassComponent;
  let fixture: ComponentFixture<NgclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
