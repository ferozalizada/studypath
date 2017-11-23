import { TestBed, inject } from '@angular/core/testing';

import { SemesterListService } from './semester-list.service';

describe('SemesterListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SemesterListService]
    });
  });

  it('should be created', inject([SemesterListService], (service: SemesterListService) => {
    expect(service).toBeTruthy();
  }));
});
