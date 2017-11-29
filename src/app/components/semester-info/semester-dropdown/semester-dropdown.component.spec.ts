import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterDropdownComponent } from './semester-dropdown.component';

describe('SemesterDropdownComponent', () => {
  let component: SemesterDropdownComponent;
  let fixture: ComponentFixture<SemesterDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
