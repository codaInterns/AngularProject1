package com.trip.coda.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trip.coda.models.BookingInput;
import com.trip.coda.repo.BookingInterface;
import com.trip.coda.services.BookingService;



@RestController
@RequestMapping("/JwtAuth")
@CrossOrigin("http://localhost:4200")
public class BookingController {
	
	BookingService bookingservice; 

	@PostMapping(path = "/book/" , consumes = "application/json" , produces = "application/json")
	public ResponseEntity<Boolean> postUser(@RequestBody BookingInput opt,final HttpServletRequest request)throws Exception {
		
		
		return bookingservice.postUser(opt, request);
	}
}
