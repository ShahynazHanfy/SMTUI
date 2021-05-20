import { TestBed } from '@angular/core/testing';

import { ProjectSystemService } from './project-system.service';

describe('ProjectSystemService', () => {
  let service: ProjectSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
