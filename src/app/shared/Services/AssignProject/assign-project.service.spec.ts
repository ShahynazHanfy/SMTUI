import { TestBed } from '@angular/core/testing';

import { AssignProjectService } from './assign-project.service';

describe('AssignProjectService', () => {
  let service: AssignProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
