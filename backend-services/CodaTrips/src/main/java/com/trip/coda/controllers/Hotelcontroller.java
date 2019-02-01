package com.trip.coda.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trip.coda.models.Hotel;
import com.trip.coda.models.HotelInput;
import com.trip.coda.services.HotelService;
import org.apache.log4j.Logger;
@RestController
@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:4200")
public class Hotelcontroller {
	 static Logger logger = Logger.getLogger(Hotelcontroller.class);

	@Autowired
	HotelService hotelService;
	
	
// retrival of all hotels
	@GetMapping("/getHotelDetails")
	public List<Hotel> gethotels(){
	return hotelService.getAllHotels();
	
	}
	

//retrival of location based hotel
	@PostMapping(path="/getLocationBasedHotel/" ,consumes = "application/json" , produces = "application/json")
	public List<Hotel> gethotels(@RequestBody HotelInput hi)
	{
		
		return hotelService.getHotels(hi);
		
	}

//hotel insertion in to databasea
	@PostMapping(path="/addHotelDetails/" ,consumes = "application/json" , produces = "application/json")
	public boolean addhotel(@RequestBody HotelInput hi)
	{
		logger.trace(hi.getHotelImage());
		
          return hotelService.addhotel(hi);
       
	}

}


