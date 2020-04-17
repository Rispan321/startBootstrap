import { TestBed } from '@angular/core/testing';

import { DataModalService } from './data-modal.service';

describe('DataModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataModalService = TestBed.get(DataModalService);
    expect(service).toBeTruthy();
  });
});
