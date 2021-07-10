import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildishComponent } from './childish.component';

describe('ChildishComponent', () => {
  let component: ChildishComponent;
  let fixture: ComponentFixture<ChildishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
