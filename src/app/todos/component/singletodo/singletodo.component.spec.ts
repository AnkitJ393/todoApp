import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletodoComponent } from './singletodo.component';

describe('SingletodoComponent', () => {
  let component: SingletodoComponent;
  let fixture: ComponentFixture<SingletodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingletodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
