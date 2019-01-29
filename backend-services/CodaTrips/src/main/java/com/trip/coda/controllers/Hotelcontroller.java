package com.trip.coda.controllers;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trip.coda.models.Hotel;
import com.trip.coda.models.HotelInput;
import com.trip.coda.services.HotelService;


@RestController
@RequestMapping("/api")

	
public  class Hotelcontroller {

	HotelService hotelservice;
	
	
// retrival of all hotels
	@GetMapping("/gethotels")
	public List<Hotel> gethotels(){
	 return hotelservice.getAllHotels();
	//return list;
	}
	

//retrival of location based hotel
	@PostMapping(path="/getHotel/" ,consumes = "application/json" , produces = "application/json")
	public List<Hotel> gethotels(@RequestBody HotelInput hi)
	{
		return hotelservice.getHotels(hi.gethotelplace());
		//return list;
	}

//hotel insertion in to database
	@PostMapping(path="/addhotel/" ,consumes = "application/json" , produces = "application/json")
	public boolean addhotel(@RequestBody HotelInput hi)
	{
          return hotelservice.addhotel(hi);
	}

}


