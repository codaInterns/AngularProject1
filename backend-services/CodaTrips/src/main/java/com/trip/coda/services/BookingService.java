package com.trip.coda.services;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import com.trip.coda.models.BookingInput;
import com.trip.coda.models.FlightBooking;
import com.trip.coda.repo.BookingInterface;

@Service
public class BookingService {
	
	@Autowired
	private BookingInterface bookingInterface;
	
	
	public ResponseEntity<Boolean> bookingFlight(BookingInput opt,final HttpServletRequest request) {
		
		Boolean isBookingComplete = false;
		String isValidAuth = (String) request.getAttribute("valid");
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.set("Authentication", isValidAuth);
		HttpStatus httpStatus = HttpStatus.OK;
		
		if(isValidAuth.equals("false")){
			httpStatus=HttpStatus.FORBIDDEN;
		}
		else {
			FlightBooking bookingObject=new FlightBooking();
			try {
				bookingObject.setFlightName(opt.getFlightName());
				bookingObject.setDeparture(opt.getDeparture());
				bookingObject.setDestination(opt.getDestination());
				bookingObject.setSource(opt.getSource());
				bookingObject.setUserId((String)request.getAttribute("userid"));
				bookingInterface.save(bookingObject);
				isBookingComplete = true;
			}
			catch(Exception ex) {
				
				httpStatus = HttpStatus.FORBIDDEN;
			}
		}
		return new ResponseEntity<>(isBookingComplete,responseHeaders,httpStatus);
	}

}
