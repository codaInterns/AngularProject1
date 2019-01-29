package com.trip.coda.controllers;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.trip.coda.models.Flight;
import com.trip.coda.models.FlightInput;
import com.trip.coda.repo.FlightsInterface;
import com.trip.coda.services.FlightService;



@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class FlightsController {

	@Autowired 
	private FlightsInterface repo;
	
  FlightService flightservice = new FlightService();


 @GetMapping("/getFlights")
 public List<Flight> getAllFlights(){
	return flightservice.getF();
	
 }

 @PostMapping(path="/getFlight/" ,consumes = "application/json" , produces = "application/json")
 public List<Flight> getFlights(@RequestBody FlightInput fi)
 {
	 
	return flightservice.getFlights(fi);
 }



}
