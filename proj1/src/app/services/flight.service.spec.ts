import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { FlightService } from './flight.service';

describe('FlightService', () => {

    let flightService: FlightService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [FlightService]
        })
        flightService = TestBed.get(FlightService);
    });

    it('should be created', () => {
        const service: FlightService = TestBed.get(FlightService);
        expect(service).toBeTruthy();
    });
    const dummyUsers: any[] = [
        {
            'flights_id': 1,
            'name': 'jet airways',
            'source': 'chennai',
            'destination': 'delhi',
            'departure': '04:00:00',
            'price': 100
        },
        {
            'flights_id': 2,
            'name': 'indigo',
            'source': 'chennai',
            'destination': 'delhi',
            'departure': '04:00:00',
            'price': 100
        },
        {
            'flights_id': 3,
            'name': 'spice jet',
            'source': 'Madurai',
            'destination': 'dubai',
            'departure': '04:00:00',
            'price': 100
        },
        {
            'flights_id': 4,
            'name': 'sarbesh flight',
            'source': 'chennai',
            'destination': 'delhi',
            'departure': '04:00:00',
            'price': 100
        },
        {
            'flights_id': 4,
            'name': 'sarbesh flight',
            'source': 'chennai',
            'destination': 'delhi',
            'departure': '04:00:00',
            'price': 100
        },
        {
            'flights_id': 4,
            'name': 'sarbesh flight',
            'source': 'chennai',
            'destination': 'delhi',
            'departure': '04:00:00',
            'price': 100
        },
        {
            'flights_id': 4,
            'name': 'sarbesh flight',
            'source': 'chennai',
            'destination': 'delhi',
            'departure': '04:00:00',
            'price': 100
        }
    ];

    it('should get hot deals', () => {
        flightService.getHotDeals().subscribe((data) => {
            expect(data).toEqual(dummyUsers);
        });
    });

});
