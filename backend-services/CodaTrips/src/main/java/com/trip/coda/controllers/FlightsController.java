package com.trip.coda.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.trip.coda.models.Flight;
import com.trip.coda.models.FlightInput;
import com.trip.coda.services.FlightService;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:4200")
public class FlightsController {

@Autowired
FlightService flightservice;


 @GetMapping("/getFlightsDetails")
 public List<Flight> getFlightsDetails(){
	
	return flightservice.getFlightsDetails();
	
 }

 @PostMapping(path="/getFlight/" ,consumes = "application/json" , produces = "application/json")
 public List<Flight> getLocationBasedHotel(@RequestBody FlightInput fi)
 {
	return flightservice.getLocationBasedFlights(fi);
 }



}
