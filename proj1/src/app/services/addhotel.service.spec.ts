import { TestBed } from '@angular/core/testing';

import { AddHotelService } from './addHotel.service';

describe('AddhotelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddHotelService = TestBed.get(AddHotelService);
    expect(service).toBeTruthy();
  });
});
