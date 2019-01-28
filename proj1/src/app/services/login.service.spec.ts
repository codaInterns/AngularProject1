import { TestBed } from '@angular/core/testing';

import { EmailService } from './login.service';

describe('EmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailService = TestBed.get(EmailService);
    expect(service).toBeTruthy();
  });
});
