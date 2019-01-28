import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FlightService } from './flight.service';

describe('FlightServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const obj=[{"flights_id":1,"name":"indgo","source":"chennai","destination":"delhi","departure":"04:00:00","price":1200}];
    const service: FlightService = TestBed.get(FlightService);
    expect(service).toBeTruthy();

    service.getHotDeals().subscribe(
      res=>{
        console.log(res);
        expect(res.length).toBe(7);
        expect(res).toEqual(obj);
        
    }
    )
  });
});