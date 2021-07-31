import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingParentComponent } from './event-binding-parent.component';

describe('EventBindingParentComponent', () => {
  let component: EventBindingParentComponent;
  let fixture: ComponentFixture<EventBindingParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBindingParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
