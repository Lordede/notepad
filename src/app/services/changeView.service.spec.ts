/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChangeViewService } from './changeView.service';

describe('Service: ChangeView', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeViewService]
    });
  });

  it('should ...', inject([ChangeViewService], (service: ChangeViewService) => {
    expect(service).toBeTruthy();
  }));
});
