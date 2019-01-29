package com.trip.coda.controllers;

import java.util.List;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
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

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:4200")
public class Hotelcontroller {
	 private Logger logger = LogManager.getLogger(Hotelcontroller.class.getName());

	@Autowired
	HotelService hotelservice;
	
	
// retrival of all hotels
	@GetMapping("/gethotels")
	public List<Hotel> gethotel(){
		
		logger.entry();
		logger.info("kk");
		System.out.println(logger.isTraceEnabled());
	    return logger.traceExit(hotelservice.getAllHotels());
	
	}
	

//retrival of location based hotel
	@PostMapping(path="/getHotel/" ,consumes = "application/json" , produces = "application/json")
	public List<Hotel> gethotels(@RequestBody HotelInput hi)
	{
		
		return hotelservice.getHotels(hi.getHotelPlace());
		
	}

//hotel insertion in to databasea
	@PostMapping(path="/addhotel/" ,consumes = "application/json" , produces = "application/json")
	public boolean addhotel(@RequestBody HotelInput hi)
	{
		
		logger.traceEntry();
		System.out.println("hh");
		  return(hotelservice.addhotel(hi));
       
	}

}


