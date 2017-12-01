import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterInfoComponent } from './semester-info.component';

describe('SemesterInfoComponent', () => {
  let component: SemesterInfoComponent;
  let fixture: ComponentFixture<SemesterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
