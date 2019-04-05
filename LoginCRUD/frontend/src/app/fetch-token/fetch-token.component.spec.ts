import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchTokenComponent } from './fetch-token.component';

describe('FetchTokenComponent', () => {
  let component: FetchTokenComponent;
  let fixture: ComponentFixture<FetchTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
