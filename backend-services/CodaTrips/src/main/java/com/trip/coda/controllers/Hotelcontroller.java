package com.trip.coda.controllers;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.core.config.Configurator;
import org.apache.logging.log4j.Level;
import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
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
	
	public Hotelcontroller() {
		Configurator.setRootLevel(Level.TRACE);
	}
	

	@GetMapping("/getHotelDetails")
	public List<Hotel> getHotelDetails(){
		logger.traceEntry();
		logger.trace(logger.isTraceEnabled());
	    return logger.traceExit(hotelservice.getHotelDetails());
	
	}
	

	@PostMapping(path="/getLocationBasedHotel/" ,consumes = "application/json" , produces = "application/json")
	public String getLocationBasedHotel(@RequestBody HotelInput hi) throws IOException
	{
		logger.entry("retrival of location based hotel");
		final ByteArrayOutputStream out = new ByteArrayOutputStream();
	    final ObjectMapper mapper = new ObjectMapper();
	    mapper.writeValue(out,hotelservice.getLocationBasedHotel(hi.getHotelPlace()));
	    final byte[] data = out.toByteArray();
		return logger.traceExit(new String(data));
		
	}


	@PostMapping(path="/addHotelDetails/" ,consumes = "application/json" , produces = "application/json")
	public boolean addHotelDetail(@RequestBody HotelInput hi) throws JsonProcessingException
	{
		Configurator.setRootLevel(Level.TRACE);
		ObjectMapper mapper = new ObjectMapper();
		String jsonmessage = mapper.writeValueAsString(hi);
		logger.traceEntry(jsonmessage);
		
		  return logger.traceExit((hotelservice.addHotelDetail(hi)));
       
	}

}
