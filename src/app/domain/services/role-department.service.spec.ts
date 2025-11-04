import { TestBed } from '@angular/core/testing';

import { RoleDepartmentService } from './role-department.service';

describe('RoleDepartmentService', () => {
  let service: RoleDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
