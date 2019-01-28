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



@RestController
@RequestMapping("/JwtAuth")
@CrossOrigin("http://localhost:4200")
public class BookingController {
	
	@Autowired
	private BookingInterface bookingInterface;
	private BookingInput input;
	
	@PostMapping(path = "/book/" , consumes = "application/json" , produces = "application/json")
	public ResponseEntity<Boolean> postUser(@RequestBody BookingInput opt,final HttpServletRequest request)throws Exception {
		
		Boolean isBookingComplete = false;
		String isValidAuth = (String) request.getAttribute("valid");
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.set("Authentication", isValidAuth);
		HttpStatus httpStatus = HttpStatus.OK;
		
		if(isValidAuth.equals("false")){
			httpStatus=HttpStatus.FORBIDDEN;
		}
		else {
			BookingInput bookingObject=new BookingInput();
			try {
				bookingObject.setName(opt.getName());
				bookingObject.setDeparture(opt.getDeparture());
				bookingObject.setDestination(opt.getDestination());
				bookingObject.setSource(opt.getSource());
				bookingObject.setUserId((String)request.getAttribute("userid"));
				bookingInterface.save(bookingObject);
				
				System.out.println("VALID BOOKING");
				
				isBookingComplete = true;
			}
			catch(Exception ex) {
				ex.printStackTrace();
				httpStatus = HttpStatus.FORBIDDEN;
			}
		}
		return new ResponseEntity<Boolean>(isBookingComplete,responseHeaders,httpStatus);
	}
}