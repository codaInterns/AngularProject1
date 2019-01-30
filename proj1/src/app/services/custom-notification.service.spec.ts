import { TestBed } from '@angular/core/testing';

import { CustomNotificationService } from './custom-notification.service';

describe('CustomNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomNotificationService = TestBed.get(CustomNotificationService);
    expect(service).toBeTruthy();
  });
});
