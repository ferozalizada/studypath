import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterCourseViewComponent } from './semester-course-view.component';

describe('SemesterCourseViewComponent', () => {
  let component: SemesterCourseViewComponent;
  let fixture: ComponentFixture<SemesterCourseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterCourseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterCourseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
