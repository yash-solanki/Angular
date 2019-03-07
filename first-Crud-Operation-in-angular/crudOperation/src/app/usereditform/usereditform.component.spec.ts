import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditformComponent } from './usereditform.component';

describe('UsereditformComponent', () => {
  let component: UsereditformComponent;
  let fixture: ComponentFixture<UsereditformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsereditformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsereditformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
